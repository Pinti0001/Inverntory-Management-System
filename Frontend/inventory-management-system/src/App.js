import './App.css';
import Home from './components/Home.mjs';
import Navbar from './components/Navbar.mjs';
import Products from './components/Products.mjs';
import InsertProduct from './components/InsertProduct.mjs'
import UpdateProduct from './components/UpdateProduct.mjs';
import About from './components/About.mjs';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Navbar title="IMS" about="About"></Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />

        </Routes>

      </Router>


    </div>
  );
}

export default App;