/* =========================================================
   شهر واژه‌ها | فارسی ششم
   JavaScript - موتور کامل بازی
   ========================================================= */

"use strict";

const TEACHER_PASSWORD = "94072805";

const CLASS_CODES = {
  "601": "۶۰۱",
  "602": "۶۰۲",
  "603": "۶۰۳",
  "604": "۶۰۴"
};

const STORAGE_KEYS = {
  students: "shahre_vajehha_students",
  feedback: "shahre_vajehha_feedback",
  game: "shahre_vajehha_game"
};


/* =========================================================
   مراحل بازی
   ========================================================= */

const STAGES = [
  {
    id: 1,
    title: "دروازه معرفت",
    subtitle: "درس ۱: معرفت آفریدگار",
    icon: "🔮"
  },
  {
    id: 2,
    title: "جنگل شناخت",
    subtitle: "درس ۲: پنجره‌های شناخت + هدهد",
    icon: "🌳"
  },
  {
    id: 3,
    title: "برج هوشیاری",
    subtitle: "درس ۳: هوشیاری",
    icon: "🦉"
  },
  {
    id: 4,
    title: "سرزمین زبان",
    subtitle: "دانش زبانی: جمله و هجا",
    icon: "📜"
  },
  {
    id: 5,
    title: "تالار علم و عمل",
    subtitle: "درس ۴: داستان من و شما + حکایت علم و عمل",
    icon: "⚖️"
  },
  {
    id: 6,
    title: "هفت‌خان رستم",
    subtitle: "درس ۵: هفت‌خان رستم",
    icon: "⚔️"
  },
  {
    id: 7,
    title: "نبرد نهایی",
    subtitle: "مرور ترکیبی درس‌های بازی",
    icon: "👑"
  }
];


/* =========================================================
   بانک سؤالات
   ========================================================= */

const QUESTIONS = [

  /* ---------- مرحله ۱ ---------- */

  {
    id: "s1q1",
    stage: 1,
    difficulty: "آسان",
    question: "پیام اصلی درس «معرفت آفریدگار» چیست؟",
    options: [
      "شناخت خداوند از راه اندیشیدن در آفرینش",
      "اهمیت سفر کردن به سرزمین‌های گوناگون",
      "فراگیری مهارت‌های ورزشی",
      "شناخت تاریخ ایران"
    ],
    answer: 0,
    explanation:
      "در این درس، انسان با اندیشیدن در شگفتی‌های آفرینش می‌تواند به شناخت آفریدگار پی ببرد."
  },

  {
    id: "s1q2",
    stage: 1,
    difficulty: "آسان",
    question: "دیدن گل‌ها و برگ‌های گوناگون چه چیزی را به انسان یادآوری می‌کند؟",
    options: [
      "توانایی و دانایی آفریدگار",
      "سختی زندگی",
      "اهمیت کشاورزی",
      "تغییر فصل‌ها"
    ],
    answer: 0,
    explanation:
      "گوناگونی و زیبایی گل‌ها و برگ‌ها نشانه‌ای از قدرت و حکمت آفریدگار است."
  },

  {
    id: "s1q3",
    stage: 1,
    difficulty: "متوسط",
    question: "بلعمی در سخن خود بر چه چیزی تأکید می‌کند؟",
    options: [
      "روشنایی دل و شناخت آفریدگار",
      "قدرت و ثروت انسان",
      "اهمیت سفر",
      "یادگیری زبان‌های دیگر"
    ],
    answer: 0,
    explanation:
      "در این بخش، روشنایی دل و اندیشه برای شناخت بهتر آفریدگار مورد توجه قرار گرفته است."
  },

  {
    id: "s1q4",
    stage: 1,
    difficulty: "متوسط",
    question: "در بیت مربوط به برگ درختان، شاعر از دیدن برگ‌ها به چه نتیجه‌ای می‌رسد؟",
    options: [
      "نشانه‌های قدرت و آفرینش خداوند را می‌بیند.",
      "به فکر ساختن خانه می‌افتد.",
      "به فصل پاییز فکر می‌کند.",
      "به کشاورزی علاقه‌مند می‌شود."
    ],
    answer: 0,
    explanation:
      "شاعر با نگاه به برگ درختان، نشانه‌های آفرینش و قدرت خداوند را مشاهده می‌کند."
  },


  /* ---------- مرحله ۲ ---------- */

  {
    id: "s2q1",
    stage: 2,
    difficulty: "آسان",
    question: "در داستان هدهد، هدهد چگونه گرفتار شد؟",
    options: [
      "به دام گرفتار شد.",
      "راه خود را گم کرد.",
      "از پرواز خسته شد.",
      "در جنگل خوابش برد."
    ],
    answer: 0,
    explanation:
      "در داستان، هدهد گرفتار دام می‌شود و برای رهایی خود تلاش می‌کند."
  },

  {
    id: "s2q2",
    stage: 2,
    difficulty: "آسان",
    question: "چه کسانی در داستان گرفتار شدند؟",
    options: [
      "پرندگان",
      "شکارچیان",
      "کشاورزان",
      "مسافران"
    ],
    answer: 0,
    explanation:
      "پرندگان در جریان داستان گرفتار دام می‌شوند."
  },

  {
    id: "s2q3",
    stage: 2,
    difficulty: "متوسط",
    question: "پیرزن چه هشداری به هدهد داد؟",
    options: [
      "از دام و فریب دوری کند.",
      "به شهر برگردد.",
      "پرواز نکند.",
      "به دنبال غذا نرود."
    ],
    answer: 0,
    explanation:
      "هشدار پیرزن نشان می‌دهد که بی‌احتیاطی و غفلت می‌تواند انسان یا موجودات دیگر را گرفتار کند."
  },

  {
    id: "s2q4",
    stage: 2,
    difficulty: "متوسط",
    question: "پیام اصلی داستان هدهد چیست؟",
    options: [
      "هوشیاری و دوری از غفلت",
      "اهمیت سفر",
      "دوستی با پرندگان",
      "زندگی در جنگل"
    ],
    answer: 0,
    explanation:
      "یکی از پیام‌های مهم داستان، توجه و هوشیاری و دوری از غفلت است."
  },


  /* ---------- مرحله ۳ ---------- */

  {
    id: "s3q1",
    stage: 3,
    difficulty: "آسان",
    question: "برای تصمیم‌گیری درست، انسان باید چه کاری انجام دهد؟",
    options: [
      "با دقت فکر کند و پیامدهای کار را بسنجد.",
      "بدون فکر تصمیم بگیرد.",
      "فقط از دیگران تقلید کند.",
      "هر کاری را سریع انجام دهد."
    ],
    answer: 0,
    explanation:
      "هوشیاری یعنی پیش از تصمیم‌گیری، درباره نتیجه و پیامدهای کار فکر کنیم."
  },

  {
    id: "s3q2",
    stage: 3,
    difficulty: "آسان",
    question: "مفهوم «پشیمانی سودی ندارد» چیست؟",
    options: [
      "باید پیش از انجام کار درست فکر کنیم.",
      "نباید هیچ‌وقت اشتباه کنیم.",
      "همیشه باید از دیگران پیروی کنیم.",
      "نباید درباره کارهای خود فکر کنیم."
    ],
    answer: 0,
    explanation:
      "اگر پیش از انجام کار فکر و دقت کنیم، از بسیاری از پشیمانی‌های بعدی جلوگیری می‌شود."
  },

  {
    id: "s3q3",
    stage: 3,
    difficulty: "متوسط",
    question: "کدام مورد نمونه‌ای از هوشیاری است؟",
    options: [
      "پیش از عبور از خیابان، اطراف را بررسی کنیم.",
      "بدون توجه به اطراف از خیابان عبور کنیم.",
      "کار را بدون فکر انجام دهیم.",
      "هشدار دیگران را نادیده بگیریم."
    ],
    answer: 0,
    explanation:
      "توجه به محیط و بررسی پیامدهای کار، نمونه‌ای از هوشیاری است."
  },

  {
    id: "s3q4",
    stage: 3,
    difficulty: "متوسط",
    question: "واژه‌های «گل»، «گلکار» و «گلکاری» به ترتیب چند هجا دارند؟",
    options: [
      "۱، ۲، ۳",
      "۲، ۲، ۳",
      "۱، ۳، ۳",
      "۲، ۳، ۴"
    ],
    answer: 0,
    explanation:
      "گل = ۱ هجا، گلکار = ۲ هجا، گلکاری = ۳ هجا."
  },


  /* ---------- مرحله ۴ ---------- */

  {
    id: "s4q1",
    stage: 4,
    difficulty: "سخت",
    question:
      "در جمله «این سه دانش‌آموز کوشا کتاب علومشان را به مدرسه آوردند»، نقش دستوری واژه‌ها و گروه‌های جمله را مشخص کنید.",
    options: [
      "این: صفت اشاره / سه: صفت شمارشی اصلی / دانش‌آموز: هسته نهاد / کوشا: صفت / کتاب علومشان را: مفعول / به مدرسه: متمم / آوردند: فعل",
      "این: متمم / سه: مفعول / دانش‌آموز: فعل / کوشا: نهاد / کتاب: صفت / مدرسه: فعل",
      "این: مفعول / سه: قید / دانش‌آموز: متمم / کوشا: فعل / کتاب: نهاد / مدرسه: صفت",
      "همه واژه‌ها فقط بخشی از گزاره هستند."
    ],
    answer: 0,
    explanation:
      "در این جمله «این سه دانش‌آموز کوشا» نهاد است؛ «کتاب علومشان را» مفعول؛ «به مدرسه» متمم و «آوردند» فعل است."
  },

  {
    id: "s4q2",
    stage: 4,
    difficulty: "آسان",
    question: "در واژه «دفترش»، «ش» چه نقشی دارد؟",
    options: [
      "ضمیر پیوسته",
      "حرف اضافه",
      "صفت",
      "فعل"
    ],
    answer: 0,
    explanation:
      "«ش» در «دفترش» ضمیر پیوسته است و معنی «دفترِ او» می‌دهد."
  },

  {
    id: "s4q3",
    stage: 4,
    difficulty: "متوسط",
    question: "در جمله «مریم در کلاس درس می‌خواند»، «در کلاس» چه نقشی دارد؟",
    options: [
      "متمم",
      "مفعول",
      "نهاد",
      "صفت"
    ],
    answer: 0,
    explanation:
      "گروه «در کلاس» با حرف اضافه «در» آمده و متمم است."
  },

  {
    id: "s4q4",
    stage: 4,
    difficulty: "متوسط",
    question: "در جمله «هوا آرام است»، واژه «آرام» چه نقشی دارد؟",
    options: [
      "مسند",
      "مفعول",
      "متمم",
      "نهاد"
    ],
    answer: 0,
    explanation:
      "در جمله اسنادی «هوا آرام است»، واژه «آرام» مسند است."
  },


  /* ---------- مرحله ۵ ---------- */

  {
    id: "s5q1",
    stage: 5,
    difficulty: "آسان",
    question: "چرا زبان را موجودی زنده می‌دانیم؟",
    options: [
      "زیرا در طول زمان تغییر می‌کند و واژه‌های تازه می‌پذیرد.",
      "زیرا همیشه بدون تغییر باقی می‌ماند.",
      "زیرا فقط در کتاب‌ها وجود دارد.",
      "زیرا فقط کودکان از آن استفاده می‌کنند."
    ],
    answer: 0,
    explanation:
      "زبان در طول زمان رشد می‌کند، تغییر می‌یابد و واژه‌ها و کاربردهای تازه پیدا می‌کند."
  },

  {
    id: "s5q2",
    stage: 5,
    difficulty: "متوسط",
    question: "زبان فارسی چه نقشی در هویت ما دارد؟",
    options: [
      "بخشی از هویت و فرهنگ ایرانی ماست.",
      "فقط وسیله‌ای برای سرگرمی است.",
      "تنها برای نوشتن شعر کاربرد دارد.",
      "فقط در مدرسه استفاده می‌شود."
    ],
    answer: 0,
    explanation:
      "زبان فارسی یکی از مهم‌ترین عناصر فرهنگی و هویتی مردم ایران است."
  },

  {
    id: "s5q3",
    stage: 5,
    difficulty: "متوسط",
    question: "زبان چگونه می‌تواند باعث اتحاد مردم شود؟",
    options: [
      "با ایجاد ارتباط و انتقال اندیشه‌ها و فرهنگ مشترک.",
      "با جلوگیری از گفت‌وگو.",
      "با جدا کردن مردم از یکدیگر.",
      "با محدود کردن ارتباط."
    ],
    answer: 0,
    explanation:
      "زبان وسیله ارتباط انسان‌هاست و می‌تواند فرهنگ، خاطرات و ارزش‌های مشترک را منتقل کند."
  },

  {
    id: "s5q4",
    stage: 5,
    difficulty: "آسان",
    question: "پیام اصلی حکایت «علم و عمل» چیست؟",
    options: [
      "دانش زمانی ارزشمند است که به عمل تبدیل شود.",
      "دانش هیچ اهمیتی ندارد.",
      "فقط داشتن کتاب کافی است.",
      "عمل کردن بدون دانش همیشه بهتر است."
    ],
    answer: 0,
    explanation:
      "علم و دانش زمانی سودمندتر است که در زندگی و رفتار انسان به کار گرفته شود."
  },


  /* ---------- مرحله ۶ ---------- */

  {
    id: "s6q1",
    stage: 6,
    difficulty: "متوسط",
    question:
      "معنی واژه‌های «معرفت، هوشیاری، غفلت، یکپارچگی و مبالغه» به ترتیب چیست؟",
    options: [
      "شناخت، آگاهی، بی‌خبری، وحدت و زیاده‌گویی",
      "دوستی، شادی، تلاش، جدایی و آرامش",
      "دانش، خواب، تلاش، پراکندگی و سکوت",
      "آگاهی، نادانی، دوستی، جدایی و کوتاهی"
    ],
    answer: 0,
    explanation:
      "معرفت = شناخت، هوشیاری = آگاهی، غفلت = بی‌خبری، یکپارچگی = وحدت، مبالغه = زیاده‌گویی."
  },

  {
    id: "s6q2",
    stage: 6,
    difficulty: "آسان",
    question: "کدام گزینه شکل درست نوشتاری واژه‌ها را نشان می‌دهد؟",
    options: [
      "کردگار ـ یکپارچگی",
      "کرد گار ـ یک پارچگی",
      "کردگار ـ یک پارچگی",
      "کرد گار ـ یکپارچگی"
    ],
    answer: 0,
    explanation:
      "شکل درست این دو واژه «کردگار» و «یکپارچگی» است."
  },

  {
    id: "s6q3",
    stage: 6,
    difficulty: "آسان",
    question: "شاهنامه اثر کدام شاعر بزرگ ایرانی است؟",
    options: [
      "فردوسی",
      "سعدی",
      "حافظ",
      "مولوی"
    ],
    answer: 0,
    explanation:
      "شاهنامه اثر حکیم ابوالقاسم فردوسی است."
  },

  {
    id: "s6q4",
    stage: 6,
    difficulty: "متوسط",
    question: "«هفت‌خان» در داستان رستم به چه معناست؟",
    options: [
      "هفت مرحله دشوار و پرخطر",
      "هفت شهر بزرگ",
      "هفت روز سفر",
      "هفت دوست رستم"
    ],
    answer: 0,
    explanation:
      "هفت‌خان مجموعه‌ای از هفت مرحله دشوار و خطرناک در مسیر رستم است."
  },

  {
    id: "s6q5",
    stage: 6,
    difficulty: "متوسط",
    question: "کدام جمله نمونه‌ای از «مبالغه» است؟",
    options: [
      "رستم آن‌قدر نیرومند بود که کوه را جابه‌جا کرد.",
      "رستم به میدان رفت.",
      "رستم اسب خود را صدا زد.",
      "رستم با دوستانش سخن گفت."
    ],
    answer: 0,
    explanation:
      "مبالغه یعنی چیزی را بیش از اندازه واقعی و برای تأکید بیان کنیم."
  },


  /* ---------- مرحله ۷ ---------- */

  {
    id: "s7q1",
    stage: 7,
    difficulty: "متوسط",
    question: "رستم چرا از زابلستان به مازندران رفت؟",
    options: [
      "برای نجات کیکاووس و سپاهیان ایران",
      "برای پیدا کردن گنج",
      "برای شکار",
      "برای دیدار دوستانش"
    ],
    answer: 0,
    explanation:
      "رستم برای نجات کیکاووس و سپاهیان ایران راهی مازندران شد."
  },

  {
    id: "s7q2",
    stage: 7,
    difficulty: "آسان",
    question: "کدام ویژگی بیشتر با شخصیت رستم در داستان هفت‌خان ارتباط دارد؟",
    options: [
      "شجاعت و دلاوری",
      "ترس و بی‌احتیاطی",
      "تنهایی و ناامیدی",
      "بی‌تفاوتی"
    ],
    answer: 0,
    explanation:
      "رستم در هفت‌خان با شجاعت و دلاوری با دشواری‌ها روبه‌رو می‌شود."
  },

  {
    id: "s7q3",
    stage: 7,
    difficulty: "متوسط",
    question: "در درس‌های این بازی، غفلت معمولاً چه نتیجه‌ای دارد؟",
    options: [
      "باعث گرفتاری و پشیمانی می‌شود.",
      "باعث موفقیت سریع می‌شود.",
      "همیشه باعث شادی می‌شود.",
      "هیچ اثری ندارد."
    ],
    answer: 0,
    explanation:
      "در درس‌های هوشیاری و هدهد، غفلت می‌تواند انسان را گرفتار کند و موجب پشیمانی شود."
  },

  {
    id: "s7q4",
    stage: 7,
    difficulty: "سخت",
    question:
      "در جمله «این سه دانش‌آموز کوشا کتاب علومشان را به مدرسه آوردند»، کدام گزینه تحلیل درست‌تری دارد؟",
    options: [
      "این صفت اشاره، سه صفت شمارشی اصلی، دانش‌آموز هسته نهاد، کوشا صفت، کتاب علومشان را مفعول، به مدرسه متمم و آوردند فعل است.",
      "این مفعول، سه فعل، دانش‌آموز متمم، کوشا نهاد و آوردند صفت است.",
      "این حرف اضافه، سه مفعول، دانش‌آموز فعل، کوشا قید و مدرسه نهاد است.",
      "همه اجزای جمله نقش یکسان دارند."
    ],
    answer: 0,
    explanation:
      "این جمله چندین نقش دستوری را هم‌زمان نشان می‌دهد و باید هر جزء را بر اساس جایگاه و ارتباطش با دیگر اجزا تحلیل کرد."
  },

  {
    id: "s7q5",
    stage: 7,
    difficulty: "سخت",
    question: "چه ارتباطی میان سه مفهوم «معرفت، هوشیاری و علم و عمل» وجود دارد؟",
    options: [
      "انسان با شناخت و آگاهی می‌تواند دانسته‌های خود را درست به کار ببرد.",
      "این سه مفهوم هیچ ارتباطی با یکدیگر ندارند.",
      "معرفت فقط به ورزش مربوط است.",
      "علم و عمل با هوشیاری مخالف است."
    ],
    answer: 0,
    explanation:
      "شناخت و معرفت، آگاهی و هوشیاری و سپس به‌کارگیری دانش در عمل، سه مفهوم مرتبط با رشد و زندگی درست انسان هستند."
  }

];


/* =========================================================
   ابزارهای عمومی
   ========================================================= */

const $ = (id) => document.getElementById(id);

function toPersianDigits(value) {
  const digits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];

  return String(value).replace(/\d/g, digit => {
    return digits[Number(digit)];
  });
}

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function formatTime(seconds) {
  seconds = Math.max(0, Math.floor(seconds));

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = $(pageId);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}


/* =========================================================
   وضعیت بازی
   ========================================================= */

let gameState = null;
let selectedSatisfaction = null;
let selectedClass = "601";
let teacherLoggedIn = false;
let timerInterval = null;


/* =========================================================
   ساخت ترتیب متعادل گزینه‌ها
   ========================================================= */

function createBalancedQuestionOrder() {
  const positions = [
    0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3
  ];

  return shuffle(positions);
}


/* =========================================================
   آماده‌سازی سؤالات
   ========================================================= */

function prepareQuestions() {
  const targetPositions = createBalancedQuestionOrder();

  return shuffle(QUESTIONS).map((question, index) => {

    const options = [...question.options];
    const correctOption = options[question.answer];

    options.splice(question.answer, 1);

    const targetPosition = targetPositions[index];

    options.splice(targetPosition, 0, correctOption);

    return {
      ...question,
      options,
      answer: targetPosition
    };
  });
}


/* =========================================================
   شروع بازی جدید
   ========================================================= */

function startNewGame(playerName, classCode, guest = false) {

  gameState = {
    playerName,
    classCode,
    guest,

    questions: prepareQuestions(),

    answers: {},

    score: 0,
    correctCount: 0,
    answeredCount: 0,

    currentStage: 1,
    currentQuestionId: null,

    startedAt: Date.now(),
    elapsedSeconds: 0,

    completed: false,

    stageCompleted: {},

    wrongQuestions: []
  };

  clearGameState();

  if (!guest) {
    saveGameState();
  }

  updateGameHeader();

  startTimer();

  showPage("gamePage");

  renderRegions();

  renderStage(1);
}


/* =========================================================
   LocalStorage
   ========================================================= */

function loadStudents() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.students)
    ) || [];
  } catch {
    return [];
  }
}

function saveStudents(students) {
  localStorage.setItem(
    STORAGE_KEYS.students,
    JSON.stringify(students)
  );
}

function loadFeedback() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.feedback)
    ) || [];
  } catch {
    return [];
  }
}

function saveFeedback(feedback) {
  localStorage.setItem(
    STORAGE_KEYS.feedback,
    JSON.stringify(feedback)
  );
}

function loadGameState() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEYS.game)
    );
  } catch {
    return null;
  }
}

function saveGameState() {
  if (!gameState || gameState.guest) return;

  gameState.elapsedSeconds =
    Math.floor((Date.now() - gameState.startedAt) / 1000);

  localStorage.setItem(
    STORAGE_KEYS.game,
    JSON.stringify(gameState)
  );
}

function clearGameState() {
  localStorage.removeItem(STORAGE_KEYS.game);
}


/* =========================================================
   ادامه بازی ذخیره‌شده
   ========================================================= */

function resumeSavedGame(savedGame) {

  gameState = savedGame;

  if (!gameState.startedAt) {
    gameState.startedAt = Date.now();
  }

  updateGameHeader();

  startTimer();

  showPage("gamePage");

  renderRegions();

  renderStage(gameState.currentStage || 1);
}


/* =========================================================
   تایمر
   ========================================================= */

function startTimer() {

  stopTimer();

  timerInterval = setInterval(() => {

    if (!gameState || gameState.completed) {
      return;
    }

    gameState.elapsedSeconds =
      Math.floor((Date.now() - gameState.startedAt) / 1000);

    const timerValue = $("timerValue");

    if (timerValue) {
      timerValue.textContent =
        toPersianDigits(formatTime(gameState.elapsedSeconds));
    }

    if (!gameState.guest) {
      saveGameState();
    }

  }, 1000);
}

function stopTimer() {

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}


/* =========================================================
   هدر بازی
   ========================================================= */

function updateGameHeader() {

  if (!gameState) return;

  const name = $("gamePlayerName");
  const classEl = $("gamePlayerClass");
  const score = $("scoreValue");
  const accuracy = $("accuracyValue");
  const answered = $("answeredValue");
  const timer = $("timerValue");

  if (name) {
    name.textContent = gameState.playerName || "دانش‌آموز";
  }

  if (classEl) {
    classEl.textContent =
      gameState.guest
        ? "مهمان"
        : `کلاس ${CLASS_CODES[gameState.classCode] || gameState.classCode}`;
  }

  if (score) {
    score.textContent =
      toPersianDigits(gameState.score);
  }

  const acc =
    gameState.answeredCount > 0
      ? Math.round(
          (gameState.correctCount /
            gameState.answeredCount) * 100
        )
      : 0;

  if (accuracy) {
    accuracy.textContent =
      toPersianDigits(acc) + "٪";
  }

  if (answered) {
    answered.textContent =
      toPersianDigits(
        gameState.answeredCount
      ) +
      "/۳۰";
  }

  if (timer) {
    timer.textContent =
      toPersianDigits(
        formatTime(gameState.elapsedSeconds || 0)
      );
  }
}


/* =========================================================
   سؤالات هر مرحله
   ========================================================= */

function getStageQuestions(stageId) {

  if (!gameState) return [];

  return gameState.questions.filter(
    question => question.stage === stageId
  );
}


/* =========================================================
   نمایش مناطق
   ========================================================= */

function renderRegions() {

  const container = $("regionsContainer");

  if (!container || !gameState) return;

  container.innerHTML = "";

  STAGES.forEach(stage => {

    const stageQuestions =
      getStageQuestions(stage.id);

    const answered =
      stageQuestions.filter(
        q => gameState.answers[q.id] !== undefined
      ).length;

    const completed =
      !!gameState.stageCompleted[stage.id];

    const unlocked =
      stage.id === 1 ||
      !!gameState.stageCompleted[stage.id - 1];

    const button =
      document.createElement("button");

    button.className = "region-card";

    if (stage.id === gameState.currentStage) {
      button.classList.add("active");
    }

    if (completed) {
      button.classList.add("completed");
    }

    if (!unlocked) {
      button.classList.add("locked");
    }

    button.innerHTML = `
      <div class="region-icon">${stage.icon}</div>

      <div class="region-info">
        <strong>
          ${toPersianDigits(stage.id)}. ${stage.title}
        </strong>

        <small>
          ${stage.subtitle}
        </small>

        <span>
          ${toPersianDigits(answered)}/${toPersianDigits(stageQuestions.length)}
        </span>
      </div>
    `;

    if (unlocked) {
      button.addEventListener("click", () => {
        gameState.currentStage = stage.id;
        renderRegions();
        renderStage(stage.id);
      });
    }

    container.appendChild(button);
  });
}


/* =========================================================
   نمایش مرحله
   ========================================================= */

function renderStage(stageId) {

  if (!gameState) return;

  const stage =
    STAGES.find(item => item.id === stageId);

  if (!stage) return;

  const stageTitle = $("stageTitle");
  const stageSubtitle = $("stageSubtitle");
  const stageProgress = $("stageProgress");

  if (stageTitle) {
    stageTitle.textContent = stage.title;
  }

  if (stageSubtitle) {
    stageSubtitle.textContent = stage.subtitle;
  }

  const stageQuestions =
    getStageQuestions(stageId);

  const answered =
    stageQuestions.filter(
      q => gameState.answers[q.id] !== undefined
    ).length;

  if (stageProgress) {
    stageProgress.textContent =
      `${toPersianDigits(answered)}/${toPersianDigits(stageQuestions.length)}`;
  }

  renderQuestionGrid(stageQuestions);

  const questionView = $("questionView");

  if (questionView) {
    questionView.classList.add("hidden");
  }

  const finishMessage = $("finishMessage");

  if (finishMessage) {
    finishMessage.classList.add("hidden");
  }

  const finishButton = $("finishStageBtn");

  if (finishButton) {
    finishButton.disabled =
      answered !== stageQuestions.length;
  }

  updateGameHeader();
  renderRegions();
}


/* =========================================================
   شبکه سؤالات
   ========================================================= */

function renderQuestionGrid(stageQuestions) {

  const grid = $("questionGrid");

  if (!grid) return;

  grid.innerHTML = "";

  stageQuestions.forEach((question, index) => {

    const button =
      document.createElement("button");

    const answered =
      gameState &&
      gameState.answers[question.id] !== undefined;

    button.className = "question-number-card";

    if (answered) {
      button.classList.add("answered");
    }

    button.innerHTML = `
      <span>${toPersianDigits(index + 1)}</span>
      <small>${question.difficulty}</small>
    `;

    button.addEventListener("click", () => {
      showQuestion(question.id);
    });

    grid.appendChild(button);
  });
}


/* =========================================================
   نمایش سؤال
   ========================================================= */

function showQuestion(questionId) {

  if (!gameState) return;

  const question =
    gameState.questions.find(
      q => q.id === questionId
    );

  if (!question) return;

  gameState.currentQuestionId = questionId;

  const questionView = $("questionView");

  if (questionView) {
    questionView.classList.remove("hidden");
  }

  const questionStage = $("questionStage");
  const questionDifficulty = $("questionDifficulty");
  const questionText = $("questionText");

  if (questionStage) {
    questionStage.textContent =
      STAGES.find(s => s.id === question.stage)?.title ||
      "مرحله";
  }

  if (questionDifficulty) {
    questionDifficulty.textContent =
      question.difficulty;
  }

  if (questionText) {
    questionText.textContent =
      question.question;
  }

  renderOptions(question);

  const answer =
    gameState.answers[question.id];

  if (answer !== undefined) {
    showAnsweredQuestion(question, answer);
  } else {

    const explanation = $("explanation");

    if (explanation) {
      explanation.classList.add("hidden");
    }
  }

  const finishMessage = $("finishMessage");

  if (finishMessage) {
    finishMessage.classList.add("hidden");
  }
}


/* =========================================================
   نمایش گزینه‌ها
   ========================================================= */

function renderOptions(question) {

  const container = $("optionsContainer");

  if (!container) return;

  container.innerHTML = "";

  question.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className = "option-btn";

    button.innerHTML = `
      <span class="option-letter">
        ${String.fromCharCode(1575 + index)}
      </span>
      <span>${escapeHtml(option)}</span>
    `;

    const alreadyAnswered =
      gameState.answers[question.id] !== undefined;

    if (alreadyAnswered) {
      button.disabled = true;
    } else {
      button.addEventListener("click", () => {
        answerQuestion(question.id, index);
      });
    }

    container.appendChild(button);
  });
}


/* =========================================================
   پاسخ به سؤال
   ========================================================= */

function answerQuestion(questionId, selectedIndex) {

  if (!gameState) return;

  if (gameState.answers[questionId] !== undefined) {
    return;
  }

  const question =
    gameState.questions.find(
      q => q.id === questionId
    );

  if (!question) return;

  const isCorrect =
    selectedIndex === question.answer;

  gameState.answers[questionId] = {
    selected: selectedIndex,
    correct: isCorrect
  };

  gameState.answeredCount++;

  if (isCorrect) {

    gameState.correctCount++;

    gameState.score +=
      question.difficulty === "سخت"
        ? 20
        : question.difficulty === "متوسط"
        ? 15
        : 10;

  } else {

    gameState.wrongQuestions.push(questionId);
  }

  updateGameHeader();

  renderQuestionGrid(
    getStageQuestions(question.stage)
  );

  showAnsweredQuestion(
    question,
    gameState.answers[questionId]
  );

  renderRegions();

  if (!gameState.guest) {
    saveGameState();
  }
}


/* =========================================================
   نمایش پاسخ داده‌شده
   ========================================================= */

function showAnsweredQuestion(question, answerData) {

  const container = $("optionsContainer");

  if (!container) return;

  const buttons =
    container.querySelectorAll(".option-btn");

  buttons.forEach((button, index) => {

    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }

    if (
      index === answerData.selected &&
      !answerData.correct
    ) {
      button.classList.add("wrong");
    }
  });

  const explanation = $("explanation");
  const explanationText = $("explanationText");

  if (explanationText) {
    explanationText.textContent =
      question.explanation || "";
  }

  if (explanation) {
    explanation.classList.remove("hidden");
  }
}


/* =========================================================
   پایان مرحله
   ========================================================= */

function finishCurrentStage() {

  if (!gameState) return;

  const stageId =
    gameState.currentStage;

  const stageQuestions =
    getStageQuestions(stageId);

  const answered =
    stageQuestions.filter(
      q => gameState.answers[q.id] !== undefined
    ).length;

  if (answered < stageQuestions.length) {

    showToast(
      "ابتدا به همه پرسش‌های این مرحله پاسخ بده."
    );

    return;
  }

  gameState.stageCompleted[stageId] = true;

  renderStageReview(stageId);

  if (!gameState.guest) {
    saveGameState();
  }

  renderRegions();
}


/* =========================================================
   مرور مرحله
   ========================================================= */

function renderStageReview(stageId) {

  const stageQuestions =
    getStageQuestions(stageId);

  const correct =
    stageQuestions.filter(q =>
      gameState.answers[q.id]?.correct
    ).length;

  const finishMessage =
    $("finishMessage");

  if (!finishMessage) return;

  finishMessage.classList.remove("hidden");

  finishMessage.innerHTML = `
    <h3>🎉 مرحله به پایان رسید!</h3>

    <p>
      از ${toPersianDigits(stageQuestions.length)}
      پرسش،
      ${toPersianDigits(correct)}
      پاسخ درست داشتی.
    </p>
  `;

  const nextStage =
    STAGES.find(stage => stage.id === stageId + 1);

  if (nextStage) {

    const nextButton =
      document.createElement("button");

    nextButton.className = "primary-btn";

    nextButton.textContent =
      `ورود به ${nextStage.title}`;

    nextButton.addEventListener("click", () => {

      gameState.currentStage =
        nextStage.id;

      renderRegions();
      renderStage(nextStage.id);
    });

    finishMessage.appendChild(nextButton);

  } else {

    const finishButton =
      document.createElement("button");

    finishButton.className = "primary-btn";

    finishButton.textContent =
      "🏆 مشاهده نتیجه نهایی";

    finishButton.addEventListener("click", finishGame);

    finishMessage.appendChild(finishButton);
  }
}


/* =========================================================
   قوی‌ترین بخش
   ========================================================= */

function calculateStrongestSection() {

  let bestStage = null;
  let bestAccuracy = -1;

  STAGES.forEach(stage => {

    const questions =
      getStageQuestions(stage.id);

    if (!questions.length) return;

    const correct =
      questions.filter(q =>
        gameState.answers[q.id]?.correct
      ).length;

    const accuracy =
      correct / questions.length;

    if (accuracy > bestAccuracy) {
      bestAccuracy = accuracy;
      bestStage = stage;
    }
  });

  return bestStage
    ? bestStage.title
    : "—";
}


/* =========================================================
   نیازمند مرور
   ========================================================= */

function calculateNeedsReview() {

  let worstStage = null;
  let worstAccuracy = Infinity;

  STAGES.forEach(stage => {

    const questions =
      getStageQuestions(stage.id);

    if (!questions.length) return;

    const correct =
      questions.filter(q =>
        gameState.answers[q.id]?.correct
      ).length;

    const accuracy =
      correct / questions.length;

    if (accuracy < worstAccuracy) {
      worstAccuracy = accuracy;
      worstStage = stage;
    }
  });

  return worstStage
    ? worstStage.title
    : "—";
}


/* =========================================================
   رتبه در کلاس
   ========================================================= */

function calculateClassRank() {

  if (!gameState || gameState.guest) {
    return "مهمان";
  }

  const students =
    loadStudents()
      .filter(
        student =>
          student.classCode === gameState.classCode
      )
      .sort(
        (a, b) =>
          b.score - a.score
      );

  const index =
    students.findIndex(
      student =>
        student.playerName === gameState.playerName &&
        student.score === gameState.score
    );

  return index >= 0
    ? index + 1
    : students.length + 1;
}


/* =========================================================
   ذخیره نتیجه نهایی
   ========================================================= */

function saveFinalStudentResult() {

  if (!gameState || gameState.guest) {
    return;
  }

  const students =
    loadStudents();

  const result = {
    playerName: gameState.playerName,
    classCode: gameState.classCode,
    score: gameState.score,
    correctCount: gameState.correctCount,
    answeredCount: gameState.answeredCount,

    accuracy:
      gameState.answeredCount > 0
        ? Math.round(
            (gameState.correctCount /
              gameState.answeredCount) * 100
          )
        : 0,

    elapsedSeconds:
      gameState.elapsedSeconds,

    date:
      new Date().toLocaleString("fa-IR")
  };

  students.push(result);

  saveStudents(students);
}


/* =========================================================
   پایان کامل بازی
   ========================================================= */

function finishGame() {

  if (!gameState) return;

  gameState.elapsedSeconds =
    Math.floor(
      (Date.now() - gameState.startedAt) / 1000
    );

  gameState.completed = true;

  stopTimer();

  saveFinalStudentResult();

  clearGameState();

  renderFinalResult();

  showPage("resultPage");
}


/* =========================================================
   نمایش نتیجه نهایی
   ========================================================= */

function renderFinalResult() {

  if (!gameState) return;

  const finalScore = $("finalScore");
  const finalAccuracy = $("finalAccuracy");
  const finalTime = $("finalTime");

  if (finalScore) {
    finalScore.textContent =
      toPersianDigits(gameState.score);
  }

  const accuracy =
    gameState.answeredCount > 0
      ? Math.round(
          (gameState.correctCount /
            gameState.answeredCount) * 100
        )
      : 0;

  if (finalAccuracy) {
    finalAccuracy.textContent =
      toPersianDigits(accuracy) + "٪";
  }

  if (finalTime) {
    finalTime.textContent =
      toPersianDigits(
        formatTime(gameState.elapsedSeconds)
      );
  }

  const strongest =
    $("strongestSection");

  if (strongest) {
    strongest.textContent =
      calculateStrongestSection();
  }

  const needsReview =
    $("needsReview");

  if (needsReview) {
    needsReview.textContent =
      calculateNeedsReview();
  }

  const rank =
    $("finalRank");

  if (rank) {

    const calculatedRank =
      calculateClassRank();

    rank.textContent =
      typeof calculatedRank === "number"
        ? toPersianDigits(calculatedRank)
        : calculatedRank;
  }

  renderBadges();
  renderFinalReview();
}


/* =========================================================
   نشان‌ها
   ========================================================= */

function renderBadges() {

  if (!gameState) return;

  const total =
    gameState.answeredCount;

  const accuracy =
    total > 0
      ? gameState.correctCount / total
      : 0;

  const vocabulary =
    $("badgeVocabulary");

  const grammar =
    $("badgeGrammar");

  const literature =
    $("badgeLiterature");

  const champion =
    $("badgeChampion");

  if (vocabulary) {
    vocabulary.classList.toggle(
      "earned",
      getStageAccuracy(1) >= 0.75
    );
  }

  if (grammar) {
    grammar.classList.toggle(
      "earned",
      getStageAccuracy(4) >= 0.75
    );
  }

  if (literature) {
    literature.classList.toggle(
      "earned",
      getStageAccuracy(6) >= 0.75
    );
  }

  if (champion) {
    champion.classList.toggle(
      "earned",
      accuracy >= 0.9
    );
  }
}

function getStageAccuracy(stageId) {

  const questions =
    getStageQuestions(stageId);

  if (!questions.length) return 0;

  const correct =
    questions.filter(
      q => gameState.answers[q.id]?.correct
    ).length;

  return correct / questions.length;
}


/* =========================================================
   مرور نهایی
   ========================================================= */

function renderFinalReview() {

  const list =
    $("reviewList");

  const box =
    $("reviewBox");

  if (!list || !box || !gameState) return;

  list.innerHTML = "";

  const wrongQuestions =
    gameState.questions.filter(
      q =>
        gameState.answers[q.id] &&
        !gameState.answers[q.id].correct
    );

  if (!wrongQuestions.length) {

    list.innerHTML =
      "<p>🎉 آفرین! هیچ پاسخ اشتباهی نداری.</p>";

    return;
  }

  wrongQuestions.forEach(question => {

    const item =
      document.createElement("div");

    item.className =
      "review-item";

    const selected =
      gameState.answers[question.id].selected;

    item.innerHTML = `
      <strong>
        ${escapeHtml(question.question)}
      </strong>

      <p>
        پاسخ درست:
        ${escapeHtml(question.options[question.answer])}
      </p>

      <small>
        ${escapeHtml(question.explanation || "")}
      </small>
    `;

    list.appendChild(item);
  });
}


/* =========================================================
   ورود معلم
   ========================================================= */

function teacherLogin() {

  const passwordInput =
    $("teacherPassword");

  if (!passwordInput) return;

  const password =
    passwordInput.value.trim();

  if (password !== TEACHER_PASSWORD) {

    showToast(
      "رمز ورود نادرست است."
    );

    return;
  }

  teacherLoggedIn = true;

  passwordInput.value = "";

  renderTeacherPanel();

  showPage("teacherPanelPage");
}


/* =========================================================
   پنل معلم
   ========================================================= */

function renderTeacherPanel() {

  if (!teacherLoggedIn) return;

  document.querySelectorAll(".class-folder")
    .forEach(folder => {

      folder.classList.toggle(
        "active",
        folder.dataset.class === selectedClass
      );
    });

  renderTeacherStats();
  renderTeacherTable();
  renderFeedback();
}


/* =========================================================
   آمار معلم
   ========================================================= */

function renderTeacherStats() {

  const students =
    loadStudents().filter(
      student =>
        student.classCode === selectedClass
    );

  const studentsEl =
    $("teacherStudents");

  const averageEl =
    $("teacherAverage");

  const bestEl =
    $("teacherBest");

  const accuracyEl =
    $("teacherAccuracy");

  if (studentsEl) {
    studentsEl.textContent =
      toPersianDigits(students.length);
  }

  if (!students.length) {

    if (averageEl) {
      averageEl.textContent = "۰";
    }

    if (bestEl) {
      bestEl.textContent = "۰";
    }

    if (accuracyEl) {
      accuracyEl.textContent = "۰٪";
    }

    return;
  }

  const average =
    students.reduce(
      (sum, student) =>
        sum + Number(student.score || 0),
      0
    ) / students.length;

  const best =
    Math.max(
      ...students.map(
        student =>
          Number(student.score || 0)
      )
    );

  const accuracy =
    students.reduce(
      (sum, student) =>
        sum + Number(student.accuracy || 0),
      0
    ) / students.length;

  if (averageEl) {
    averageEl.textContent =
      toPersianDigits(
        Math.round(average)
      );
  }

  if (bestEl) {
    bestEl.textContent =
      toPersianDigits(best);
  }

  if (accuracyEl) {
    accuracyEl.textContent =
      toPersianDigits(
        Math.round(accuracy)
      ) + "٪";
  }
}


/* =========================================================
   جدول نتایج
   ========================================================= */

function renderTeacherTable() {

  const tbody =
    $("teacherTableBody");

  if (!tbody) return;

  tbody.innerHTML = "";

  const students =
    loadStudents()
      .filter(
        student =>
          student.classCode === selectedClass
      )
      .sort(
        (a, b) =>
          b.score - a.score
      );

  if (!students.length) {

    tbody.innerHTML = `
      <tr>
        <td colspan="6">
          هنوز نتیجه‌ای ثبت نشده است.
        </td>
      </tr>
    `;

    return;
  }

  students.forEach(student => {

    const row =
      document.createElement("tr");

    row.innerHTML = `
      <td>${escapeHtml(student.playerName)}</td>
      <td>${escapeHtml(
        CLASS_CODES[student.classCode] ||
        student.classCode
      )}</td>
      <td>${toPersianDigits(student.score)}</td>
      <td>${toPersianDigits(student.accuracy)}٪</td>
      <td>${toPersianDigits(
        formatTime(student.elapsedSeconds || 0)
      )}</td>
      <td>${escapeHtml(student.date || "")}</td>
    `;

    tbody.appendChild(row);
  });
}


/* =========================================================
   بازخورد
   ========================================================= */

function renderFeedback() {

  const feedback =
    loadFeedback().filter(
      item =>
        item.classCode === selectedClass
    );

  const summary =
    $("feedbackSummary");

  const list =
    $("feedbackList");

  if (!summary || !list) return;

  list.innerHTML = "";

  if (!feedback.length) {

    summary.innerHTML =
      "<p>هنوز بازخوردی ثبت نشده است.</p>";

    return;
  }

  const average =
    feedback.reduce(
      (sum, item) =>
        sum + Number(item.satisfaction || 0),
      0
    ) / feedback.length;

  summary.innerHTML = `
    <strong>
      میانگین رضایت:
      ${toPersianDigits(average.toFixed(1))}
      از ۵
    </strong>
  `;

  feedback.forEach(item => {

    const div =
      document.createElement("div");

    div.className =
      "feedback-item";

    div.innerHTML = `
      <strong>
        ${escapeHtml(item.playerName || "دانش‌آموز")}
      </strong>

      <span>
        ${"⭐".repeat(Number(item.satisfaction || 0))}
      </span>

      <p>
        ${escapeHtml(item.text || "")}
      </p>

      <small>
        ${escapeHtml(item.date || "")}
      </small>
    `;

    list.appendChild(div);
  });
}


/* =========================================================
   خروجی CSV
   ========================================================= */

function exportCsv() {

  const students =
    loadStudents().filter(
      student =>
        student.classCode === selectedClass
    );

  if (!students.length) {

    showToast(
      "برای این کلاس نتیجه‌ای وجود ندارد."
    );

    return;
  }

  const headers = [
    "نام",
    "کلاس",
    "امتیاز",
    "دقت",
    "زمان",
    "تاریخ"
  ];

  const rows =
    students.map(student => [
      student.playerName,
      CLASS_CODES[student.classCode] ||
        student.classCode,
      student.score,
      student.accuracy + "%",
      formatTime(student.elapsedSeconds || 0),
      student.date
    ]);

  const csv =
    [headers, ...rows]
      .map(row =>
        row
          .map(value =>
            `"${String(value ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

  const blob =
    new Blob(
      ["\uFEFF" + csv],
      {
        type: "text/csv;charset=utf-8;"
      }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `نتایج-کلاس-${selectedClass}.csv`;

  document.body.appendChild(link);

  link.click();

  link.remove();

  URL.revokeObjectURL(url);
}


/* =========================================================
   پاک کردن نتایج کلاس
   ========================================================= */

function clearSelectedClass() {

  const className =
    CLASS_CODES[selectedClass] ||
    selectedClass;

  const confirmed =
    confirm(
      `آیا مطمئن هستید که می‌خواهید تمام نتایج کلاس ${className} پاک شود؟`
    );

  if (!confirmed) return;

  const students =
    loadStudents().filter(
      student =>
        student.classCode !== selectedClass
    );

  saveStudents(students);

  renderTeacherPanel();

  showToast(
    "نتایج این کلاس پاک شد."
  );
}


/* =========================================================
   ثبت بازخورد
   ========================================================= */

function submitFeedback() {

  if (!gameState) return;

  const textInput =
    $("feedbackText");

  const text =
    textInput
      ? textInput.value.trim()
      : "";

  if (!selectedSatisfaction) {

    showToast(
      "لطفاً میزان رضایت خود را انتخاب کنید."
    );

    return;
  }

  const feedback =
    loadFeedback();

  feedback.push({
    playerName:
      gameState.playerName,

    classCode:
      gameState.guest
        ? null
        : gameState.classCode,

    satisfaction:
      selectedSatisfaction,

    text,

    date:
      new Date().toLocaleString("fa-IR")
  });

  saveFeedback(feedback);

  if (textInput) {
    textInput.value = "";
  }

  selectedSatisfaction = null;

  document
    .querySelectorAll(".feedback-choice")
    .forEach(button =>
      button.classList.remove("selected")
    );

  showToast(
    "نظر شما با موفقیت ثبت شد. 🌟"
  );
}


/* =========================================================
   جلوگیری از ورود HTML
   ========================================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   راه‌اندازی بازی
   ========================================================= */

function initGame() {

  const teacherEntry =
    $("teacherEntry");

  const studentEntry =
    $("studentEntry");

  const guestEntry =
    $("guestEntry");


  if (teacherEntry) {
    teacherEntry.addEventListener(
      "click",
      () => showPage("teacherLoginPage")
    );
  }

  if (studentEntry) {
    studentEntry.addEventListener(
      "click",
      () => showPage("studentLoginPage")
    );
  }

  if (guestEntry) {
    guestEntry.addEventListener(
      "click",
      () => showPage("guestLoginPage")
    );
  }


  /* ---------- ورود معلم ---------- */

  const teacherLoginBtn =
    $("teacherLoginBtn");

  const teacherBackBtn =
    $("teacherBackBtn");

  const teacherPassword =
    $("teacherPassword");


  if (teacherLoginBtn) {
    teacherLoginBtn.addEventListener(
      "click",
      teacherLogin
    );
  }

  if (teacherBackBtn) {
    teacherBackBtn.addEventListener(
      "click",
      () => showPage("homePage")
    );
  }

  if (teacherPassword) {
    teacherPassword.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {
          teacherLogin();
        }

      }
    );
  }


  /* ---------- ورود دانش‌آموز ---------- */

  const studentLoginBtn =
    $("studentLoginBtn");

  if (studentLoginBtn) {

    studentLoginBtn.addEventListener(
      "click",
      () => {

        const name =
          $("studentName")?.value.trim();

        const classCode =
          $("classCode")?.value.trim();


        if (!name) {

          showToast(
            "لطفاً نام و نام خانوادگی را وارد کنید."
          );

          return;
        }


        if (!CLASS_CODES[classCode]) {

          showToast(
            "کد کلاس باید یکی از ۶۰۱، ۶۰۲، ۶۰۳ یا ۶۰۴ باشد."
          );

          return;
        }


        const savedGame =
          loadGameState();


        if (
          savedGame &&
          !savedGame.guest &&
          savedGame.playerName === name &&
          savedGame.classCode === classCode &&
          !savedGame.completed
        ) {

          const resume =
            confirm(
              "برای این نام و کلاس یک بازی ناتمام پیدا شد. می‌خواهید ادامه دهید؟"
            );


          if (resume) {

            resumeSavedGame(savedGame);

            return;

          } else {

            clearGameState();
          }
        }


        startNewGame(
          name,
          classCode,
          false
        );
      }
    );
  }


  /* ---------- بازگشت دانش‌آموز ---------- */

  const studentBackBtn =
    $("studentBackBtn");

  if (studentBackBtn) {

    studentBackBtn.addEventListener(
      "click",
      () => showPage("homePage")
    );
  }


  /* ---------- مهمان ---------- */

  const guestStartBtn =
    $("guestStartBtn");

  const guestBackBtn =
    $("guestBackBtn");


  if (guestStartBtn) {

    guestStartBtn.addEventListener(
      "click",
      () =>
        startNewGame(
          "مهمان",
          null,
          true
        )
    );
  }


  if (guestBackBtn) {

    guestBackBtn.addEventListener(
      "click",
      () => showPage("homePage")
    );
  }


  /* ---------- بازگشت از بازی ---------- */

  const gameHomeBtn =
    $("gameHomeBtn");

  if (gameHomeBtn) {

    gameHomeBtn.addEventListener(
      "click",
      () => {

        const leave =
          confirm(
            "اگر خارج شوید، بازی فعلی متوقف می‌شود. ادامه می‌دهید؟"
          );

        if (!leave) return;

        stopTimer();

        if (
          gameState &&
          !gameState.guest
        ) {
          saveGameState();
        }

        showPage("homePage");
      }
    );
  }


  /* ---------- پایان مرحله ---------- */

  const finishStageBtn =
    $("finishStageBtn");

  if (finishStageBtn) {

    finishStageBtn.addEventListener(
      "click",
      finishCurrentStage
    );
  }


  /* ---------- بازگشت از پنل معلم ---------- */

  const teacherPanelHomeBtn =
    $("teacherPanelHomeBtn");

  if (teacherPanelHomeBtn) {

    teacherPanelHomeBtn.addEventListener(
      "click",
      () => {

        teacherLoggedIn = false;

        showPage("homePage");
      }
    );
  }


  /* ---------- پوشه‌های کلاس ---------- */

  document
    .querySelectorAll(".class-folder")
    .forEach(folder => {

      folder.addEventListener(
        "click",
        () => {

          selectedClass =
            folder.dataset.class;

          document
            .querySelectorAll(".class-folder")
            .forEach(item =>
              item.classList.remove("active")
            );

          folder.classList.add("active");

          renderTeacherPanel();
        }
      );
    });


  /* ---------- CSV ---------- */

  const exportCsvBtn =
    $("exportCsvBtn");

  if (exportCsvBtn) {

    exportCsvBtn.addEventListener(
      "click",
      exportCsv
    );
  }


  /* ---------- پاک کردن کلاس ---------- */

  const clearClassBtn =
    $("clearClassBtn");

  if (clearClassBtn) {

    clearClassBtn.addEventListener(
      "click",
      clearSelectedClass
    );
  }


  /* ---------- رضایت ---------- */

  document
    .querySelectorAll(".feedback-choice")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          selectedSatisfaction =
            Number(
              button.dataset.satisfaction
            );

          document
            .querySelectorAll(".feedback-choice")
            .forEach(item =>
              item.classList.remove("selected")
            );

          button.classList.add("selected");
        }
      );
    });


  /* ---------- ثبت نظر ---------- */

  const submitFeedbackBtn =
    $("submitFeedbackBtn");

  if (submitFeedbackBtn) {

    submitFeedbackBtn.addEventListener(
      "click",
      submitFeedback
    );
  }


  /* ---------- صفحه اصلی نتیجه ---------- */

  const resultHomeBtn =
    $("resultHomeBtn");

  if (resultHomeBtn) {

    resultHomeBtn.addEventListener(
      "click",
      () => {

        gameState = null;

        showPage("homePage");
      }
    );
  }


  showPage("homePage");
}


/* =========================================================
   اجرای امن
   مناسب QuickEdit
   ========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initGame
  );

} else {

  initGame();
}