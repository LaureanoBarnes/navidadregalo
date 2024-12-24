import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';

interface Story {
  question: string;
  options: string[];
  correctAnswer: number;
  anecdote: string;
}

const stories: Story[] = [
  {
    question: "¿Por cual juego nos conocimos?",
    options: [
      "League of legends",
      "Roblox",
      "Candy crash",
      "Call of duty"
    ],
    correctAnswer: 0,
    anecdote: "Nos conocimos jugando league of legends, y gracias a eso conoci a mi amorcito. ¡Es el juego que nos unio!"
  },
  {
    question: "¿a que juego hemos jugado?",
    options: [
      "minecraft",
      "Roblox",
      "Ark",
      "League of legends",
      "World of warcraft",
      "¡Todos los anteriores!"
    ],
    correctAnswer: 5,
    anecdote: "Cuando se trata de Juegos, nosotros nos gusta jugar a todo. ¡Es el juego lo que nos unio!, no importa el juego, sino, los lindos momentos que nos une"
  },
  {
    question: "¿Cual fue el primer anime que vimos juntos?",
    options: [
      "Kaguya-Sama",
      "Naruto",
      "La reina del Flow",
      "One piece"
    ],
    correctAnswer: 0,
    anecdote: "El primer anime que vimos y terminamos juntitos fue kaguya sama :3, siempre estando hasta tardecito viendo anime o novelas, mientras disfrutamos una linda charlita y jugando de fondo <3"
  }
];

const ChristmasQuiz = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnecdote, setShowAnecdote] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setTimeout(() => {
      setShowAnecdote(true);
    }, 1000);
  };

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
      setSelectedAnswer(null);
      setShowAnecdote(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto mt-16"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        Anécdotas Navideñas
      </h3>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h4 className="text-xl text-white mb-4">{stories[currentStory].question}</h4>

            <div className="space-y-3">
              {stories[currentStory].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition-colors ${
                    selectedAnswer === null
                      ? 'bg-white/20 hover:bg-white/30 text-white'
                      : index === stories[currentStory].correctAnswer
                      ? 'bg-green-500/50 text-white'
                      : selectedAnswer === index
                      ? 'bg-red-500/50 text-white'
                      : 'bg-white/20 text-white/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showAnecdote && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-white/20 rounded-lg text-white"
              >
                <p>{stories[currentStory].anecdote}</p>
                {currentStory < stories.length - 1 && (
                  <button
                    onClick={nextStory}
                    className="mt-4 flex items-center gap-2 text-white/80 hover:text-white"
                  >
                    Siguiente anécdota <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ChristmasQuiz;