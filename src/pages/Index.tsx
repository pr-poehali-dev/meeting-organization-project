import { useState } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    num: "01",
    title: "Стратегия",
    desc: "Глубокий анализ рынка и позиционирование бренда. Разрабатываем дорожную карту роста с чёткими KPI.",
    icon: "Compass",
  },
  {
    num: "02",
    title: "Дизайн",
    desc: "Визуальные системы, которые запоминаются. От логотипа до полного brand identity с детальным гайдлайном.",
    icon: "Layers",
  },
  {
    num: "03",
    title: "Разработка",
    desc: "Сайты и приложения с безупречным кодом. Производительность, доступность и масштабируемость в каждом проекте.",
    icon: "Code2",
  },
  {
    num: "04",
    title: "Продвижение",
    desc: "Комплексный digital-маркетинг: SEO, контент, таргетированная реклама — всё в единой экосистеме.",
    icon: "TrendingUp",
  },
];

const team = [
  { name: "Алексей Ромов", role: "Арт-директор", exp: "12 лет" },
  { name: "Мария Светлова", role: "Lead Developer", exp: "9 лет" },
  { name: "Дмитрий Карин", role: "Стратег", exp: "11 лет" },
  { name: "Ольга Дель", role: "UX/UI Designer", exp: "7 лет" },
];

const marqueeWords = [
  "Стратегия", "·", "Дизайн", "·", "Разработка", "·", "Брендинг", "·",
  "Маркетинг", "·", "Аналитика", "·", "Стратегия", "·", "Дизайн", "·",
  "Разработка", "·", "Брендинг", "·", "Маркетинг", "·", "Аналитика", "·",
];

const stats = [
  { value: "140+", label: "проектов" },
  { value: "8", label: "лет на рынке" },
  { value: "96%", label: "клиентов возвращаются" },
  { value: "3×", label: "средний рост" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between"
        style={{ background: "linear-gradient(to bottom, hsl(20 10% 6% / 0.95), transparent)" }}>
        <a href="#" className="font-cormorant text-2xl font-semibold tracking-widest text-gold">
          FORMA
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-golos text-muted-foreground">
          {["Услуги", "О нас", "Проекты", "Команда", "Контакт"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover-line hover:text-foreground transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
        <a href="#контакт"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-[hsl(var(--gold)/0.5)] text-gold hover:bg-[hsl(var(--gold)/0.08)] transition-all duration-300 rounded-sm">
          Связаться
          <Icon name="ArrowUpRight" size={14} />
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 flex flex-col items-center justify-center gap-8 text-2xl font-cormorant">
          {["Услуги", "О нас", "Проекты", "Команда", "Контакт"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-foreground hover:text-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 pt-32">
        {/* Background mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(42 60% 60% / 0.06) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(42 60% 60% / 0.04) 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-6xl">
          <div className="animate-fade-up delay-100 text-xs font-golos tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Digital Agency — Москва
          </div>
          <h1 className="font-cormorant text-[clamp(4rem,10vw,9rem)] leading-[0.92] font-light tracking-tight mb-8">
            <span className="block animate-fade-up delay-200">Создаём</span>
            <span className="block animate-fade-up delay-300 text-gold italic">цифровые</span>
            <span className="block animate-fade-up delay-400">продукты</span>
          </h1>
          <div className="animate-fade-up delay-500 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <p className="text-muted-foreground font-golos text-base md:text-lg leading-relaxed max-w-md">
              Мы превращаем сложные задачи в элегантные решения. Стратегия, дизайн и технологии
              в едином процессе.
            </p>
            <div className="flex gap-4">
              <a href="#услуги"
                className="px-7 py-3.5 bg-[hsl(var(--gold))] text-background text-sm font-medium font-golos hover:bg-[hsl(var(--gold-light))] transition-all duration-300 rounded-sm">
                Наши услуги
              </a>
              <a href="#контакт"
                className="px-7 py-3.5 border border-border text-foreground text-sm font-medium font-golos hover:border-[hsl(var(--gold)/0.5)] transition-all duration-300 rounded-sm">
                Обсудить проект
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-2 animate-fade-in delay-1200">
          <span className="text-xs tracking-widest text-muted-foreground rotate-90 mb-4">SCROLL</span>
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <div className="absolute top-0 w-full bg-gold animate-[scrollLine_2s_ease-in-out_infinite]"
              style={{ height: "40%", animation: "scrollLine 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-4 overflow-hidden">
        <div className="flex animate-marquee">
          {marqueeWords.map((w, i) => (
            <span key={i}
              className={`mx-4 text-sm font-golos tracking-widest uppercase ${w === "·" ? "text-gold" : "text-muted-foreground"}`}>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-cormorant text-5xl md:text-6xl font-light text-gold mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground font-golos tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto h-px bg-border" />
      </div>

      {/* SERVICES */}
      <section id="услуги" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-golos tracking-[0.3em] text-muted-foreground uppercase mb-3">Что мы делаем</p>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light">Услуги</h2>
            </div>
            <p className="text-muted-foreground font-golos max-w-xs leading-relaxed">
              Полный цикл создания цифровых продуктов — от идеи до масштабирования.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((s) => (
              <div key={s.num}
                className="card-hover bg-background p-8 md:p-10 group cursor-pointer border border-transparent">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-golos tracking-widest text-muted-foreground">{s.num}</span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center
                    group-hover:border-[hsl(var(--gold)/0.5)] group-hover:bg-[hsl(var(--gold)/0.06)] transition-all duration-300">
                    <Icon name={s.icon} size={16} className="text-muted-foreground group-hover:text-gold transition-colors" />
                  </div>
                </div>
                <h3 className="font-cormorant text-3xl md:text-4xl font-light mb-4 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-muted-foreground font-golos text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-golos tracking-widest text-muted-foreground
                  group-hover:text-gold transition-colors duration-300">
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="о нас" className="px-6 md:px-12 py-24 bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-golos tracking-[0.3em] text-muted-foreground uppercase mb-3">О студии</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
              Мы думаем<br /><em className="text-gold">стратегически,</em><br />создаём красиво
            </h2>
            <p className="text-muted-foreground font-golos leading-relaxed mb-6">
              FORMA — это команда стратегов, дизайнеров и разработчиков, которые верят: хороший продукт начинается
              с глубокого понимания бизнеса клиента и его аудитории.
            </p>
            <p className="text-muted-foreground font-golos leading-relaxed mb-10">
              Мы не делаем шаблонные решения. Каждый проект — это уникальная система, собранная под конкретные цели.
            </p>
            <a href="#контакт"
              className="inline-flex items-center gap-2 text-gold font-golos text-sm tracking-wide hover-line">
              Начать сотрудничество <Icon name="ArrowUpRight" size={14} />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted relative">
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, hsl(20 10% 12%) 0%, hsl(20 10% 8%) 100%)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-cormorant text-8xl font-light text-[hsl(var(--gold)/0.15)] mb-4">F</div>
                  <div className="text-xs font-golos tracking-[0.4em] text-muted-foreground uppercase">Est. 2016</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background border border-border p-5 rounded-sm">
              <div className="font-cormorant text-3xl font-light text-gold">8</div>
              <div className="text-xs font-golos text-muted-foreground mt-1">лет опыта</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-background border border-border p-5 rounded-sm">
              <div className="font-cormorant text-3xl font-light text-gold">140+</div>
              <div className="text-xs font-golos text-muted-foreground mt-1">проектов</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="команда" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-golos tracking-[0.3em] text-muted-foreground uppercase mb-3">Люди</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">Команда</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] mb-4 rounded-sm overflow-hidden bg-card border border-border
                  group-hover:border-[hsl(var(--gold)/0.3)] transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, hsl(20 10% ${10 + i * 2}%) 0%, hsl(20 10% ${6 + i}%) 100%)` }}>
                    <span className="font-cormorant text-4xl font-light text-[hsl(var(--gold)/0.3)] group-hover:text-[hsl(var(--gold)/0.5)] transition-colors">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                </div>
                <h3 className="font-golos font-medium text-sm text-foreground mb-0.5">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.role}</p>
                <p className="text-xs text-gold mt-1">{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 md:px-12 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="border border-[hsl(var(--gold)/0.25)] rounded-sm px-8 md:px-16 py-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse at center, hsl(42 60% 60% / 0.05) 0%, transparent 70%)" }}>
            <h2 className="font-cormorant text-4xl md:text-6xl font-light mb-6">
              Готовы создать<br /><em className="text-gold">нечто выдающееся?</em>
            </h2>
            <p className="text-muted-foreground font-golos mb-10 max-w-md mx-auto">
              Расскажите о вашем проекте — мы ответим в течение 24 часов с конкретными идеями.
            </p>
            <a href="#контакт"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(var(--gold))] text-background font-golos font-medium
                hover:bg-[hsl(var(--gold-light))] transition-all duration-300 rounded-sm">
              Начать проект <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="контакт" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-golos tracking-[0.3em] text-muted-foreground uppercase mb-3">Связаться</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
              Давайте<br /><em className="text-gold">поговорим</em>
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: "Mail", label: "Email", value: "hello@forma.agency" },
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "MapPin", label: "Адрес", value: "Москва, Большая Никитская, 22" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={15} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-golos mb-0.5">{c.label}</div>
                    <div className="text-sm font-golos text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {[
                { icon: "Send", label: "Telegram" },
                { icon: "MessageCircle", label: "WhatsApp" },
                { icon: "Instagram", label: "Instagram" },
              ].map((s) => (
                <button key={s.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center
                    hover:border-[hsl(var(--gold)/0.5)] hover:bg-[hsl(var(--gold)/0.06)] transition-all duration-300">
                  <Icon name={s.icon} size={15} className="text-muted-foreground hover:text-gold" />
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-golos tracking-widest text-muted-foreground uppercase block mb-2">Имя</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ваше имя"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-golos text-foreground
                  placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold)/0.5)]
                  transition-colors duration-200"
              />
            </div>
            <div>
              <label className="text-xs font-golos tracking-widest text-muted-foreground uppercase block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-golos text-foreground
                  placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold)/0.5)]
                  transition-colors duration-200"
              />
            </div>
            <div>
              <label className="text-xs font-golos tracking-widest text-muted-foreground uppercase block mb-2">Сообщение</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Расскажите о вашем проекте..."
                rows={5}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm font-golos text-foreground
                  placeholder:text-muted-foreground focus:outline-none focus:border-[hsl(var(--gold)/0.5)]
                  transition-colors duration-200 resize-none"
              />
            </div>
            <button type="submit"
              className="w-full py-4 bg-[hsl(var(--gold))] text-background font-golos font-medium text-sm
                hover:bg-[hsl(var(--gold-light))] transition-all duration-300 rounded-sm flex items-center justify-center gap-2">
              Отправить заявку <Icon name="Send" size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl font-semibold tracking-widest text-gold">FORMA</span>
          <p className="text-xs text-muted-foreground font-golos">© 2024 FORMA Digital Agency. Все права защищены.</p>
          <div className="flex gap-6 text-xs font-golos text-muted-foreground">
            <a href="#" className="hover-line hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover-line hover:text-foreground transition-colors">Оферта</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scrollLine {
          0% { top: -40%; opacity: 1; }
          100% { top: 140%; opacity: 0; }
        }
        .text-gold { color: hsl(42, 60%, 60%); }
        .font-cormorant { font-family: 'Cormorant', serif; }
        .font-golos { font-family: 'Golos Text', sans-serif; }
      `}</style>
    </div>
  );
}