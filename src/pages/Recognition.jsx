export default function Recognition() {
  // You can easily add more items here later
  const mediaItems = [1, 2, 3, 4, 5]; 

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Recognition & Media</h1>
        <p className="text-lg text-slate-600 max-w-xl">
          Proud moments and media highlights of the NayePankh journey.
        </p>
      </div>

      {/* Featured Main Image Section 
      
      <img 
  src="/featured.jpg" 
  alt="Featured Recognition" 
  className="w-full h-96 object-cover rounded-3xl shadow-lg"
/>
      */}
      <div className="mb-12">
        <div className="w-full h-96 bg-slate-100 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-300">
          <span className="text-slate-400 font-medium">Main Featured Image</span>
        </div>
      </div>

      {/* Grid Layout for other media */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item) => (
          <div key={item} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
              <span className="text-slate-400 font-medium">Media Clipping {item}</span>
            </div>
            <div className="p-2 mt-4">
              <h3 className="font-bold text-slate-900">News Feature {item}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}