import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { About }        from './components/About';
import { EventDetails } from './components/EventDetails';
import { EventsSection }from './components/EventsSection';
import { Timeline }     from './components/Timeline';
import { TalkShow }     from './components/TalkShow';
import { Sponsors }     from './components/Sponsors';
import { Footer }       from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-chem-dark text-chem-text overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EventDetails />
        <EventsSection />
        <Timeline />
        <TalkShow />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
