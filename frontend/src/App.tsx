import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppRouter } from "./modules/app/components/AppRoutes";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};
