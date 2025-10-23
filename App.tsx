import { useState, useEffect } from "react";
import {
  LanguageProvider,
  useLanguage,
} from "./components/LanguageContext";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { WhatIsWWW } from "./components/WhatIsWWW";
import { History } from "./components/History";
import { Web1 } from "./components/Web1";
import { Web2 } from "./components/Web2";
import { Web3 } from "./components/Web3";
import { AboutUs } from "./components/AboutUs";
import { Quiz } from "./components/Quiz";

function AppContent() {
  const [currentSection, setCurrentSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") as "light" | "dark") ||
        "dark"
      );
    }
    return "dark";
  });
  const { t } = useLanguage();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "home":
        return (
          <HomePage
            onSectionChange={setCurrentSection}
            theme={theme}
          />
        );
      case "what-is-www":
        return <WhatIsWWW theme={theme} />;
      case "history":
        return <History theme={theme} />;
      case "web1":
        return <Web1 theme={theme} />;
      case "web2":
        return <Web2 theme={theme} />;
      case "web3":
        return <Web3 theme={theme} />;
      case "about-us":
        return <AboutUs theme={theme} />;
      case "quiz":
        return <Quiz theme={theme} />;
      default:
        return (
          <HomePage
            onSectionChange={setCurrentSection}
            theme={theme}
          />
        );
    }
  };

  const getBackgroundClass = () => {
    if (theme === "light") {
      return "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50";
    }
    return "min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  };

  return (
    <div
      className={getBackgroundClass()}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main className="pb-16">{renderCurrentSection()}</main>

      <footer
        className={`${
          theme === "light"
            ? "bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 border-t border-blue-200/50"
            : "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-cyan-500/20"
        } py-8`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`text-sm ${
                theme === "light"
                  ? "text-gray-600"
                  : "text-slate-300"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("footerText")}
            </p>
            <button
              onClick={() => setCurrentSection("about-us")}
              className={`${
                theme === "light"
                  ? "text-blue-600 hover:text-blue-700"
                  : "text-cyan-400 hover:text-cyan-300"
              } transition-colors duration-300 text-sm underline`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {t("aboutUs")}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}