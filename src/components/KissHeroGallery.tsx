import { motion } from 'framer-motion';
import kissHero from '@/assets/kiss-hero.jpg';
import kissSunset from '@/assets/kiss-sunset.jpg';
import kissDance from '@/assets/kiss-dance.jpg';

interface KissHeroGalleryProps {
  name?: string;
}

const KissHeroGallery = ({ name = 'My Love' }: KissHeroGalleryProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Scattered polaroid background */}
      <div className="absolute inset-0 z-0">
        {/* Main background - soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-kiss-soft via-background to-kiss-blush/30" />
        
        {/* Scattered background polaroids */}
        <motion.div
          className="absolute -top-10 -left-10 w-48 h-60 bg-card p-2 shadow-lg rotate-[-15deg] opacity-40"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img src={kissSunset} alt="" className="w-full h-48 object-cover" />
        </motion.div>
        
        <motion.div
          className="absolute top-20 -right-16 w-40 h-52 bg-card p-2 shadow-lg rotate-[12deg] opacity-30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <img src={kissDance} alt="" className="w-full h-40 object-cover" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 -left-8 w-36 h-44 bg-card p-2 shadow-lg rotate-[8deg] opacity-30 hidden md:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <img src={kissHero} alt="" className="w-full h-32 object-cover" />
        </motion.div>
      </div>

      {/* Main content - centered polaroid with text */}
      <div className="relative z-10 text-center px-6">
        {/* Date tag */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.5em] text-kiss-rose/70 uppercase mb-8 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          February 13th • Kiss Day
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-promise font-light text-foreground leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Kiss
          <br />
          <motion.span
            className="italic text-kiss-rose"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            just for you
          </motion.span>
        </motion.h1>

        {/* Name */}
        <motion.p
          className="text-lg md:text-xl font-body font-light text-foreground/70 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {name}
        </motion.p>

        {/* Central featured polaroid */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 40, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ delay: 1.5, duration: 1, type: 'spring' }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <div className="bg-card p-3 pb-12 shadow-2xl inline-block">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 bg-kiss-warm/50 rounded-sm" />
            <img
              src={kissHero}
              alt="Our special moment"
              className="w-64 h-80 md:w-80 md:h-96 object-cover"
            />
            <p className="mt-2 font-promise italic text-foreground/80 text-lg">
              The moment everything changed 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KissHeroGallery;
