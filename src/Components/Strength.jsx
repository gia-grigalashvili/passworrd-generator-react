import styled from "styled-components";

function Strength({ checkedState, setCheckedState, handleCheckboxChange }) {
  const array = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
  return (
    <Maindiv>
      <p>STRENGTH</p>
      <div className="strength-lvl">
        {array.map((text, index) => (
          <span key={index} className="strength-txt">
            {/* {text} */}
          </span>
        ))}
        <span className="strength-txt"></span>
        <div className="lvl-boxes">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
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
      border: 2px solid #e6e5ea;
    }
  }

  .strength-txt {
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #e6e5ea;
  }
  .one {
    background-color: #fff;
  }
  .two {
    background-color: #fff;
  }
  .three {
    background-color: #fff;
  }
  .four {
    background-color: #fff;
  }
`;
export default Strength;
