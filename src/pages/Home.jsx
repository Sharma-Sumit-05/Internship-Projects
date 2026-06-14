import Hero from "../components/Hero";
import { JoinTeam } from "../components/JoinTeam";
import AboutPage from "./About";

export default function Home() {
  return (
<main>
 <Hero />
 <AboutPage />
 <JoinTeam />
</main>   
     
  );
}