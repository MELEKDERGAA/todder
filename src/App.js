import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Hero';
function App() {
  return (
    
      <Router>
        <div className="min-h-full w-full flex flex-col relative  bg-slate">
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
