export function JoinTeam() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
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
        <button className="bg-[#597F30] hover:bg-[#4a6d28] text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-xl">
          JOIN US NOW
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl mb-16 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
        <span className="text-slate-500 font-medium">Team Activity Image</span>
      </div>

      {/* Quote Section */}
      <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl text-center border border-slate-100 dark:border-slate-800">
        <p className="text-2xl font-medium italic text-slate-800 dark:text-slate-200 mb-6">
          "If we all do something, then together there is no problem that we cannot solve!"
        </p>
        <h4 className="font-bold text-[#597F30] text-lg">PRASHANT SHUKLA</h4>
        <p className="text-slate-500">Founder & President, NayePankh Foundation</p>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-slate-500 text-sm">
        <p>All our efforts are made possible only because of your support.</p>
        <p>Your donations are tax exempted under 80G of the Indian Income Tax Act.</p>
      </div>
    </div>
  );
}