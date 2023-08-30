import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
