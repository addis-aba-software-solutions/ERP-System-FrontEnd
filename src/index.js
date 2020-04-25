// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import App from './App';
// import Inventory from './Components/Inventory/Inventory'

// ReactDOM.render(
//     <Router>
//         <Switch>
//             <Route
//             path="/inventory"
//             component={Inventory}
//             exact
//             >

//             </Route>
//         </Switch>
//         <App />

//     </Router>,
//     document.getElementById('root')
//     );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Inventory from "./Components/Inventory/Inventory";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/inventory" component={Inventory} exact></Route>
    </Switch>
    <App />
  </Router>,
  document.getElementById("root")
);
