import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './pages/Welcome';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/notes' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
