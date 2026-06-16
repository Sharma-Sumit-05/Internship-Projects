import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto">
        
    
        <nav className="h-16 flex items-center justify-between px-6 rounded-full shadow-lg backdrop-blur-xl border border-white/50 bg-white/80 transition-all duration-300">
          
          <Link to="/" className="font-black text-xl text-black">
            <span className="text-[#597F30]">Naye</span>Pankh
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Certificates", "Recognition"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="font-medium transition text-black hover:text-[#597F30]">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/donate" className="hidden md:block bg-[#698F3F] hover:bg-[#597F30] text-white px-5 py-2 rounded-full font-semibold transition">
              Donate
            </Link>

            <button className="text-black md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden mt-2 p-6 rounded-3xl flex flex-col gap-4 text-center shadow-xl border border-gray-200 bg-white/90 text-black">
            {["Home", "About", "Certificates", "Recognition"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}
                className="font-medium py-2">
                {item}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)} className="bg-[#698F3F] text-white py-3 rounded-full font-bold">Donate</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;