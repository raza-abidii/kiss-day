import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import kissStars from '@/assets/kiss-stars.jpg';

const TwoHeartsMergePolaroid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [merged, setMerged] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Motion values for both hearts
  const leftHeartX = useMotionValue(0);
  const rightHeartX = useMotionValue(0);
  
  // Calculate distance between hearts
  const distance = useTransform([leftHeartX, rightHeartX], ([left, right]) => {
    return Math.abs((right as number) - (left as number));
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Check if hearts are close enough to merge
  useEffect(() => {
    const unsubscribe = distance.on('change', (d) => {
      if (d < 80 && !merged) {
        setMerged(true);
        // Animate hearts to center
        animate(leftHeartX, 0, { type: 'spring', stiffness: 300 });
        animate(rightHeartX, 0, { type: 'spring', stiffness: 300 });
      }
    });
    return () => unsubscribe();
  }, [distance, merged, leftHeartX, rightHeartX]);

  const heartSize = 64;
  const dragConstraint = containerWidth / 3;

  return (
    <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-kiss-blush/20 via-background to-kiss-soft/30 relative overflow-hidden">
      {/* Decorative polaroid corners */}
      <div className="absolute top-10 right-10 w-20 h-24 bg-card/30 rotate-12 shadow-lg hidden md:block" />
      <div className="absolute bottom-16 left-8 w-16 h-20 bg-card/20 -rotate-6 shadow-lg hidden md:block" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] text-kiss-rose/60 uppercase mb-4 font-body">
            An Interactive Moment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-promise font-light text-foreground">
            {merged ? 'Our Hearts, Together' : 'Bring Our Hearts Together'}
          </h2>
          {!merged && (
            <p className="text-muted-foreground font-body mt-4 text-sm">
              Drag the hearts toward each other
            </p>
          )}
        </motion.div>

        {/* Hearts container - styled like a polaroid frame */}
        <motion.div 
          className="bg-card p-4 pb-8 shadow-2xl inline-block mx-auto"
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-kiss-warm/40 rounded-sm z-10" />
          
          <div 
            ref={containerRef}
            className="relative h-64 w-72 md:w-96 md:h-80 flex items-center justify-center bg-gradient-to-br from-kiss-soft to-kiss-blush/50 rounded-sm"
          >
            {!merged ? (
              <>
                {/* Left Heart */}
                <motion.div
                  className="absolute cursor-grab active:cursor-grabbing"
                  style={{ x: leftHeartX, left: 'calc(50% - 100px)' }}
                  drag="x"
                  dragConstraints={{ left: -dragConstraint, right: dragConstraint }}
                  dragElastic={0.1}
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart 
                      size={heartSize} 
                      className="text-kiss-red fill-kiss-red drop-shadow-lg"
                    />
                  </motion.div>
                </motion.div>

                {/* Right Heart */}
                <motion.div
                  className="absolute cursor-grab active:cursor-grabbing"
                  style={{ x: rightHeartX, left: 'calc(50% + 40px)' }}
                  drag="x"
                  dragConstraints={{ left: -dragConstraint, right: dragConstraint }}
                  dragElastic={0.1}
                  whileTap={{ scale: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                  >
                    <Heart 
                      size={heartSize} 
                      className="text-kiss-rose fill-kiss-rose drop-shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </>
            ) : (
              /* Merged hearts animation - reveals a photo */
              <motion.div
                className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {/* Revealed photo */}
                <img
                  src={kissStars}
                  alt="Under the stars together"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with heart and message */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex flex-col items-center justify-end pb-8">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <Heart 
                      size={48} 
                      className="text-kiss-rose fill-kiss-rose drop-shadow-2xl mb-2"
                    />
                  </motion.div>
                  <motion.p
                    className="text-card text-lg md:text-xl font-promise italic"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Every kiss with you feels like magic ✨
                  </motion.p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Polaroid caption */}
          <p className="mt-4 font-promise italic text-foreground/80 text-lg">
            {merged ? 'You did it! 💕' : 'Bring us together...'}
          </p>
        </motion.div>

        {/* Reset button when merged */}
        {merged && (
          <motion.button
            className="mt-8 text-sm text-muted-foreground hover:text-kiss-rose transition-colors font-body block mx-auto"
            onClick={() => {
              setMerged(false);
              leftHeartX.set(0);
              rightHeartX.set(0);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Try again ↺
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default TwoHeartsMergePolaroid;
