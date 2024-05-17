import styled from "styled-components";

function Sliderconteiner() {
  return (
    <Slidermain>
      <div className="slider-text">
        <span>Character Length</span>
        <p className="slider-value">4</p>
      </div>
    </Slidermain>
  );
}

const Slidermain = styled.div`
  margin-bottom: 32px;
  .slider-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
  }
`;
export default Sliderconteiner;
