import { motion } from 'framer-motion';

const ChristmasGarland = () => {
  const lights = Array.from({ length: 20 }, (_, i) => ({
    color: i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-green-500' : 'bg-yellow-400',
    delay: i * 0.2,
  }));

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 py-4">
      {lights.map((light, index) => (
        <motion.div
          key={index}
          className={`w-4 h-4 rounded-full ${light.color}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: light.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ChristmasGarland;