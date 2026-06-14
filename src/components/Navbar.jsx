import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-7xl">
      <nav className="bg-[#E1F1D0]/80 backdrop-blur-xl border border-white/50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        <div className="h-16 px-6 flex items-center justify-between">
          
          <Link to="/" className="font-black text-xl text-slate-900">
            <span className="text-[#597F30]">Naye</span>Pankh
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-black hover:text-[#597F30] transition font-medium">Home</Link>
            <Link to="/about" className="text-black hover:text-[#597F30] transition font-medium">About</Link>
            <Link to="/certificates" className="text-black hover:text-[#597F30] transition font-medium">Certificates</Link>
            <Link to="/recognition" className="text-black hover:text-[#597F30] transition font-medium">Recognition</Link>
            <Link to="/contact" className="text-black hover:text-[#597F30] transition font-medium">Contact</Link>
          </div>

          <Link to="/donate" className="bg-[#698F3F] hover:bg-[#597F30] text-white px-5 py-2.5 rounded-full font-semibold">
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;