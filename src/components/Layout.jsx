// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* pt-28 gives enough space for your floating navbar at the top */}
      <main className="flex-grow pt-28"> 
        {children}
      </main>
      <Footer />
    </div>
  );
}