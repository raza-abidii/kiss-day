import FloatingKisses from '@/components/FloatingKisses';
import KissHeroGallery from '@/components/KissHeroGallery';
import KissLetterPolaroid from '@/components/KissLetterPolaroid';
import PolaroidGallery from '@/components/PolaroidGallery';
import TwoHeartsMergePolaroid from '@/components/TwoHeartsMergePolaroid';
import KissFooter from '@/components/KissFooter';

const Index = () => {
  const girlfriendName = "Zaaru";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingKisses count={10} />

      <KissHeroGallery name={girlfriendName} />
      <KissLetterPolaroid name={girlfriendName} />
      <PolaroidGallery />
      <TwoHeartsMergePolaroid />
      <KissFooter />
    </div>
  );
};

export default Index;
