import Hero from "../components/Hero";
import InfiniteScroll from "../components/InfiniteScroll";
import { JoinTeam } from "../components/JoinTeam";
import AboutPage from "./About";
import { Quote } from "../components/Quote";

export default function Home() {
  return (
<main>
 <Hero />
 <InfiniteScroll />
 <AboutPage />
 <JoinTeam />
 <Quote/>
</main>   
     
  );
}