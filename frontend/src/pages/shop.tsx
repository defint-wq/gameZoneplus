import { AccountList } from "../modules/shop/components/AccountList";
import { SearchSection } from "../modules/shop/components/SearchSection";
import { ShopFooter } from "../modules/shop/components/ShopFooter";
import { ShopHeader } from "../modules/shop/components/ShopHeader";

export const ShopPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col">
      <ShopHeader />

      <section className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white">
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-4">MLBB ACCOUNT ЗАХ</h2>
          <p className="text-blue-100 max-w-lg mb-6">
            Хамгийн хямд, хамгийн найдвартай аккаунт арилжааны платформ.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
      </section>

      <SearchSection />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-10">
        <section className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-10 text-white">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">MLBB ACCOUNT ЗАХ</h2>
            <p className="text-blue-100 max-w-lg mb-6">
              Хамгийн хямд, хамгийн найдвартай аккаунт арилжааны платформ.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        </section>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">
              Бүх аккаунтууд
            </h3>
            <div className="text-sm text-slate-500">Нийт 42 аккаунт олдлоо</div>
          </div>

          <AccountList />
        </div>
      </main>

      <ShopFooter />
    </div>
  );
};
