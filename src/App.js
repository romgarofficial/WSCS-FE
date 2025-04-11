import './App.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
