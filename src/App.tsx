import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { About }        from './components/About';

import { EventsSection }from './components/EventsSection';
import { Timeline }     from './components/Timeline';
import { TalkShow }     from './components/TalkShow';
import { Committee }    from './components/Committee';
import { Sponsors }     from './components/Sponsors';
import { Footer }       from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-chem-dark text-chem-text overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EventsSection />
        <Timeline />
        <TalkShow />
        <Committee />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
