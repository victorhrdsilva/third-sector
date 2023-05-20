import React, { useState } from "react";
import ThirdSectorProvider from "./context/ThirdSectorProvider";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register/Register";
import { GlobalStyle } from "./styles/global";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThirdSectorProvider>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </ThirdSectorProvider>
  );
}

export default App;
