import { useCallback, useState } from 'react';
import { Agenda } from './components/Agenda';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LeadMagnet } from './components/LeadMagnet';
import { MobileCtaBar } from './components/MobileCtaBar';
import { Speakers } from './components/Speakers';
import { SuccessModal } from './components/SuccessModal';

export default function App() {
  const [registered, setRegistered] = useState(false);
  const closeModal = useCallback(() => setRegistered(false), []);

  return (
    <>
      <Header />
      <main>
        <Hero onRegistered={() => setRegistered(true)} />
        <Agenda />
        <Speakers />
        <LeadMagnet />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
      <SuccessModal open={registered} onClose={closeModal} />
    </>
  );
}
