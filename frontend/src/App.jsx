import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import { ToastContainer } from 'react-toastify';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>


  );
}

export default App
