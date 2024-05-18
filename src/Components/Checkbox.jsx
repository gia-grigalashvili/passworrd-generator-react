/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import check from "/public/images/icon-check.svg";
function Checkbox() {
  const array = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  // const [showe, setshowe] = useState();

  const [checkedState, setCheckedState] = useState(
    new Array(array.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const update = [...checkedState];
    update[index] = !update[index];
    setCheckedState(update);
  };

  return (
    <Checkboxmain handleCheckboxChange={handleCheckboxChange}>
      {array.map((text, index) => (
        <div key={index} className="cont">
          <label className="container">
            <input
              type="checkbox"
              className="check"
              onChange={() => handleCheckboxChange(index)}
              checked={checkedState[index]}
            />
            <span className="checkmark">
              {checkedState[index] && (
                <img src={check} alt="check" className="check-image" />
              )}
            </span>
          </label>
          <span className="checkbox-text">{text}</span>
        </div>
      ))}
    </Checkboxmain>
  );
}
const Checkboxmain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 32px;
  .cont {
    display: flex;
    gap: 20px;
    .check {
      display: none;
    }
    .checkmark {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 2px solid rgb(255, 255, 255);
      cursor: pointer;
      /* background: ${(props) => (props.checked ? "red" : "")};
      img { */
    }
  }
  .check:checked + .checkmark {
    background-color: #a4ffaf;
    border: 2px solid #a4ffaf;

    background-repeat: no-repeat;
    background-size: 17px;
    background-position: center center;
  }
  .check {
    display: none;
  }
`;
export default Checkbox;
