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
  const resultAstro = document.getElementById("resultAstro");
  const resultPhilosophy = document.getElementById("resultPhilosophy");
  const resultMovement = document.getElementById("resultMovement");
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
    resultDescription.textContent = result.description;
    resultAstro.textContent = result.astro;
    resultPhilosophy.textContent = result.philosophy;
    resultMovement.textContent = result.movement;
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

  async function downloadResultCard() {
    const result = state.result;
    if (!result) return;

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

    const shade = ctx.createLinearGradient(62, 490, 62, 750);
    shade.addColorStop(0, "rgba(0,0,0,0)");
    shade.addColorStop(1, "rgba(0,0,0,0.45)");
    ctx.fillStyle = shade;
    drawRoundedRect(ctx, 62, 62, 956, 688, 34);
    ctx.fill();

    ctx.fillStyle = "#fffaf2";
    ctx.font = "800 34px system-ui, sans-serif";
    ctx.fillText("Hangi Monet tablosusun?", 104, 680);
    ctx.font = "700 26px system-ui, sans-serif";
    ctx.fillText(creator, 104, 718);

    ctx.fillStyle = "#25221f";
    ctx.font = "800 34px system-ui, sans-serif";
    ctx.fillText("Senin Monet tablon", 72, 830);

    ctx.font = "700 84px Georgia, serif";
    const titleY = wrapText(ctx, result.title, 72, 930, 936, 90, 2);

    ctx.fillStyle = "#6a6258";
    ctx.font = "800 30px system-ui, sans-serif";
    ctx.fillText(`Claude Monet · ${result.year}`, 72, titleY + 18);

    ctx.fillStyle = "#3d3934";
    ctx.font = "500 34px system-ui, sans-serif";
    wrapText(ctx, result.description, 72, titleY + 88, 936, 46, 4);

    ctx.fillStyle = "#25221f";
    ctx.font = "800 30px system-ui, sans-serif";
    ctx.fillText("Astrolojik hava", 72, 1210);
    ctx.font = "500 29px system-ui, sans-serif";
    wrapText(ctx, result.astro, 72, 1252, 780, 38, 2);

    ctx.fillStyle = "#25221f";
    ctx.font = "850 28px system-ui, sans-serif";
    ctx.fillText("@mozgor19", 72, 1312);
    ctx.textAlign = "right";
    ctx.fillText("monet testi", 1008, 1312);
    ctx.textAlign = "left";

    const link = document.createElement("a");
    const safeTitle = result.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    link.download = `hangi-monet-tablosusun-${safeTitle}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function tweetResult() {
    if (!state.result) return;
    const url = new URL(window.location.href);
    url.searchParams.set("result", state.result.id);
    const text = `Ben "${state.result.title}" çıktım. Sen hangi Monet tablosusun? ${creator}`;
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
