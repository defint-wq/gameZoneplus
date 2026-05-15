import { useState } from "react";
import { AccountList } from "../modules/shop/components/AccountList";
import { SearchSection } from "../modules/shop/components/SearchSection";
import { ShopFooter } from "../modules/shop/components/ShopFooter";
import { ShopHeader } from "../modules/shop/components/ShopHeader";
import { PageContainer } from "../../ui/components/page";
import { LoginPage } from "./loginPage";

export const ShopPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 2. Дэлгүүрийн хайлтын төлөвүүд
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <PageContainer className="ml-32">
      <ShopHeader />

      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <AccountList
        searchQuery={searchQuery}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      <ShopFooter />
    </PageContainer>
  );
};