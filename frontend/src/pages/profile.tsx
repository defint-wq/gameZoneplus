import { useState } from 'react'
import { User, Edit2, Check, X } from 'lucide-react'
import { LoginPage } from './loginPage'

export function ProfilePage() {
  // 1. Нэвтрэлтийн төлөв (auth)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // 2. Профайл засах төлөв
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    username: 'mlbb_legend',
    email: 'john.doe@example.com',
    level: 45,
    rank: 'Mythic Glory',
    matches: 1234,
    winRate: 68.5
  })

  // Профайл засах функц
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  // --- 1. НЭВТРЭЭГҮЙ ҮЕД ЛОГИН ХУУДАС ХАРУУЛАХ ---
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
  }

  // --- 2. НЭВТРЭСЭН ҮЕД ПРОФАЙЛ ХАРУУЛАХ ---
  return (
    <div className="min-h-screen text-white p-4 md:p-10 font-sans bg-[#0a0c14]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Edit & Logout */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">My Profile</h1>
            <p className="text-gray-400 text-sm">Welcome back, {user.firstName}!</p>
          </div>
          
          <div className="flex gap-3">
            <button 
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2.5 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all text-sm"
            >
                Log Out
            </button>
            <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
                isEditing 
                ? 'bg-emerald-600 hover:bg-emerald-500' 
                : 'bg-[#1a1f2e] border border-white/10 hover:bg-white/5'
                }`}
            >
                {isEditing ? (
                <><Check className="w-4 h-4" /> Save</>
                ) : (
                <><Edit2 className="w-4 h-4" /> Edit</>
                )}
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#161b2c] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Avatar Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            <div className="group relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-4xl font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] border-2 border-white/10">
                {user.firstName[0]}
              </div>
              {isEditing && (
                <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit2 className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">{user.firstName} {user.lastName}</h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>

          {/* Form хэсэг */}
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                    <input 
                        name="firstName"
                        readOnly={!isEditing} 
                        value={user.firstName}
                        onChange={handleChange}
                        className={`w-full bg-[#1a1f2e] border rounded-lg px-4 py-3 text-sm outline-none transition-all ${
                            isEditing ? 'border-indigo-500 bg-[#1e2536]' : 'border-white/5'
                        }`} 
                    />
                </div>
             </div>
          </div>
          
          {isEditing && (
            <button 
              onClick={() => setIsEditing(false)}
              className="mt-8 w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <X className="w-4 h-4" /> Cancel Editing
            </button>
          )}
        </div>
      </div>
    </div>
  )
}