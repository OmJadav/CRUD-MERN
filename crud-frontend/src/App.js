import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
