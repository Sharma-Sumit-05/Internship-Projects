import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="-mt-28"> {/* This pulls the Hero up behind the Navbar */}
      <Hero />
      
      {/* Add your other home page sections here later */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold">More About Us</h2>
      </div>
    </div>
  );
}