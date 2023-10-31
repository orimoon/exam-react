import { Reset } from "styled-reset";
import styled from "styled-components";
import Article from "./components/Article";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Reset />
      <div className="root">
        <Header />
        <MainStyle className="">
          <Article />
          <Article />
          <Article />
        </MainStyle>
      </div>
    </>
  );
}

const MainStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  margin: 20px auto 0;
  article {
    width: 30%;
  }
  &.active {
    background: red;
  }
`;

export default App;
