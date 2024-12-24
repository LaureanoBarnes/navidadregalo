import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube } from 'swiper/modules';
import { motion } from 'framer-motion';
import type { ThemedGalleryProps } from '../types';
import 'swiper/css';
import 'swiper/css/effect-cube';

const ThemedGallery: React.FC<ThemedGalleryProps> = ({ title, photos }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="my-8 max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>
      <div className="max-w-xl mx-auto"> {/* Contenedor con ancho máximo fijo */}
        <div className="relative w-full pb-[100%]"> {/* Aspecto cuadrado para el cubo */}
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, EffectCube]}
              effect="cube"
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="h-full rounded-lg shadow-2xl"
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute inset-0">
                      <img 
                        src={photo.src} 
                        alt={photo.caption} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4">
                      <p className="text-center text-lg">{photo.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemedGallery;