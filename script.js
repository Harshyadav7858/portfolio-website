// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(99, 102, 241, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// AI Chatbot Implementation
class PortfolioChatbot {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.isRecording = false;
        this.isLightTheme = false;
        this.conversationHistory = [];
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        
        // Portfolio data for context
        this.portfolioData = {
            name: "Harsh Yadav",
            role: "Full Stack Developer & Designer",
            experience: "6+ months",
            projects: "7+ Real Time Projects",
            dsa: "150+ DSA Questions Solved",
            skills: {
                frontend: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
                backend: ["Java", "Spring Boot", "MySQL", "REST APIs"],
                tools: ["Git", "Maven", "Postman", "Cloud Services"]
            },
            projects: [
                {
                    name: "Real Time Chat Application",
                    description: "A real time chat application with React.js frontend and Spring Boot backend, featuring user authentication, end to end encryption, and real time messaging.",
                    tech: ["React.js", "Java", "Spring Boot", "MySQL"],
                    github: "https://github.com/Harshyadav7858/real-time-chat-app",
                    live: "https://real-time-chat-app-harsh.netlify.app/"
                },
                {
                    name: "Task Management System",
                    description: "A comprehensive task management application with user authentication, project tracking, and team collaboration features built with Spring Boot and React.js.",
                    tech: ["React.js", "Spring Boot", "MySQL", "REST APIs"]
                },
                {
                    name: "Employee Management System",
                    description: "A complete employee management solution with CRUD operations, department management, and reporting features using Spring Boot backend and React.js frontend.",
                    tech: ["React.js", "Java", "Spring Boot", "MySQL"]
                }
            ],
            education: {
                degree: "Bachelor of Engineering in Electronics And Computer",
                institution: "MBM Engineering College, Jodhpur",
                duration: "2021 - 2025"
            },
            contact: {
                email: "Harshraoyd@gmail.com",
                phone: "+918619023140",
                location: "Bhiwadi, Rajasthan, India",
                github: "https://github.com/Harshyadav7858/real-time-chat-app",
                linkedin: "https://www.linkedin.com/in/harsh-yadav-113a7b259/"
            }
        };
        
        this.initializeChatbot();
        this.initializeSpeechRecognition();
    }
    
    initializeChatbot() {
        this.toggle = document.getElementById('chatbotToggle');
        this.container = document.getElementById('chatbotContainer');
        this.messages = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatbotInput');
        this.sendButton = document.getElementById('chatbotSend');
        this.closeButton = document.getElementById('chatbotClose');
        this.voiceButton = document.getElementById('chatbotVoice');
        this.themeButton = document.getElementById('chatbotTheme');
        
        // Debug: Check if elements are found
        console.log('Chatbot elements found:', {
            toggle: !!this.toggle,
            container: !!this.container,
            messages: !!this.messages,
            input: !!this.input,
            sendButton: !!this.sendButton,
            closeButton: !!this.closeButton,
            voiceButton: !!this.voiceButton,
            themeButton: !!this.themeButton
        });
        
        this.bindEvents();
        this.showWelcomeMessage();
    }
    
    initializeSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.input.value = transcript;
                this.stopRecording();
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.stopRecording();
            };
            
            this.recognition.onend = () => {
                this.stopRecording();
            };
        }
    }
    
    bindEvents() {
        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.toggleChatbot());
        }
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.closeChatbot());
        }
        if (this.sendButton) {
            this.sendButton.addEventListener('click', () => this.sendMessage());
        }
        if (this.voiceButton) {
            this.voiceButton.addEventListener('click', () => this.toggleVoiceRecording());
        }
        if (this.themeButton) {
            this.themeButton.addEventListener('click', () => this.toggleTheme());
        }
        
        if (this.input) {
            this.input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
        
        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && this.container && !this.container.contains(e.target) && this.toggle && !this.toggle.contains(e.target)) {
                this.closeChatbot();
            }
        });
    }
    
    toggleChatbot() {
        if (this.isOpen) {
            this.closeChatbot();
        } else {
            this.openChatbot();
        }
    }
    
    openChatbot() {
        this.isOpen = true;
        if (this.container) {
            this.container.classList.add('active');
        }
        if (this.input) {
            this.input.focus();
        }
        
        // Remove notification dot
        const notificationDot = document.querySelector('.notification-dot');
        if (notificationDot) {
            notificationDot.style.display = 'none';
        }
    }
    
    closeChatbot() {
        this.isOpen = false;
        if (this.container) {
            this.container.classList.remove('active');
        }
    }
    
    toggleVoiceRecording() {
        if (!this.recognition) {
            this.addBotMessage("Voice input is not supported in your browser. Please use text input instead.");
            return;
        }
        
        if (this.isRecording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
    }
    
    startRecording() {
        this.isRecording = true;
        if (this.voiceButton) {
            this.voiceButton.classList.add('recording');
            this.voiceButton.innerHTML = '<i class="fas fa-stop"></i>';
        }
        if (this.recognition) {
            this.recognition.start();
        }
    }
    
    stopRecording() {
        this.isRecording = false;
        if (this.voiceButton) {
            this.voiceButton.classList.remove('recording');
            this.voiceButton.innerHTML = '<i class="fas fa-microphone"></i>';
        }
        if (this.recognition) {
            this.recognition.stop();
        }
    }
    
    toggleTheme() {
        this.isLightTheme = !this.isLightTheme;
        if (this.container) {
            this.container.classList.toggle('light-theme', this.isLightTheme);
        }
        if (this.themeButton) {
            this.themeButton.classList.toggle('light', this.isLightTheme);
            this.themeButton.innerHTML = this.isLightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        }
    }
    
    showWelcomeMessage() {
        const quickReplies = [
            "Tell me about Harsh's skills",
            "Show me his projects",
            "What's his experience?",
            "How can I contact him?"
        ];
        
        this.addBotMessage("Hi! I'm your AI portfolio assistant. I can help you learn about Harsh's skills, projects, experience, and more! 🚀", quickReplies);
    }
    
    sendMessage() {
        if (!this.input) return;
        
        const message = this.input.value.trim();
        if (!message || this.isTyping) return;
        
        this.addUserMessage(message);
        this.input.value = '';
        if (this.sendButton) {
            this.sendButton.disabled = true;
        }
        
        // Process the message and generate response
        this.processMessage(message);
    }
    
    addUserMessage(message) {
        if (!this.messages) return;
        
        const messageElement = this.createMessageElement(message, 'user');
        this.messages.appendChild(messageElement);
        this.scrollToBottom();
        this.conversationHistory.push({ role: 'user', content: message });
    }
    
    addBotMessage(message, quickReplies = null) {
        if (!this.messages) return;
        
        const messageElement = this.createMessageElement(message, 'bot');
        
        if (quickReplies) {
            const quickRepliesContainer = document.createElement('div');
            quickRepliesContainer.className = 'quick-replies';
            
            quickReplies.forEach(reply => {
                const button = document.createElement('button');
                button.className = 'quick-reply';
                button.textContent = reply;
                button.addEventListener('click', () => {
                    this.addUserMessage(reply);
                    this.processMessage(reply);
                });
                quickRepliesContainer.appendChild(button);
            });
            
            const contentElement = messageElement.querySelector('.message-content');
            if (contentElement) {
                contentElement.appendChild(quickRepliesContainer);
            }
        }
        
        this.messages.appendChild(messageElement);
        this.scrollToBottom();
        this.conversationHistory.push({ role: 'assistant', content: message });
        
        // Speak the response if voice is enabled
        if (this.synthesis && this.isLightTheme) {
            this.speakMessage(message);
        }
    }
    
    speakMessage(message) {
        // Remove HTML tags and emojis for speech
        const cleanMessage = message.replace(/<[^>]*>/g, '').replace(/[^\w\s.,!?]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanMessage);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        this.synthesis.speak(utterance);
    }
    
    createMessageElement(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = type === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = `<p>${this.formatMessage(message)}</p>`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        return messageDiv;
    }
    
    formatMessage(message) {
        // Convert URLs to clickable links
        let formatted = message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #6366f1; text-decoration: underline;">$1</a>');
        
        // Format code blocks
        formatted = formatted.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
        
        // Format inline code
        formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Format bold text
        formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        
        return formatted;
    }
    
    showTypingIndicator() {
        this.isTyping = true;
        if (!this.messages) return null;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-message';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        this.messages.appendChild(typingDiv);
        this.scrollToBottom();
        return typingDiv;
    }
    
    removeTypingIndicator(typingElement) {
        if (typingElement && typingElement.parentNode) {
            typingElement.parentNode.removeChild(typingElement);
        }
        this.isTyping = false;
    }
    
    scrollToBottom() {
        if (!this.messages) return;
        
        setTimeout(() => {
            this.messages.scrollTop = this.messages.scrollHeight;
        }, 100);
    }
    
    async processMessage(message) {
        const typingElement = this.showTypingIndicator();
        
        try {
            // Generate response based on the message
            const response = this.generateResponse(message.toLowerCase());
            
            // Simulate AI processing time
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
            
            this.removeTypingIndicator(typingElement);
            this.addBotMessage(response);
            
        } catch (error) {
            console.error('Error processing message:', error);
            this.removeTypingIndicator(typingElement);
            this.addBotMessage("I'm sorry, I encountered an error. Please try again.");
        }
        
        if (this.sendButton) {
            this.sendButton.disabled = false;
        }
    }
    
    generateResponse(message) {
        // Skills related queries
        if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
            return this.getSkillsResponse();
        }
        
        // Projects related queries
        if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
            return this.getProjectsResponse();
        }
        
        // Experience related queries
        if (message.includes('experience') || message.includes('years') || message.includes('work')) {
            return this.getExperienceResponse();
        }
        
        // Contact related queries
        if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
            return this.getContactResponse();
        }
        
        // Education related queries
        if (message.includes('education') || message.includes('degree') || message.includes('college')) {
            return this.getEducationResponse();
        }
        
        // About queries
        if (message.includes('about') || message.includes('who') || message.includes('introduce')) {
            return this.getAboutResponse();
        }
        
        // Default response
        return this.getDefaultResponse();
    }
    
    getSkillsResponse() {
        return `Here are Harsh's technical skills:

🛠️ **Frontend:** ${this.portfolioData.skills.frontend.join(', ')}
⚙️ **Backend:** ${this.portfolioData.skills.backend.join(', ')}
🔧 **Tools:** ${this.portfolioData.skills.tools.join(', ')}

He's particularly strong in React.js, Spring Boot, and building full-stack applications. Would you like to know more about his projects?`;
    }
    
    getProjectsResponse() {
        let response = "Here are Harsh's featured projects:\n\n";
        
        this.portfolioData.projects.forEach((project, index) => {
            response += `**${index + 1}. ${project.name}**\n`;
            response += `${project.description}\n`;
            response += `Tech: ${project.tech.join(', ')}\n`;
            if (project.github) {
                response += `🔗 GitHub: ${project.github}\n`;
            }
            if (project.live) {
                response += `🌐 Live Demo: ${project.live}\n`;
            }
            response += "\n";
        });
        
        response += "His real-time chat application is particularly impressive with end-to-end encryption!";
        return response;
    }
    
    getExperienceResponse() {
        return `Harsh has ${this.portfolioData.experience} of experience in web development. Here's what he's accomplished:

📊 **Experience:** ${this.portfolioData.experience}
🚀 **Projects:** ${this.portfolioData.projects}
💻 **DSA:** ${this.portfolioData.dsa}

He's currently working as a freelance Full Stack Developer and has interned as a Frontend Developer. His experience spans both frontend and backend development with a focus on modern web technologies.`;
    }
    
    getContactResponse() {
        return `Here's how you can reach Harsh:

📧 **Email:** ${this.portfolioData.contact.email}
📱 **Phone:** ${this.portfolioData.contact.phone}
📍 **Location:** ${this.portfolioData.contact.location}
🔗 **GitHub:** ${this.portfolioData.contact.github}
💼 **LinkedIn:** ${this.portfolioData.contact.linkedin}

He's always interested in new opportunities and exciting projects!`;
    }
    
    getEducationResponse() {
        return `Harsh's educational background:

🎓 **Degree:** ${this.portfolioData.education.degree}
🏫 **Institution:** ${this.portfolioData.education.institution}
📅 **Duration:** ${this.portfolioData.education.duration}

He also completed a Web Development Bootcamp on Udemy in 2023 to enhance his practical skills.`;
    }
    
    getAboutResponse() {
        return `Harsh Yadav is a passionate ${this.portfolioData.role} with a strong foundation in web development and a keen eye for creating intuitive user experiences.

He specializes in:
• Full-stack development with React.js and Spring Boot
• Building real-time applications
• Creating responsive and modern web interfaces
• Database design and REST API development

When he's not coding, you can find him exploring new technologies, contributing to open-source projects, or solving DSA problems!`;
    }
    
    getDefaultResponse() {
        const responses = [
            "I'm not sure I understood that. Could you ask about Harsh's skills, projects, experience, or contact information?",
            "I'd be happy to help! You can ask me about Harsh's technical skills, projects he's built, his work experience, or how to get in touch with him.",
            "Try asking me about Harsh's skills, projects, experience, or contact details. I'm here to help you learn more about his portfolio!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing chatbot...');
    try {
        new PortfolioChatbot();
        console.log('Chatbot initialized successfully');
    } catch (error) {
        console.error('Error initializing chatbot:', error);
    }
}); 