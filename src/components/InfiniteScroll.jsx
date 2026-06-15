import React from 'react';

export default function InfiniteScroll() {
  return (
    <div className="w-full bg-black py-8 border-y border-white/10 overflow-hidden relative">
      {/* Gradients to fade out edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#597F30] transition-colors duration-500">
               <span className="text-white font-black text-xl">NP</span>
            </div>
            <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors duration-500 tracking-wider">
              NAYEPANKH FOUNDATION
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}