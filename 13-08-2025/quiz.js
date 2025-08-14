       const quizData = [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Paris", "Madrid", "Rome"],
                correct: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: "Mars"
            },
            {
                question: "Who wrote 'Hamlet'?",
                options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
                correct: "William Shakespeare"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function loadQuestion() {
            const q = quizData[currentQuestion];
            document.getElementById("question").innerText = q.question;
            document.getElementById("options").innerHTML = "";
            document.getElementById("feedback").innerText = "";
            document.getElementById("nextBtn").style.display = "none";

            q.options.forEach(option => {
                const btn = document.createElement("button");
                btn.innerText = option;
                btn.onclick = () => checkAnswer(option);
                document.getElementById("options").appendChild(btn);
            });

            document.getElementById("score").innerText = `Score: ${score}/${quizData.length}`;
        }

        function checkAnswer(selected) {
            const correctAnswer = quizData[currentQuestion].correct;
            if (selected === correctAnswer) {
                document.getElementById("feedback").innerText = "✅ Correct!";
                score++;
            } else {
                document.getElementById("feedback").innerText = `❌ Wrong! Correct answer: ${correctAnswer}`;
            }

            // Disable all buttons after answer
            Array.from(document.getElementById("options").children).forEach(btn => btn.disabled = true);

            document.getElementById("score").innerText = `Score: ${score}/${quizData.length}`;
            document.getElementById("nextBtn").style.display = "inline-block";
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                document.getElementById("question").innerText = "Quiz Completed!";
                document.getElementById("options").innerHTML = "";
                document.getElementById("feedback").innerText = `Final Score: ${score}/${quizData.length}`;
                document.getElementById("nextBtn").style.display = "none";
            }
        }

        // Load the first question
        loadQuestion();
    