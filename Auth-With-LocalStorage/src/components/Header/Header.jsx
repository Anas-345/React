import { useContext } from "react";
import { AuthContext } from "../../Context/context";
import { useNavigate, Link } from "react-router";

export default function Header() {
  const { login, setLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(false);
    navigate("/");
  };

  return (
    <header className="animate-slide-down relative z-10">
      <div
        className="glass-card border-b border-white/5"
        style={{ backdropFilter: "blur(24px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#050810"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="absolute inset-0 rounded-lg blur-md opacity-50 animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                }}
              />
            </div>
            <span
              className="text-xl font-bold tracking-tight text-gradient"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              NEXUS
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-3">
            {!login ? (
              <>
                <Link
                  to="/auth/login"
                  className="btn-ghost px-5 py-2 rounded-lg text-sm cursor-pointer"
                >
                  Sign In
                </Link>
                <Link
                  to="/auth/register"
                  className="btn-primary px-5 py-2 rounded-lg text-sm cursor-pointer"
                >
                  <span>Get Started</span>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                      color: "#050810",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="text-sm text-slate-300 hidden sm:block">
                    {user?.name || "User"}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn-ghost px-5 py-2 rounded-lg text-sm cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}