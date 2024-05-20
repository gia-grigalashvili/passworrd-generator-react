/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Sliderconteiner from "./Sliderconteiner";
import Checkbox from "./Checkbox";
import Strength from "./Strength";
import Generator from "./Generator";
import Copyheader from "./Copyheader";

function Maincont() {
  // const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characterSets = [
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase
      "abcdefghijklmnopqrstuvwxyz", // Lowercase
      "0123456789", // Numbers
      "!@#$%^&*()_+~`|}{[]:;?><,./-=", // Symbols
    ];

    let availableCharacters = "";
    checkedState.forEach((checked, index) => {
      if (checked) availableCharacters += characterSets[index];
    });

    if (availableCharacters.length === 0) return;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * availableCharacters.length
      );
      generatedPassword += availableCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <Mainconts>
      <Sliderconteiner length={length} setLength={setLength} />
      <Checkbox setCheckedState={setCheckedState} checkedState={checkedState} />
      <Strength checkedState={checkedState} />
      <Generator generatePassword={generatePassword} />
    </Mainconts>
  );
}
const Mainconts = styled.div`
  background-color: #24232c;
  padding: 21px 16px 16px;
`;
export default Maincont;
