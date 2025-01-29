import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Techno from './components/Techno'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">

      {/* Background Grid Lines */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-grid">
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              radial-gradient(125% 125% at 50% 10%, #000 30%, #b19cd8 100%)
            `,
            backgroundSize: "80px 80px, 80px 80px, cover" // Adjust grid size
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 scroll-smooth relative">
        <Navbar />
        <Hero />
        <About />
        <Techno />
        <Project />
        <Contact />
      </div>

    </div>
  );
}

export default App;
