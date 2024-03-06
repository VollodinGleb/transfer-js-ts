import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="winter-practic/" element={<Home />} />
          <Route path="winter-practic/portfolio/" element={<Portfolio />} />
          <Route path="winter-practic/features/" element={<Features />} />
          <Route path="winter-practic/pricing/" element={<Pricing />} />
          <Route path="winter-practic/faq/" element={<FAQ />} />
          <Route path="winter-practic/blog/" element={<Blog />} />
          <Route path="winter-practic/contactUS/" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
