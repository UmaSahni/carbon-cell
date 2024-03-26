import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div>
      <Sidebar>
        <AllRoutes />
      </Sidebar>
      
    </div>
  );
}

export default App;
