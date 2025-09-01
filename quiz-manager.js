// quiz-manager.js
class QuizManager {
    constructor() {
        this.questions = [];
        this.selectedAnswers = {};
        this.init();
    }

    // Datos del cuestionario (copia aquí tu JSON)
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
                "correct_answer": 0
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

    init() {
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
        // Guardar la respuesta seleccionada
        this.selectedAnswers[questionIndex] = optionIndex;
        
        // Actualizar la respuesta correcta en el JSON
        this.questions[questionIndex].correct_answer = optionIndex;

        // Actualizar la interfaz visual
        this.updateQuestionVisual(questionIndex, optionIndex);
        this.updateProgress();
    }

    updateQuestionVisual(questionIndex, selectedOption) {
        // Remover selección previa
        const questionButtons = document.querySelectorAll(`button[data-question="${questionIndex}"]`);
        questionButtons.forEach(btn => {
            btn.classList.remove('btn-success', 'correct-answer');
            btn.classList.add('btn-outline-primary');
        });

        // Marcar la nueva selección
        const selectedButton = document.querySelector(`button[data-question="${questionIndex}"][data-option="${selectedOption}"]`);
        selectedButton.classList.remove('btn-outline-primary');
        selectedButton.classList.add('btn-success', 'correct-answer');
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
            this.saveAnswers();
        });

        document.getElementById('reset-quiz').addEventListener('click', () => {
            this.resetQuiz();
        });
    }

    saveAnswers() {
        if (Object.keys(this.selectedAnswers).length === 0) {
            alert('Por favor, responde al menos una pregunta antes de guardar.');
            return;
        }

        // Crear el JSON actualizado
        const updatedQuestions = this.questions.map(question => ({ ...question }));
        
        // Mostrar el JSON en la consola
        console.log('Respuestas guardadas:', JSON.stringify(updatedQuestions, null, 2));
        
        // Mostrar resumen
        this.showSummary();
        
        // Descargar el archivo JSON
        this.downloadJSON(updatedQuestions);
        
        alert('¡Respuestas guardadas exitosamente! Revisa la consola del navegador y la descarga automática.');
    }

    showSummary() {
        const answered = Object.keys(this.selectedAnswers).length;
        const total = this.questions.length;
        
        const summaryText = `Has respondido ${answered} de ${total} preguntas (${Math.round((answered/total)*100)}%).`;
        
        document.getElementById('summary-text').textContent = summaryText;
        document.getElementById('results-summary').classList.remove('d-none');
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
            this.loadQuestions(); // Recargar preguntas originales
            this.renderQuestions();
            this.updateProgress();
            document.getElementById('results-summary').classList.add('d-none');
        }
    }

    // Método para exportar las respuestas actuales
    exportAnswers() {
        return {
            answers: this.selectedAnswers,
            questions: this.questions,
            completed: Object.keys(this.selectedAnswers).length === this.questions.length
        };
    }
}

// Inicializar el cuestionario cuando la página esté cargada
let quiz;
document.addEventListener('DOMContentLoaded', function() {
    quiz = new QuizManager();
});