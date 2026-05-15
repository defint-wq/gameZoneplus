import React, { useState } from "react";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  onLoginSuccess?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Нэвтрэхэд алдаа гарлаа");
      }

      localStorage.setItem("token", data.token);

      if (onLoginSuccess) onLoginSuccess();
      navigate("/profile");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center p-4 bg-[#0a0d14]">
      <div className="w-full max-w-md bg-[#161b2c] rounded-2xl p-8 border border-white/5 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Sign In Required</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Please login to access your profile
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-xs p-3 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                className="w-full bg-[#0d111a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-[#0d111a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <LogIn className="w-5 h-5" /> Sign In
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/auth/register")}
            className="text-indigo-400 cursor-pointer hover:underline font-medium"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
};
