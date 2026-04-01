/**
 * iPhone 17 Pro mockup с приложением ПереездPro
 * Отображается под углом (perspective transform)
 */
export default function IPhoneMockup() {
  return (
    <div
      className="relative select-none pointer-events-none"
      style={{
        transform: "perspective(900px) rotateY(-18deg) rotateX(6deg) rotateZ(2deg)",
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 40px 80px rgba(59,130,246,0.35)) drop-shadow(0 20px 40px rgba(0,0,0,0.6))",
      }}
    >
      {/* ── Корпус телефона ── */}
      <div
        className="relative"
        style={{
          width: 260,
          height: 530,
          borderRadius: 44,
          background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.5)",
        }}
      >
        {/* Боковые кнопки (левая сторона) */}
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 110,
            width: 3,
            height: 32,
            borderRadius: "2px 0 0 2px",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "-1px 0 0 rgba(255,255,255,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 155,
            width: 3,
            height: 52,
            borderRadius: "2px 0 0 2px",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "-1px 0 0 rgba(255,255,255,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -3,
            top: 218,
            width: 3,
            height: 52,
            borderRadius: "2px 0 0 2px",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "-1px 0 0 rgba(255,255,255,0.1)",
          }}
        />
        {/* Правая кнопка */}
        <div
          style={{
            position: "absolute",
            right: -3,
            top: 150,
            width: 3,
            height: 68,
            borderRadius: "0 2px 2px 0",
            background: "linear-gradient(180deg, #2a2a3e, #1a1a2e)",
            boxShadow: "1px 0 0 rgba(255,255,255,0.1)",
          }}
        />

        {/* ── Экран ── */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            borderRadius: 36,
            overflow: "hidden",
            background: "#0a0f1e",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 110,
              height: 28,
              borderRadius: 20,
              background: "#000",
              zIndex: 10,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* Камера */}
            <div
              style={{
                position: "absolute",
                right: 18,
                top: "50%",
                transform: "translateY(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, #1a3a5c, #050a14)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.08), inset 0 0 4px rgba(59,130,246,0.3)",
              }}
            />
          </div>

          {/* Статусбар */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 52,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "0 20px 8px",
              fontSize: 10,
              fontFamily: "system-ui, -apple-system, sans-serif",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 600,
              zIndex: 5,
            }}
          >
            <span>9:41</span>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {/* Signal */}
              <svg width="14" height="10" viewBox="0 0 14 10">
                <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="currentColor" />
                <rect x="3.5" y="4" width="2.5" height="6" rx="0.5" fill="currentColor" />
                <rect x="7" y="2" width="2.5" height="8" rx="0.5" fill="currentColor" />
                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="currentColor" />
              </svg>
              {/* WiFi */}
              <svg width="14" height="10" viewBox="0 0 14 10">
                <path d="M7 8.5 C7 8.5 7 8.5 7 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4.5 6.5 C5.3 5.7 6.1 5.3 7 5.3 C7.9 5.3 8.7 5.7 9.5 6.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                <path d="M2 4 C3.5 2.5 5.2 1.7 7 1.7 C8.8 1.7 10.5 2.5 12 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <svg width="18" height="10" viewBox="0 0 18 10">
                <rect x="0" y="1" width="15" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
                <rect x="15.5" y="3.5" width="2" height="3" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="1.5" y="2.5" width="11" height="5" rx="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* ── Контент приложения ── */}
          {/* Фоновый градиент приложения */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(160deg, #0d1b3e 0%, #0a1628 50%, #071020 100%)",
            }}
          />
          {/* Декоративное свечение */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: -30,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            }}
          />

          {/* App header */}
          <div
            style={{
              position: "absolute",
              top: 52,
              left: 0,
              right: 0,
              padding: "14px 18px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 5,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.4)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white" />
                </svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.3px" }}>
                ПереездPro
              </span>
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.7)" />
                <circle cx="12" cy="4" r="1.5" fill="rgba(255,255,255,0.5)" />
                <circle cx="12" cy="20" r="1.5" fill="rgba(255,255,255,0.5)" />
              </svg>
            </div>
          </div>

          {/* Greeting */}
          <div
            style={{
              position: "absolute",
              top: 112,
              left: 18,
              right: 18,
              zIndex: 5,
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(147,197,253,0.7)", fontFamily: "system-ui, sans-serif", marginBottom: 2 }}>
              Добро пожаловать 👋
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "system-ui, sans-serif", lineHeight: 1.2 }}>
              Найдём ваш город
            </div>
          </div>

          {/* Search bar */}
          <div
            style={{
              position: "absolute",
              top: 162,
              left: 18,
              right: 18,
              height: 36,
              borderRadius: 12,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(59,130,246,0.2)",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: 7,
              zIndex: 5,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="rgba(147,197,253,0.5)" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="rgba(147,197,253,0.5)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, color: "rgba(147,197,253,0.45)", fontFamily: "system-ui, sans-serif" }}>Поиск города...</span>
          </div>

          {/* Match card */}
          <div
            style={{
              position: "absolute",
              top: 212,
              left: 18,
              right: 18,
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.12))",
              border: "1px solid rgba(59,130,246,0.3)",
              padding: "12px 14px",
              zIndex: 5,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <div style={{ fontSize: 8, color: "rgba(147,197,253,0.7)", fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 }}>
                  Лучшее совпадение
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "system-ui, sans-serif" }}>
                  Краснодар
                </div>
              </div>
              <div
                style={{
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 8,
                  padding: "3px 7px",
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#4ade80",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                94%
              </div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              {["☀️ Тёпло", "💼 IT", "🏠 35к/мес"].map((tag, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: 6,
                    padding: "2px 6px",
                    fontSize: 8,
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Cities list */}
          <div style={{ position: "absolute", top: 316, left: 18, right: 18, zIndex: 5 }}>
            <div style={{ fontSize: 9, color: "rgba(147,197,253,0.6)", fontFamily: "system-ui, sans-serif", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8 }}>
              Подборка городов
            </div>
            {[
              { city: "Сочи", match: "89%", sub: "Море · Туризм", color: "#f59e0b" },
              { city: "Казань", match: "82%", sub: "Культура · Бизнес", color: "#8b5cf6" },
              { city: "Екатеринбург", match: "76%", sub: "Промышленность", color: "#06b6d4" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "7px 0",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={item.color} opacity="0.8" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#fff", fontFamily: "system-ui, sans-serif" }}>{item.city}</div>
                    <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontFamily: "system-ui, sans-serif" }}>{item.sub}</div>
                  </div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: item.color, fontFamily: "system-ui, sans-serif" }}>{item.match}</div>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 64,
              background: "rgba(10,15,30,0.95)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0 10px 10px",
              zIndex: 10,
            }}
          >
            {[
              { icon: "home", label: "Главная", active: true },
              { icon: "search", label: "Поиск", active: false },
              { icon: "heart", label: "Избранное", active: false },
              { icon: "user", label: "Профиль", active: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  opacity: item.active ? 1 : 0.4,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {item.icon === "home" && (
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke={item.active ? "#3b82f6" : "rgba(255,255,255,0.7)"} strokeWidth="1.8" fill={item.active ? "rgba(59,130,246,0.2)" : "none"} strokeLinejoin="round" />
                  )}
                  {item.icon === "search" && (
                    <>
                      <circle cx="11" cy="11" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" />
                      <path d="M16.5 16.5L21 21" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" />
                    </>
                  )}
                  {item.icon === "heart" && (
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" fill="none" />
                  )}
                  {item.icon === "user" && (
                    <>
                      <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" />
                    </>
                  )}
                </svg>
                <span style={{ fontSize: 7, color: item.active ? "#3b82f6" : "rgba(255,255,255,0.5)", fontFamily: "system-ui, sans-serif", fontWeight: item.active ? 700 : 400 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 6,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 3,
              borderRadius: 2,
              background: "rgba(255,255,255,0.25)",
              zIndex: 20,
            }}
          />
        </div>

        {/* Блик сверху на корпусе */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            right: 10,
            height: 60,
            borderRadius: "36px 36px 0 0",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
