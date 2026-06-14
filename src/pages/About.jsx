import React from 'react';

const AboutPage = () => {
  return (
    <div className="w-full bg-slate-50">
      
      {/* 1st Section: Hero / Who We Are */}
      <section className="relative h-[70vh] w-full flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black z-10" />
        <img 
          src="/images/about-hero.jpg" 
          alt="Who We Are" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Who We Are</h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            A dynamic, youth-led organization committed to transforming lives through 
            education, health, and sustainable community empowerment.
          </p>
        </div>
      </section>

      {/* 2nd Section: How It Started */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-[#597F30] tracking-widest uppercase mb-4">Our Journey</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-10">How it started?</h3>
          
          <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-justify md:text-center lg:text-justify">
            <p>
              As we all know, 2020 was a year the world was striving to survive the global pandemic of COVID-19. 
              During these dire times, we felt an urge to make an impact with whatever we had, and so we tried!
            </p>
            <p>
              We tried to uplift the underprivileged and help the needy with all our resources and material we could arrange; 
              it was tough, but we didn't lose our hope and kept going in order to bring a change everyone was expecting 
              the bigger authorities to bring in the societies on smaller levels.
            </p>
            <p>
              We started off as a group of bunch of highschoolers but now are a team of numerous people from different 
              parts of the city and state! 28th March 2021, the day we officially landed on the ground to serve our 
              duties as the youth of the most rapidly progressing nation; after all, the main hope of a nation lies 
              in the arms of its youth.
            </p>
          </div>
          
          <div className="mt-16">
            <img 
              src="/images/our-story.jpg" 
              alt="Our Foundation Journey" 
              className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3rd Section: What is NayePankh */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-[#597F30] tracking-widest uppercase mb-4">The Organization</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">What is NayePankh?</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              NayePankh is not just an organization; it is a platform for the youth to channel their energy 
              towards social welfare. We bridge the gap between resources and those in need, operating 
              with a focus on transparency, grassroots connectivity, and sustainable impact. 
              From providing essential supplies to educational support, we aim to give the underprivileged 
              the wings (Pankh) they need to soar to new heights.
            </p>
          </div>
          <div className="bg-[#E1F1D0] rounded-3xl p-8 h-[300px] flex items-center justify-center">
            <span className="text-[#597F30] font-bold text-lg italic">
              [Place for NayePankh Vision/Logo Image]
            </span>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;