import { motion } from 'framer-motion';

interface FloatingKissesProps {
  count?: number;
}

const FloatingKisses = ({ count = 8 }: FloatingKissesProps) => {
  const kisses = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 12,
    duration: 16 + Math.random() * 10,
    size: 14 + Math.random() * 10,
    symbol: i % 3 === 0 ? '💋' : i % 3 === 1 ? '♥' : '✧',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {kisses.map((kiss) => (
        <motion.div
          key={kiss.id}
          className="absolute text-kiss-rose/30"
          style={{
            left: `${kiss.left}%`,
            fontSize: `${kiss.size}px`,
          }}
          initial={{ 
            y: '-5vh', 
            opacity: 0,
            rotate: -20,
          }}
          animate={{ 
            y: '105vh',
            opacity: [0, 0.5, 0.5, 0],
            rotate: 20,
          }}
          transition={{
            duration: kiss.duration,
            delay: kiss.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {kiss.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingKisses;
