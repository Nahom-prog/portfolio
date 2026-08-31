import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
