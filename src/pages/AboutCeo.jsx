import React, { useEffect } from 'react';
 import { FaLinkedin, FaInstagram, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutCeo() {

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        
        <Link to="/" className="inline-flex items-center text-[#597F30] hover:text-[#4a6d28] mb-8 font-medium transition-colors">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img 
              src="/Ceo.png" 
              alt="Prashant Shukla" 
              className="w-48 h-48 rounded-full object-cover border-4 border-[#597F30] shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white">PRASHANT SHUKLA</h1>
              <p className="text-[#597F30] font-bold text-lg mt-2">Founder & President, NayePankh Foundation</p>
              

              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/prashant-shukla99/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0077b5] text-2xl transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/prashanntttt/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#e1306c] text-2xl transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            <p>
              Prashant Shukla is the visionary founder and President of the NayePankh Foundation. Driven by a deep-rooted commitment to social justice and equity, he established the organization to bridge the gap between resources and those in need.
            </p>
            <p>
              Under his leadership, NayePankh has evolved into a dedicated platform that empowers marginalized communities through education, healthcare, and essential welfare initiatives. Prashant believes that "service to mankind is service to God" and has consistently worked to break the cycle of poverty by providing a "ray of hope" to those trapped in socio-economic hardships.
            </p>
            <p>
              His philosophy centers on grassroots connectivity and transparency. By mobilizing the youth, he has created an ecosystem where empathy translates into action, ensuring that every individual—especially children—has the opportunity to dream and soar to new heights.
            </p>
          </div>
        </div>

   
        <div className="mt-12 text-center p-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 italic">
            "We honor the dedication and tireless efforts of Prashant Shukla in leading NayePankh towards a brighter, more inclusive future for India."
          </p>
        </div>
      </div>
    </div>
  );
}