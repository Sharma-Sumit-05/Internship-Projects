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

function App() {
  return (
    <ThemeProvider> 
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;