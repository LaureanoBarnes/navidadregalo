import { useMemo } from 'react';
import { motion } from 'framer-motion';

const Snowfall = () => {
  const snowflakes = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      size: Math.random() * 10 + 5,
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute bg-white rounded-full"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;