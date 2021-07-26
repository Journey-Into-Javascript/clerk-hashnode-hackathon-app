import styled from "styled-components";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  background-color: #6649b8;
  height: 100vh;
`;

export default App;
