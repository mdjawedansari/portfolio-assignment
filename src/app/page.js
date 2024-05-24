// app/page.js
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='bg-black'>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
