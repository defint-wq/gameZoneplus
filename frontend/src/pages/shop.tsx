import { useState } from "react";
import { AccountList } from "../modules/shop/components/AccountList";
import { SearchSection } from "../modules/shop/components/SearchSection";
import { ShopFooter } from "../modules/shop/components/ShopFooter";
import { ShopHeader } from "../modules/shop/components/ShopHeader";
import { PageContainer } from "../../ui/components/page";

export const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <PageContainer>
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
