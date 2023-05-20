import React, { useState } from 'react';
import ThirdSectorProvider from './context/ThirdSectorProvider';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThirdSectorProvider>
      <Routes>
          {/*<Route path="/" element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
                                   <Route
                            path="/home"
                            element={
                                <PrivatePage>
                                    <Home />
                                </PrivatePage>
                            }
                        /> */}
        </Routes>
    </ThirdSectorProvider>
  );
}

export default App;
