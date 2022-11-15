//import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import StrawberryCupcakes from './pages/StrawberryCupcakes'
import Cookies from './pages/Cookies'
import Brownies from './pages/Brownies'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/StrawberryCupcakes' element={<StrawberryCupcakes />} />
        <Route path='/Cookies' element={<Cookies />} />
        <Route path='/Brownies' element={<Brownies />} />
      </Routes>
    </Router>
  );
}

export default App;
