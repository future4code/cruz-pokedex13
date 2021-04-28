import React from "react";
import GlobalState from "./GlobalState/GlobalState";
import Router from "./routes/Router";
// import Header from './components/Header'

const App = () => {
  return(
    <GlobalState>
    <Router/>
</GlobalState>
  ) 
};

export default App;
