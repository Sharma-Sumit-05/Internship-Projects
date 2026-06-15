import React from 'react';

const AboutPage = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-black transition-colors duration-300">
      
      {/* 1st Section: Hero with welcome.png */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        {/* The Welcome background image */}
        <img 
          src="/welcome.png" 
          alt="Welcome" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-2xl">Who We Are</h1>
          <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto drop-shadow-md">
            A dynamic, youth-led organization committed to transforming lives through 
            education, health, and sustainable community empowerment.
          </p>
        </div>
      </section>

      {/* 2nd Section: Journey (Standard Background) */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-[#597F30] tracking-widest uppercase mb-4">Our Journey</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">How it started?</h3>
          
          <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-8 text-justify md:text-center">
            <p className='text-justify'>As we all know, 2020 was a year the world was striving to survive the global pandemic of COVID-19. During these dire times, we felt an urge to make an impact with whatever we had, and so we tried!</p>
            <p className='text-justify'>We tried to uplift the underprivileged and help the needy with all our resources and material we could arrange; it was tough, but we didn't lose our hope and kept going in order to bring a change everyone was expecting the bigger authorities to bring in the societies on smaller levels.</p>
            <p className="font-semibold text-[#597F30] text-justify" >28th March 2021, the day we officially landed on the ground to serve our duties as the youth of the most rapidly progressing nation.</p>
          </div>
          
          <div className="mt-16">
            <img 
              src="/aboutus.png" 
              alt="Our Foundation Journey" 
              className="rounded-3xl shadow-xl w-full h-[400px] object-cover hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3rd Section: What is NayePankh */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#597F30] tracking-widest uppercase mb-4">The Organization</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">What is NayePankh?</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              NayePankh is not just an organization; it is a platform for the youth to channel their energy 
              towards social welfare. We bridge the gap between resources and those in need, operating 
              with a focus on transparency, grassroots connectivity, and sustainable impact. 
              From providing essential supplies to educational support, we aim to give the underprivileged 
              the wings (Pankh) they need to soar to new heights.
            </p>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/whatisnayepankh.png" 
              alt="NayePankh Foundation" 
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;