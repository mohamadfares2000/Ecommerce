import NavBar from "./components/navBar/NavBar";
import Offer from "./components/offer section/Offer";
import {useState} from "react";
import HomePage from "./pages/homePage/HomePage";
import SignIn from "./pages/sign in/SignIn";
import SignUp from "./pages/sign up/SignUp";
import Router from "./Router";

function App() {
    // const [show, setShow] = useState(true)
  return (
    <div className="App">
        {/* {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
        <NavBar/>*/}
     {/* <HomePage/>  */}
     {/* <SignIn/> */}
     {/* <SignUp/> */}
     <Router />
    </div>
  );
}

export default App;
