import { AccountList } from "../modules/shop/components/AccountList";
import { SearchSection } from "../modules/shop/components/SearchSection";
import { ShopFooter } from "../modules/shop/components/ShopFooter";
import { ShopHeader } from "../modules/shop/components/ShopHeader";
import { PageContainer } from "../../ui/components/page";

export const ShopPage = () => {
  return (
    <PageContainer>
      <ShopHeader />
      <SearchSection />
      <AccountList />
      <ShopFooter />
    </PageContainer>
  );
};
