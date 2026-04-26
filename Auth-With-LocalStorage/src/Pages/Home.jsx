import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/context";

export default function Home() {
  const { login, user } = useContext(AuthContext);

  return (
    <main className="relative z-10 flex-1 flex items-center justify-center min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-slate-400" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.1em" }}>
            {login ? `WELCOME BACK, ${user?.name?.toUpperCase()}` : "NEXT-GEN PLATFORM"}
          </span>
        </div>

        <h1
          className="animate-fade-up delay-100 text-6xl sm:text-7xl font-extrabold leading-none tracking-tight mb-6"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {login ? (
            <>
              Your{" "}
              <span className="text-gradient">Dashboard</span>
              <br />Awaits
            </>
          ) : (
            <>
              Build the{" "}
              <span className="text-gradient">Future</span>
              <br />Today
            </>
          )}
        </h1>

        <p className="animate-fade-up delay-200 text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          {login
            ? "You're logged in and ready to go. Explore your workspace and make things happen."
            : "A seamless authentication experience built for developers who care about design as much as functionality."}
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!login ? (
            <>
              <Link
                to="/auth/register"
                className="btn-primary px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto"
              >
                <span>Start for Free →</span>
              </Link>
              <Link
                to="/auth/login"
                className="btn-ghost px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto"
              >
                Sign In
              </Link>
            </>
          ) : (
            <div
              className="glass-card glow-cyan rounded-2xl p-8 text-left max-w-sm w-full"
            >
              <p className="text-xs text-slate-500 mb-1" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.1em" }}>ACCOUNT</p>
              <p className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{user?.name}</p>
              <p className="text-sm text-slate-400">{user?.email}</p>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400" style={{ fontFamily: "Syne, sans-serif" }}>ACTIVE SESSION</span>
              </div>
            </div>
          )}
        </div>

        {!login && (
          <div className="animate-fade-up delay-400 mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[
              { num: "10K+", label: "Users" },
              { num: "99.9%", label: "Uptime" },
              { num: "256-bit", label: "Encryption" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-xl font-extrabold text-gradient" style={{ fontFamily: "Syne, sans-serif" }}>{num}</p>
                <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}