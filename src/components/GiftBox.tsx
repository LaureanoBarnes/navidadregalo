import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import type { GiftBoxProps } from '../types';

const GiftBox: React.FC<GiftBoxProps> = ({ isOpened, onOpen }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => setShouldRender(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  if (!shouldRender) return null;

  return (
    <motion.div 
      onClick={!isOpened ? onOpen : undefined}
      whileHover={!isOpened ? { scale: 1.05 } : {}}
      animate={isOpened ? { 
        scale: [1, 1.2, 0],
        opacity: [1, 1, 0],
      } : {}}
      transition={{ duration: 1.5 }}
      className="relative w-64 h-64 cursor-pointer"
    >
      <motion.div
        animate={isOpened ? {
          rotateX: -120,
          y: -20,
        } : {}}
        transition={{ duration: 1 }}
        className="absolute -top-8 left-0 right-0 h-8 bg-red-700 rounded-t-lg origin-bottom"
      />
      
      <motion.div
        animate={isOpened ? {
          rotateY: 360,
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-red-600 rounded-lg shadow-xl"
      >
        <div className="absolute top-0 left-1/2 w-8 h-full bg-yellow-500 -translate-x-1/2 rounded">
          <div className="absolute -top-12 left-1/2 w-24 h-12 bg-yellow-500 -translate-x-1/2 rounded-full" />
        </div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={isOpened ? { rotate: 360 } : {}}
          transition={{ duration: 1 }}
        >
          <Gift className="w-20 h-20 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GiftBox;