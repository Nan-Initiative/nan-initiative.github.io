import { Community } from "./sections/Community";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Language } from "./sections/Language";
import { Principles } from "./sections/Principles";
import { Projects } from "./sections/Projects";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Language />
        <Principles />
        <Community />
      </main>
      <Footer />
    </>
  );
}
