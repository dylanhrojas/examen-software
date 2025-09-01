// quiz-manager.js
class QuizManager {
    constructor() {
        this.questions = [];
        this.correctAnswers = [];
        this.selectedAnswers = {};
        this.examFinished = false;
        this.init();
    }

    // Cargar respuestas correctas desde respuestas.json
    async loadCorrectAnswers() {
        try {
            const response = await fetch('respuestas.json');
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo respuestas.json');
            }
            this.correctAnswers = await response.json();
            console.log('Respuestas correctas cargadas:', this.correctAnswers.length, 'preguntas');
        } catch (error) {
            console.error('Error al cargar respuestas correctas:', error);
            alert('Error: No se pudo cargar el archivo de respuestas correctas. Asegúrate de que respuestas.json esté en la misma carpeta.');
        }
    }

    // Datos del cuestionario
    loadQuestions() {
        this.questions = [
            {
                "question": "¿Qué es la computación en la nube?",
                "options": [
                    "Un modelo de red local",
                    "Un modelo tecnológico que permite acceso a recursos informáticos a través de Internet",
                    "Un tipo de software de escritorio",
                    "Una red privada de servidores físicos"
                ],
                "correct_answer": null
            },
            {
                "question": "¿Qué empresa tiene la mayor cuota de mercado en servicios en la nube?",
                "options": [
                    "Google Cloud Platform",
                    "Microsoft Azure",
                    "Amazon Web Services (AWS)",
                    "Oracle Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Cuál de los siguientes es un modelo de servicio en la nube?",
                "options": [
                    "IaaS",
                    "VPN",
                    "HTTP",
                    "LAN"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué significa SaaS?",
                "options": [
                    "Software as a Service",
                    "Storage as a Service",
                    "System as a Service",
                    "Security as a Service"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué tipo de proveedor de nube ofrece servicios exclusivamente a una sola empresa?",
                "options": [
                    "Proveedor de nube pública",
                    "Proveedor de nube híbrida",
                    "Proveedor de nube privada",
                    "Proveedor de nube compartida"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Cuál es una ventaja clave de la computación en la nube?",
                "options": [
                    "Mayor consumo energético",
                    "Acceso bajo demanda a recursos informáticos",
                    "Mayor necesidad de hardware físico",
                    "Menor escalabilidad"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor destaca por sus capacidades de inteligencia artificial?",
                "options": [
                    "Google Cloud Platform",
                    "IBM Cloud",
                    "Rackspace",
                    "Digital Ocean"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué modelo de servicio permite a los usuarios ejecutar aplicaciones sin gestionar la infraestructura?",
                "options": [
                    "IaaS",
                    "PaaS",
                    "SaaS",
                    "VPN"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor ofrece Amazon EC2 y S3?",
                "options": [
                    "Google Cloud",
                    "Microsoft Azure",
                    "Amazon Web Services",
                    "Oracle Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué porcentaje del mercado global de nube tienen AWS, Azure y GCP juntos?",
                "options": [
                    "45%",
                    "55%",
                    "65%",
                    "75%"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor de nube tiene sede en China?",
                "options": [
                    "Alibaba Cloud",
                    "Salesforce Cloud",
                    "OVHCloud",
                    "IBM Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué modelo de nube combina servicios públicos y privados?",
                "options": [
                    "Nube híbrida",
                    "Nube privada",
                    "Nube pública",
                    "Nube comunitaria"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor ofrece Azure Hybrid Benefit?",
                "options": [
                    "Amazon Web Services",
                    "Google Cloud",
                    "Microsoft Azure",
                    "Oracle Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor tiene una cuota de mercado del 32%?",
                "options": [
                    "Google Cloud",
                    "Amazon Web Services",
                    "Microsoft Azure",
                    "IBM Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué servicio ofrece bases de datos gestionadas en AWS?",
                "options": [
                    "Amazon EC2",
                    "Amazon S3",
                    "Amazon RDS",
                    "Amazon Lambda"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor tiene sede en Francia?",
                "options": [
                    "Rackspace",
                    "OVHCloud",
                    "Salesforce Cloud",
                    "Alibaba Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué modelo de servicio permite alquilar recursos como máquinas virtuales?",
                "options": [
                    "SaaS",
                    "PaaS",
                    "IaaS",
                    "VPN"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor tiene ingresos anuales de aproximadamente $34 mil millones?",
                "options": [
                    "Google Cloud",
                    "Microsoft Azure",
                    "Amazon Web Services",
                    "Oracle Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué proveedor es conocido por su escalabilidad en nube pública?",
                "options": [
                    "IBM Cloud",
                    "Amazon Web Services",
                    "Oracle Cloud",
                    "Salesforce Cloud"
                ],
                "correct_answer": 0
            },
            {
                "question": "¿Qué porcentaje de empresas usa un modelo de nube híbrida según Flexera?",
                "options": [
                    "62%",
                    "72%",
                    "82%",
                    "92%"
                ],
                "correct_answer": 0
            }
        ];
    }

    async init() {
        await this.loadCorrectAnswers();
        this.loadQuestions();
        this.renderQuestions();
        this.setupEventListeners();
        this.updateProgress();
    }

    renderQuestions() {
        const container = document.getElementById('questions-container');
        container.innerHTML = '';

        this.questions.forEach((question, index) => {
            const questionCard = this.createQuestionCard(question, index);
            container.appendChild(questionCard);
        });
    }

    createQuestionCard(question, index) {
        const card = document.createElement('div');
        card.className = 'card question-card';
        
        const optionsHtml = question.options.map((option, optionIndex) => `
            <div class="d-grid option-btn">
                <button type="button" 
                        class="btn btn-outline-primary text-start" 
                        data-question="${index}" 
                        data-option="${optionIndex}"
                        onclick="quiz.selectAnswer(${index}, ${optionIndex})">
                    ${String.fromCharCode(65 + optionIndex)}. ${option}
                </button>
            </div>
        `).join('');

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Pregunta ${index + 1}</h5>
                <p class="card-text">${question.question}</p>
                <div class="options-container">
                    ${optionsHtml}
                </div>
            </div>
        `;

        return card;
    }

    selectAnswer(questionIndex, optionIndex) {
        // No permitir cambios después de terminar el examen
        if (this.examFinished) {
            return;
        }

        // Guardar la respuesta seleccionada
        this.selectedAnswers[questionIndex] = optionIndex;

        // Actualizar la interfaz visual
        this.updateQuestionVisual(questionIndex, optionIndex);
        this.updateProgress();
    }

    updateQuestionVisual(questionIndex, selectedOption) {
        // Remover selección previa
        const questionButtons = document.querySelectorAll(`button[data-question="${questionIndex}"]`);
        questionButtons.forEach(btn => {
            btn.classList.remove('btn-success', 'btn-danger', 'correct-answer', 'incorrect-answer');
            btn.classList.add('btn-outline-primary');
        });

        // Marcar la nueva selección
        const selectedButton = document.querySelector(`button[data-question="${questionIndex}"][data-option="${selectedOption}"]`);
        if (!this.examFinished) {
            selectedButton.classList.remove('btn-outline-primary');
            selectedButton.classList.add('btn-success', 'correct-answer');
        }
    }

    updateProgress() {
        const answered = Object.keys(this.selectedAnswers).length;
        const total = this.questions.length;
        const percentage = (answered / total) * 100;

        document.getElementById('progress-bar').style.width = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${answered} de ${total}`;
    }

    setupEventListeners() {
        document.getElementById('save-answers').addEventListener('click', () => {
            this.finishExam();
        });

        document.getElementById('reset-quiz').addEventListener('click', () => {
            this.resetQuiz();
        });
    }

    finishExam() {
        const totalQuestions = this.questions.length;
        const answeredQuestions = Object.keys(this.selectedAnswers).length;

        // Verificar que todas las preguntas estén contestadas
        if (answeredQuestions < totalQuestions) {
            const missingQuestions = totalQuestions - answeredQuestions;
            alert(`Debes responder todas las preguntas antes de terminar el examen.\nTe faltan ${missingQuestions} pregunta(s) por responder.`);
            
            // Scroll a la primera pregunta sin responder
            this.scrollToFirstUnanswered();
            return;
        }

        if (this.correctAnswers.length === 0) {
            alert('Error: No se han cargado las respuestas correctas. Verifica que el archivo respuestas.json esté disponible.');
            return;
        }

        // Confirmar si el usuario quiere terminar
        if (!confirm('¿Estás seguro de que quieres terminar el examen? No podrás cambiar las respuestas después.')) {
            return;
        }

        this.examFinished = true;
        this.checkAnswers();
        this.showResults();
        this.updateButtonsAfterFinish();
    }

    scrollToFirstUnanswered() {
        for (let i = 0; i < this.questions.length; i++) {
            if (!(i in this.selectedAnswers)) {
                // Encontrar la primera pregunta sin responder y hacer scroll
                const questionCard = document.querySelector(`button[data-question="${i}"]`).closest('.card');
                if (questionCard) {
                    questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Añadir un efecto visual temporal
                    questionCard.style.border = '3px solid #dc3545';
                    setTimeout(() => {
                        questionCard.style.border = '';
                    }, 3000);
                }
                break;
            }
        }
    }

    checkAnswers() {
        this.questions.forEach((question, index) => {
            const userAnswer = this.selectedAnswers[index];
            const correctAnswer = this.correctAnswers[index]?.correct_answer;
            
            if (userAnswer !== undefined) {
                const questionButtons = document.querySelectorAll(`button[data-question="${index}"]`);
                
                // Limpiar estilos previos
                questionButtons.forEach(btn => {
                    btn.classList.remove('btn-success', 'btn-danger', 'btn-outline-primary');
                    btn.disabled = true; // Deshabilitar botones
                });

                // Marcar respuesta correcta en verde
                if (correctAnswer !== undefined) {
                    const correctButton = document.querySelector(`button[data-question="${index}"][data-option="${correctAnswer}"]`);
                    if (correctButton) {
                        correctButton.classList.add('btn-success');
                    }
                }

                // Si la respuesta del usuario es incorrecta, marcarla en rojo
                if (userAnswer !== correctAnswer) {
                    const userButton = document.querySelector(`button[data-question="${index}"][data-option="${userAnswer}"]`);
                    if (userButton && userAnswer !== correctAnswer) {
                        userButton.classList.add('btn-danger');
                    }
                }
            }
        });
    }

    showResults() {
        const answeredQuestions = Object.keys(this.selectedAnswers).length;
        let correctCount = 0;

        // Contar respuestas correctas
        Object.keys(this.selectedAnswers).forEach(questionIndex => {
            const userAnswer = this.selectedAnswers[questionIndex];
            const correctAnswer = this.correctAnswers[questionIndex]?.correct_answer;
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        });

        const summaryText = `Respuestas correctas: ${correctCount} de ${answeredQuestions}`;
        
        document.getElementById('summary-text').textContent = summaryText;
        document.getElementById('results-summary').classList.remove('d-none');
    }

    updateButtonsAfterFinish() {
        const saveButton = document.getElementById('save-answers');
        saveButton.textContent = '✅ Examen Terminado';
        saveButton.disabled = true;
        saveButton.classList.remove('btn-success');
        saveButton.classList.add('btn-secondary');
    }

    downloadJSON(data) {
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cuestionario_actualizado.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    resetQuiz() {
        if (confirm('¿Estás seguro de que quieres reiniciar el cuestionario? Se perderán todas las respuestas.')) {
            this.selectedAnswers = {};
            this.examFinished = false;
            this.loadQuestions();
            this.renderQuestions();
            this.updateProgress();
            document.getElementById('results-summary').classList.add('d-none');
            
            // Restaurar botón de terminar examen
            const saveButton = document.getElementById('save-answers');
            saveButton.textContent = 'Terminar Examen';
            saveButton.disabled = false;
            saveButton.classList.remove('btn-secondary');
            saveButton.classList.add('btn-success');
        }
    }

    // Método para exportar las respuestas del usuario
    exportUserAnswers() {
        return {
            userAnswers: this.selectedAnswers,
            correctAnswers: this.correctAnswers,
            examFinished: this.examFinished,
            timestamp: new Date().toISOString()
        };
    }
}

// Inicializar el cuestionario cuando la página esté cargada
let quiz;
document.addEventListener('DOMContentLoaded', function() {
    quiz = new QuizManager();
});