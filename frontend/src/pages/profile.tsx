import { useState } from 'react'
import { User, Mail, Trophy, Star, Edit2, Check, X } from 'lucide-react'

export function ProfilePage() {
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

  // Засах үед утга өөрчлөх функц
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen text-white p-4 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Edit Button */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">My Profile</h1>
            <p className="text-gray-400 text-sm">View and manage your account information</p>
          </div>
          
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${
              isEditing 
              ? 'bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
              : 'bg-[#1a1f2e] border border-white/10 hover:bg-white/5'
            }`}
          >
            {isEditing ? (
              <><Check className="w-4 h-4" /> Save Changes</>
            ) : (
              <><Edit2 className="w-4 h-4" /> Edit Profile</>
            )}
          </button>
        </div>

        {/* Main Card */}
        <div className=" border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {isEditing && (
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 animate-pulse" />
          )}

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

          {/* Stats Grid - Remain Read Only */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Level', value: user.level, color: 'text-indigo-400' },
              { label: 'Rank', value: user.rank, color: 'text-purple-400' },
              { label: 'Matches', value: user.matches, color: 'text-emerald-400' },
              { label: 'Win Rate', value: `${user.winRate}%`, color: 'text-orange-400' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#1a1f2e] border border-white/5 rounded-xl p-5 text-center">
                <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Form Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isEditing ? 'text-indigo-400' : 'text-gray-600'}`} />
                  <input 
                    name="firstName"
                    readOnly={!isEditing} 
                    value={user.firstName}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1f2e] border rounded-lg pl-10 pr-4 py-3 text-sm transition-all outline-none ${
                      isEditing ? 'border-indigo-500/50 bg-[#1e2536]' : 'border-white/5'
                    }`} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isEditing ? 'text-indigo-400' : 'text-gray-600'}`} />
                  <input 
                    name="lastName"
                    readOnly={!isEditing} 
                    value={user.lastName}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1f2e] border rounded-lg pl-10 pr-4 py-3 text-sm transition-all outline-none ${
                      isEditing ? 'border-indigo-500/50 bg-[#1e2536]' : 'border-white/5'
                    }`} 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Username</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isEditing ? 'text-indigo-400' : 'text-gray-600'}`} />
                <input 
                  name="username"
                  readOnly={!isEditing} 
                  value={user.username}
                  onChange={handleChange}
                  className={`w-full bg-[#1a1f2e] border rounded-lg pl-10 pr-4 py-3 text-sm transition-all outline-none ${
                    isEditing ? 'border-indigo-500/50 bg-[#1e2536]' : 'border-white/5'
                  }`} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isEditing ? 'text-indigo-400' : 'text-gray-600'}`} />
                <input 
                  name="email"
                  readOnly={!isEditing} 
                  value={user.email}
                  onChange={handleChange}
                  className={`w-full bg-[#1a1f2e] border rounded-lg pl-10 pr-4 py-3 text-sm transition-all outline-none ${
                    isEditing ? 'border-indigo-500/50 bg-[#1e2536]' : 'border-white/5'
                  }`} 
                />
              </div>
            </div>
          </div>

          {/* Cancel button when editing */}
          {isEditing && (
            <button 
              onClick={() => setIsEditing(false)}
              className="mt-8 w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <X className="w-4 h-4" /> Cancel Editing
            </button>
          )}

          {/* Achievements Section */}
          <div className="mt-12 pt-8 border-t border-white/5">
             {/* ... (Achievements хэсэг хэвээрээ үлдэнэ) */}
          </div>
        </div>
      </div>
    </div>
  )
}