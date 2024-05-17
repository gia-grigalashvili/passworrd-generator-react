import styled from "styled-components";

function Strength() {
  return (
    <Maindiv>
      <p>STRENGTH</p>
      <div className="strength-lvl">
        <span className="strength-txt">TOO WEAK!</span>
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
  background-color: #18171f;
  .strength-lvl {
    display: flex;
    align-items: center;
    gap: 16px;
    .lvl-boxes {
      display: flex;
      gap: 8px;
    }
    .box {
      width: 6px;
      height: 24px;
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
`;
export default Strength;
