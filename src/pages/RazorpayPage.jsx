export default function RazorpayPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      
      <div className="bg-black p-10 rounded-2xl shadow-xl text-center">
        
      
        <h2 className="text-4xl font-black text-white mb-6">Complete Your Donation</h2>
        <p className="text-white mb-10 text-lg">
          You are just one step away from making an impact. Please complete the details below to finish your secure contribution.
        </p>

       
        <div className="w-full h-150 bg-black border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 bg-[#E1F1D0] rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#597F30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-bold text-white text-xl mb-2">Secure Gateway Loading</h3>
          <p className="text-white max-w-sm">
            The secure payment portal is being prepared. If it does not appear automatically, please ensure you are connected to the internet.
          </p>
        </div>

      
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-white">
          <div className="flex items-center gap-2">
            <span>🔒</span> 100% Secure SSL Encrypted
          </div>
          <div className="flex items-center gap-2">
            <span>💳</span> Powered by Razorpay
          </div>
        </div>
      </div>
    </div>
  );
}