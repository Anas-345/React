import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/context";

const STEP = { EMAIL: "email", RESET: "reset", DONE: "done" };

export default function ForgotPassword() {
  const { updatePassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const [step, setStep] = useState(STEP.EMAIL);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(STEP.RESET);
      setError("");
    }, 600);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = updatePassword(email, newPassword);
      setLoading(false);
      if (result.success) {
        setStep(STEP.DONE);
      } else {
        setError(result.message);
      }
    }, 600);
  };

  return (
    <div className="w-full max-w-md animate-fade-up">
      <div
        className="glass-card rounded-2xl p-8"
        style={{
          border: "1px solid rgba(244,114,182,0.15)",
          boxShadow: "0 0 30px rgba(244,114,182,0.08)",
        }}
      >
        {step === STEP.EMAIL && (
          <>
            <div className="mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(244,114,182,0.08)",
                  border: "1px solid rgba(244,114,182,0.3)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="#f472b6"
                    strokeWidth="2"
                  />
                  <path
                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    stroke="#00e5ff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Reset password
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Enter your email to continue
              </p>
            </div>

            {error && (
              <div
                className="mb-5 px-4 py-3 rounded-lg text-sm text-red-400 border border-red-500/20"
                style={{ background: "rgba(239,68,68,0.08)" }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold text-slate-400 mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="you@example.com"
                  className="input-field w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 rounded-xl text-sm disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : (
                    "Continue →"
                  )}
                </span>
              </button>
            </form>
          </>
        )}

        {step === STEP.RESET && (
          <>
            <div className="mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                    stroke="#7c3aed"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 11V7a5 5 0 0 1 10 0v4"
                    stroke="#00e5ff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                New password
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Setting new password for{" "}
                <span className="text-cyan-400">{email}</span>
              </p>
            </div>

            {error && (
              <div
                className="mb-5 px-4 py-3 rounded-lg text-sm text-red-400 border border-red-500/20"
                style={{ background: "rgba(239,68,68,0.08)" }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleResetSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold text-slate-400 mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Min. 6 characters"
                  className="input-field w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-400 mb-2"
                  style={{
                    fontFamily: "Syne, sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => {
                    setConfirm(e.target.value);
                    setError("");
                  }}
                  placeholder="Re-enter password"
                  className="input-field w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 rounded-xl text-sm disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : (
                    "Reset Password →"
                  )}
                </span>
              </button>
            </form>
          </>
        )}

        {step === STEP.DONE && (
          <div className="text-center py-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6 9 17l-5-5"
                  stroke="#22c55e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Password updated!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              Your password has been successfully changed.
            </p>
            <button
              onClick={() => navigate("/auth/login")}
              className="btn-primary px-8 py-3 rounded-xl text-sm"
            >
              <span>Sign In →</span>
            </button>
          </div>
        )}

        {step !== STEP.DONE && (
          <p className="text-center text-sm text-slate-500 mt-6">
            Remember it?{" "}
            <Link
              to="/auth/login"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Back to sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
