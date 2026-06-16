import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        

        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-black mb-6 block tracking-tight text-white">
            <span className="text-[#E1F1D0]">Naye</span>Pankh
          </Link>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
            Dedicated to spreading wings of hope through education, healthcare, and welfare. 
            Join us in our journey to transform lives and create a more equitable future.
          </p>
          <div className="flex gap-4">
            <span className="text-xs uppercase tracking-widest text-[#E1F1D0]/50 font-bold">Connect With Us</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Navigate</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-[#E1F1D0] transition-colors">About Us</Link></li>
            <li><Link to="/about-ceo" className="hover:text-[#E1F1D0] transition-colors">Meet the Founder</Link></li>
            <li><Link to="/certificates" className="hover:text-[#E1F1D0] transition-colors">Our Certificates</Link></li>
            <li><Link to="/recognition" className="hover:text-[#E1F1D0] transition-colors">Media & Recognition</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
          <ul className="space-y-4">
            <li className="text-[#E1F1D0] font-medium">80G & 12A Registered</li>
            <li>New Delhi, India</li>
            <li className="hover:text-white transition-colors cursor-pointer">info@nayepankh.org</li>
            <li>
              <Link to="/donate" className="inline-block mt-2 bg-[#597F30] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#4a6d28] transition-all">
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} NayePankh Foundation. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#E1F1D0] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#E1F1D0] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;