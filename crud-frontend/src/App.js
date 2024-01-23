import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Addemp from './components/Addemp';
import AddEmpModal from './components/AddEmpModal';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} >
            <Route path="addemp" Component={AddEmpModal} />
            {/* <Route path="/test" Component={AddEmpModal} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
