import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import ItineraryPlanner from './components/ItineraryPlanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <Services />
      <ItineraryPlanner />
      <Testimonials />
      <Footer />
    </main>
  );
}