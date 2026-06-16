import { BrowserRouter, Routes, Route } from "react-router-dom";
// Change your import in App.jsx to:
import { ThemeProvider } from "./components/context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound"; 
import Certificates from "./pages/Certificates";
import Recognition from "./pages/Recognition";
import Donate from "./pages/Donate";
import AboutCeo from "./pages/AboutCeo";
import RazorpayPage from "./pages/RazorpayPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider> 
      <BrowserRouter>
      <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about-ceo" element={<AboutCeo />} />
             <Route path="/razorpay" element={<RazorpayPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;