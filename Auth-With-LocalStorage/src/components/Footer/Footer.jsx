export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="glass-card border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00e5ff, #7c3aed)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#050810"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className="text-sm font-bold text-gradient"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                NEXUS
              </span>
            </div>

            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Support"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
                  style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.05em" }}
                >
                  {item}
                </a>
              ))}
            </div>

            <p
              className="text-xs text-slate-600"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}