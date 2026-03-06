"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Contact from "@/components/contact";
import SplashScreen from "@/components/splash-screen";
import Hobbies from "@/components/hobbies";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {(!mounted || showSplash) ? (
        <SplashScreen durationMs={3600} onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Hobbies />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
