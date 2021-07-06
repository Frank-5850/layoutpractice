import Nav from "./Components/Nav";
import "./App.css";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import ProductBox from "./Components/ProductBox";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <div className="App">
      <Nav />
      <Wrapper>
        <SideNav />
        <Main>
          <ProductBox
            img={`https://via.placeholder.com/200`}
            title={"Backpack"}
            description={"it holds things"}
            price={6.99}
          />
          <ProductBox
            img={`https://via.placeholder.com/200`}
            title={"Sweater"}
            description={"Warm things"}
            price={99.99}
          />
          <ProductBox
            img={`https://via.placeholder.com/200`}
            title={"Sandals"}
            description={"holds feet"}
            price={39.99}
          />
          <ProductBox
            img={`https://via.placeholder.com/200`}
            title={"Laptop"}
            description={"it codes things"}
            price={999.99}
          />
          <ProductBox
            img={`https://via.placeholder.com/200`}
            title={"Thomas' coding course"}
            description={"teaches"}
            price={"priceless"}
          />
          {/* <ProductBox />
          <ProductBox />
          <ProductBox /> */}
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
