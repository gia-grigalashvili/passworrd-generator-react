/* eslint-disable react/prop-types */
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

  // const strengthLevel = getStrengthLevel();
  // const changeActive = () => {
  //   const arr = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  //   const filters = [...arr];
  //   if (filters === "TOO WEAK!") {
  //     return arr.filter((text) => !text.array);
  //   } else if (filters === "WEAK") {
  //     return arr.filter((text) => text.array);
  //   } else if (filters === "MEDIUM") {
  //     return arr.filter((text) => text.array);
  //   } else if (filters === "STRONG") {
  //     return arr.filter((text) => text.array);
  //   } else {
  //     return filter;
  //   }
  // };
  return (
    <Maindiv>
      <p>STRENGTH</p>
      <div className="strength-lvl">
        <span className="strength-txt">{getStrengthLevel()}</span>
        <div className="lvl-boxes">
          {levels.map((level, index) => (
            <div key={index} className={`box one  two three four`}></div>
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
    background-color: ${(props) =>
      props.strengthLevel ? "#fff" : "rebeccapurple"};
  }
  .three {
    background-color: ${(props) =>
      props.strengthLevel ? "#fff" : "rebeccapurple"};
  }
  .four {
    background-color: ${(props) =>
      props.strengthLevel ? "#fff" : "rebeccapurple"};
  }
`;
export default Strength;
