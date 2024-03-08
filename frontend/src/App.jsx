import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>


  );
}

export default App
