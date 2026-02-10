import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#showcase", label: "Case Study" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = ["top", "skills", "value", "experience", "showcase", "contact"];

    const updateActive = () => {
      const viewportMiddle = window.scrollY + window.innerHeight * 0.4;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= viewportMiddle) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("top");
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src="/avater.svg"
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover border border-white/10"
            width={36}
            height={36}
          />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Hamisi Abdalla</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            <span className="text-sm text-slate-400">Available for work</span>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-4">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id || (id === "skills" && activeSection === "value");
            return (
              <a
                key={href}
                href={href}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="/Hamisi_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
