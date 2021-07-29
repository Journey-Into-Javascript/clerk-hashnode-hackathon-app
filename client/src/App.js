import './App.css';
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
    <ClerkProvider frontendApi={process.env.REACT_APP_CLERK_FRONTEND_API}>
      <SignedIn>
        <Header />
        <Home />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default App;
