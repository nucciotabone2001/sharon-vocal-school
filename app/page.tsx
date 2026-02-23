import HeroLiquid from '@/components/HeroLiquid';
import SectionSharon from '@/components/SectionSharon';
import SectionPhotos from "@/components/SectionPhotos";
import SectionInsegnanti from '@/components/SectionInsegnanti';
import SectionCorsi from '@/components/SectionCorsi';
import SectionStudio from '@/components/SectionStudio';
import SectionPrenota from '@/components/SectionPrenota';
import SectionTestimonianze from '@/components/SectionTestimonianze';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroLiquid />
      <SectionSharon />
      <SectionPhotos />
      <SectionInsegnanti />
      <SectionCorsi />
      <SectionStudio />
      <SectionPrenota />
      <SectionTestimonianze />
      <Footer />
    </main>
  );
}
