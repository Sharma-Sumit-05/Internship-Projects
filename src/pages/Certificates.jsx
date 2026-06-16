
import CertificateCard from "../components/CertificateCard";

export default function Certificates() {
  const certificates = [
    { 
      title: "80G Registration", 
      issuer: "Income Tax Department", 
      image: "/certificate1.png" 
    },
    { 
      title: "12A Registration", 
      issuer: "Income Tax Department", 
      image: "/certificate2.png" 
    },
    { 
      title: "NGO Darpan", 
      issuer: "NITI Aayog, Govt. of India", 
      image: "/certificate3.png" 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white mb-4">Our Certificates</h1>
        <p className="text-lg text-white max-w-xl">
          NayePankh operates with complete transparency. Here are our official government registrations and certifications.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard 
            key={index} 
            title={cert.title} 
            issuer={cert.issuer}
            image={cert.image}
          />
        ))}
      </div>
    </div>
  );
}