import './App.css';
import { Routes, Route } from "react-router-dom";
import MemeMaker from "./components/Meme/MemeMaker";
import { ProductList } from "./components/ProductList/ProductList";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar/>
            <Routes>
              <Route path="/" element ={<Home/>}/>
        <Route path="/memes" element={<ProductList />} />

        <Route path="/generatememe/:productId" element={<MemeMaker />} />
      </Routes>
    
    </>
  );
}

export default App;
