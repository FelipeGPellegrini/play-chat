import React from "react";
import "./App.scss"

// Components

import Header from "./Components/Header"
import AuthPage from "./Components/AuthPage"
import Footer from "./Components/Footer"

function App() {


  return (
    <>

      <div className="containerApp">
        <Header />
        <AuthPage />
        <Footer />
      </div>


    </>
  );
}

export default App;
