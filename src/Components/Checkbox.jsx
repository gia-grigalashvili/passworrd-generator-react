import styled from "styled-components";

function Checkbox() {
  const array = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  return (
    <Checkboxmain>
      <div className="cont">
        <label className="container">
          <input type="checkbox" className="check uppercase" />
          <span className="checkmark"></span>
        </label>
        <span className="checkbox-text">Include Uppercase Letters</span>
      </div>
      {}
      {array.map((Text, index) => (
        <div key={index} className="cont">
          <label className="container">
            <input type="checkbox" className="check uppercase" />
            <span className="checkmark"></span>
          </label>
          <span className="checkbox-text">{Text}</span>
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
    }
    .check:checked + .checkmark {
      background-color: #a4ffaf;
      border: 2px solid #a4ffaf;

      background-repeat: no-repeat;
      background-size: 17px;
      background-position: center center;
    }
  }
`;
export default Checkbox;
