import HeroLiquid from '@/components/HeroLiquid';
import SectionNumeri from '@/components/SectionNumeri';
import SectionSharon from '@/components/SectionSharon';
import SectionPhotos from "@/components/SectionPhotos";
import SectionInsegnanti from '@/components/SectionInsegnanti';
import SectionCorsi from '@/components/SectionCorsi';
import SectionStudio from '@/components/SectionStudio';
import SectionEsibizioni from '@/components/SectionEsibizioni';
import SectionPrenota from '@/components/SectionPrenota';
import SectionTestimonianze from '@/components/SectionTestimonianze';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroLiquid />
      <SectionNumeri />
      <SectionSharon />
      <SectionPhotos />
      <SectionInsegnanti />
      <SectionCorsi />
      <SectionStudio />
      <SectionEsibizioni />
      <SectionPrenota />
      <SectionTestimonianze />
      <Footer />
    </main>
  );
}
