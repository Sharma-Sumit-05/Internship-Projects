export default function Recognition() {
  const featuredMedia = {
    title: "Main Featured Headline",
    image: "/main.png"
  };

  const mediaGallery = [
    { id: 1, title: "News Feature 1", image: "/news1.png" },
    { id: 2, title: "News Feature 2", image: "/news2.png" },
    { id: 3, title: "News Feature 3", image: "/news3.png" },
    { id: 4, title: "News Feature 4", image: "/news4.png" },
    { id: 5, title: "News Feature 5", image: "/news5.png" },
    { id: 6, title: "News Feature 6", image: "/news6.png" },
  ];

  return (
    <div className="max-w-screen mx-auto px-6 py-24 bg-black">
      {/* Header */}
      <div className="mb-16 text-center md:text-left">
        <h1 className="text-5xl font-black text-white mb-6">Recognition & Media</h1>
        <p className="text-xl text-white max-w-2xl">
          Proud moments and media highlights of the NayePankh journey.
        </p>
      </div>

      <div className="mb-20">
        <div className="relative group  rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={featuredMedia.image} 
            alt="Featured" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <h2 className="text-white text-3xl font-bold">{featuredMedia.title}</h2>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaGallery.map((item) => (
          <div key={item.id} className="bg-black rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
            <div className=" overflow-hidden bg-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className=" object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}