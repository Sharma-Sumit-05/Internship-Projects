export default function Donate() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <h1 className="text-5xl font-black text-slate-900 mb-8">Together, Let's Make a Difference!</h1>

      {/* Storytelling Section */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed mb-12">
        <p>
          NayePankh Foundation was founded with a simple yet powerful vision - to uplift 
          the underprivileged and marginalized communities. We strongly believe that 
          every child has the right to dream and achieve their aspirations.
        </p>
        <p>
          We have been working relentlessly, but we need your support to continue our 
          efforts. Every donation, no matter how small, can provide a child with a 
          school uniform, a pair of shoes, or a nutritious meal.
        </p>
      </div>

      {/* Donation CTA Box */}
      <div className="bg-[#E1F1D0] p-10 rounded-3xl text-center border-2 border-[#597F30]">
        <h2 className="text-2xl font-bold text-[#597F30] mb-6">Support Our Mission</h2>
        <p className="mb-8 text-slate-700">Click below to contribute to our cause.</p>
        <button 
          className="bg-[#597F30] hover:bg-[#4a6d28] text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg"
          onClick={() => window.open('YOUR_PAYMENT_LINK_HERE', '_blank')}
        >
          Donate Now
        </button>
      </div>

      {/* Founder Message */}
      <div className="mt-16 border-t pt-8">
        <p className="italic text-slate-600">
          "Your support can change the trajectory of someone's life forever."
        </p>
        <p className="font-bold mt-4 text-slate-900">— Prashant Shukla, Founder</p>
      </div>
    </div>
  );
}