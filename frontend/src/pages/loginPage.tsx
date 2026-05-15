import { useState } from 'react'
import { Mail, Lock, LogIn } from 'lucide-react'

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Энд бодит амьдрал дээр Apollo Client-ийн Mutation эсвэл API дуудлага хийнэ
    if (loginData.email && loginData.password) {
      onLoginSuccess() // Нэвтрэлт амжилттай болсныг эх компонент руу мэдэгдэнэ
    }
  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#161b2c] rounded-2xl p-8 border border-white/5 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Sign In Required</h2>
          <p className="text-gray-400 mt-2 text-sm">Please login to access your profile</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                className="w-full bg-[#0d111a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-400 uppercase block mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-[#0d111a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-indigo-500 transition-all"
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" /> Sign In
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-6">
          Don't have an account? <span className="text-indigo-400 cursor-pointer hover:underline">Create one</span>
        </p>
      </div>
    </div>
  )
}