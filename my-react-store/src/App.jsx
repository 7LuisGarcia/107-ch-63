import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import Cart from './pages/Cart';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import GlobalProvider from './state/globalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="app-wrapper">

          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;