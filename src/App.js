import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
//import Contact from './routes/Contact';
import Opening from './routes/Opening';
import HomeContextProvider from './context/HomeContext';


function App() {


  return (
    <HomeContextProvider>
      <div >
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
          {/*   <Route path='/contact' element={<Contact />} /> */}
            <Route index element={<Opening />} />
          </Route>
        </Routes>
      </div>
    </HomeContextProvider>
  );
}

export default App;
