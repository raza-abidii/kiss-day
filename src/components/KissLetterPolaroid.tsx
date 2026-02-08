import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import kissCafe from '@/assets/kiss-cafe.jpg';
import kissBeach from '@/assets/kiss-beach.jpg';

interface KissLetterPolaroidProps {
  name?: string;
}

const KissLetterPolaroid = ({ name = 'My Love' }: KissLetterPolaroidProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref} 
      className="relative py-24 md:py-40 px-6 bg-gradient-to-b from-background via-kiss-soft/20 to-background"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - stacked polaroids */}
          <motion.div
            className="relative h-80 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Back polaroid */}
            <motion.div
              className="absolute bg-card p-2 pb-10 shadow-xl rotate-[-8deg]"
              whileHover={{ rotate: -2, scale: 1.02 }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-kiss-warm/40 rounded-sm" />
              <img
                src={kissCafe}
                alt="Coffee date"
                className="w-44 h-56 md:w-52 md:h-64 object-cover"
              />
              <p className="mt-1 text-center font-promise italic text-foreground/70 text-sm">
                Cozy mornings ☕
              </p>
            </motion.div>
            
            {/* Front polaroid */}
            <motion.div
              className="absolute bg-card p-2 pb-10 shadow-2xl rotate-[6deg] translate-x-8 translate-y-4"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-kiss-rose/30 rounded-sm" />
              <img
                src={kissBeach}
                alt="Beach walk"
                className="w-44 h-56 md:w-52 md:h-64 object-cover"
              />
              <p className="mt-1 text-center font-promise italic text-foreground/70 text-sm">
                Hand in hand 💕
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - letter content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] text-kiss-rose/60 uppercase mb-6 font-body">
              A Love Note
            </p>
            
            <div className="space-y-6 font-body text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                In every love story, there's a moment that changes everything.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                For us? It was that first kiss.
                <span className="text-kiss-rose italic"> The one that said more than a thousand words ever could.</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                And every kiss since has been a reminder: 
                <em className="text-kiss-warm"> this is exactly where I'm meant to be.</em>
              </motion.p>
            </div>

            {/* Signature */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="h-px w-32 bg-gradient-to-r from-kiss-rose/40 to-transparent mx-auto lg:mx-0 mb-4" />
              <p className="font-promise italic text-xl text-kiss-rose">
                With every heartbeat, {name}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KissLetterPolaroid;
