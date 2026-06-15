import { Link } from 'react-router-dom';

export function Quote() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-slate-900 dark:text-white leading-relaxed border-l-4 border-[#597F30] pl-6">
            "If we all do something, then together there is no problem that we cannot solve!"
          </blockquote>
          
          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              All our efforts are made possible only because of your support. 
              Together, we are building a more inclusive future for everyone.
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm font-medium italic">
              * Your donations are tax exempted under 80G of the Indian Income Tax Act.
            </p>
          </div>
        </div>

        {/* Right Side: CEO Profile */}
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/Ceo.png" 
                alt="Prashant Shukla" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name Badge */}
            <div className="mt-6 text-center">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">PRASHANT SHUKLA</h4>
              <p className="text-[#597F30] font-semibold tracking-wide uppercase text-sm mt-1">Founder & President</p>
            </div>
          </div>

          <Link 
  to="/about-ceo" 
  className="mt-8 px-8 py-3 border-2 border-[#597F30] text-[#597F30] hover:bg-[#597F30] hover:text-white rounded-full font-bold transition-all duration-300"
>
  About Me
</Link>
        </div>

      </div>
    </section>
  );
}