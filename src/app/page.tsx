import Experience from "@/components/Experience";
import AboutMe from "@/components/aboutMe";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950 dark:text-slate-50 h-full">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
