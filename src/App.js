import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Hotels' element={<List />} />
        <Route path='/Hotel/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
