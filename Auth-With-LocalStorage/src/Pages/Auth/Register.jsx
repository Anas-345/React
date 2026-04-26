import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/context";

export default function Register() {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(form.password);
  const strengthColors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = registerUser({ name: form.name, email: form.email, password: form.password });
      setLoading(false);
      if (result.success) {
        navigate("/");
      } else {
        setError(result.message);
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-md animate-fade-up">
      <div className="glass-card rounded-2xl p-8 glow-cyan">
        <div className="mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "linear-gradient(135deg, #00e5ff22, #7c3aed22)", border: "1px solid rgba(0,229,255,0.3)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="#7c3aed" strokeWidth="2"/>
              <line x1="19" y1="8" x2="19" y2="14" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="11" x2="16" y2="11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            Create account
          </h2>
          <p className="text-slate-400 text-sm mt-1">Join and get started in seconds</p>
        </div>

        {error && (
          <div className="mb-5 px-4 py-3 rounded-lg text-sm text-red-400 border border-red-500/20" style={{ background: "rgba(239,68,68,0.08)" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.08em" }}>
              FULL NAME
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="input-field w-full px-4 py-3 rounded-xl text-sm"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.08em" }}>
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input-field w-full px-4 py-3 rounded-xl text-sm"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.08em" }}>
              PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                className="input-field w-full px-4 py-3 pr-12 rounded-xl text-sm"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
            {form.password.length > 0 && (
              <div className="mt-2">
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background: i < strength ? strengthColors[strength - 1] : "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs mt-1" style={{ color: strengthColors[strength - 1] || "#475569" }}>
                  {form.password.length > 0 ? strengthLabels[strength - 1] || "Too short" : ""}
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-2" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "0.08em" }}>
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Re-enter password"
              className="input-field w-full px-4 py-3 rounded-xl text-sm"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3.5 rounded-xl text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Creating account...
                </>
              ) : "Create Account →"}
            </span>
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}