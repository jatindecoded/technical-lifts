import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import WhoItsFor from '@/components/sections/WhoItsFor';
import PersonalTraining from '@/components/sections/PersonalTraining';
import Facilities from '@/components/sections/Facilities';
import Trainers from '@/components/sections/Trainers';
import Transformations from '@/components/sections/Transformations';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="bg-dark">
      <Navbar />
      <Hero />
      <TrustBar />
      <WhoItsFor />
      <PersonalTraining />
      <Facilities />
      <Trainers />
      <Transformations />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
