/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Sliderconteiner from "./Sliderconteiner";
import Checkbox from "./Checkbox";
import Strength from "./Strength";
import Generator from "./Generator";

function Maincont() {
  // const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  const [filter, setfilter] = useState("");
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  return (
    <Mainconts>
      <Sliderconteiner />
      <Checkbox setCheckedState={setCheckedState} checkedState={checkedState} />
      <Strength checkedState={checkedState} />
      <Generator />
    </Mainconts>
  );
}
const Mainconts = styled.div`
  background-color: #24232c;
  padding: 21px 16px 16px;
`;
export default Maincont;
