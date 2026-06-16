import { Link } from 'react-router-dom';

export default function Donate() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      
      <h1 className="text-5xl font-black text-white mb-8">Together, Let's Make a Difference!</h1>

    
      <div className="prose prose-slate prose-lg max-w-none text-white leading-relaxed mb-12">
        <p>
          At NayePankh Foundation, our mission is straightforward: to uplift marginalized communities 
          by bridging the gap in essential resources like education, healthcare, and basic needs. 
          We are firm in our belief that every child, regardless of their financial background, 
          deserves the opportunity to dream big and reach their full potential.
        </p>
        <p>
          While we work tirelessly to address these disparities, the reality is that many families 
          remain trapped in cycles of poverty, lacking access to clean water, proper sanitation, and 
          schooling. Our goal is to serve as a beacon of hope, providing the support necessary to 
          transform lives and foster independence.
        </p>
        <p>
          Even a modest contribution has a profound effect. Your generosity can supply a student 
          with a uniform or a nutritious meal, or provide a struggling family with critical 
          hygiene and healthcare support. Every gift alters the path of a life for the better.
        </p>
      </div>

    
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <span className="px-4 py-2 bg-green-50 text-[#597F30] border border-[#597F30] rounded-lg font-bold text-sm">✓ 80G Certified</span>
        <span className="px-4 py-2 bg-green-50 text-[#597F30] border border-[#597F30] rounded-lg font-bold text-sm">✓ 12A Certified</span>
        <span className="px-4 py-2 bg-slate-100 text-black rounded-lg font-bold text-sm">Secure Payment via Razorpay</span>
      </div>

  
      <div className="bg-[#E1F1D0] p-10 rounded-3xl text-center border-2 border-[#597F30] shadow-sm">
        <h2 className="text-2xl font-bold text-[#597F30] mb-4">Support Our Mission</h2>
        <p className="mb-8 text-slate-700 font-medium">
          Ready to change a life? Click the button below to proceed to our secure donation portal.
        </p>

        <Link 
          to="/razorpay" 
          className="bg-[#597F30] hover:bg-[#4a6d28] text-white px-12 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 inline-block"
        >
          Donate Now
        </Link>
      </div>

  
      <div className="mt-16 border-t pt-10">
        <div className="grid md:grid-cols-2 gap-8 mb-10 text-sm text-white">
          <div>
            <h4 className="font-bold text-white mb-2">Transparency & Refund</h4>
            <p>Donations are voluntary and non-refundable, as all funds are immediately utilized to support our active projects.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Donor Support</h4>
            <p>If you have any questions or require assistance with your donation, please reach out to us directly.</p>
          </div>
        </div>

        <p className="italic text-white text-lg">
          "Your support holds the power to reshape the future for those who need it most."
        </p>
        <p className="font-bold mt-4 text-white">— Prashant Shukla, Founder & President</p>
      </div>
    </div>
  );
}