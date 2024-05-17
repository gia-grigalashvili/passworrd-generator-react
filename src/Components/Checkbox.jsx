import React from "react";
import styled from "styled-components";

function Checkbox() {
  return (
    <Checkboxmain>
      <label className="container">
        <input type="checkbox" className="check uppercase" />
        <span className="checkmark"></span>
      </label>
      <span className="checkbox-text">Include Uppercase Letters</span>
    </Checkboxmain>
  );
}
const Checkboxmain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 32px;
`;
export default Checkbox;
