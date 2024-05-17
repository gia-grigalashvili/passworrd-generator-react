import styled from "styled-components";
import Sliderconteiner from "./Sliderconteiner";
function Maincont() {
  return (
    <Mainconts>
      <Sliderconteiner />
    </Mainconts>
  );
}
const Mainconts = styled.div`
  background-color: #24232c;
  padding: 21px 16px 16px;
`;
export default Maincont;
