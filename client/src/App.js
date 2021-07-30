import styled from "styled-components";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <Container>
      <Navbar />
      <Body></Body>
    </Container>
  );
}

const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`;

const Body = styled.div`
  background-color: var(--text-sec);
  height: 100%;
`;

export default App;
