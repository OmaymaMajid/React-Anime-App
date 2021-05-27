import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp'
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
  <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
              <Route path="/main" component={Main}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route exact path="/" component={Login}></Route>
            
          </Switch>
        </AuthProvider>
      </Router>
      </div>
      
  
  );
}

export default App;
