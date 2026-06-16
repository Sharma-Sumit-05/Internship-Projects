// src/components/CertificateCard.jsx
const CertificateCard = ({ title, issuer, image }) => {
  return (
    <div className="group bg-black rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">


      <div className=" w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-[#597F30] text-sm font-semibold uppercase tracking-wide">{issuer}</p>
      </div>
    </div>
  );
};

export default CertificateCard;