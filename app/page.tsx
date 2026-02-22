import Image from "next/image";
import styles from "./Layout.module.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperience";
import FeaturedWork from "./components/FeaturedWork";
import TechnicalSkills from "./components/TechnicalSkills";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
// Elfsight Website Translator | Untitled Website Translator 
<script src="https://elfsightcdn.com/platform.js" async></script>
<div className="elfsight-app-9c0e2806-d48e-40a8-9dfa-47f30cbf037c" data-elfsight-app-lazy></div>

<Navbar />
<HeroSection />
<FeaturedWork />
<WorkExperience />
<TechnicalSkills />
<Contact />
    </>
    
  );
}
