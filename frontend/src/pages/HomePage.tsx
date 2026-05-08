import React from 'react'
import { Link } from 'react-router-dom' // Link-ийг импортлох
import { motion } from 'framer-motion'
import { 
  Swords, TrophyIcon, Users, ShoppingBag, 
  ArrowRight, Calendar, Sparkles 
} from 'lucide-react'

const MOCK_NEWS = [
  {
    id: '1',
    title: 'MPL Philippines Season 13 Grand Finals Announced',
    description: 'The biggest Mobile Legends tournament in the Philippines returns with record prize pool.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    category: 'Tournament',
    publishedAt: '2026-04-20'
  },
  {
    id: '2',
    title: 'New Hero Spotlight: Shadow Reaper Revealed',
    description: 'Moonton unveils the newest assassin hero with unique shadow manipulation abilities.',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800',
    category: 'Updates',
    publishedAt: '2026-04-18'
  },
  {
    id: '3',
    title: 'Echo Esports Wins M6 World Championship',
    description: 'Filipino pride shines as Echo Esports dominates the M6 World Championship.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    category: 'Esports',
    publishedAt: '2026-04-15'
  }
]

export function HomePage() {
  const features = [
    { icon: Swords, title: 'Game Arcade', path: '/arcade', gradient: 'from-blue-500 to-cyan-500', desc: 'Streams & Betting' },
    { icon: TrophyIcon, title: 'Tournaments', path: '/arcade', gradient: 'from-purple-500 to-pink-500', desc: 'Join Matches' },
    { icon: Users, title: 'Teams', path: '/teams', gradient: 'from-indigo-500 to-purple-500', desc: 'Manage Roster' },
    { icon: ShoppingBag, title: 'Shop', path: '/shop', gradient: 'from-emerald-500 to-teal-500', desc: 'Buy Accounts' },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[#111627] border border-slate-800 p-8 md:p-16 shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] -mr-20 -mt-20" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3 animate-pulse" />
              Ultimate MLBB Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
              Master The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Land of Dawn
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Join millions of players. Create teams, track the meta, and dominate the competitive scene all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/arcade"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group"
              >
                Enter Arcade <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/teams"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all border border-slate-700"
              >
                Create Team
              </Link>
            </div>
          </div>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -5 }}>
                <Link
                  to={f.path}
                  className="block bg-[#1a2035] border border-slate-800 p-6 rounded-3xl text-left group hover:border-indigo-500/50 transition-all h-full"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{f.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 2. LATEST NEWS PREVIEW */}
      <section className="space-y-8">
        <div className="flex items-end justify-between px-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
            <p className="text-slate-500 mt-1">Stay updated with tournaments and patches</p>
          </div>
          <Link 
            to="/news"
            className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group"
          >
            View News Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_NEWS.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111627] border border-slate-800 rounded-3xl overflow-hidden group hover:border-indigo-500/40 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt="" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold">
                    <Calendar className="w-3 h-3" />
                    {article.publishedAt}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6">
                  {article.description}
                </p>
                <Link to={`/news/${article.id}`} className="text-sm font-bold text-slate-300 hover:text-indigo-400 flex items-center gap-2 transition-colors">
                  Read Article <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. QUICK STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {[
          { label: 'Active Players', value: '2.5M+', color: 'text-blue-400' },
          { label: 'Total Teams', value: '5K+', color: 'text-purple-400' },
          { label: 'Live Matches', value: '150+', color: 'text-emerald-400' },
          { label: 'Prize Pool', value: '$500K', color: 'text-orange-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#111627] border border-slate-800/50 rounded-[2rem] p-6 text-center">
            <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}