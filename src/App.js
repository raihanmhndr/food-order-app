// import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/catalogue' element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
