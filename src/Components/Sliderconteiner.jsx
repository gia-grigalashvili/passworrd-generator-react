import styled from "styled-components";

function Sliderconteiner() {
  return (
    <Slidermain>
      <div className="slider-text">
        <span>Character Length</span>
        <p className="slider-value">4</p>
      </div>
      <div className="slider1">
        <input type="range" min="0" max="20" value={0} className="slider" />
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
  .slider {
    appearance: none;
    width: 100%;
    height: 8px;
    border-radius: 5px;
    background: white;
    outline: none;
    margin: 5px 0;
  }
`;
export default Sliderconteiner;
