import "./App.scss";
import Banner from "./component/Banner";
import Header from "./component/Header";
import Content from "./component/Content";
import Categories from "./component/Categories";
import Introduce from "./component/Introduce";
import Product from "./component/Product";
import New from "./component/New";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import CopyRight from "./component/CopyRight";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Categories />
      <Introduce />
      <Product />
      <New />
      <Contact />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
