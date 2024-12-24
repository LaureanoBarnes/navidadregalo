// File: src/utils/audio.js
import { Howl } from 'howler';
import confettiSound from '../assets/sounds/confetti.mp3';
import christmasSongSound from '../assets/music/christmas-song.mp3';

// Preload sounds for better performance
const sounds = {
  confetti: new Howl({
    src: [confettiSound],
    volume: 0.8,
    preload: true,
    onloaderror: (id, error) => {
      console.error('Error loading confetti sound:', error);
    }
  }),
  
  christmasSong: new Howl({
    src: [christmasSongSound],
    volume: 0.3,
    loop: true,
    preload: true,
    onloaderror: (id, error) => {
      console.error('Error loading Christmas music:', error);
    }
  })
};

export const playConfetti = () => {
  try {
    sounds.confetti.play();
  } catch (error) {
    console.error('Error playing confetti sound:', error);
  }
};

export const playChristmasMusic = () => {
  try {
    sounds.christmasSong.play();
  } catch (error) {
    console.error('Error playing Christmas music:', error);
  }
};

export const stopChristmasMusic = () => {
  try {
    sounds.christmasSong.stop();
  } catch (error) {
    console.error('Error stopping Christmas music:', error);
  }
};