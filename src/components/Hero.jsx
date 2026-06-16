import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-0" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm mb-6">
              UP GOVERNMENT, 80G & 12A Registered NGO
            </span>
            

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              Together, We <br className="hidden md:block" /> Can Create Lasting Change
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Be a part of the change. Whether you give your time, share your skills, or make a contribution, every effort creates a better tomorrow.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/donate')}
                className="bg-[#698F3F] hover:bg-[#597F30] px-8 py-4 rounded-full text-white font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Donate Now
              </button>
              <button 
                onClick={() => navigate('/volunteer')}
                className="border border-white/30 bg-white/5 hover:bg-white px-8 py-4 rounded-full text-white font-semibold hover:text-slate-900 transition-all active:scale-95"
              >
                Become Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:block absolute bottom-10 right-6 lg:right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white w-80">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#E1F1D0]">2L+</h3>
            <p className="text-xs text-gray-300 uppercase tracking-wider">Lives Impacted</p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#E1F1D0]">500+</h3>
            <p className="text-xs text-gray-300 uppercase tracking-wider">Volunteers</p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#E1F1D0]">50+</h3>
            <p className="text-xs text-gray-300 uppercase tracking-wider">Cities</p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-3xl font-bold text-[#E1F1D0]">100+</h3>
            <p className="text-xs text-gray-300 uppercase tracking-wider">Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;