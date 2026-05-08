import React, { useState } from 'react';

interface Member {
  userId: string;
  username: string;
  role: string;
}

interface Team {
  id: string;
  teamName: string;
  leaderId: string;
  members: Member[];
  createdAt: string;
}

const MOCK_TEAMS: Team[] = [
  {
    id: '1',
    teamName: 'Phoenix Esports',
    leaderId: 'user1',
    members: [
      { userId: 'user1', username: 'DragonSlayer', role: 'leader' },
      { userId: 'user2', username: 'ShadowNinja', role: 'member' },
      { userId: 'user3', username: 'StormBreaker', role: 'member' },
      { userId: 'user4', username: 'IceQueen', role: 'member' }
    ],
    createdAt: '2025-01-15'
  },
  {
    id: '2',
    teamName: 'Cyber Warriors',
    leaderId: 'user5',
    members: [
      { userId: 'user5', username: 'ThunderStrike', role: 'leader' },
      { userId: 'user6', username: 'BlitzKrieg', role: 'member' },
      { userId: 'user7', username: 'NeonGhost', role: 'member' }
    ],
    createdAt: '2025-02-01'
  }
];

// Named export болон Default export хоёуланг нь нэмлээ (Алдаанаас сэргийлэх)
export const TeamsPage = () => {
  const [teams] = useState<Team[]>(MOCK_TEAMS);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Esports Teams</h1>
            <p className="text-slate-400 mt-1">Manage and organize your rosters</p>
          </div>
          
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all font-semibold shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            <span className="text-xl mr-2">+</span> Create Team
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-[#161b2c] border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                  {team.teamName[0]}
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-lg font-bold truncate">{team.teamName}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                    {team.members.length} Members
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {team.members.map((member) => (
                  <div
                    key={member.userId}
                    className="flex items-center gap-3 p-2.5 bg-[#1e253a] rounded-xl border border-transparent group-hover:bg-[#232b44] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-indigo-300">
                      {member.username[0]}
                    </div>
                    <span className="flex-1 text-sm font-medium truncate">{member.username}</span>
                    {member.role === 'leader' && (
                      <span className="text-yellow-500 text-sm">👑</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
                <span>EST. {team.createdAt}</span>
                <button className="text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-tighter">Details</button>
              </div>
            </div>
          ))}
        </main>
      </div>

      {showCreateModal && <CreateTeamModal onClose={() => setShowCreateModal(false)} />}
    </div>
  );
};

// MODAL COMPONENT
const CreateTeamModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#161b2c] border border-slate-800 rounded-3xl max-w-md w-full p-8 shadow-2xl scale-in-center">
        <h2 className="text-2xl font-bold mb-2">Build Your Team</h2>
        <p className="text-slate-400 text-sm mb-6">Enter details to start your esports journey.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Team Identity</label>
            <input 
              type="text" 
              className="w-full bg-[#0a0c14] border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-700"
              placeholder="e.g. Shadow Realm"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-colors">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;