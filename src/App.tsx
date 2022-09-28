import SignIn from "pages/auth/SignIn";
import SignUp from "pages/auth/SignUp";
import Chating from "pages/Chating";
import Profile from "pages/Profile";
import Setting from "pages/Setting";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // uri: process.env.REACT_APP_SERVER_URL,
  uri: "http://211.176.37.253:8443",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/chating" element={<Chating />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
