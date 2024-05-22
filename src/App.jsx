import "./App.css";
import Name from "./Components/Name";
import Copyheader from "./Components/Copyheader";
import styled from "styled-components";
import Maincont from "./Components/Maincont";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  return (
    <>
      <Container>
        <Name />
        <Copyheader password={password} />
        <Maincont setPassword={setPassword}></Maincont>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 343px;
  margin-top: 100px;
`;
export default App;
