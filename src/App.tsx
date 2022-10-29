import React from "react";
import MainContainer from "./components/mainContainer";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <MainContainer />
    </AppProvider>
  );
}

export default App;
