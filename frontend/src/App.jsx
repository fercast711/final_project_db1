import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  console.log('hola');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
