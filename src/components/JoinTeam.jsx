export function JoinTeam() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-sm font-bold text-[#597F30] tracking-[0.2em] uppercase mb-4">
            Be the Change
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Join our <span className="text-[#597F30]">TEAM</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            Join our team and make a difference in the lives of those in need. 
            Contribute your time, skills, and ideas to help us empower communities 
            and create lasting social change.
          </p>
        </div>

        {/* Join Button */}
        <div className="flex justify-center mb-24">
          <button className="group relative bg-[#597F30] text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#4a6d28] hover:scale-105">
            <span className="relative z-10">JOIN US NOW</span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </div>

        {/* Full-Width Image Container */}
        <div className="w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl relative group">
          <div className="absolute inset-0 bg-black/30 z-10 transition-opacity group-hover:opacity-0" />
          <img 
            src="/join.png" 
            alt="NayePankh Foundation Team" 
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
}