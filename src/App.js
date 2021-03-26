import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
   return (<Router>
      <div>
        <Switch>
          <Route path="/auth">
            <p>Auth</p>
          </Route>
          <Route path="/college">
            <p>College</p>
          </Route>
          <Route path="/hostel">
            <p>Hostel</p>
          </Route>
          <Route path="/hostelregister">
            <p>Register</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
