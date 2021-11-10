import { BrowserRouter as Router } from "react-router-dom";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero/index";
import Products from "./components/Products";
import { ProductData, ProductDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading="Choose Your Favorites" data={ProductData}/>
      <Featured/>
      <Products heading="Desserts" data={ProductDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
