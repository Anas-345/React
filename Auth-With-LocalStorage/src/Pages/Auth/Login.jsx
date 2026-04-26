import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/context";

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = loginUser(form.email, form.password);
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
      <div className="glass-card rounded-2xl p-8 glow-violet">
        <div className="mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "linear-gradient(135deg, #00e5ff22, #7c3aed22)", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="10 17 15 12 10 7" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="15" y1="12" x2="3" y2="12" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
            Welcome back
          </h2>
          <p className="text-slate-400 text-sm mt-1">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="mb-5 px-4 py-3 rounded-lg text-sm text-red-400 border border-red-500/20" style={{ background: "rgba(239,68,68,0.08)" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
                className="input-field w-full px-4 py-3 pr-12 rounded-xl text-sm"
                autoComplete="current-password"
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
          </div>

          <div className="flex justify-end">
            <Link
              to="/auth/forgotpassword"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Forgot password?
            </Link>
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
                  Signing in...
                </>
              ) : "Sign In →"}
            </span>
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}