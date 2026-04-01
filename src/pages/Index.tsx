import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import MapBackground from "@/components/MapBackground";
import IPhoneMockup from "@/components/IPhoneMockup";

const problems = [
  {
    icon: "MapPin",
    problem: "Не знаю какой город",
    solution: "15+ фильтров подбора",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: "Wallet",
    problem: "Боюсь не хватить денег",
    solution: "Калькулятор бюджета",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: "Briefcase",
    problem: "Нет работы и жилья",
    solution: "Подбор вакансий и аренды",
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
  },
  {
    icon: "FileText",
    problem: "Страшно оформлять документы",
    solution: "Чек-лист и сопровождение",
    color: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400",
  },
];

const steps = [
  {
    num: "01",
    title: "Анкета",
    desc: "2 минуты — заполняете параметры: бюджет, работа, климат, размер города",
    icon: "ClipboardList",
  },
  {
    num: "02",
    title: "Подбор городов",
    desc: "Алгоритм находит 3 лучших варианта под ваши критерии",
    icon: "Search",
  },
  {
    num: "03",
    title: "План переезда",
    desc: "Готовый план с жильём, работой, маршрутом и чек-листом документов",
    icon: "Map",
  },
  {
    num: "04",
    title: "Переезд под ключ",
    desc: "Полное сопровождение: билеты, бронь, юрист, регистрация",
    icon: "Home",
  },
];

const filters = [
  { icon: "Building2", label: "Размер города" },
  { icon: "Sun", label: "Климат" },
  { icon: "Mountain", label: "География" },
  { icon: "Briefcase", label: "Работа" },
  { icon: "Key", label: "Жильё" },
  { icon: "Users", label: "Семья" },
  { icon: "Leaf", label: "Экология" },
  { icon: "Music", label: "Досуг" },
];

const tariffs = [
  {
    name: "Базовый",
    price: "990₽",
    desc: "Для тех, кто хочет самостоятельно изучить варианты",
    features: [
      "Доступ к базе городов",
      "Фильтры подбора",
      "Базовые характеристики",
      "Обновления базы",
    ],
    cta: "Начать",
    highlight: false,
  },
  {
    name: "Эксперт",
    price: "4 900₽",
    desc: "Полный анализ и готовый план для вашей семьи",
    features: [
      "Подбор города под анкету",
      "Поиск жилья в аренду",
      "Подбор вакансий",
      "Чек-лист документов",
      "Консультация 60 мин",
    ],
    cta: "Выбрать Эксперт",
    highlight: true,
  },
  {
    name: "VIP",
    price: "от 25 000₽",
    desc: "Полный переезд под ключ с личным куратором",
    features: [
      "Всё из Эксперта",
      "Покупка и бронь билетов",
      "Бронирование жилья",
      "Юридическое сопровождение",
      "Регистрация по месту жительства",
      "Поддержка 24/7",
    ],
    cta: "Обсудить VIP",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Что если я передумаю?",
    a: "Базовый тариф не имеет срока — пользуйтесь, когда будете готовы. По тарифу Эксперт возвращаем 100% оплаты в течение 3 дней после покупки.",
  },
  {
    q: "Вы работаете только по России?",
    a: "Основная база — города РФ. По запросу подбираем варианты в Беларуси, Казахстане и других странах СНГ. Зарубежные переезды — в рамках VIP-сопровождения.",
  },
  {
    q: "Сколько ждать результата?",
    a: "После заполнения анкеты подборка 3 городов приходит в течение 24 часов. Полный план переезда — 2-3 рабочих дня.",
  },
  {
    q: "Помогаете с трудоустройством?",
    a: "Да, в тарифах Эксперт и VIP — отбираем актуальные вакансии под вашу специальность и желаемую зарплату в выбранном городе.",
  },
  {
    q: "Как с вами связаться?",
    a: "Напишите на email или в Telegram — отвечаем в течение 2 часов в рабочее время. Кнопки связи в футере страницы.",
  },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between border-b border-border/40 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={16} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">ПереездPro</span>
        </div>
        <Link
          to="/anketa"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
        >
          Начать подбор
          <Icon name="ArrowRight" size={14} />
        </Link>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-20 overflow-hidden">
        {/* Background — карта РБ и РФ с самолётом */}
        <MapBackground />

        {/* iPhone mockup — правый угол, виден частично */}
        <div className="hidden xl:block absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 opacity-90">
          <IPhoneMockup />
        </div>
        {/* iPhone для md-lg — поменьше и правее */}
        <div className="hidden lg:block xl:hidden absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 opacity-75" style={{ transform: "translateY(-50%) scale(0.85)" }}>
          <IPhoneMockup />
        </div>

        <div className="relative text-center max-w-4xl mx-auto xl:mr-[160px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
            <Icon name="Sparkles" size={14} />
            Персональный подбор города за 2 минуты
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Переезд без хаоса.{" "}
            <span className="text-primary">Найдем город</span>{" "}
            под ваш бюджет, работу и образ жизни
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Отвечаете на вопросы — получаете 3 города с готовым планом переезда: жильё, работа, документы, маршрут.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/anketa"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-bold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <Icon name="ClipboardList" size={18} />
              Заполнить анкету за 2 минуты
            </Link>
            <a
              href="#kak-eto-rabotaet"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground text-base font-semibold rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
            >
              Как это работает
              <Icon name="ChevronDown" size={16} />
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["👨", "👩", "👨‍👩‍👧"].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <span>20+ семей уже переехали</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span>5.0 средняя оценка</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Решаем ваши задачи</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что вас останавливает?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">У каждого страха — конкретный инструмент решения</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((item, i) => (
              <div key={i} className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border border-white/5 hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl bg-background/40 flex items-center justify-center mb-5 ${item.iconColor}`}>
                  <Icon name={item.icon} size={22} />
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-snug">{item.problem}</p>
                <div className="flex items-center gap-2">
                  <Icon name="ArrowRight" size={14} className="text-primary flex-shrink-0" />
                  <p className="font-bold text-foreground text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="kak-eto-rabotaet" className="relative px-6 md:px-12 py-24 bg-muted/20 overflow-hidden">
        {/* Декоративный фон: пунктирные дуги-маршруты */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="hwGlow1" cx="20%" cy="50%" r="40%">
                <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.07" />
                <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hwGlow2" cx="80%" cy="50%" r="40%">
                <stop offset="0%" stopColor="hsl(240,70%,65%)" stopOpacity="0.06" />
                <stop offset="100%" stopColor="hsl(240,70%,65%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="500" fill="url(#hwGlow1)" />
            <rect width="1200" height="500" fill="url(#hwGlow2)" />
            {/* Дуга-маршрут: шаги 1→2→3→4 */}
            <path d="M 160 380 Q 310 120 460 250 Q 610 380 760 200 Q 910 80 1060 280"
              fill="none" stroke="hsl(217,91%,65%)" strokeWidth="1.2" strokeOpacity="0.12" strokeDasharray="8 7" />
            {/* Узлы-шаги */}
            {[160, 460, 760, 1060].map((cx, i) => {
              const cy = [380, 250, 200, 280][i];
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="18" fill="hsl(217,91%,60%)" fillOpacity="0.05" stroke="hsl(217,91%,65%)" strokeOpacity="0.18" strokeWidth="1" />
                  <circle cx={cx} cy={cy} r="5" fill="hsl(217,91%,70%)" fillOpacity="0.25" />
                </g>
              );
            })}
            {/* Горизонтальные сетки */}
            {[100, 200, 300, 400].map((y) => (
              <line key={y} x1="0" y1={y} x2="1200" y2={y}
                stroke="hsl(217,91%,60%)" strokeWidth="0.5" strokeOpacity="0.04" />
            ))}
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Процесс</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Четыре шага от «не знаю куда» до «уже живу там»</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <svg
                    className="hidden lg:block absolute z-10 overflow-visible"
                    style={{ top: "30px", left: "calc(100% + 3px)", width: "calc(24px)", height: "2px" }}
                    viewBox="0 0 24 2"
                    preserveAspectRatio="none"
                  >
                    <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(217,91%,65%)" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.45" />
                  </svg>
                )}
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Icon name={step.icon} size={18} className="text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/40">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/anketa"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            >
              Начать прямо сейчас
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative px-6 md:px-12 py-24 overflow-hidden">
        {/* Декоративный фон: шестиугольная сетка */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="filtersGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.05" />
                <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="500" fill="url(#filtersGlow)" />
            {/* Шестиугольники декоративные */}
            {[
              { cx: 100, cy: 80 }, { cx: 1100, cy: 80 },
              { cx: 80, cy: 430 }, { cx: 1120, cy: 420 },
              { cx: 600, cy: 30 }, { cx: 200, cy: 250 }, { cx: 1000, cy: 260 },
            ].map(({ cx, cy }, i) => {
              const size = 28 + (i % 3) * 10;
              const pts = Array.from({ length: 6 }, (_, k) => {
                const a = (Math.PI / 3) * k - Math.PI / 6;
                return `${cx + size * Math.cos(a)},${cy + size * Math.sin(a)}`;
              }).join(" ");
              return (
                <polygon key={i} points={pts}
                  fill="none" stroke="hsl(217,91%,65%)"
                  strokeWidth="0.7" strokeOpacity={0.1 - i * 0.01} />
              );
            })}
          </svg>
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Критерии</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">15+ фильтров подбора</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Учитываем всё, что важно именно вам</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {filters.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default group">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                  <Icon name={f.icon} size={24} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-center">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE EXAMPLE */}
      <section className="px-6 md:px-12 py-24 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Пример</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Реальный кейс</h2>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)" }} />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Input */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <Icon name="Users" size={18} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Семья: 3 человека</p>
                    <p className="text-sm text-muted-foreground">2 взрослых + ребёнок 7 лет</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: "Wallet", label: "Бюджет на переезд", value: "200 000 ₽" },
                    { icon: "Sun", label: "Климат", value: "Тёплый, юг" },
                    { icon: "Laptop", label: "Работа", value: "IT-специальность" },
                    { icon: "Home", label: "Аренда", value: "до 40 000 ₽/мес" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Icon name={item.icon} size={14} />
                        {item.label}
                      </div>
                      <span className="font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Output */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex-1 h-px bg-border" />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-bold">
                    <Icon name="Sparkles" size={14} />
                    Результат
                  </div>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">Краснодар</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">Лучшее совпадение</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: "Home", label: "Аренда 2к квартиры", value: "35 000 ₽/мес", ok: true },
                      { icon: "Briefcase", label: "IT-вакансии", value: "от 70 000 ₽", ok: true },
                      { icon: "GraduationCap", label: "Школы рядом", value: "4 в радиусе 1 км", ok: true },
                      { icon: "Thermometer", label: "Климат", value: "Субтропический, 280 дней солнца", ok: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name={item.icon} size={13} />
                          {item.label}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-semibold">{item.value}</span>
                          <Icon name="CheckCircle2" size={14} className="text-emerald-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section id="tarify" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Тарифы</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Выберите свой формат</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">От самостоятельного изучения до полного переезда под ключ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tariffs.map((t, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  t.highlight
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-400 text-background text-xs font-bold rounded-full tracking-wide">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="mb-6">
                  <p className={`text-sm font-semibold mb-1 ${t.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.name}</p>
                  <div className={`text-4xl font-bold mb-3 ${t.highlight ? "text-primary-foreground" : "text-foreground"}`}>{t.price}</div>
                  <p className={`text-sm leading-relaxed ${t.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {t.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="Check"
                        size={15}
                        className={`flex-shrink-0 mt-0.5 ${t.highlight ? "text-primary-foreground" : "text-primary"}`}
                      />
                      <span className={t.highlight ? "text-primary-foreground" : "text-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/anketa"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    t.highlight
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary/15 text-primary hover:bg-primary/25"
                  }`}
                >
                  {t.cta}
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative px-6 md:px-12 py-24 bg-muted/20 overflow-hidden">
        {/* Декоративный фон: концентрические окружности + частицы */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg viewBox="0 0 1200 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="aboutGlow" cx="15%" cy="50%" r="45%">
                <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.09" />
                <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="aboutGlow2" cx="85%" cy="50%" r="35%">
                <stop offset="0%" stopColor="hsl(240,60%,65%)" stopOpacity="0.05" />
                <stop offset="100%" stopColor="hsl(240,60%,65%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="500" fill="url(#aboutGlow)" />
            <rect width="1200" height="500" fill="url(#aboutGlow2)" />
            {/* Концентрические кольца вокруг аватара (слева) */}
            {[60, 95, 130, 170].map((r, i) => (
              <circle key={i} cx="200" cy="250" r={r}
                fill="none"
                stroke="hsl(217,91%,65%)"
                strokeWidth="0.6"
                strokeOpacity={0.12 - i * 0.025}
                strokeDasharray={i % 2 === 0 ? "6 8" : "none"}
              />
            ))}
            {/* Декоративные точки-города */}
            {[
              { cx: 300, cy: 160 }, { cx: 420, cy: 310 }, { cx: 180, cy: 380 },
              { cx: 950, cy: 130 }, { cx: 1050, cy: 370 }, { cx: 1100, cy: 220 },
            ].map((p, i) => (
              <circle key={i} cx={p.cx} cy={p.cy} r="2.5"
                fill="hsl(217,91%,70%)" fillOpacity="0.2" />
            ))}
            {/* Соединительные линии от центра к точкам */}
            {[
              [200, 250, 300, 160], [200, 250, 420, 310], [200, 250, 180, 380],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(217,91%,65%)" strokeWidth="0.6" strokeOpacity="0.1" strokeDasharray="4 6" />
            ))}
            {/* Текстурные горизонтали */}
            {[100, 200, 300, 400].map((y) => (
              <line key={y} x1="0" y1={y} x2="1200" y2={y}
                stroke="hsl(217,91%,60%)" strokeWidth="0.4" strokeOpacity="0.04" />
            ))}
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                <Icon name="User" size={60} className="text-primary/60" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">О себе</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-5">
                Сам прошёл 3 переезда, помог 20+ семьям
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Я переезжал из Минска в Москву, из Москвы в Краснодар, и наконец — в Сочи. Каждый раз сталкивался с одним и тем же: неверный бюджет, незнание реального рынка аренды, путаница с документами и пропиской.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                Теперь я <span className="text-foreground font-semibold">лично проверяю каждый город</span> — еду, живу там 2-4 недели, изучаю рынок аренды, труда и инфраструктуры. Помог переехать семьям из РФ и РБ в более чем 10 городов. Только актуальные данные, никакой воды.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "MapPin", label: "3 личных переезда" },
                  { icon: "Users", label: "20+ семей помог" },
                  { icon: "Search", label: "Проверяю лично" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                    <Icon name={badge.icon} size={14} className="text-primary" />
                    <span className="font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 md:px-12 py-24 overflow-hidden">
        {/* Декоративный фон: вопросительные знаки + тонкая сетка */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="faqGlow" cx="50%" cy="0%" r="50%">
                <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.06" />
                <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="600" fill="url(#faqGlow)" />
            {/* Декоративные символы "?" */}
            {[
              { x: 80, y: 100, size: 48, opacity: 0.04 },
              { x: 1100, y: 80, size: 60, opacity: 0.035 },
              { x: 60, y: 480, size: 40, opacity: 0.03 },
              { x: 1120, y: 500, size: 52, opacity: 0.04 },
              { x: 200, y: 300, size: 32, opacity: 0.025 },
              { x: 980, y: 280, size: 38, opacity: 0.03 },
            ].map((q, i) => (
              <text key={i} x={q.x} y={q.y} fontSize={q.size} fontFamily="system-ui, sans-serif" fontWeight="700"
                fill="hsl(217,91%,70%)" fillOpacity={q.opacity} textAnchor="middle">?</text>
            ))}
            {/* Тонкие вертикальные линии */}
            {[150, 350, 850, 1050].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="600"
                stroke="hsl(217,91%,60%)" strokeWidth="0.4" strokeOpacity="0.04" />
            ))}
          </svg>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i ? "border-primary/40 bg-primary/5" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-base">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === i ? "bg-primary text-primary-foreground rotate-45" : "bg-muted text-muted-foreground"
                  }`}>
                    <Icon name="Plus" size={16} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-primary">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
                style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
              {/* Декоративные кольца */}
              <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                {[60, 110, 160, 210].map((r, i) => (
                  <circle key={i} cx="700" cy="200" r={r}
                    fill="none" stroke="white" strokeWidth="0.7"
                    strokeOpacity={0.07 - i * 0.015}
                    strokeDasharray={i % 2 === 0 ? "8 10" : "none"} />
                ))}
                {[60, 110, 160].map((r, i) => (
                  <circle key={i} cx="100" cy="200" r={r}
                    fill="none" stroke="white" strokeWidth="0.7"
                    strokeOpacity={0.06 - i * 0.015}
                    strokeDasharray="5 8" />
                ))}
                {/* Города-точки */}
                {[
                  { cx: 200, cy: 100 }, { cx: 350, cy: 60 }, { cx: 500, cy: 90 },
                  { cx: 600, cy: 300 }, { cx: 250, cy: 320 },
                ].map((p, i) => (
                  <circle key={i} cx={p.cx} cy={p.cy} r="3"
                    fill="white" fillOpacity="0.15" />
                ))}
                {/* Маршрутные линии */}
                <path d="M 100 200 Q 250 80 400 120 Q 550 160 700 200"
                  fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.1" strokeDasharray="6 8" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">Пора действовать</p>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                Готовы найти свой город?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
                Заполните анкету за 2 минуты и получите 3 лучших города под ваши критерии
              </p>
              <Link
                to="/anketa"
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary-foreground text-primary font-bold rounded-xl hover:bg-primary-foreground/90 transition-all duration-200 text-base hover:-translate-y-0.5 shadow-xl"
              >
                <Icon name="ClipboardList" size={18} />
                Заполнить анкету
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={13} className="text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">ПереездPro</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:hello@pereezdpro.ru" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Icon name="Mail" size={14} />
              hello@pereezdpro.ru
            </a>
            <a href="https://t.me/pereezdpro" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Icon name="Send" size={14} />
              Telegram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 ПереездPro</p>
        </div>
      </footer>
    </div>
  );
}