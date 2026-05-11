const words = [
  {
    id: "a1_001",
    level: "A1",
    topic: "醫療",
    word_zh: "醫院",
    pinyin: "yī yuàn",
    meaning_vi: "bệnh viện",
    example_zh: "我今天要去醫院看病。",
    example_vi: "Hôm nay tôi phải đến bệnh viện khám bệnh.",
    image: "images/a1_001.webp"
  },
  {
    id: "a1_002",
    level: "A1",
    topic: "學校",
    word_zh: "宿舍",
    pinyin: "sù shè",
    meaning_vi: "ký túc xá",
    example_zh: "我住在學校宿舍。",
    example_vi: "Tôi sống trong ký túc xá của trường.",
    image: "images/a1_002.webp"
  },
  {
    id: "a2_001",
    level: "A2",
    topic: "交通",
    word_zh: "捷運",
    pinyin: "jié yùn",
    meaning_vi: "tàu điện ngầm / MRT",
    example_zh: "我每天坐捷運去上課。",
    example_vi: "Mỗi ngày tôi đi MRT đến lớp.",
    image: "images/a2_001.webp"
  },
  {
    id: "a2_002",
    level: "A2",
    topic: "工作",
    word_zh: "打工",
    pinyin: "dǎ gōng",
    meaning_vi: "làm thêm",
    example_zh: "我晚上在餐廳打工。",
    example_vi: "Buổi tối tôi làm thêm ở nhà hàng.",
    image: "images/a2_002.webp"
  },
  {
    id: "b1_001",
    level: "B1",
    topic: "工作",
    word_zh: "請假",
    pinyin: "qǐng jià",
    meaning_vi: "xin nghỉ phép",
    example_zh: "我今天身體不舒服，想請假。",
    example_vi: "Hôm nay tôi không khỏe, tôi muốn xin nghỉ.",
    image: "images/b1_001.webp"
  },
  {
    id: "b1_002",
    level: "B1",
    topic: "工作",
    word_zh: "同事",
    pinyin: "tóng shì",
    meaning_vi: "đồng nghiệp",
    example_zh: "我的同事幫我翻譯中文。",
    example_vi: "Đồng nghiệp của tôi giúp tôi dịch tiếng Trung.",
    image: "images/b1_002.webp"
  }
];

const quizQuestions = [
  {
    question: "我今天要去＿＿看病。",
    options: ["醫院", "宿舍", "捷運", "同事"],
    answer: "醫院"
  },
  {
    question: "我晚上在餐廳＿＿。",
    options: ["請假", "打工", "宿舍", "醫院"],
    answer: "打工"
  },
  {
    question: "我的＿＿幫我翻譯中文。",
    options: ["捷運", "醫院", "同事", "宿舍"],
    answer: "同事"
  }
];

const translations = {
  vi: {
    "home.kicker": "Nhiệm vụ hôm nay",
    "home.subtitle": "Học từ vựng tiếng Trung phồn thể mỗi ngày",
    "home.goalLabel": "Mục tiêu hôm nay",
    "home.goal": "6 từ mới hôm nay",
    "home.goalHint": "Hoàn thành một vòng học nhanh trước khi đi học hoặc đi làm.",
    "home.done": "đã xong",
    "home.exam": "Đến TOCFL A2",
    "home.examDays": "74 ngày",
    "home.streak": "Chuỗi học",
    "home.streakDays": "3 ngày",
    "home.start": "Bắt đầu học hôm nay",
    "home.preview": "Xem nhanh",
    "home.previewHint": "Nhìn 6 từ mới",
    "home.cards": "Thẻ nhớ",
    "home.cardsHint": "Lật thẻ ôn tập",
    "home.quiz": "Kiểm tra",
    "home.quizHint": "3 câu chọn đáp án",
    "home.wordsKicker": "Từ gợi ý",
    "home.wordsTitle": "6 từ dùng ở Đài Loan",
    "preview.title": "Từ mới hôm nay",
    "preview.wordAudio": "Nghe từ",
    "preview.sentenceAudio": "Nghe câu",
    "preview.known": "Tôi đã biết",
    "preview.learn": "Tôi muốn học",
    "cards.title": "Luyện thẻ nhớ",
    "cards.tapHint": "Nhấn để xem nghĩa",
    "cards.sentenceAudio": "Nghe câu",
    "cards.complete": "Hoàn thành vòng flashcard",
    "cards.bad": "Không biết",
    "cards.mid": "Chưa chắc",
    "cards.good": "Đúng rồi",
    "quiz.title": "Chọn đáp án đúng",
    "quiz.next": "Câu tiếp theo",
    "quiz.resultTitle": "Kết quả hôm nay",
    "quiz.home": "Về trang chủ",
    "quiz.restart": "Luyện lại",
    "progress.title": "Tiến độ học",
    "progress.targetLabel": "Mục tiêu cấp độ",
    "progress.daysUnit": "ngày",
    "progress.examDate": "Ngày thi",
    "progress.learned": "Đã học",
    "progress.todayRate": "Hoàn thành hôm nay",
    "progress.hardWords": "Từ khó",
    "progress.quizRate": "Đúng quiz",
    "progress.dailyAdvice": "Gợi ý mỗi ngày",
    "progress.dailyAdviceValue": "12 từ mới",
    "progress.settings": "Cài đặt học tập",
    "progress.levelSelect": "Mục tiêu cấp độ",
    "progress.dailySelect": "Số từ mỗi ngày",
    "progress.speedSelect": "Tốc độ phát âm",
    "progress.slow": "Chậm",
    "progress.normal": "Bình thường",
    "tabs.home": "Trang chủ",
    "tabs.preview": "Xem nhanh",
    "tabs.cards": "Thẻ nhớ",
    "tabs.quiz": "Kiểm tra",
    "tabs.progress": "Tiến độ",
    "common.prev": "Trước",
    "common.next": "Tiếp",
    score: (score) => `${score} điểm`,
    quizNumber: (index, total) => `Câu ${index} / ${total}`,
    correct: "Đúng rồi",
    wrong: (answer) => `Chưa đúng. Đáp án: ${answer}`,
    result: (score, total) => `Bạn đã trả lời đúng ${score} / ${total} câu`,
    notTested: "Chưa kiểm tra"
  },
  zh: {
    "home.kicker": "今日任務",
    "home.subtitle": "每天學一點在台灣用得到的繁體中文",
    "home.goalLabel": "今日目標",
    "home.goal": "今天 6 個新單字",
    "home.goalHint": "上課或上班前，先完成一輪快速學習。",
    "home.done": "已完成",
    "home.exam": "距離 TOCFL A2",
    "home.examDays": "74 天",
    "home.streak": "連續學習",
    "home.streakDays": "3 天",
    "home.start": "開始今日學習",
    "home.preview": "快速略讀",
    "home.previewHint": "先看 6 個新字",
    "home.cards": "閃卡練習",
    "home.cardsHint": "翻卡複習",
    "home.quiz": "小考",
    "home.quizHint": "3 題選擇題",
    "home.wordsKicker": "今日推薦",
    "home.wordsTitle": "6 個台灣生活單字",
    "preview.title": "今天的新單字",
    "preview.wordAudio": "單字語音",
    "preview.sentenceAudio": "例句語音",
    "preview.known": "我已經會了",
    "preview.learn": "加入學習",
    "cards.title": "閃卡複習",
    "cards.tapHint": "點擊查看意思",
    "cards.sentenceAudio": "例句語音",
    "cards.complete": "已完成這輪閃卡",
    "cards.bad": "不知道",
    "cards.mid": "還不熟",
    "cards.good": "答對了",
    "quiz.title": "選出正確答案",
    "quiz.next": "下一題",
    "quiz.resultTitle": "今日小考結果",
    "quiz.home": "回首頁",
    "quiz.restart": "再練一次",
    "progress.title": "學習進度",
    "progress.targetLabel": "目標等級",
    "progress.daysUnit": "天",
    "progress.examDate": "考試日期",
    "progress.learned": "已學單字",
    "progress.todayRate": "今日完成率",
    "progress.hardWords": "困難單字",
    "progress.quizRate": "小考正確率",
    "progress.dailyAdvice": "每日建議",
    "progress.dailyAdviceValue": "12 個新單字",
    "progress.settings": "學習設定",
    "progress.levelSelect": "目標等級",
    "progress.dailySelect": "每日單字量",
    "progress.speedSelect": "發音速度",
    "progress.slow": "慢速",
    "progress.normal": "正常",
    "tabs.home": "首頁",
    "tabs.preview": "略讀",
    "tabs.cards": "閃卡",
    "tabs.quiz": "小考",
    "tabs.progress": "進度",
    "common.prev": "上一張",
    "common.next": "下一張",
    score: (score) => `${score} 分`,
    quizNumber: (index, total) => `第 ${index} / ${total} 題`,
    correct: "答對了",
    wrong: (answer) => `還不對。答案是：${answer}`,
    result: (score, total) => `你答對 ${score} / ${total} 題`,
    notTested: "尚未測驗"
  }
};

let currentLanguage = "vi";
let previewIndex = 0;
let flashIndex = 0;
let flashDone = 0;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizFeedbackState = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const t = (key) => translations[currentLanguage][key] || key;

function setImage(slotImage, src) {
  const slot = slotImage.closest(".image-stage");
  slot.classList.remove("has-image");
  slotImage.removeAttribute("src");
  slotImage.alt = "";

  slotImage.onload = () => {
    slot.classList.add("has-image");
    slotImage.alt = "Vocabulary image";
  };

  slotImage.onerror = () => {
    slot.classList.remove("has-image");
    slotImage.removeAttribute("src");
    slotImage.alt = "";
  };

  slotImage.src = src;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "vi" ? "vi" : "zh-Hant";

  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  // Developer-only language toggle. Remove this button and state switch for the production Google Play version.
  $("#language-toggle").textContent = "中文 / Tiếng Việt";

  $("#quiz-score").textContent = translations[currentLanguage].score(quizScore);
  $("#quiz-number").textContent = translations[currentLanguage].quizNumber(Math.min(quizIndex + 1, quizQuestions.length), quizQuestions.length);

  if (!quizAnswered || !quizFeedbackState) {
    $("#quiz-feedback").textContent = "";
  } else if (quizFeedbackState.type === "correct") {
    $("#quiz-feedback").textContent = t("correct");
  } else {
    $("#quiz-feedback").textContent = translations[currentLanguage].wrong(quizFeedbackState.answer);
  }

  if ($("#quiz-result").hidden === false) {
    $("#quiz-result-text").textContent = translations[currentLanguage].result(quizScore, quizQuestions.length);
  }

  if ($("#progress-quiz-rate").dataset.hasResult !== "true") {
    $("#progress-quiz-rate").textContent = t("notTested");
  }
}

function showScreen(screenName) {
  $$(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === screenName);
  });

  $$(".tab-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.tabTarget === screenName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHomeWords() {
  $("#home-word-list").innerHTML = words
    .map((word) => `<span class="word-pill">${word.word_zh}</span>`)
    .join("");
}

function updateHomeProgress() {
  $("#home-progress-count").textContent = `${flashDone}/${words.length}`;
  $(".home-progress span").style.width = `${(flashDone / words.length) * 100}%`;
}

function renderPreview() {
  const word = words[previewIndex];
  $("#preview-counter").textContent = `${previewIndex + 1} / ${words.length}`;
  $("#preview-level").textContent = word.level;
  $("#preview-topic").textContent = word.topic;
  $("#preview-word").textContent = word.word_zh;
  $("#preview-pinyin").textContent = word.pinyin;
  $("#preview-meaning").textContent = word.meaning_vi;
  $("#preview-example-zh").textContent = word.example_zh;
  $("#preview-example-vi").textContent = word.example_vi;
  setImage($("#preview-image"), word.image);
}

function movePreview(step) {
  previewIndex = (previewIndex + step + words.length) % words.length;
  renderPreview();
}

function renderFlashcard() {
  const word = words[flashIndex] || words[words.length - 1];
  $("#flash-card").classList.remove("flipped");
  $("#flash-counter").textContent = `${Math.min(flashIndex + 1, words.length)} / ${words.length}`;
  $("#flash-word").textContent = word.word_zh;
  $("#flash-pinyin").textContent = word.pinyin;
  $("#flash-meaning").textContent = word.meaning_vi;
  $("#flash-example-zh").textContent = word.example_zh;
  $("#flash-example-vi").textContent = word.example_vi;
  $("#flash-level").textContent = word.level;
  $("#flash-topic").textContent = word.topic;
  $("#flash-progress").style.width = `${(flashDone / words.length) * 100}%`;
  setImage($("#flash-image"), word.image);
  updateHomeProgress();
}

function answerFlashcard() {
  if (flashDone >= words.length) {
    return;
  }

  flashDone += 1;
  flashIndex += 1;
  $("#flash-progress").style.width = `${(flashDone / words.length) * 100}%`;
  updateHomeProgress();

  if (flashIndex >= words.length) {
    $("#flash-complete").hidden = false;
    flashIndex = words.length - 1;
    $("#flash-counter").textContent = `${words.length} / ${words.length}`;
    return;
  }

  renderFlashcard();
}

function renderQuiz() {
  const current = quizQuestions[quizIndex];
  quizAnswered = false;
  quizFeedbackState = null;
  $("#quiz-number").textContent = translations[currentLanguage].quizNumber(quizIndex + 1, quizQuestions.length);
  $("#quiz-question").textContent = current.question;
  $("#quiz-feedback").textContent = "";
  $("#quiz-score").textContent = translations[currentLanguage].score(quizScore);
  $("#quiz-next").hidden = true;
  $("#quiz-result").hidden = true;
  $(".quiz-card").hidden = false;

  $("#quiz-options").innerHTML = current.options
    .map((option, index) => {
      const letter = String.fromCharCode(65 + index);
      return `<button type="button" data-answer="${option}">${letter}. ${option}</button>`;
    })
    .join("");
}

function chooseQuizAnswer(button) {
  if (quizAnswered) {
    return;
  }

  quizAnswered = true;
  const current = quizQuestions[quizIndex];
  const selected = button.dataset.answer;
  const isCorrect = selected === current.answer;

  if (isCorrect) {
    quizScore += 1;
    quizFeedbackState = { type: "correct", answer: current.answer };
    $("#quiz-feedback").textContent = t("correct");
  } else {
    quizFeedbackState = { type: "wrong", answer: current.answer };
    $("#quiz-feedback").textContent = translations[currentLanguage].wrong(current.answer);
  }

  $$("#quiz-options button").forEach((optionButton) => {
    const answer = optionButton.dataset.answer;
    optionButton.disabled = true;
    if (answer === current.answer) {
      optionButton.classList.add("correct");
    } else if (optionButton === button) {
      optionButton.classList.add("wrong");
    }
  });

  $("#quiz-score").textContent = translations[currentLanguage].score(quizScore);
  $("#quiz-next").hidden = false;
}

function nextQuizQuestion() {
  quizIndex += 1;

  if (quizIndex >= quizQuestions.length) {
    $(".quiz-card").hidden = true;
    $("#quiz-result").hidden = false;
    $("#quiz-result-text").textContent = translations[currentLanguage].result(quizScore, quizQuestions.length);
    $("#progress-quiz-rate").textContent = `${Math.round((quizScore / quizQuestions.length) * 100)}%`;
    $("#progress-quiz-rate").dataset.hasResult = "true";
    return;
  }

  renderQuiz();
}

function restartQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizFeedbackState = null;
  renderQuiz();
}

function attachEvents() {
  $$("[data-tab-target]").forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.tabTarget));
  });

  $("#language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "vi" ? "zh" : "vi";
    applyLanguage();
  });

  $("#preview-prev").addEventListener("click", () => movePreview(-1));
  $("#preview-next").addEventListener("click", () => movePreview(1));
  $("#known-btn").addEventListener("click", () => movePreview(1));
  $("#want-learn-btn").addEventListener("click", () => movePreview(1));

  $("#flash-card").addEventListener("click", () => {
    $("#flash-card").classList.toggle("flipped");
  });

  $$(".memory-actions button").forEach((button) => {
    button.addEventListener("click", answerFlashcard);
  });

  $("#quiz-options").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
      chooseQuizAnswer(button);
    }
  });

  $("#quiz-next").addEventListener("click", nextQuizQuestion);
  $("#quiz-restart").addEventListener("click", restartQuiz);
}

function init() {
  renderHomeWords();
  renderPreview();
  renderFlashcard();
  renderQuiz();
  applyLanguage();
  attachEvents();
}

document.addEventListener("DOMContentLoaded", init);
