(function () {
  const data = window.MONET_QUIZ_DATA;
  const dims = data.dimensions;
  const creator = "@mozgor19";
  const state = {
    index: 0,
    answers: new Array(data.questions.length).fill(null),
    result: null,
    imageUrl: ""
  };

  const quizView = document.getElementById("quizView");
  const resultView = document.getElementById("resultView");
  const questionCounter = document.getElementById("questionCounter");
  const answeredCounter = document.getElementById("answeredCounter");
  const progressFill = document.getElementById("progressFill");
  const questionEyebrow = document.getElementById("questionEyebrow");
  const questionTitle = document.getElementById("questionTitle");
  const optionsEl = document.getElementById("options");
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  const paintingImage = document.getElementById("paintingImage");
  const imageFallback = document.getElementById("imageFallback");
  const resultTitle = document.getElementById("resultTitle");
  const resultMeta = document.getElementById("resultMeta");
  const resultDescription = document.getElementById("resultDescription");
  const resultOneLiner = document.getElementById("resultOneLiner");
  const sourceLink = document.getElementById("sourceLink");
  const restartButton = document.getElementById("restartButton");
  const tweetButton = document.getElementById("tweetButton");
  const downloadButton = document.getElementById("downloadButton");
  const canvas = document.getElementById("downloadCanvas");

  const commonsCache = new Map();

  function vectorFromScores(scores) {
    return dims.map((dim) => scores[dim] || 0);
  }

  function getUserVector() {
    const total = Object.fromEntries(dims.map((dim) => [dim, 0]));
    state.answers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === null) return;
      const scores = data.questions[questionIndex].options[answerIndex].scores;
      dims.forEach((dim) => {
        total[dim] += scores[dim] || 0;
      });
    });
    return vectorFromScores(total);
  }

  function getPaintingVector(painting) {
    const total = Object.fromEntries(dims.map((dim) => [dim, 0]));
    painting.traits.forEach((trait, index) => {
      if (!Object.prototype.hasOwnProperty.call(total, trait)) return;
      total[trait] += index < 2 ? 3 : index < 4 ? 2 : 1;
    });
    return vectorFromScores(total);
  }

  function cosine(a, b) {
    let dot = 0;
    let left = 0;
    let right = 0;
    a.forEach((value, index) => {
      dot += value * b[index];
      left += value * value;
      right += b[index] * b[index];
    });
    if (!left || !right) return 0;
    return dot / (Math.sqrt(left) * Math.sqrt(right));
  }

  function hashString(input) {
    let hash = 2166136261;
    for (let i = 0; i < input.length; i += 1) {
      hash ^= input.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function pickResult() {
    const userVector = getUserVector();
    const answerKey = state.answers.join("-");
    const ranked = data.paintings
      .map((painting) => {
        const base = cosine(userVector, getPaintingVector(painting));
        const jitter = (hashString(`${answerKey}:${painting.id}`) % 1000) / 10000;
        return { painting, score: base + jitter };
      })
      .sort((a, b) => b.score - a.score);

    return ranked[0].painting;
  }

  function renderQuestion() {
    const question = data.questions[state.index];
    const answered = state.answers.filter((answer) => answer !== null).length;

    questionCounter.textContent = `${state.index + 1} / ${data.questions.length}`;
    answeredCounter.textContent = `${answered} cevap`;
    progressFill.style.width = `${((state.index + 1) / data.questions.length) * 100}%`;
    questionEyebrow.textContent = question.eyebrow;
    questionTitle.textContent = question.title;
    backButton.disabled = state.index === 0;
    nextButton.textContent = state.index === data.questions.length - 1 ? "Sonucu gör" : "Devam";
    nextButton.disabled = state.answers[state.index] === null;

    optionsEl.innerHTML = "";
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.className = "option-button";
      button.type = "button";
      button.setAttribute("role", "listitem");
      button.setAttribute("aria-pressed", String(state.answers[state.index] === optionIndex));
      button.innerHTML = `
        <span class="option-title">${escapeHtml(option.title)}</span>
        <span class="option-note">${escapeHtml(option.note)}</span>
      `;
      button.addEventListener("click", () => {
        state.answers[state.index] = optionIndex;
        renderQuestion();
        window.setTimeout(() => {
          if (state.index < data.questions.length - 1) {
            state.index += 1;
            renderQuestion();
          } else {
            showComputedResult();
          }
        }, 180);
      });
      optionsEl.appendChild(button);
    });
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showComputedResult() {
    state.result = pickResult();
    const url = new URL(window.location.href);
    url.searchParams.set("result", state.result.id);
    window.history.replaceState({}, "", url);
    renderResult(state.result);
  }

  function renderResult(result) {
    quizView.hidden = true;
    resultView.hidden = false;

    state.result = result;
    state.imageUrl = "";
    paintingImage.classList.remove("is-loaded");
    paintingImage.removeAttribute("src");
    paintingImage.alt = `${result.title}, Claude Monet`;

    const gradient = makeGradient(result.palette);
    imageFallback.style.background = gradient;
    document.documentElement.style.setProperty("--pond", result.palette[0] || "#5a8a87");
    document.documentElement.style.setProperty("--sun", result.palette[2] || "#e0a14a");
    document.documentElement.style.setProperty("--rose", result.palette[3] || "#d9908a");

    resultTitle.textContent = result.title;
    resultMeta.textContent = `Claude Monet · ${result.year} · ${result.mood}`;
    resultDescription.textContent = buildResultDescription(result);
    resultOneLiner.textContent = `Sonucun ${result.title}. Bunu paylaşmak istersen kartı indirebilir ya da doğrudan Twitter'a gönderebilirsin.`;
    sourceLink.href = getCommonsCategoryUrl(result.category);

    loadCommonsImage(result)
      .then((url) => {
        if (!url) return;
        state.imageUrl = url;
        paintingImage.src = url;
      })
      .catch(() => {
        state.imageUrl = "";
      });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function makeGradient(palette) {
    const colors = palette.length ? palette : ["#6f78a8", "#5a8a87", "#e0a14a", "#d9908a"];
    return `
      linear-gradient(130deg, ${colors[1] || colors[0]} 0%, transparent 46%),
      linear-gradient(305deg, ${colors[2] || colors[0]} 0%, transparent 42%),
      linear-gradient(20deg, ${colors[0]}, ${colors[3] || colors[0]})
    `;
  }

  function buildResultDescription(result) {
    const primary = result.traits[0];
    const secondary = result.traits[1] || result.traits[0];
    const tertiary = result.traits[2] || result.traits[1] || result.traits[0];

    const openings = {
      sun:
        "Sende insanın içini açan, ortamı çok zorlamadan aydınlatan bir taraf var.",
      water:
        "Sen aceleyle karar veren biri gibi durmuyorsun; önce ortamın sesini ve kendi içindeki dalgayı dinliyorsun.",
      city:
        "Sen kalabalıkların, sokakların ve küçük tesadüflerin içinden kendine malzeme çıkaran birisin.",
      garden:
        "Sende güzelliği büyütmek, küçük şeylere bakmak ve onları sakin sakin çoğaltmak gibi bir taraf var.",
      motion:
        "Sen aynı yerde çok uzun kalınca içi daralan, yer değiştirince kendine gelen insanlardansın.",
      drama:
        "Sende duyguyu saklamayan ama onu dağınık bırakmayan, biraz sahneli bir taraf var.",
      intimacy:
        "Sen herkese aynı mesafeden yaklaşmayan, yakınlığı seçerek ve dikkatle kuran birisin.",
      winter:
        "Sende sessizliği seven, fazlalıklar azalınca daha iyi düşünen bir taraf var.",
      social:
        "Sen insanlarla kurulan küçük temasları, bakışları ve masadaki havayı çabuk yakalıyorsun.",
      mystery:
        "Sende ilk bakışta hemen ele geçmeyen, biraz bekleyince açılan bir hava var."
    };

    const supports = {
      sun:
        "Bu yüzden ışık, açıklık ve iyi bir zamanlama senin sonucunda önemli bir yer tutuyor.",
      water:
        "Suya, yansımaya ya da sakin bir mesafeye yakın durman da bundan.",
      city:
        "Şehir hissi burada sadece kalabalık değil; hareket, gözlem ve küçük ayrıntılar demek.",
      garden:
        "Bahçe tarafı ise sende bakım, sabır ve göze iyi gelen şeylerle kendini belli ediyor.",
      motion:
        "Hareket duygusu, senin için kaçmak değil; kafanın yerini değiştirmek gibi.",
      drama:
        "Dramatik tarafın abartıdan çok, duygunun biraz daha görünür olmasını seviyor.",
      intimacy:
        "Yakınlık senin sonucunda kalabalıktan çok seçilmiş birkaç kişiyi ve güvenli alanı anlatıyor.",
      winter:
        "Kış ve sessizlik hissi de burada içe çekilmekten çok toparlanmak anlamına geliyor.",
      social:
        "Sosyal tarafın, herkesle aynı anda konuşmaktan çok ortamın ritmini anlamaya yakın.",
      mystery:
        "Belirsizliğe yakın durman karışık olduğun için değil; her şeyin hemen açıklanmak zorunda olmadığını bildiğin için."
    };

    const closings = {
      sun:
        "Bu tablo sana, iyi ışıkta daha da belirginleşen o sıcak ve canlı halin yüzünden yakışıyor.",
      water:
        "Bu tablo sana, duygularını büyütmeden ama hafife de almadan taşıdığın için yakışıyor.",
      city:
        "Bu tablo sana, dışarıdaki hayatı izlerken kendini de daha iyi duyduğun için yakışıyor.",
      garden:
        "Bu tablo sana, güzelliği bir anda değil, küçük küçük biriktiren tarafın yüzünden yakışıyor.",
      motion:
        "Bu tablo sana, durgunluğun içinde bile bir sonraki adımı düşündüğün için yakışıyor.",
      drama:
        "Bu tablo sana, bazen havanın değişmesine ihtiyaç duyan o güçlü tarafın yüzünden yakışıyor.",
      intimacy:
        "Bu tablo sana, kendini herkese değil ama doğru yere gayet güzel açtığın için yakışıyor.",
      winter:
        "Bu tablo sana, sessiz kaldığında kaybolmadığın; aksine daha netleştiğin için yakışıyor.",
      social:
        "Bu tablo sana, insanlarla arandaki mesafeyi iyi ayarladığın için yakışıyor.",
      mystery:
        "Bu tablo sana, ilk anda değil, bakıldıkça daha çok şey söyleyen tarafın yüzünden yakışıyor."
    };

    const supportParts = [supports[secondary], supports[tertiary]].filter(
      (part, index, parts) => part && parts.indexOf(part) === index
    );

    return `${openings[primary]} ${supportParts.join(" ")} Sonuç olarak ${result.title} sana düz bir etiket gibi değil, daha çok tanıdık bir ruh hali gibi geliyor. ${closings[primary]}`;
  }

  function getCommonsCategoryUrl(category) {
    return `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(
      category.replaceAll(" ", "_")
    )}`;
  }

  async function loadCommonsImage(result) {
    if (commonsCache.has(result.category)) {
      return commonsCache.get(result.category);
    }

    const endpoint = "https://commons.wikimedia.org/w/api.php";
    const params = new URLSearchParams({
      action: "query",
      generator: "categorymembers",
      gcmtitle: `Category:${result.category}`,
      gcmtype: "file",
      gcmlimit: "10",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "1400",
      format: "json",
      origin: "*"
    });

    const response = await fetch(`${endpoint}?${params.toString()}`);
    if (!response.ok) throw new Error("Commons request failed");
    const payload = await response.json();
    const pages = Object.values(payload.query?.pages || {});
    const image = pages
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)
      .find(Boolean);

    commonsCache.set(result.category, image || "");
    return image || "";
  }

  function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  function drawCoverImage(ctx, image, x, y, width, height) {
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const drawX = x + (width - drawWidth) / 2;
    const drawY = y + (height - drawHeight) / 2;
    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = text.split(" ");
    let line = "";
    let lines = 0;
    for (let i = 0; i < words.length; i += 1) {
      const test = `${line}${words[i]} `;
      if (ctx.measureText(test).width > maxWidth && i > 0) {
        ctx.fillText(line.trim(), x, y);
        line = `${words[i]} `;
        y += lineHeight;
        lines += 1;
        if (maxLines && lines >= maxLines - 1) break;
      } else {
        line = test;
      }
    }
    if (!maxLines || lines < maxLines) {
      ctx.fillText(line.trim(), x, y);
    }
    return y + lineHeight;
  }

  function loadCanvasImage(url) {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject(new Error("No image"));
        return;
      }
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
  }

  async function drawResultCard() {
    const result = state.result;
    if (!result) return false;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const palette = result.palette;

    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, "#fffaf2");
    bg.addColorStop(0.48, "#f6ead9");
    bg.addColorStop(1, palette[2] || "#e0a14a");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = palette[0] || "#5a8a87";
    ctx.globalAlpha = 0.18;
    ctx.beginPath();
    ctx.arc(930, 120, 240, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette[3] || "#d9908a";
    ctx.beginPath();
    ctx.arc(90, 980, 280, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    drawRoundedRect(ctx, 62, 62, 956, 688, 34);
    ctx.save();
    ctx.clip();
    try {
      const image = await loadCanvasImage(state.imageUrl);
      drawCoverImage(ctx, image, 62, 62, 956, 688);
    } catch (_error) {
      const fallback = ctx.createLinearGradient(62, 62, 1018, 750);
      fallback.addColorStop(0, palette[0] || "#5a8a87");
      fallback.addColorStop(0.5, palette[1] || "#6f78a8");
      fallback.addColorStop(1, palette[2] || "#e0a14a");
      ctx.fillStyle = fallback;
      ctx.fillRect(62, 62, 956, 688);
    }
    ctx.restore();

    ctx.fillStyle = "#25221f";
    ctx.font = "800 34px system-ui, sans-serif";
    ctx.fillText("Hangi Monet tablosusun?", 72, 820);

    ctx.fillStyle = "#6a6258";
    ctx.font = "800 26px system-ui, sans-serif";
    ctx.fillText("Senin Monet tablon", 72, 860);

    ctx.font = "700 64px Georgia, serif";
    const titleY = wrapText(ctx, result.title, 72, 920, 936, 70, 2);

    ctx.fillStyle = "#6a6258";
    ctx.font = "800 28px system-ui, sans-serif";
    ctx.fillText(`Claude Monet · ${result.year}`, 72, titleY + 8);

    ctx.fillStyle = "#3d3934";
    ctx.font = "500 27px system-ui, sans-serif";
    wrapText(ctx, buildResultDescription(result), 72, titleY + 58, 936, 36, 4);

    ctx.fillStyle = "#6a6258";
    ctx.font = "700 23px system-ui, sans-serif";
    ctx.fillText(`created by ${creator}`, 72, 1314);

    return true;
  }

  function getResultFilename(result) {
    const safeTitle = result.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `hangi-monet-tablosusun-${safeTitle}.png`;
  }

  function canvasToBlob() {
    return new Promise((resolve, reject) => {
      try {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Result card could not be created"));
          }
        }, "image/png");
      } catch (error) {
        reject(error);
      }
    });
  }

  async function createResultCardFile() {
    const result = state.result;
    if (!result) return null;
    const drawn = await drawResultCard();
    if (!drawn) return null;
    const blob = await canvasToBlob();
    return new File([blob], getResultFilename(result), { type: "image/png" });
  }

  async function downloadResultCard() {
    const result = state.result;
    if (!result) return;

    const drawn = await drawResultCard();
    if (!drawn) return;

    const link = document.createElement("a");
    link.download = getResultFilename(result);
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function tweetResult() {
    if (!state.result) return;
    const url = new URL(window.location.href);
    url.searchParams.set("result", state.result.id);
    const text = `Ben "${state.result.title}" çıktım. Sen hangi Monet tablosusun? ${creator}`;

    try {
      if (!navigator.share) throw new Error("Native share is not supported");

      const file = await createResultCardFile();
      const shareData = {
        files: file ? [file] : [],
        text,
        url: url.toString()
      };

      const canShareFile =
        file &&
        navigator.share &&
        (!navigator.canShare || navigator.canShare({ files: [file] }));

      if (canShareFile) {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }

    const intent = new URL("https://twitter.com/intent/tweet");
    intent.searchParams.set("text", text);
    intent.searchParams.set("url", url.toString());
    intent.searchParams.set("hashtags", "HangiMonetTablosusun,Monet");
    window.open(intent.toString(), "_blank", "noopener,noreferrer");
  }

  function restart() {
    state.index = 0;
    state.answers = new Array(data.questions.length).fill(null);
    state.result = null;
    state.imageUrl = "";
    const url = new URL(window.location.href);
    url.searchParams.delete("result");
    window.history.replaceState({}, "", url);
    resultView.hidden = true;
    quizView.hidden = false;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  backButton.addEventListener("click", () => {
    if (state.index === 0) return;
    state.index -= 1;
    renderQuestion();
  });

  nextButton.addEventListener("click", () => {
    if (state.answers[state.index] === null) return;
    if (state.index < data.questions.length - 1) {
      state.index += 1;
      renderQuestion();
    } else {
      showComputedResult();
    }
  });

  paintingImage.addEventListener("load", () => {
    paintingImage.classList.add("is-loaded");
  });

  restartButton.addEventListener("click", restart);
  tweetButton.addEventListener("click", tweetResult);
  downloadButton.addEventListener("click", downloadResultCard);

  const params = new URLSearchParams(window.location.search);
  const sharedResultId = params.get("result");
  const sharedResult = data.paintings.find((painting) => painting.id === sharedResultId);
  if (sharedResult) {
    renderResult(sharedResult);
  } else {
    renderQuestion();
  }
})();
