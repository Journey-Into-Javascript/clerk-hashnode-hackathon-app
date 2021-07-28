import "./App.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Container>
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
      <SignedIn>
        <Header />
        <Navbar />
        <Home />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  </Container>

  );
}

const Container = styled.div`
  background-color: #6649b8;
  height: 100vh;
`;

export default App;
