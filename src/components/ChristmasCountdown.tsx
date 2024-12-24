import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const christmas = new Date(new Date().getFullYear(), 11, 25);
      const now = new Date();
      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Cuenta regresiva para Navidad</h2>
      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-sm text-white/80 capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChristmasCountdown;