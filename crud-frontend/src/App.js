import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Editpage from './pages/Editpage';
import Viewpage from './pages/Viewpage';
import Addpage from './pages/Addpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} >
          </Route>
          <Route path="/view/:empid" Component={Viewpage} />
          <Route path="/edit/:id" Component={Editpage} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
