import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home/>}/>
      </Routes>
   </>
  );
}

export default App;
