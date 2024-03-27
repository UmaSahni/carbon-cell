import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div className="app" style={{backgroundColor:"#0e0e0e" , height:"100vh"}} >
      <Sidebar>
        <AllRoutes />
      </Sidebar>
      
    </div>
  );
}

export default App;
