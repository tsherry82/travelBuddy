import React, { } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Map from "./utils/Map"





function App() {
  return (
    <Router>
     
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Travel Buddy</h2>
          <Navbar />
        </div>
      </div>
      <div>
        <Wrapper>
          <Route exact path="/"/>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
        </Wrapper>
      </div>

    </Router>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
