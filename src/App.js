
import './App.css';
import Footer from './component/Footer/Footer';
import Header from "./component/Header/Header";
import Contact from "./Pages/Contact";
// import Service from './Pages/Services';
// import Home from "./Pages/Home/Home"
// import Login from './Pages/Login/Login';
// import SignUp from './Pages/Sign Up/SignUp';
function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>
      {/* <Service/> */}
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Footer/>
    </div>
  );
}

export default App;
