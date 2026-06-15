export default function InfiniteScroll() {
  return (
    <div className="w-full overflow-hidden py-4 bg-green-100">
      <div className="animate-marquee flex gap-12 whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 min-w-fit">
            <img src="/image1.png" alt="Logo" className="h-12 w-auto rounded-2xl" />
            <span className="text-2xl font-bold text-black">NayePankh</span>
          </div>
        ))}
      </div>
    </div>
  );
}