import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [petalPosition, setPetalPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const [activeGame, setActiveGame] = useState(null);
  const [memoryGame, setMemoryGame] = useState({
    cards: [],
    flipped: [],
    matched: [],
    moves: 0,
    gameOver: false
  });
  const [loveQuiz, setLoveQuiz] = useState({
    currentQuestion: 0,
    score: 0,
    completed: false
  });
  const [clickerGame, setClickerGame] = useState({
    hearts: 0,
    multiplier: 1,
    achievements: []
  });
  const [loveLetter, setLoveLetter] = useState('');
  const [showLetter, setShowLetter] = useState(false);

  // Florence's real photos
  const florencePhotos = [
    {
      url: "https://image2url.com/r2/default/images/1770506370489-b79e04d1-aca7-4354-abc6-8aad9df292ff.jpg",
      caption: "My amazing chef Florence 🍳✨",
      alt: "Florence wearing a white chef hat and uniform with red scarf"
    },
    {
      url: "https://image2url.com/r2/default/images/1770506350329-0690163a-e5c9-4811-ae21-8e68684cfcdd.jpg",
      caption: "Beautiful Florence against the pink wall 💖",
      alt: "Florence with braids wearing striped shirt against pink wall"
    }
  ];

  // Memory game cards
  const memoryCards = [
    '❤️', '🌹', '💕', '💖', '💗', '💝', '🌸', '✨',
    '❤️', '🌹', '💕', '💖', '💗', '💝', '🌸', '✨'
  ];

  // Love quiz questions
  const quizQuestions = [
    {
      question: "What's my favorite thing about you?",
      options: ["Your smile", "Your laugh", "Your kindness", "All of the above"],
      correct: 3
    },
    {
      question: "When did we first meet?",
      options: ["At work", "Through friends", "Online", "Can't remember!"],
      correct: 1
    },
    {
      question: "What's your favorite food?",
      options: ["Pizza", "Pasta", "Sushi", "Chocolate"],
      correct: 2
    },
    {
      question: "What makes you happiest?",
      options: ["Cooking", "Spending time together", "Traveling", "All of these"],
      correct: 3
    }
  ];

  // Initialize memory game
  useEffect(() => {
    const shuffledCards = [...memoryCards].sort(() => Math.random() - 0.5);
    setMemoryGame(prev => ({ ...prev, cards: shuffledCards }));
  }, []);

  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % florencePhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Create floating hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 24 + 8,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5
    }));
    setHearts(newHearts);
  }, []);

  // Handle mouse move for interactive petals
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPetalPosition({ x: clientX, y: clientY });
  };

  // Create confetti effect
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Heart animation for photo hover
  const [heartAnimation, setHeartAnimation] = useState(null);
  const handlePhotoHover = (index) => {
    setHeartAnimation({ index, scale: 1, opacity: 1 });
    setTimeout(() => setHeartAnimation(null), 1000);
  };

  // Memory Game Functions
  const handleCardClick = (index) => {
    if (memoryGame.flipped.length === 2 || memoryGame.matched.includes(index)) return;
    
    const newFlipped = [...memoryGame.flipped, index];
    setMemoryGame(prev => ({ ...prev, flipped: newFlipped }));

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      setMemoryGame(prev => ({ ...prev, moves: prev.moves + 1 }));
      
      if (memoryGame.cards[first] === memoryGame.cards[second]) {
        setMemoryGame(prev => ({
          ...prev,
          matched: [...prev.matched, first, second],
          flipped: []
        }));
        
        if ([...memoryGame.matched, first, second].length === memoryGame.cards.length) {
          setMemoryGame(prev => ({ ...prev, gameOver: true }));
          triggerConfetti();
        }
      } else {
        setTimeout(() => {
          setMemoryGame(prev => ({ ...prev, flipped: [] }));
        }, 1000);
      }
    }
  };

  // Love Quiz Functions
  const handleQuizAnswer = (answerIndex) => {
    if (answerIndex === quizQuestions[loveQuiz.currentQuestion].correct) {
      setLoveQuiz(prev => ({ ...prev, score: prev.score + 1 }));
    }
    
    if (loveQuiz.currentQuestion < quizQuestions.length - 1) {
      setLoveQuiz(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else {
      setLoveQuiz(prev => ({ ...prev, completed: true }));
      triggerConfetti();
    }
  };

  // Clicker Game Functions
  const handleClickHeart = () => {
    const newHearts = clickerGame.hearts + clickerGame.multiplier;
    setClickerGame(prev => ({ ...prev, hearts: newHearts }));
    
    // Achievement system
    const achievements = [...clickerGame.achievements];
    if (newHearts >= 10 && !achievements.includes('first_10')) {
      achievements.push('first_10');
      setClickerGame(prev => ({ ...prev, achievements }));
    }
    if (newHearts >= 50 && !achievements.includes('fifty_hearts')) {
      achievements.push('fifty_hearts');
      setClickerGame(prev => ({ ...prev, achievements }));
    }
    if (newHearts >= 100 && !achievements.includes('hundred_hearts')) {
      achievements.push('hundred_hearts');
      setClickerGame(prev => ({ ...prev, achievements }));
    }
  };

  const buyMultiplier = () => {
    if (clickerGame.hearts >= 20) {
      setClickerGame(prev => ({
        ...prev,
        hearts: prev.hearts - 20,
        multiplier: prev.multiplier + 1
      }));
    }
  };

  // Reset games
  const resetMemoryGame = () => {
    const shuffledCards = [...memoryCards].sort(() => Math.random() - 0.5);
    setMemoryGame({
      cards: shuffledCards,
      flipped: [],
      matched: [],
      moves: 0,
      gameOver: false
    });
  };

  const resetQuiz = () => {
    setLoveQuiz({
      currentQuestion: 0,
      score: 0,
      completed: false
    });
  };

  const resetClicker = () => {
    setClickerGame({
      hearts: 0,
      multiplier: 1,
      achievements: []
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50 relative overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={triggerConfetti}
    >
      {/* Interactive Petals */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-50"
          style={{ left: petalPosition.x - 20, top: petalPosition.y - 20 }}
          animate={{ 
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 0.8 }}
        >
          🌸
        </motion.div>
      )}

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-300 opacity-70"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`
            }}
            animate={{
              y: [-20, -100],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                color: ['#ff6b6b', '#ff8e8e', '#ffafaf', '#ffd1d1'][Math.floor(Math.random() * 4)]
              }}
              animate={{
                y: ['0vh', '100vh'],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
                opacity: [1, 0]
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                ease: "easeOut"
              }}
            >
              {['❤️', '💕', '💖', '💗', '🌹', '🌸', '✨', '💝'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-2">
            Happy Valentine's Day!
          </h1>
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-pink-700"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            To My Beautiful Florence 💕
          </motion.h2>
        </motion.div>

        {/* Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-3xl mb-8"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => handlePhotoHover(currentPhotoIndex)}
            onHoverEnd={() => setHeartAnimation(null)}
          >
            <img
              src={florencePhotos[currentPhotoIndex].url}
              alt={florencePhotos[currentPhotoIndex].alt}
              className="w-full h-auto object-cover"
              onClick={() => setShowFullPhoto(true)}
            />
            
            {heartAnimation && heartAnimation.index === currentPhotoIndex && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
                animate={{ scale: heartAnimation.scale, opacity: heartAnimation.opacity }}
                transition={{ duration: 1 }}
              >
                ❤️
              </motion.div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-lg font-medium text-center">
                {florencePhotos[currentPhotoIndex].caption}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-4 space-x-2">
            {florencePhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPhotoIndex ? 'bg-pink-500 scale-125' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`View photo ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Game Selection Menu */}
        {!activeGame && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl w-full"
          >
            <motion.button
              className="bg-gradient-to-r from-pink-400 to-red-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('memory')}
            >
              <div className="text-4xl">🎴</div>
              <span className="font-semibold text-lg">Memory Match</span>
              <span className="text-sm opacity-90">Find matching pairs!</span>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-purple-400 to-pink-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('quiz')}
            >
              <div className="text-4xl">❓</div>
              <span className="font-semibold text-lg">Love Quiz</span>
              <span className="text-sm opacity-90">Test our connection!</span>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-red-400 to-orange-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('clicker')}
            >
              <div className="text-4xl">❤️</div>
              <span className="font-semibold text-lg">Heart Clicker</span>
              <span className="text-sm opacity-90">Collect hearts!</span>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-blue-400 to-purple-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('letter')}
            >
              <div className="text-4xl">💌</div>
              <span className="font-semibold text-lg">Love Letter</span>
              <span className="text-sm opacity-90">Write to me!</span>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerConfetti}
            >
              <div className="text-4xl">🎉</div>
              <span className="font-semibold text-lg">Confetti Party</span>
              <span className="text-sm opacity-90">Celebrate love!</span>
            </motion.button>

            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const randomIndex = Math.floor(Math.random() * florencePhotos.length);
                setCurrentPhotoIndex(randomIndex);
              }}
            >
              <div className="text-4xl">📸</div>
              <span className="font-semibold text-lg">Surprise Photo</span>
              <span className="text-sm opacity-90">New memories!</span>
            </motion.button>
          </motion.div>
        )}

        {/* Memory Game */}
        {activeGame === 'memory' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-2xl w-full mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-pink-700">Memory Match 💕</h3>
              <button
                className="text-pink-600 hover:text-pink-800 font-semibold"
                onClick={() => setActiveGame(null)}
              >
                Back
              </button>
            </div>
            
            <div className="text-center mb-4">
              <p>Moves: {memoryGame.moves}</p>
              {memoryGame.gameOver && (
                <motion.p 
                  className="text-green-600 font-bold text-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                >
                  🎉 Congratulations! You won! 🎉
                </motion.p>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2 mb-4">
              {memoryGame.cards.map((card, index) => {
                const isFlipped = memoryGame.flipped.includes(index) || memoryGame.matched.includes(index);
                return (
                  <motion.button
                    key={index}
                    className={`aspect-square bg-gradient-to-br from-pink-200 to-red-200 rounded-lg flex items-center justify-center text-2xl font-bold shadow-md ${
                      isFlipped ? 'bg-white' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCardClick(index)}
                    disabled={memoryGame.flipped.length === 2 || memoryGame.matched.includes(index) || memoryGame.gameOver}
                  >
                    {isFlipped ? card : '?'}
                  </motion.button>
                );
              })}
            </div>
            
            <div className="flex justify-center gap-4">
              <motion.button
                className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetMemoryGame}
              >
                Reset Game
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Love Quiz */}
        {activeGame === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-2xl w-full mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-purple-700">Love Quiz 💖</h3>
              <button
                className="text-purple-600 hover:text-purple-800 font-semibold"
                onClick={() => setActiveGame(null)}
              >
                Back
              </button>
            </div>
            
            {!loveQuiz.completed ? (
              <div className="text-center">
                <p className="text-lg mb-6">{quizQuestions[loveQuiz.currentQuestion].question}</p>
                <div className="space-y-3">
                  {quizQuestions[loveQuiz.currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuizAnswer(index)}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Question {loveQuiz.currentQuestion + 1} of {quizQuestions.length}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  Quiz Complete!
                </p>
                <p className="text-xl mb-4">
                  Your score: {loveQuiz.score} / {quizQuestions.length}
                </p>
                <p className="text-lg mb-6">
                  {loveQuiz.score === quizQuestions.length 
                    ? "Perfect! You know me so well! 💕" 
                    : loveQuiz.score >= quizQuestions.length / 2 
                    ? "Great job! Our connection is strong! 💖" 
                    : "Thanks for playing! Let's get to know each other better! 💗"}
                </p>
                <motion.button
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                >
                  Play Again
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {/* Heart Clicker Game */}
        {activeGame === 'clicker' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-2xl w-full mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-red-700">Heart Clicker ❤️</h3>
              <button
                className="text-red-600 hover:text-red-800 font-semibold"
                onClick={() => setActiveGame(null)}
              >
                Back
              </button>
            </div>
            
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-red-600 mb-2">
                {clickerGame.hearts} ❤️
              </p>
              <p className="text-lg">Multiplier: x{clickerGame.multiplier}</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <motion.button
                className="text-6xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClickHeart}
              >
                ❤️
              </motion.button>
            </div>
            
            <div className="flex justify-center gap-4 mb-4">
              <motion.button
                className={`px-4 py-2 rounded-lg font-semibold ${
                  clickerGame.hearts >= 20 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={clickerGame.hearts >= 20 ? { scale: 1.05 } : {}}
                whileTap={clickerGame.hearts >= 20 ? { scale: 0.95 } : {}}
                onClick={buyMultiplier}
                disabled={clickerGame.hearts < 20}
              >
                Buy +1 Multiplier (20 ❤️)
              </motion.button>
            </div>
            
            {clickerGame.achievements.length > 0 && (
              <div className="text-center">
                <p className="font-semibold mb-2">Achievements:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {clickerGame.achievements.includes('first_10') && (
                    <span className="bg-yellow-200 px-2 py-1 rounded text-sm">First 10 ❤️</span>
                  )}
                  {clickerGame.achievements.includes('fifty_hearts') && (
                    <span className="bg-orange-200 px-2 py-1 rounded text-sm">50 Hearts! 🎉</span>
                  )}
                  {clickerGame.achievements.includes('hundred_hearts') && (
                    <span className="bg-red-200 px-2 py-1 rounded text-sm">100 Hearts! 💖</span>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex justify-center mt-4">
              <motion.button
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetClicker}
              >
                Reset Game
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Love Letter */}
        {activeGame === 'letter' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-2xl w-full mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-700">Love Letter 💌</h3>
              <button
                className="text-blue-600 hover:text-blue-800 font-semibold"
                onClick={() => setActiveGame(null)}
              >
                Back
              </button>
            </div>
            
            {!showLetter ? (
              <div className="text-center">
                <p className="mb-4">Write me a sweet message, Florence! 💕</p>
                <textarea
                  value={loveLetter}
                  onChange={(e) => setLoveLetter(e.target.value)}
                  placeholder="Type your loving message here..."
                  className="w-full h-32 p-4 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none resize-none"
                />
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLetter(true)}
                  disabled={!loveLetter.trim()}
                >
                  Send Love Letter 💌
                </motion.button>
              </div>
            ) : (
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  💌
                </motion.div>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  Thank you for your beautiful message!
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <p className="italic">"{loveLetter}"</p>
                </div>
                <p className="text-lg mb-6">
                  Every word from you means the world to me, Florence! 💖
                </p>
                <motion.button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setLoveLetter('');
                    setShowLetter(false);
                  }}
                >
                  Write Another Letter
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {/* Personal Message */}
        {!activeGame && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-6 md:p-8 max-w-3xl w-full relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 animate-pulse">💖</div>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center">
              Florence, seeing your beautiful smile in these photos reminds me of all 
              the wonderful moments we've shared. You're not just my girlfriend—you're 
              my best friend, my partner in crime, and the love of my life. 
              <motion.span 
                className="inline-block mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕
              </motion.span>
            </p>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 text-center"
        >
          <p className="text-pink-600 font-semibold text-lg">
            With all my love, always 💝
          </p>
          <p className="text-pink-500 text-sm mt-2">
            Click anywhere, play games, or explore for more magic! ✨
          </p>
        </motion.div>
      </div>

      {/* Full Screen Photo Modal */}
      {showFullPhoto && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowFullPhoto(false)}
        >
          <motion.div
            className="max-w-4xl w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={florencePhotos[currentPhotoIndex].url}
                alt={florencePhotos[currentPhotoIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <button
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                onClick={() => setShowFullPhoto(false)}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-xl font-medium">{florencePhotos[currentPhotoIndex].caption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
