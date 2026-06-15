export function JoinTeam() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-6">
          Join our <span className="text-[#597F30]">TEAM</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Join our team and make a difference in the lives of those in need. At 
          NayePankh Foundation, we are committed to creating positive change and 
          empowering communities. By joining our team, you will have the opportunity 
          to contribute your time, skills, and ideas to help make a real impact.
        </p>
      </div>

      {/* Join Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-[#597F30] hover:bg-[#4a6d28] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
          JOIN US NOW
        </button>
      </div>

      {/* Optimized Image Container */}
      <div className="relative h-90 w-full mb-16 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
        <img 
          src="/join.png" 
          alt="NayePankh Foundation Team" 
          className="h-full w-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
        />
      </div>
    </div>
  );
}