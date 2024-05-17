import "./App.css";
import Name from "./Components/Name";
import Copyheader from "./Components/Copyheader";
import styled from "styled-components";
import Maincont from "./Components/Maincont";
function App() {
  return (
    <>
      <Container>
        <Name />
        <Copyheader />
        <Maincont />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 343px;
  margin-top: 100px;
`;
export default App;
