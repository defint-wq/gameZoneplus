import { TeamsList } from "../modules/teams/components/TeamsList";

export const TeamsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Esports Teams
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Нийт бүртгэлтэй багууд болон тэдгээрийн тоглогчдын мэдээлэл.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <TeamsList />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-blue-600 rounded-lg text-white">
            <h3 className="text-lg font-semibold">Шилдэг баг</h3>
            <p className="mt-2 text-blue-100 italic">The Avengers Esports</p>
          </div>
          <div className="p-5 bg-indigo-600 rounded-lg text-white">
            <h3 className="text-lg font-semibold">Идэвхтэй бүс</h3>
            <p className="mt-2 text-indigo-100 italic">Mongolia, SEA</p>
          </div>
          <div className="p-5 bg-purple-600 rounded-lg text-white">
            <h3 className="text-lg font-semibold">Нийт тоглогчид</h3>
            <p className="mt-2 text-purple-100 italic">Шинэчлэгдэж байна...</p>
          </div>
        </div>
      </main>
    </div>
  );
};
