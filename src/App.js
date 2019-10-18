import React from "react";
import Router from "./Router";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <NavLink to="/">HOME</NavLink>
//         </li>
//         <li>
//           <NavLink to="/cart">CART</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
