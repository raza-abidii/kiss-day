import { motion } from 'framer-motion';

const KissFooter = () => {
  return (
    <footer className="relative py-32 px-6 bg-foreground text-background">
      {/* Cinematic top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-kiss-rose/40" />

      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Kiss mark */}
          <div className="text-5xl mb-10">
            💋
          </div>

          <p className="text-2xl md:text-3xl font-promise font-light leading-relaxed">
            Until our lips meet again,
            <br />
            <span className="italic text-kiss-blush">you have all my love.</span>
          </p>

          {/* Cinematic end marker */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-kiss-rose/40" />
            <p className="text-xs tracking-[0.5em] text-kiss-blush/60 uppercase">
              Fin
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default KissFooter;
