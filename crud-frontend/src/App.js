import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Editpage from './pages/Editpage';
import Viewpage from './pages/Viewpage';
import Addpage from './pages/Addpage';
import Loader from './components/Loader';
import AdminProtected from './protected/AdminProtected';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} >
          </Route>


          <Route path="/view/:empid" element={<Viewpage />} />

          <Route path="/edit/:empid" element={<AdminProtected><Editpage /></AdminProtected>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/load" element={<Loader />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
