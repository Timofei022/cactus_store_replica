import React, { useState } from "react";
import "./index.css";
import Header from "./containers/Header/Header";
import { StyledEngineProvider } from "@mui/material";
import Backdrop from "./components/Backdrop";
import { Context } from "./context";

function App(props) {

  const [backdrop, showBackdrop] = useState(false)

  // const handleShowBackdropnewFunction()/ } 
  



  return (
    // <Context.Provider value={showBackdrop}>
      <StyledEngineProvider injectFirst>
        
        <Header showBackdrop={showBackdrop}/>
        
        <Backdrop state={backdrop} />

      </StyledEngineProvider>
    // </Context.Provider>
  );
}

export default App;
