import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm mt-8 mb-4">
              UP GOVERNMENT, 80G & 12A Registered NGO
            </span>
            <h1 className="text-white text-5xl md:text-5xl lg:text-7xl font-black leading-[0.95]">
              Together, We <br /> Can Create Lasting Change
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl">
              Be a part of the change. Whether you give your time, share your skills, or make a contribution, every effort creates a better tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/donate')}
                className="bg-[#698F3F] hover:bg-[#597F30] px-8 py-4 rounded-full text-white font-semibold transition"
              >
                Donate Now
              </button>
              <button 
                onClick={() => navigate('/volunteer')}
                className="border border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Become Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Impact Card */}
      <div className="hidden lg:block absolute bottom-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white">
        <div className="grid grid-cols-2 gap-6">
          <div><h3 className="text-3xl font-bold">2L+</h3><p className="text-sm text-gray-300">Lives Impacted</p></div>
          <div><h3 className="text-3xl font-bold">500+</h3><p className="text-sm text-gray-300">Volunteers</p></div>
          <div><h3 className="text-3xl font-bold">50+</h3><p className="text-sm text-gray-300">Cities</p></div>
          <div><h3 className="text-3xl font-bold">100+</h3><p className="text-sm text-gray-300">Campaigns</p></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;