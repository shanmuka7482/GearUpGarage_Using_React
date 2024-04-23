
import './App.css';
import Footer from './component/Footer/Footer';
import Header from "./component/Header/Header";
import Home from "./Pages/Home/Home"
// import Login from './Pages/Login/Login';
// import SignUp from './Pages/Sign Up/SignUp';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <Login/> */}
      {/* <SignUp/> */}
      <Footer/>
    </div>
  );
}

export default App;
