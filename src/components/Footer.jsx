import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-black mb-4 block">
            <span className="text-[#E1F1D0]">Naye</span>Pankh
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Empowering the underprivileged through education, healthcare, and welfare initiatives. 
            Together, we can spread wings of hope.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[#E1F1D0]">Navigate</h4>
          <ul className="space-y-3 text-slate-400">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/certificates" className="hover:text-white transition">Certificates</Link></li>
            <li><Link to="/recognition" className="hover:text-white transition">Recognition</Link></li>
            <li><Link to="/donate" className="hover:text-white transition">Donate Now</Link></li>
          </ul>
        </div>

        {/* Legal/Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[#E1F1D0]">Legal & Support</h4>
          <ul className="space-y-3 text-slate-400">
            <li>80G & 12A Registered</li>
            <li>New Delhi, India</li>
            <li>info@nayepankh.org</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} NayePankh Foundation. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;