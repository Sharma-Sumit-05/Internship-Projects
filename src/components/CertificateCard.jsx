const CertificateCard = ({ title, issuer }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      {/* Empty space for your image */}
      <div className="h-64 bg-slate-100 rounded-2xl mb-6 flex items-center justify-center border-2 border-dashed border-slate-300">
        <span className="text-slate-400 font-medium">Image Placeholder</span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-[#597F30] font-semibold">{issuer}</p>
    </div>
  );
};

export default CertificateCard;