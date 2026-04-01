import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type FamilyType = "alone" | "partner" | "children" | "";
type BudgetMove = "under50" | "50-100" | "100-200" | "200-500" | "500plus" | "";
type WorkFormat = "remote" | "office" | "any" | "";
type CitySize = "mega" | "medium" | "small" | "village" | "";
type Climate = "warm" | "moderate" | "cold" | "";
type Geo = "south" | "center" | "northwest" | "ural" | "siberia" | "caucasus" | "";
type Ecology = "priority" | "desirable" | "nocare" | "";
type Infra = "developed" | "medium" | "calm" | "";

interface FormData {
  name: string;
  email: string;
  telegram: string;
  familyType: FamilyType;
  childrenAges: string;
  budgetMove: BudgetMove;
  rentBudget: string;
  workSphere: string;
  desiredSalary: string;
  workFormat: WorkFormat;
  citySize: CitySize;
  climate: Climate;
  geo: Geo;
  ecology: Ecology;
  infrastructure: Infra;
  hasPets: boolean | null;
  needHousingHelp: boolean;
  needTicketsHelp: boolean;
  comment: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  telegram: "",
  familyType: "",
  childrenAges: "",
  budgetMove: "",
  rentBudget: "",
  workSphere: "",
  desiredSalary: "",
  workFormat: "",
  citySize: "",
  climate: "",
  geo: "",
  ecology: "",
  infrastructure: "",
  hasPets: null,
  needHousingHelp: false,
  needTicketsHelp: false,
  comment: "",
};

function ChoiceBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
          : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function FormSection({
  step,
  title,
  icon,
  children,
}: {
  step: number;
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={16} className="text-primary" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-primary/50 uppercase tracking-widest">{step < 10 ? `0${step}` : step}</span>
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function Anketa() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to email/telegram via backend
    console.log("Анкета отправлена:", form);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle2" size={40} className="text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Анкета отправлена!</h1>
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Я получил вашу анкету и пришлю подборку из <strong className="text-foreground">3 лучших городов</strong> в течение 24 часов.
          </p>
          <p className="text-muted-foreground mb-8">Проверьте email и Telegram.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all"
            >
              <Icon name="Home" size={16} />
              На главную
            </Link>
            <a
              href="https://t.me/pereezdpro"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-primary/40 transition-all"
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <header className="sticky top-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between border-b border-border/40 bg-background/90 backdrop-blur-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={16} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground tracking-tight">ПереездPro</span>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Clock" size={14} />
          ~2 минуты
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
            <Icon name="Sparkles" size={14} />
            Бесплатно для тарифа Базовый
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Заполните анкету — получите 3 города
          </h1>
          <p className="text-muted-foreground text-lg">
            Ответьте на несколько вопросов, и я подберу лучшие варианты под ваши критерии
          </p>
        </div>

        {/* Progress hint */}
        <div className="flex items-center gap-2 mb-8 p-4 rounded-xl bg-primary/5 border border-primary/15">
          <Icon name="Info" size={16} className="text-primary flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Чем подробнее заполните — тем точнее подборка. Поля со <span className="text-destructive">*</span> обязательны.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* 1. Contacts */}
          <FormSection step={1} title="Контакты" icon="User">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Имя <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Как вас зовут?"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">Telegram</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">@</span>
                  <input
                    type="text"
                    placeholder="username"
                    value={form.telegram}
                    onChange={(e) => set("telegram", e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
              </div>
            </div>
          </FormSection>

          {/* 2. Family */}
          <FormSection step={2} title="Состав семьи" icon="Users">
            <div>
              <label className="block text-sm font-medium mb-3">
                Кто переезжает? <span className="text-destructive">*</span>
              </label>
              <div className="flex flex-wrap gap-2.5">
                {([
                  { value: "alone" as FamilyType, label: "Один / одна", icon: "User" },
                  { value: "partner" as FamilyType, label: "С партнёром", icon: "Heart" },
                  { value: "children" as FamilyType, label: "С детьми", icon: "Baby" },
                ]).map(({ value, label, icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => set("familyType", value)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      form.familyType === value
                        ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <Icon name={icon} size={15} />
                    {label}
                  </button>
                ))}
              </div>
              {form.familyType === "children" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1.5">Возраст детей</label>
                  <input
                    type="text"
                    placeholder="Например: 3 года, 8 лет"
                    value={form.childrenAges}
                    onChange={(e) => set("childrenAges", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
              )}
            </div>
          </FormSection>

          {/* 3. Budget */}
          <FormSection step={3} title="Бюджет" icon="Wallet">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Бюджет на переезд <span className="text-destructive">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "under50", label: "до 50 000 ₽" },
                    { value: "50-100", label: "50–100 000 ₽" },
                    { value: "100-200", label: "100–200 000 ₽" },
                    { value: "200-500", label: "200–500 000 ₽" },
                    { value: "500plus", label: "500 000+ ₽" },
                  ].map(({ value, label }) => (
                    <ChoiceBtn
                      key={value}
                      active={form.budgetMove === value}
                      onClick={() => set("budgetMove", value as BudgetMove)}
                    >
                      {label}
                    </ChoiceBtn>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Желаемая аренда в месяц (₽) <span className="text-destructive">*</span>
                </label>
                <input
                  required
                  type="number"
                  placeholder="Например: 35000"
                  value={form.rentBudget}
                  onChange={(e) => set("rentBudget", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>
            </div>
          </FormSection>

          {/* 4. Work */}
          <FormSection step={4} title="Работа" icon="Briefcase">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Сфера деятельности</label>
                  <input
                    type="text"
                    placeholder="Например: IT, медицина, торговля"
                    value={form.workSphere}
                    onChange={(e) => set("workSphere", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Желаемая зарплата (₽)</label>
                  <input
                    type="number"
                    placeholder="Например: 70000"
                    value={form.desiredSalary}
                    onChange={(e) => set("desiredSalary", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Формат работы</label>
                <div className="flex flex-wrap gap-2.5">
                  {([
                    { value: "remote" as WorkFormat, label: "Удалёнка", icon: "Laptop" },
                    { value: "office" as WorkFormat, label: "Офис", icon: "Building2" },
                    { value: "any" as WorkFormat, label: "Не важно", icon: "Shuffle" },
                  ]).map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("workFormat", value)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        form.workFormat === value
                          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon name={icon} size={15} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FormSection>

          {/* 5. City filters */}
          <FormSection step={5} title="Параметры города" icon="Map">
            <div className="space-y-6">

              {/* City size */}
              <div>
                <label className="block text-sm font-medium mb-3">Размер города</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "mega", label: "Мегаполис", icon: "Building" },
                    { value: "medium", label: "Средний", icon: "Building2" },
                    { value: "small", label: "Малый", icon: "Home" },
                    { value: "village", label: "Деревня / посёлок", icon: "Trees" },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("citySize", value as CitySize)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        form.citySize === value
                          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon name={icon} size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Climate */}
              <div>
                <label className="block text-sm font-medium mb-3">Климат</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "warm", label: "Тёплый", icon: "Sun" },
                    { value: "moderate", label: "Умеренный", icon: "Cloud" },
                    { value: "cold", label: "Холодный", icon: "Snowflake" },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("climate", value as Climate)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        form.climate === value
                          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon name={icon} size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Geography */}
              <div>
                <label className="block text-sm font-medium mb-3">Регион</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "south", label: "Юг" },
                    { value: "center", label: "Центр" },
                    { value: "northwest", label: "Северо-запад" },
                    { value: "ural", label: "Урал" },
                    { value: "siberia", label: "Сибирь" },
                    { value: "caucasus", label: "Кавказ" },
                  ].map(({ value, label }) => (
                    <ChoiceBtn
                      key={value}
                      active={form.geo === value}
                      onClick={() => set("geo", value as Geo)}
                    >
                      {label}
                    </ChoiceBtn>
                  ))}
                </div>
              </div>

              {/* Ecology */}
              <div>
                <label className="block text-sm font-medium mb-3">Экология</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "priority", label: "Приоритет", icon: "Leaf" },
                    { value: "desirable", label: "Желательно", icon: "TreePine" },
                    { value: "nocare", label: "Не важно", icon: "Minus" },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("ecology", value as Ecology)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        form.ecology === value
                          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon name={icon} size={14} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <label className="block text-sm font-medium mb-3">Инфраструктура</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "developed", label: "Развитая (метро, ТЦ, больницы)" },
                    { value: "medium", label: "Средняя (всё есть, но скромнее)" },
                    { value: "calm", label: "Спокойная (главное — тишина)" },
                  ].map(({ value, label }) => (
                    <ChoiceBtn
                      key={value}
                      active={form.infrastructure === value}
                      onClick={() => set("infrastructure", value as Infra)}
                    >
                      {label}
                    </ChoiceBtn>
                  ))}
                </div>
              </div>

            </div>
          </FormSection>

          {/* 6. Additional */}
          <FormSection step={6} title="Дополнительно" icon="Settings">
            <div className="space-y-5">

              {/* Pets */}
              <div>
                <label className="block text-sm font-medium mb-3">Есть животные?</label>
                <div className="flex gap-2">
                  {[
                    { value: true, label: "Да, есть", icon: "PawPrint" },
                    { value: false, label: "Нет", icon: "X" },
                  ].map(({ value, label, icon }) => (
                    <button
                      key={String(value)}
                      type="button"
                      onClick={() => set("hasPets", value)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        form.hasPets === value
                          ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon name={icon} size={15} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Help needed */}
              <div>
                <label className="block text-sm font-medium mb-3">Нужна помощь с:</label>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => set("needHousingHelp", !form.needHousingHelp)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      form.needHousingHelp
                        ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <Icon name={form.needHousingHelp ? "CheckSquare" : "Square"} size={15} />
                    Поиск жилья
                  </button>
                  <button
                    type="button"
                    onClick={() => set("needTicketsHelp", !form.needTicketsHelp)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      form.needTicketsHelp
                        ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <Icon name={form.needTicketsHelp ? "CheckSquare" : "Square"} size={15} />
                    Покупка билетов
                  </button>
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Комментарий / пожелания</label>
                <textarea
                  rows={4}
                  placeholder="Любые детали, которые помогут точнее подобрать город..."
                  value={form.comment}
                  onChange={(e) => set("comment", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all resize-none"
                />
              </div>
            </div>
          </FormSection>

          {/* Submit */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-base font-bold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-xl shadow-primary/25 hover:-translate-y-0.5"
            >
              <Icon name="Send" size={18} />
              Отправить анкету → получить 3 города
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая «Отправить», вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-foreground">политикой конфиденциальности</a>.
              Данные не передаются третьим лицам.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}