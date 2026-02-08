<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day Florence! 💕</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        body { 
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #fdf2f8 0%, #fef3c7 100%);
            min-height: 100vh;
        }
        .floating-heart {
            position: absolute;
            opacity: 0.6;
            pointer-events: none;
            z-index: 1;
        }
        .confetti {
            position: absolute;
            pointer-events: none;
            z-index: 50;
        }
        .photo-container {
            border: 4px solid white;
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        .photo-container:hover {
            transform: scale(1.02);
        }
        .game-card {
            background: linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%);
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px -5px rgba(244, 114, 182, 0.3);
        }
        .game-card:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(244, 114, 182, 0.4);
        }
        .memory-card {
            background: linear-gradient(135deg, #fda4af 0%, #f472b6 100%);
            border-radius: 0.75rem;
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .memory-card:hover {
            transform: scale(1.05);
        }
        .memory-card.flipped {
            background: white;
        }
    </style>
</head>
<body class="min-h-screen relative overflow-hidden">
    <!-- Floating Hearts Background -->
    <div id="hearts-container" class="fixed inset-0 pointer-events-none"></div>
    
    <!-- Confetti Container -->
    <div id="confetti-container" class="fixed inset-0 pointer-events-none"></div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <!-- Header -->
        <div class="text-center mb-6">
            <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                Happy Valentine's Day!
            </h1>
            <h2 class="text-2xl md:text-4xl font-semibold text-pink-700 animate-pulse">
                To My Beautiful Florence 💕
            </h2>
        </div>

        <!-- Photo Showcase -->
        <div class="relative w-full max-w-3xl mb-8">
            <div class="photo-container" id="photo-container">
                <img id="main-photo" src="https://image2url.com/r2/default/images/1770506370489-b79e04d1-aca7-4354-abc6-8aad9df292ff.jpg" alt="Florence" class="w-full h-auto">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p class="text-white text-lg font-medium text-center" id="photo-caption">
                        My amazing chef Florence 🍳✨
                    </p>
                </div>
            </div>

            <div class="flex justify-center mt-4 space-x-2" id="photo-dots">
                <button class="w-3 h-3 rounded-full bg-pink-500 scale-125"></button>
                <button class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"></button>
            </div>
        </div>

        <!-- Game Selection Menu -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl w-full" id="game-menu">
            <div class="game-card bg-gradient-to-r from-pink-400 to-red-400 text-white" onclick="showGame('memory')">
                <div class="text-4xl mb-2">🎴</div>
                <span class="font-semibold text-lg">Memory Match</span>
                <p class="text-sm opacity-90 mt-1">Find matching pairs!</p>
            </div>

            <div class="game-card bg-gradient-to-r from-purple-400 to-pink-400 text-white" onclick="showGame('quiz')">
                <div class="text-4xl mb-2">❓</div>
                <span class="font-semibold text-lg">Love Quiz</span>
                <p class="text-sm opacity-90 mt-1">Test our connection!</p>
            </div>

            <div class="game-card bg-gradient-to-r from-red-400 to-orange-400 text-white" onclick="showGame('clicker')">
                <div class="text-4xl mb-2">❤️</div>
                <span class="font-semibold text-lg">Heart Clicker</span>
                <p class="text-sm opacity-90 mt-1">Collect hearts!</p>
            </div>

            <div class="game-card bg-gradient-to-r from-blue-400 to-purple-400 text-white" onclick="showGame('letter')">
                <div class="text-4xl mb-2">💌</div>
                <span class="font-semibold text-lg">Love Letter</span>
                <p class="text-sm opacity-90 mt-1">Write to me!</p>
            </div>

            <div class="game-card bg-gradient-to-r from-green-400 to-teal-400 text-white" onclick="createConfetti()">
                <div class="text-4xl mb-2">🎉</div>
                <span class="font-semibold text-lg">Confetti Party</span>
                <p class="text-sm opacity-90 mt-1">Celebrate love!</p>
            </div>

            <div class="game-card bg-gradient-to-r from-yellow-400 to-orange-400 text-white" onclick="changePhoto()">
                <div class="text-4xl mb-2">📸</div>
                <span class="font-semibold text-lg">Surprise Photo</span>
                <p class="text-sm opacity-90 mt-1">New memories!</p>
            </div>
        </div>

        <!-- Games Container -->
        <div id="games-container" class="w-full max-w-2xl"></div>

        <!-- Personal Message -->
        <div class="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-6 md:p-8 max-w-3xl w-full relative overflow-hidden mb-8">
            <div class="absolute top-4 right-4 animate-pulse">💖</div>
            <p class="text-base md:text-lg text-gray-800 leading-relaxed text-center">
                Florence, seeing your beautiful smile in these photos reminds me of all 
                the wonderful moments we've shared. You're not just my girlfriend—you're 
                my best friend, my partner in crime, and the love of my life. 
                <span class="inline-block mx-1 animate-pulse">💕</span>
            </p>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center">
            <p class="text-pink-600 font-semibold text-lg">
                With all my love, always 💝
            </p>
            <p class="text-pink-500 text-sm mt-2">
                Click anywhere, play games, or explore for more magic! ✨
            </p>
        </div>
    </div>

    <script>
        // Photo data
        const florencePhotos = [
            {
                url: "https://image2url.com/r2/default/images/1770506370489-b79e04d1-aca7-4354-abc6-8aad9df292ff.jpg",
                caption: "My amazing chef Florence 🍳✨"
            },
            {
                url: "https://image2url.com/r2/default/images/1770506350329-0690163a-e5c9-4811-ae21-8e68684cfcdd.jpg",
                caption: "Beautiful Florence against the pink wall 💖"
            }
        ];

        let currentPhotoIndex = 0;
        let heartsInterval;
        let confettiTimeout;

        // Create floating hearts
        function createFloatingHearts() {
            const container = document.getElementById('hearts-container');
            container.innerHTML = '';
            
            for (let i = 0; i < 25; i++) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 24 + 12) + 'px';
                heart.style.opacity = '0.6';
                container.appendChild(heart);
                
                // Animate heart
                animateHeart(heart);
            }
        }

        function animateHeart(heart) {
            let y = parseFloat(heart.style.top);
            const animation = setInterval(() => {
                y -= 0.5;
                if (y < -10) {
                    y = 110;
                }
                heart.style.top = y + '%';
            }, 50);
            
            // Rotate heart
            let rotation = 0;
            setInterval(() => {
                rotation += 2;
                heart.style.transform = `rotate(${rotation}deg)`;
            }, 100);
        }

        // Create confetti
        function createConfetti() {
            const container = document.getElementById('confetti-container');
            container.innerHTML = '';
            
            const emojis = ['❤️', '💕', '💖', '💗', '🌹', '🌸', '✨', '💝'];
            const colors = ['#ff6b6b', '#ff8e8e', '#ffafaf', '#ffd1d1'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.fontSize = '1.5rem';
                confetti.style.opacity = '1';
                container.appendChild(confetti);
                
                // Animate confetti falling
                const duration = Math.random() * 2000 + 1000;
                const xMovement = (Math.random() - 0.5) * 100;
                
                confetti.animate([
                    { transform: 'translateY(0px) translateX(0px)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'ease-out'
                });
            }
            
            // Clear confetti after animation
            clearTimeout(confettiTimeout);
            confettiTimeout = setTimeout(() => {
                container.innerHTML = '';
            }, 3000);
        }

        // Change photo
        function changePhoto() {
            currentPhotoIndex = (currentPhotoIndex + 1) % florencePhotos.length;
            document.getElementById('main-photo').src = florencePhotos[currentPhotoIndex].url;
            document.getElementById('photo-caption').textContent = florencePhotos[currentPhotoIndex].caption;
            
            // Update dots
            const dots = document.getElementById('photo-dots').children;
            for (let i = 0; i < dots.length; i++) {
                if (i === currentPhotoIndex) {
                    dots[i].className = 'w-3 h-3 rounded-full bg-pink-500 scale-125';
                } else {
                    dots[i].className = 'w-3 h-3 rounded-full bg-white/50 hover:bg-white';
                }
            }
        }

        // Auto-change photos
        setInterval(changePhoto, 5000);

        // Show game
        function showGame(gameType) {
            const container = document.getElementById('games-container');
            
            if (gameType === 'memory') {
                container.innerHTML = `
                    <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold text-pink-700">Memory Match 💕</h3>
                            <button onclick="hideGame()" class="text-pink-600 hover:text-pink-800 font-semibold">Back</button>
                        </div>
                        <div class="text-center mb-4">
                            <p>Moves: <span id="moves-count">0</span></p>
                        </div>
                        <div class="grid grid-cols-4 gap-2 mb-4" id="memory-grid">
                            <!-- Cards will be generated here -->
                        </div>
                        <div class="flex justify-center">
                            <button onclick="resetMemoryGame()" class="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold">Reset Game</button>
                        </div>
                    </div>
                `;
                initMemoryGame();
            } else if (gameType === 'quiz') {
                container.innerHTML = `
                    <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold text-purple-700">Love Quiz 💖</h3>
                            <button onclick="hideGame()" class="text-purple-600 hover:text-purple-800 font-semibold">Back</button>
                        </div>
                        <div class="text-center" id="quiz-content">
                            <p class="text-lg mb-6">What's my favorite thing about you?</p>
                            <div class="space-y-3">
                                <button onclick="answerQuiz(0)" class="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all">Your smile</button>
                                <button onclick="answerQuiz(1)" class="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all">Your laugh</button>
                                <button onclick="answerQuiz(2)" class="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all">Your kindness</button>
                                <button onclick="answerQuiz(3)" class="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all">All of the above</button>
                            </div>
                            <p class="mt-4 text-sm text-gray-600">Question 1 of 4</p>
                        </div>
                    </div>
                `;
            } else if (gameType === 'clicker') {
                container.innerHTML = `
                    <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold text-red-700">Heart Clicker ❤️</h3>
                            <button onclick="hideGame()" class="text-red-600 hover:text-red-800 font-semibold">Back</button>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-3xl font-bold text-red-600 mb-2" id="heart-count">0 ❤️</p>
                            <p class="text-lg">Multiplier: x<span id="multiplier-count">1</span></p>
                        </div>
                        <div class="flex justify-center mb-6">
                            <button onclick="clickHeart()" class="text-6xl hover:scale-110 transition-transform">❤️</button>
                        </div>
                        <div class="flex justify-center gap-4 mb-4">
                            <button onclick="buyMultiplier()" id="buy-btn" class="px-4 py-2 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed">
                                Buy +1 Multiplier (20 ❤️)
                            </button>
                        </div>
                    </div>
                `;
                initClickerGame();
            } else if (gameType === 'letter') {
                container.innerHTML = `
                    <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-2xl font-bold text-blue-700">Love Letter 💌</h3>
                            <button onclick="hideGame()" class="text-blue-600 hover:text-blue-800 font-semibold">Back</button>
                        </div>
                        <div class="text-center">
                            <p class="mb-4">Write me a sweet message, Florence! 💕</p>
                            <textarea id="love-letter" placeholder="Type your loving message here..." class="w-full h-32 p-4 border-2 border-pink-200 rounded-lg focus:border-pink-400 focus:outline-none resize-none"></textarea>
                            <button onclick="sendLetter()" id="send-letter-btn" class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold mt-4 opacity-50 cursor-not-allowed">
                                Send Love Letter 💌
                            </button>
                        </div>
                    </div>
                `;
                setupLetterValidation();
            }
        }

        function hideGame() {
            document.getElementById('games-container').innerHTML = '';
        }

        // Memory Game Logic
        let memoryGame = {
            cards: [],
            flipped: [],
            matched: [],
            moves: 0
        };

        function initMemoryGame() {
            const memoryCards = ['❤️', '🌹', '💕', '💖', '💗', '💝', '🌸', '✨'];
            const allCards = [...memoryCards, ...memoryCards];
            // Shuffle cards
            for (let i = allCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
            }
            
            memoryGame.cards = allCards;
            memoryGame.flipped = [];
            memoryGame.matched = [];
            memoryGame.moves = 0;
            
            updateMemoryDisplay();
        }

        function updateMemoryDisplay() {
            document.getElementById('moves-count').textContent = memoryGame.moves;
            const grid = document.getElementById('memory-grid');
            grid.innerHTML = '';
            
            memoryGame.cards.forEach((card, index) => {
                const isFlipped = memoryGame.flipped.includes(index) || memoryGame.matched.includes(index);
                const cardEl = document.createElement('div');
                cardEl.className = `memory-card ${isFlipped ? 'flipped' : ''}`;
                cardEl.innerHTML = isFlipped ? card : '?';
                cardEl.onclick = () => flipCard(index);
                grid.appendChild(cardEl);
            });
        }

        function flipCard(index) {
            if (memoryGame.flipped.length >= 2 || memoryGame.matched.includes(index)) return;
            
            memoryGame.flipped.push(index);
            updateMemoryDisplay();
            
            if (memoryGame.flipped.length === 2) {
                memoryGame.moves++;
                document.getElementById('moves-count').textContent = memoryGame.moves;
                
                const [first, second] = memoryGame.flipped;
                if (memoryGame.cards[first] === memoryGame.cards[second]) {
                    memoryGame.matched.push(first, second);
                    memoryGame.flipped = [];
                    
                    if (memoryGame.matched.length === memoryGame.cards.length) {
                        setTimeout(() => {
                            alert('🎉 Congratulations! You won! 🎉');
                            createConfetti();
                        }, 500);
                    }
                } else {
                    setTimeout(() => {
                        memoryGame.flipped = [];
                        updateMemoryDisplay();
                    }, 1000);
                }
            }
        }

        function resetMemoryGame() {
            initMemoryGame();
        }

        // Quiz Logic
        let quizState = {
            currentQuestion: 0,
            score: 0
        };

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

        function answerQuiz(answerIndex) {
            if (answerIndex === quizQuestions[quizState.currentQuestion].correct) {
                quizState.score++;
            }
            
            if (quizState.currentQuestion < quizQuestions.length - 1) {
                quizState.currentQuestion++;
                updateQuizDisplay();
            } else {
                // Quiz complete
                const result = quizState.score === quizQuestions.length 
                    ? "Perfect! You know me so well! 💕" 
                    : quizState.score >= quizQuestions.length / 2 
                    ? "Great job! Our connection is strong! 💖" 
                    : "Thanks for playing! Let's get to know each other better! 💗";
                
                document.getElementById('quiz-content').innerHTML = `
                    <div class="text-center">
                        <div class="text-6xl mb-4 animate-pulse">🎉</div>
                        <p class="text-2xl font-bold text-green-600 mb-2">Quiz Complete!</p>
                        <p class="text-xl mb-4">Your score: ${quizState.score} / ${quizQuestions.length}</p>
                        <p class="text-lg mb-6">${result}</p>
                        <button onclick="resetQuiz()" class="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold">Play Again</button>
                    </div>
                `;
                createConfetti();
            }
        }

        function updateQuizDisplay() {
            const question = quizQuestions[quizState.currentQuestion];
            document.getElementById('quiz-content').innerHTML = `
                <p class="text-lg mb-6">${question.question}</p>
                <div class="space-y-3">
                    ${question.options.map((option, index) => 
                        `<button onclick="answerQuiz(${index})" class="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 p-3 rounded-lg font-medium transition-all">${option}</button>`
                    ).join('')}
                </div>
                <p class="mt-4 text-sm text-gray-600">Question ${quizState.currentQuestion + 1} of ${quizQuestions.length}</p>
            `;
        }

        function resetQuiz() {
            quizState = { currentQuestion: 0, score: 0 };
            updateQuizDisplay();
        }

        // Clicker Game Logic
        let clickerGame = {
            hearts: 0,
            multiplier: 1
        };

        function initClickerGame() {
            updateClickerDisplay();
        }

        function clickHeart() {
            clickerGame.hearts += clickerGame.multiplier;
            updateClickerDisplay();
        }

        function buyMultiplier() {
            if (clickerGame.hearts >= 20) {
                clickerGame.hearts -= 20;
                clickerGame.multiplier++;
                updateClickerDisplay();
            }
        }

        function updateClickerDisplay() {
            document.getElementById('heart-count').textContent = `${clickerGame.hearts} ❤️`;
            document.getElementById('multiplier-count').textContent = clickerGame.multiplier;
            
            const buyBtn = document.getElementById('buy-btn');
            if (clickerGame.hearts >= 20) {
                buyBtn.className = 'px-4 py-2 rounded-lg font-semibold bg-orange-500 text-white hover:bg-orange-600';
                buyBtn.onclick = buyMultiplier;
                buyBtn.disabled = false;
            } else {
                buyBtn.className = 'px-4 py-2 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed';
                buyBtn.onclick = null;
                buyBtn.disabled = true;
            }
        }

        // Letter Validation
        function setupLetterValidation() {
            const textarea = document.getElementById('love-letter');
            const sendBtn = document.getElementById('send-letter-btn');
            
            textarea.addEventListener('input', () => {
                if (textarea.value.trim()) {
                    sendBtn.className = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold mt-4';
                    sendBtn.onclick = sendLetter;
                    sendBtn.disabled = false;
                } else {
                    sendBtn.className = 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold mt-4 opacity-50 cursor-not-allowed';
                    sendBtn.onclick = null;
                    sendBtn.disabled = true;
                }
            });
        }

        function sendLetter() {
            const letter = document.getElementById('love-letter').value;
            if (!letter.trim()) return;
            
            document.getElementById('games-container').innerHTML = `
                <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl text-center">
                    <div class="text-6xl mb-4 animate-pulse">💌</div>
                    <p class="text-xl font-bold text-blue-600 mb-4">Thank you for your beautiful message!</p>
                    <div class="bg-pink-50 p-4 rounded-lg mb-4">
                        <p class="italic">"${letter}"</p>
                    </div>
                    <p class="text-lg mb-6">Every word from you means the world to me, Florence! 💖</p>
                    <button onclick="showGame('letter')" class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">Write Another Letter</button>
                </div>
            `;
        }

        // Initialize
        createFloatingHearts();
        
        // Click anywhere for confetti
        document.body.addEventListener('click', (e) => {
            if (!e.target.closest('#games-container')) {
                createConfetti();
            }
        });
    </script>
</body>
</html>

