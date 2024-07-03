import styled from "styled-components";
import NavBar from "./components/nav-bar/NavBar";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  width: 100vw;
`;

function App() {
  return (
    <StyledMain>
      <NavBar />
    </StyledMain>
  );
}

export default App;
