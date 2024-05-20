/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

function Strength({ checkedState }) {
  const levels = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

  const getStrengthLevel = () => {
    const activeCount = checkedState.filter(Boolean).length;
    switch (activeCount) {
      case 0:
        return levels[""];
      case 1:
        return levels[0];
      case 2:
        return levels[1];
      case 3:
        return levels[2];
      case 4:
        return levels[3];
    }
  };

  return (
    <Maindiv>
      <p>STRENGTH</p>
      <div className="strength-lvl">
        <span className="strength-txt">{getStrengthLevel()}</span>
        <div className="lvl-boxes">
          {levels.map((index) => (
            <div key={index} className={`box one two three four`}></div>
          ))}
        </div>
      </div>
    </Maindiv>
  );
}

const Maindiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  margin-bottom: 16px;
  background: #18171f;
  .strength-lvl {
    display: flex;
    align-items: center;
    gap: 16px;
    .lvl-boxes {
      display: flex;
      gap: 8px;
    }
    .box {
      width: 10px;
      height: 28px;
      flex-shrink: 0;
    }
  }

  .strength-txt {
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #e6e5ea;
  }
  .one {
    background-color: ${(props) =>
      props.strengthLevel ? "#fff" : "rebeccapurple"};
  }
  .two {
    background-color: ${(props) => (props.strengthLevel ? "#fff" : "green")};
  }
  .three {
    background-color: ${(props) =>
      props.strengthLevel ? "#2884cf" : "#793b3b"};
  }
  .four {
    background-color: ${(props) =>
      props.strengthLevel ? "#000000" : "#3b4a79"};
  }
`;

export default Strength;
