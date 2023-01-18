// import logo from './logo.svg';
import "./App.css";

// fonts
import "./fonts/Kollektif-Bold.ttf";
import "./fonts/Kollektif.ttf";
import "./fonts/Kollektif-Italic.ttf";
import "./fonts/Kollektif-BoldItalic.ttf";

//react imports
import { BrowserRouter }  from "react-router-dom";

//components
// import Header from "./components/Header";

//pages

import Footer from "./components/Footer";

//material components
// import CenteredText from "./materialComponents/twoColumns/CenteredText.js";
import MaterialNavbar from "./materialComponents/navbar/MaterialNavbar.js";
import AnimatedRoutes from "./components/AnimatedRoutes";

// const NavigationOptions = {
//   nav1: "Home",
//   nav2: "About",
//   nav3: "Pipeline",
//   nav4: "Work",
//   nav5: "Services",
//   nav6: "Contact",
// };

function App() {
  // toggle click
  // const toggleClick = (id) => {
  //   console.log(id)
  // }



  // const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter>
        <MaterialNavbar/>
        {/* <Header navOptions={NavigationOptions} /> */}

        {/* <CenteredText /> */}


        <AnimatedRoutes></AnimatedRoutes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
