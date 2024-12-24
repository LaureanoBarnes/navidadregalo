import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { playConfetti } from './utils/audio';
import Snowfall from './components/Snowfall';
import GiftBox from './components/GiftBox';
import ChristmasGarland from './components/ChristmasGarland';
import BackgroundMusic from './components/BackgroundMusic';
import ThemedGallery from './components/ThemedGallery';
import ChristmasCountdown from './components/ChristmasCountdown';
import ChristmasQuiz from './components/ChristmasQuiz';
import type { Photo } from './types';

const ark: Photo[] = [
  { src: 'https://i.postimg.cc/kMQS2rpb/image-2.png', caption: 'Una mañana en Ark' },
  { src: 'https://i.postimg.cc/DZKZh0FY/image-3.png', caption: 'en casita de Ark :3' },
  { src: 'https://i.postimg.cc/XJNR96gY/image-4.png', caption: 'en camita viendo tele en ark :3' },
  { src: 'https://i.postimg.cc/rFRv1J5x/image-5.png', caption: 'en la camita :3' },
  { src: 'https://i.postimg.cc/7ZgdcZsL/image-6.png', caption: 'En el sofa de la casa :3' },
  { src: 'https://i.postimg.cc/g0s5zBPF/image-7.png', caption: 'En nuestras pc Gamer 😎 ' },
  { src: 'https://i.postimg.cc/qR7FzXkt/image-8.png', caption: 'Merendando en la cocina de nuestra casita' },
  { src: 'https://i.postimg.cc/C53rP3bD/image-9.png', caption: 'Pizza con mi amorcito 🍕 ' },
  { src: 'https://i.postimg.cc/3rkKq2gJ/image-10.png', caption: 'Los mejores viajes y paseos con mi amor :3' }
];

const juegos: Photo[] = [
  { src: 'https://i.postimg.cc/PxmCvZ2j/image-1.png', caption: 'Con mi amor en fall guys 💘' },
  { src: 'https://i.postimg.cc/YCzkFRw8/image-11.png', caption: 'En el cine de Roblox :3' },
  { src: 'https://i.postimg.cc/xCkW6yBw/Roblox-Screen-Shot20241217-192502539.png', caption: 'Nuestro trajecito de oso 🐻🐻‍❄️' },
  { src: 'https://i.postimg.cc/8zSfDZHb/image.jpg', caption: 'Nosotros :3' },
  { src: 'https://i.postimg.cc/5tj4MzZ3/merged-image.png', caption: 'Nosotros <3' },
  { src: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJudnExbXAxd2F4dmpidzhodWllYW00MXVzb2I2NTE4NHdybjY5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K9DNp3VOajUfUJYJKY/giphy.gif', caption: 'somos :3' },
];

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ 
        width: window.innerWidth, 
        height: window.innerHeight 
      });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const handleOpenGift = () => {
    playConfetti();
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-x-hidden">
      <BackgroundMusic />
      <Snowfall />
      <ChristmasGarland />

      <main className="container mx-auto px-4 py-12 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center mb-12"
        >
          🎄 ¡Feliz Navidad! 🎄
        </motion.h1>

        <ChristmasCountdown />

        <div className="flex justify-center mb-16">
          <GiftBox isOpened={isOpened} onOpen={handleOpenGift} />
        </div>

        <AnimatePresence>
          {isOpened && (
            <>
              <Confetti
                width={windowSize.width}
                height={windowSize.height}
                recycle={false}
                numberOfPieces={200}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-2xl mx-auto mb-16"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl text-center">
                  <h2 className="text-3xl font-bold text-red-600 mb-4">
                    🎉 ¡Sorpresa! 🎉
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Que tus días estén llenos de alegría y amor. 
                    ¡Este regalo viene con todo mi cariño para 
                    desearte una Navidad maravillosa mi amorcito hermosa :3!
                  </p>
                </div>
              </motion.div>

              <div className="space-y-12">
                <ThemedGallery 
                  title="Momentos en ark ❤️"
                  photos={ark} 
                />
                <ThemedGallery 
                  title="Momentos en juegos  💙" 
                  photos={juegos} 
                />
              </div>

              <ChristmasQuiz />
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;