
import './App.css';
import Footer from './component/Footer/Footer';
import Header from "./component/Header/Header";
import Carousel from "./component/Home/Carousel/Carousel"
import Advantages from "./component/Home/Advantages/Advantages"
import WhyChooseUs from "./component/Home/WhyChooseUs/WhyChoseUs"
import HowItWorks from "./component/Home/How It Works/HowItWorks"
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Advantages/>
      <Footer/>
    </div>
  );
}

export default App;
