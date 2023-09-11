import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const Client = () => {
  // const token = localStorage.getItem("idToken");

  const httpLink = createHttpLink({
    uri: "http://localhost:8080/v1/graphql",
  });
  const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem("idToken");
    return {
      headers: {
        ...headers,
        "content-type": "application/json",
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return client;
};

export default Client;