import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import kissSunset from '@/assets/kiss-sunset.jpg';
import kissBeach from '@/assets/kiss-beach.jpg';
import kissDance from '@/assets/kiss-dance.jpg';
import kissCafe from '@/assets/kiss-cafe.jpg';

interface Polaroid {
  id: number;
  image: string;
  caption: string;
  rotation: number;
  offsetX: number;
  offsetY: number;
}

const polaroids: Polaroid[] = [
  {
    id: 1,
    image: kissSunset,
    caption: "That golden moment ✨",
    rotation: -6,
    offsetX: -10,
    offsetY: 0,
  },
  {
    id: 2,
    image: kissBeach,
    caption: "Walking together 💕",
    rotation: 4,
    offsetX: 8,
    offsetY: 15,
  },
  {
    id: 3,
    image: kissDance,
    caption: "Dancing like nobody's watching 💫",
    rotation: -3,
    offsetX: -5,
    offsetY: -10,
  },
  {
    id: 4,
    image: kissCafe,
    caption: "Our favorite coffee dates ☕",
    rotation: 5,
    offsetX: 12,
    offsetY: 5,
  },
];

const PolaroidGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section 
      ref={ref}
      className="py-24 md:py-40 px-6 bg-gradient-to-b from-kiss-soft/30 via-background to-kiss-blush/20 relative overflow-hidden"
    >
      {/* Decorative tape pieces */}
      <div className="absolute top-20 left-10 w-8 h-3 bg-kiss-warm/30 rotate-45 rounded-sm" />
      <div className="absolute top-40 right-16 w-6 h-2 bg-kiss-rose/20 -rotate-12 rounded-sm" />
      <div className="absolute bottom-32 left-1/4 w-10 h-3 bg-kiss-warm/25 rotate-12 rounded-sm" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] text-kiss-rose/60 uppercase mb-4 font-body">
            Our Memories
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-promise font-light text-foreground">
            Moments Worth <span className="italic text-kiss-rose">Kissing</span>
          </h2>
        </motion.div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {polaroids.map((polaroid, index) => (
            <motion.div
              key={polaroid.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50, rotate: polaroid.rotation * 2 }}
              animate={isInView ? { 
                opacity: 1, 
                y: polaroid.offsetY, 
                rotate: polaroid.rotation,
                x: polaroid.offsetX,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.15 * index,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-card p-3 pb-14 shadow-xl rounded-sm cursor-pointer group relative">
                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-kiss-warm/40 rounded-sm opacity-80" />
                
                {/* Photo */}
                <div className="relative overflow-hidden w-56 h-72 md:w-64 md:h-80">
                  <img
                    src={polaroid.image}
                    alt={polaroid.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Kiss overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-kiss-red/0 flex items-center justify-center"
                    whileHover={{ backgroundColor: 'hsl(350 75% 40% / 0.1)' }}
                  >
                    <motion.span
                      className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      💋
                    </motion.span>
                  </motion.div>
                </div>

                {/* Handwritten caption */}
                <p 
                  className="absolute bottom-4 left-0 right-0 text-center font-promise italic text-foreground/80 text-lg"
                  style={{ fontWeight: 400 }}
                >
                  {polaroid.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.p
          className="text-center mt-20 text-xl md:text-2xl font-promise font-light text-foreground/60 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          "Every photo holds a kiss we never got to give..."
        </motion.p>
      </div>
    </section>
  );
};

export default PolaroidGallery;
