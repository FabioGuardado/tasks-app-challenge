import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const isDevEnv = process.env.NODE_ENV === 'development';

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, Authorization: `Bearer ${API_TOKEN}` },
}));

const apolloClient = new ApolloClient({
  connectToDevTools: isDevEnv,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
