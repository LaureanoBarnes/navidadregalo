import { useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { useState } from 'react';
import { playChristmasMusic, stopChristmasMusic } from '../utils/audio';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Start playing when component mounts
    playChristmasMusic();
    
    // Cleanup when component unmounts
    return () => {
      stopChristmasMusic();
    };
  }, []);

  const toggleMute = () => {
    if (isMuted) {
      playChristmasMusic();
    } else {
      stopChristmasMusic();
    }
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-50 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white" />
      ) : (
        <Music className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default BackgroundMusic;