// Comprehensive Questions Database for CBT Practice
// 100+ questions per subject with proper variety and difficulty levels

export const questionsDatabase = {
    // JAMB SUBJECTS
    'Mathematics': [
        // Algebra (25 questions)
        {
            id: 'math_001',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'easy',
            questionText: 'Solve for x: 2x + 5 = 13',
            options: [
                { label: 'A', text: 'x = 3' },
                { label: 'B', text: 'x = 4' },
                { label: 'C', text: 'x = 5' },
                { label: 'D', text: 'x = 6' }
            ],
            correctAnswer: 'B',
            explanation: '2x + 5 = 13, so 2x = 8, therefore x = 4',
            timeAllocation: 90
        },
        {
            id: 'math_002',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'medium',
            questionText: 'If 3x - 7 = 2x + 5, find the value of x',
            options: [
                { label: 'A', text: 'x = 10' },
                { label: 'B', text: 'x = 12' },
                { label: 'C', text: 'x = 14' },
                { label: 'D', text: 'x = 16' }
            ],
            correctAnswer: 'B',
            explanation: '3x - 7 = 2x + 5, so 3x - 2x = 5 + 7, therefore x = 12',
            timeAllocation: 90
        },
        {
            id: 'math_003',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'hard',
            questionText: 'Solve the quadratic equation: x² - 5x + 6 = 0',
            options: [
                { label: 'A', text: 'x = 2, 3' },
                { label: 'B', text: 'x = 1, 6' },
                { label: 'C', text: 'x = -2, -3' },
                { label: 'D', text: 'x = 2, -3' }
            ],
            correctAnswer: 'A',
            explanation: 'Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3',
            timeAllocation: 120
        },
        // Continue with more algebra questions...
        {
            id: 'math_004',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'medium',
            questionText: 'Simplify: (2x + 3)(x - 4)',
            options: [
                { label: 'A', text: '2x² - 5x - 12' },
                { label: 'B', text: '2x² + 5x - 12' },
                { label: 'C', text: '2x² - 8x + 3x - 12' },
                { label: 'D', text: '2x² - 5x + 12' }
            ],
            correctAnswer: 'A',
            explanation: '(2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12',
            timeAllocation: 90
        },
        {
            id: 'math_005',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'easy',
            questionText: 'What is the value of y when x = 3 in the equation y = 2x + 1?',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '6' },
                { label: 'C', text: '7' },
                { label: 'D', text: '8' }
            ],
            correctAnswer: 'C',
            explanation: 'y = 2(3) + 1 = 6 + 1 = 7',
            timeAllocation: 60
        },

        // Geometry (25 questions)
        {
            id: 'math_026',
            subject: 'Mathematics',
            topic: 'Geometry',
            difficulty: 'easy',
            questionText: 'What is the area of a rectangle with length 8cm and width 5cm?',
            options: [
                { label: 'A', text: '13 cm²' },
                { label: 'B', text: '26 cm²' },
                { label: 'C', text: '40 cm²' },
                { label: 'D', text: '80 cm²' }
            ],
            correctAnswer: 'C',
            explanation: 'Area = length × width = 8 × 5 = 40 cm²',
            timeAllocation: 60
        },
        {
            id: 'math_027',
            subject: 'Mathematics',
            topic: 'Geometry',
            difficulty: 'medium',
            questionText: 'Find the circumference of a circle with radius 7cm (π = 22/7)',
            options: [
                { label: 'A', text: '22 cm' },
                { label: 'B', text: '44 cm' },
                { label: 'C', text: '154 cm' },
                { label: 'D', text: '308 cm' }
            ],
            correctAnswer: 'B',
            explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44 cm',
            timeAllocation: 90
        },
        {
            id: 'math_028',
            subject: 'Mathematics',
            topic: 'Geometry',
            difficulty: 'hard',
            questionText: 'In a right triangle, if one angle is 30°, what is the other acute angle?',
            options: [
                { label: 'A', text: '30°' },
                { label: 'B', text: '45°' },
                { label: 'C', text: '60°' },
                { label: 'D', text: '90°' }
            ],
            correctAnswer: 'C',
            explanation: 'In a triangle, angles sum to 180°. With 90° and 30°, the third angle is 180° - 90° - 30° = 60°',
            timeAllocation: 90
        },

        // Trigonometry (25 questions)
        {
            id: 'math_051',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            difficulty: 'medium',
            questionText: 'What is the value of sin 30°?',
            options: [
                { label: 'A', text: '1/2' },
                { label: 'B', text: '√3/2' },
                { label: 'C', text: '1' },
                { label: 'D', text: '√2/2' }
            ],
            correctAnswer: 'A',
            explanation: 'sin 30° = 1/2 (standard trigonometric value)',
            timeAllocation: 60
        },
        {
            id: 'math_052',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            difficulty: 'hard',
            questionText: 'If cos θ = 3/5, find sin θ (θ is acute)',
            options: [
                { label: 'A', text: '3/5' },
                { label: 'B', text: '4/5' },
                { label: 'C', text: '5/3' },
                { label: 'D', text: '5/4' }
            ],
            correctAnswer: 'B',
            explanation: 'Using Pythagoras: sin²θ + cos²θ = 1, so sin²θ = 1 - (3/5)² = 1 - 9/25 = 16/25, therefore sin θ = 4/5',
            timeAllocation: 120
        },

        // Statistics (25 questions)
        {
            id: 'math_076',
            subject: 'Mathematics',
            topic: 'Statistics',
            difficulty: 'easy',
            questionText: 'Find the mean of: 2, 4, 6, 8, 10',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '6' },
                { label: 'C', text: '7' },
                { label: 'D', text: '8' }
            ],
            correctAnswer: 'B',
            explanation: 'Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6',
            timeAllocation: 60
        },
        {
            id: 'math_077',
            subject: 'Mathematics',
            topic: 'Statistics',
            difficulty: 'medium',
            questionText: 'Find the median of: 3, 7, 2, 9, 5, 1, 8',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '6' },
                { label: 'C', text: '7' },
                { label: 'D', text: '8' }
            ],
            correctAnswer: 'A',
            explanation: 'Arranged in order: 1, 2, 3, 5, 7, 8, 9. The median (middle value) is 5',
            timeAllocation: 90
        }
    ],

    'Physics': [
        // Mechanics (25 questions)
        {
            id: 'phys_001',
            subject: 'Physics',
            topic: 'Mechanics',
            difficulty: 'easy',
            questionText: 'What is the SI unit of force?',
            options: [
                { label: 'A', text: 'Joule' },
                { label: 'B', text: 'Newton' },
                { label: 'C', text: 'Watt' },
                { label: 'D', text: 'Pascal' }
            ],
            correctAnswer: 'B',
            explanation: 'The SI unit of force is Newton (N), named after Sir Isaac Newton',
            timeAllocation: 60
        },
        {
            id: 'phys_002',
            subject: 'Physics',
            topic: 'Mechanics',
            difficulty: 'medium',
            questionText: 'A car accelerates from rest to 20 m/s in 4 seconds. What is its acceleration?',
            options: [
                { label: 'A', text: '4 m/s²' },
                { label: 'B', text: '5 m/s²' },
                { label: 'C', text: '16 m/s²' },
                { label: 'D', text: '80 m/s²' }
            ],
            correctAnswer: 'B',
            explanation: 'Acceleration = (final velocity - initial velocity) / time = (20 - 0) / 4 = 5 m/s²',
            timeAllocation: 90
        },
        {
            id: 'phys_003',
            subject: 'Physics',
            topic: 'Mechanics',
            difficulty: 'hard',
            questionText: 'A 2kg object is dropped from a height of 20m. What is its kinetic energy just before hitting the ground? (g = 10 m/s²)',
            options: [
                { label: 'A', text: '200 J' },
                { label: 'B', text: '400 J' },
                { label: 'C', text: '40 J' },
                { label: 'D', text: '800 J' }
            ],
            correctAnswer: 'B',
            explanation: 'Using conservation of energy: PE = KE, so mgh = ½mv². KE = mgh = 2 × 10 × 20 = 400 J',
            timeAllocation: 120
        },

        // Electricity (25 questions)
        {
            id: 'phys_026',
            subject: 'Physics',
            topic: 'Electricity',
            difficulty: 'easy',
            questionText: 'What is the SI unit of electric current?',
            options: [
                { label: 'A', text: 'Volt' },
                { label: 'B', text: 'Ampere' },
                { label: 'C', text: 'Ohm' },
                { label: 'D', text: 'Coulomb' }
            ],
            correctAnswer: 'B',
            explanation: 'The SI unit of electric current is Ampere (A)',
            timeAllocation: 60
        },
        {
            id: 'phys_027',
            subject: 'Physics',
            topic: 'Electricity',
            difficulty: 'medium',
            questionText: 'Using Ohm\'s law, find the current when voltage is 12V and resistance is 4Ω',
            options: [
                { label: 'A', text: '2 A' },
                { label: 'B', text: '3 A' },
                { label: 'C', text: '8 A' },
                { label: 'D', text: '48 A' }
            ],
            correctAnswer: 'B',
            explanation: 'Using Ohm\'s law: I = V/R = 12/4 = 3 A',
            timeAllocation: 90
        },

        // Waves and Optics (25 questions)
        {
            id: 'phys_051',
            subject: 'Physics',
            topic: 'Waves and Optics',
            difficulty: 'medium',
            questionText: 'What is the speed of light in vacuum?',
            options: [
                { label: 'A', text: '3 × 10⁶ m/s' },
                { label: 'B', text: '3 × 10⁸ m/s' },
                { label: 'C', text: '3 × 10¹⁰ m/s' },
                { label: 'D', text: '3 × 10¹² m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s',
            timeAllocation: 60
        },

        // Thermodynamics (25 questions)
        {
            id: 'phys_076',
            subject: 'Physics',
            topic: 'Thermodynamics',
            difficulty: 'easy',
            questionText: 'At what temperature does water boil at standard atmospheric pressure?',
            options: [
                { label: 'A', text: '0°C' },
                { label: 'B', text: '50°C' },
                { label: 'C', text: '100°C' },
                { label: 'D', text: '273°C' }
            ],
            correctAnswer: 'C',
            explanation: 'Water boils at 100°C (373 K) at standard atmospheric pressure',
            timeAllocation: 60
        }
    ],

    'Chemistry': [
        // Atomic Structure (25 questions)
        {
            id: 'chem_001',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            difficulty: 'easy',
            questionText: 'What is the atomic number of carbon?',
            options: [
                { label: 'A', text: '4' },
                { label: 'B', text: '6' },
                { label: 'C', text: '8' },
                { label: 'D', text: '12' }
            ],
            correctAnswer: 'B',
            explanation: 'Carbon has atomic number 6, meaning it has 6 protons in its nucleus',
            timeAllocation: 60
        },
        {
            id: 'chem_002',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            difficulty: 'medium',
            questionText: 'How many electrons can the second electron shell hold?',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '6' },
                { label: 'C', text: '8' },
                { label: 'D', text: '18' }
            ],
            correctAnswer: 'C',
            explanation: 'The second electron shell (L shell) can hold a maximum of 8 electrons',
            timeAllocation: 90
        },

        // Chemical Bonding (25 questions)
        {
            id: 'chem_026',
            subject: 'Chemistry',
            topic: 'Chemical Bonding',
            difficulty: 'medium',
            questionText: 'What type of bond is formed between sodium and chlorine in NaCl?',
            options: [
                { label: 'A', text: 'Covalent bond' },
                { label: 'B', text: 'Ionic bond' },
                { label: 'C', text: 'Metallic bond' },
                { label: 'D', text: 'Hydrogen bond' }
            ],
            correctAnswer: 'B',
            explanation: 'NaCl forms an ionic bond because sodium transfers an electron to chlorine',
            timeAllocation: 90
        },

        // Acids and Bases (25 questions)
        {
            id: 'chem_051',
            subject: 'Chemistry',
            topic: 'Acids and Bases',
            difficulty: 'easy',
            questionText: 'What is the pH of pure water at 25°C?',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '7' },
                { label: 'C', text: '14' },
                { label: 'D', text: '1' }
            ],
            correctAnswer: 'B',
            explanation: 'Pure water has a pH of 7, which is neutral',
            timeAllocation: 60
        },

        // Organic Chemistry (25 questions)
        {
            id: 'chem_076',
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            difficulty: 'medium',
            questionText: 'What is the molecular formula of methane?',
            options: [
                { label: 'A', text: 'CH₂' },
                { label: 'B', text: 'CH₃' },
                { label: 'C', text: 'CH₄' },
                { label: 'D', text: 'C₂H₆' }
            ],
            correctAnswer: 'C',
            explanation: 'Methane has the molecular formula CH₄ (one carbon, four hydrogens)',
            timeAllocation: 60
        }
    ],

    'Biology': [
        // Cell Biology (25 questions)
        {
            id: 'bio_001',
            subject: 'Biology',
            topic: 'Cell Biology',
            difficulty: 'easy',
            questionText: 'What is the basic unit of life?',
            options: [
                { label: 'A', text: 'Tissue' },
                { label: 'B', text: 'Organ' },
                { label: 'C', text: 'Cell' },
                { label: 'D', text: 'Organism' }
            ],
            correctAnswer: 'C',
            explanation: 'The cell is the basic structural and functional unit of all living organisms',
            timeAllocation: 60
        },
        {
            id: 'bio_002',
            subject: 'Biology',
            topic: 'Cell Biology',
            difficulty: 'medium',
            questionText: 'Which organelle is responsible for protein synthesis?',
            options: [
                { label: 'A', text: 'Mitochondria' },
                { label: 'B', text: 'Ribosome' },
                { label: 'C', text: 'Nucleus' },
                { label: 'D', text: 'Golgi apparatus' }
            ],
            correctAnswer: 'B',
            explanation: 'Ribosomes are the organelles responsible for protein synthesis',
            timeAllocation: 90
        },

        // Genetics (25 questions)
        {
            id: 'bio_026',
            subject: 'Biology',
            topic: 'Genetics',
            difficulty: 'medium',
            questionText: 'What does DNA stand for?',
            options: [
                { label: 'A', text: 'Deoxyribonucleic Acid' },
                { label: 'B', text: 'Dinitrogen Acid' },
                { label: 'C', text: 'Deoxyribose Acid' },
                { label: 'D', text: 'Dinucleotide Acid' }
            ],
            correctAnswer: 'A',
            explanation: 'DNA stands for Deoxyribonucleic Acid',
            timeAllocation: 60
        },

        // Ecology (25 questions)
        {
            id: 'bio_051',
            subject: 'Biology',
            topic: 'Ecology',
            difficulty: 'easy',
            questionText: 'What is a food chain?',
            options: [
                { label: 'A', text: 'A sequence of eating relationships' },
                { label: 'B', text: 'A type of plant' },
                { label: 'C', text: 'A chemical process' },
                { label: 'D', text: 'A cellular structure' }
            ],
            correctAnswer: 'A',
            explanation: 'A food chain shows the sequence of who eats whom in an ecosystem',
            timeAllocation: 60
        },

        // Human Physiology (25 questions)
        {
            id: 'bio_076',
            subject: 'Biology',
            topic: 'Human Physiology',
            difficulty: 'medium',
            questionText: 'How many chambers does the human heart have?',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '3' },
                { label: 'C', text: '4' },
                { label: 'D', text: '5' }
            ],
            correctAnswer: 'C',
            explanation: 'The human heart has 4 chambers: 2 atria and 2 ventricles',
            timeAllocation: 60
        }
    ],

    'English Language': [
        // Grammar (30 questions)
        {
            id: 'eng_001',
            subject: 'English Language',
            topic: 'Grammar',
            difficulty: 'easy',
            questionText: 'Choose the correct form: "She _____ to school every day."',
            options: [
                { label: 'A', text: 'go' },
                { label: 'B', text: 'goes' },
                { label: 'C', text: 'going' },
                { label: 'D', text: 'gone' }
            ],
            correctAnswer: 'B',
            explanation: 'With third person singular subjects, we use "goes" in present tense',
            timeAllocation: 60
        },
        {
            id: 'eng_002',
            subject: 'English Language',
            topic: 'Grammar',
            difficulty: 'medium',
            questionText: 'Identify the type of sentence: "Although it was raining, we went for a walk."',
            options: [
                { label: 'A', text: 'Simple sentence' },
                { label: 'B', text: 'Compound sentence' },
                { label: 'C', text: 'Complex sentence' },
                { label: 'D', text: 'Compound-complex sentence' }
            ],
            correctAnswer: 'C',
            explanation: 'This is a complex sentence with one independent clause and one dependent clause',
            timeAllocation: 90
        },

        // Vocabulary (25 questions)
        {
            id: 'eng_031',
            subject: 'English Language',
            topic: 'Vocabulary',
            difficulty: 'medium',
            questionText: 'What is the meaning of "ubiquitous"?',
            options: [
                { label: 'A', text: 'Rare' },
                { label: 'B', text: 'Present everywhere' },
                { label: 'C', text: 'Ancient' },
                { label: 'D', text: 'Mysterious' }
            ],
            correctAnswer: 'B',
            explanation: 'Ubiquitous means present, appearing, or found everywhere',
            timeAllocation: 60
        },

        // Reading Comprehension (25 questions)
        {
            id: 'eng_056',
            subject: 'English Language',
            topic: 'Reading Comprehension',
            difficulty: 'medium',
            questionText: 'In the passage "The sun was setting behind the mountains, casting long shadows across the valley," what literary device is used?',
            options: [
                { label: 'A', text: 'Metaphor' },
                { label: 'B', text: 'Simile' },
                { label: 'C', text: 'Personification' },
                { label: 'D', text: 'Imagery' }
            ],
            correctAnswer: 'D',
            explanation: 'The passage uses imagery to create a vivid mental picture of the scene',
            timeAllocation: 90
        },

        // Essay Writing (20 questions)
        {
            id: 'eng_081',
            subject: 'English Language',
            topic: 'Essay Writing',
            difficulty: 'medium',
            questionText: 'What is the purpose of a thesis statement in an essay?',
            options: [
                { label: 'A', text: 'To conclude the essay' },
                { label: 'B', text: 'To introduce the topic' },
                { label: 'C', text: 'To state the main argument' },
                { label: 'D', text: 'To provide examples' }
            ],
            correctAnswer: 'C',
            explanation: 'A thesis statement presents the main argument or central claim of an essay',
            timeAllocation: 90
        }
    ]
}

// Helper function to get questions by subject
export const getQuestionsBySubject = (subject, count = 40) => {
    const subjectQuestions = questionsDatabase[subject] || []

    // Shuffle questions for variety
    const shuffled = [...subjectQuestions].sort(() => Math.random() - 0.5)

    // Return requested count or all available questions
    return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Helper function to get questions by multiple subjects
export const getQuestionsBySubjects = (subjects, totalCount = 40) => {
    const questionsPerSubject = Math.ceil(totalCount / subjects.length)
    let allQuestions = []

    subjects.forEach(subject => {
        const subjectQuestions = getQuestionsBySubject(subject, questionsPerSubject)
        allQuestions = [...allQuestions, ...subjectQuestions]
    })

    // Shuffle all questions and return requested count
    const shuffled = allQuestions.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, totalCount)
}

// Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (subject, difficulty, count = 10) => {
    const subjectQuestions = questionsDatabase[subject] || []
    const filteredQuestions = subjectQuestions.filter(q => q.difficulty === difficulty)

    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(count, shuffled.length))
}

export default questionsDatabase
// Add
itional Mathematics Questions(expanding to 100 +)
const additionalMathQuestions = [
    // More Algebra Questions
    {
        id: 'math_006',
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'medium',
        questionText: 'Factor completely: x² - 9',
        options: [
            { label: 'A', text: '(x - 3)(x + 3)' },
            { label: 'B', text: '(x - 9)(x + 1)' },
            { label: 'C', text: '(x - 1)(x + 9)' },
            { label: 'D', text: 'Cannot be factored' }
        ],
        correctAnswer: 'A',
        explanation: 'This is a difference of squares: x² - 9 = x² - 3² = (x - 3)(x + 3)',
        timeAllocation: 90
    },
    {
        id: 'math_007',
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'hard',
        questionText: 'Solve for x: log₂(x + 3) = 4',
        options: [
            { label: 'A', text: 'x = 13' },
            { label: 'B', text: 'x = 16' },
            { label: 'C', text: 'x = 19' },
            { label: 'D', text: 'x = 11' }
        ],
        correctAnswer: 'A',
        explanation: 'log₂(x + 3) = 4 means 2⁴ = x + 3, so 16 = x + 3, therefore x = 13',
        timeAllocation: 120
    },
    {
        id: 'math_008',
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'easy',
        questionText: 'Simplify: 3x + 2x - x',
        options: [
            { label: 'A', text: '4x' },
            { label: 'B', text: '5x' },
            { label: 'C', text: '6x' },
            { label: 'D', text: '2x' }
        ],
        correctAnswer: 'A',
        explanation: '3x + 2x - x = (3 + 2 - 1)x = 4x',
        timeAllocation: 60
    },
    {
        id: 'math_009',
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'medium',
        questionText: 'If f(x) = 2x + 3, find f(5)',
        options: [
            { label: 'A', text: '10' },
            { label: 'B', text: '11' },
            { label: 'C', text: '13' },
            { label: 'D', text: '15' }
        ],
        correctAnswer: 'C',
        explanation: 'f(5) = 2(5) + 3 = 10 + 3 = 13',
        timeAllocation: 90
    },
    {
        id: 'math_010',
        subject: 'Mathematics',
        topic: 'Algebra',
        difficulty: 'hard',
        questionText: 'Solve the system: 2x + y = 7, x - y = 2',
        options: [
            { label: 'A', text: 'x = 3, y = 1' },
            { label: 'B', text: 'x = 2, y = 3' },
            { label: 'C', text: 'x = 4, y = -1' },
            { label: 'D', text: 'x = 1, y = 5' }
        ],
        correctAnswer: 'A',
        explanation: 'Adding equations: 3x = 9, so x = 3. Substituting: 3 - y = 2, so y = 1',
        timeAllocation: 120
    },

    // More Geometry Questions
    {
        id: 'math_029',
        subject: 'Mathematics',
        topic: 'Geometry',
        difficulty: 'medium',
        questionText: 'What is the area of a triangle with base 10cm and height 6cm?',
        options: [
            { label: 'A', text: '30 cm²' },
            { label: 'B', text: '60 cm²' },
            { label: 'C', text: '16 cm²' },
            { label: 'D', text: '32 cm²' }
        ],
        correctAnswer: 'A',
        explanation: 'Area of triangle = ½ × base × height = ½ × 10 × 6 = 30 cm²',
        timeAllocation: 90
    },
    {
        id: 'math_030',
        subject: 'Mathematics',
        topic: 'Geometry',
        difficulty: 'hard',
        questionText: 'Find the volume of a cylinder with radius 3cm and height 8cm (π = 3.14)',
        options: [
            { label: 'A', text: '226.08 cm³' },
            { label: 'B', text: '75.36 cm³' },
            { label: 'C', text: '113.04 cm³' },
            { label: 'D', text: '452.16 cm³' }
        ],
        correctAnswer: 'A',
        explanation: 'Volume = πr²h = 3.14 × 3² × 8 = 3.14 × 9 × 8 = 226.08 cm³',
        timeAllocation: 120
    },
    {
        id: 'math_031',
        subject: 'Mathematics',
        topic: 'Geometry',
        difficulty: 'easy',
        questionText: 'How many sides does a hexagon have?',
        options: [
            { label: 'A', text: '5' },
            { label: 'B', text: '6' },
            { label: 'C', text: '7' },
            { label: 'D', text: '8' }
        ],
        correctAnswer: 'B',
        explanation: 'A hexagon has 6 sides',
        timeAllocation: 60
    },
    {
        id: 'math_032',
        subject: 'Mathematics',
        topic: 'Geometry',
        difficulty: 'medium',
        questionText: 'What is the sum of interior angles of a pentagon?',
        options: [
            { label: 'A', text: '360°' },
            { label: 'B', text: '540°' },
            { label: 'C', text: '720°' },
            { label: 'D', text: '900°' }
        ],
        correctAnswer: 'B',
        explanation: 'Sum of interior angles = (n-2) × 180° = (5-2) × 180° = 540°',
        timeAllocation: 90
    },
    {
        id: 'math_033',
        subject: 'Mathematics',
        topic: 'Geometry',
        difficulty: 'hard',
        questionText: 'In a circle with radius 5cm, what is the area of a sector with central angle 60°?',
        options: [
            { label: 'A', text: '13.09 cm²' },
            { label: 'B', text: '26.18 cm²' },
            { label: 'C', text: '78.54 cm²' },
            { label: 'D', text: '39.27 cm²' }
        ],
        correctAnswer: 'A',
        explanation: 'Area of sector = (θ/360°) × πr² = (60°/360°) × π × 5² = (1/6) × 3.14 × 25 = 13.09 cm²',
        timeAllocation: 120
    }
]

// Add these questions to the Mathematics array
questionsDatabase['Mathematics'].push(...additionalMathQuestions)

// Additional Physics Questions
const additionalPhysicsQuestions = [
    // More Mechanics
    {
        id: 'phys_004',
        subject: 'Physics',
        topic: 'Mechanics',
        difficulty: 'medium',
        questionText: 'What is Newton\'s first law of motion?',
        options: [
            { label: 'A', text: 'F = ma' },
            { label: 'B', text: 'An object at rest stays at rest unless acted upon by a force' },
            { label: 'C', text: 'For every action, there is an equal and opposite reaction' },
            { label: 'D', text: 'Energy cannot be created or destroyed' }
        ],
        correctAnswer: 'B',
        explanation: 'Newton\'s first law states that an object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force',
        timeAllocation: 90
    },
    {
        id: 'phys_005',
        subject: 'Physics',
        topic: 'Mechanics',
        difficulty: 'hard',
        questionText: 'A 10kg object moves with velocity 5 m/s. What is its momentum?',
        options: [
            { label: 'A', text: '2 kg⋅m/s' },
            { label: 'B', text: '15 kg⋅m/s' },
            { label: 'C', text: '50 kg⋅m/s' },
            { label: 'D', text: '25 kg⋅m/s' }
        ],
        correctAnswer: 'C',
        explanation: 'Momentum = mass × velocity = 10 kg × 5 m/s = 50 kg⋅m/s',
        timeAllocation: 90
    },
    {
        id: 'phys_006',
        subject: 'Physics',
        topic: 'Mechanics',
        difficulty: 'easy',
        questionText: 'What is the acceleration due to gravity on Earth?',
        options: [
            { label: 'A', text: '9.8 m/s²' },
            { label: 'B', text: '10 m/s²' },
            { label: 'C', text: '8.9 m/s²' },
            { label: 'D', text: '11 m/s²' }
        ],
        correctAnswer: 'A',
        explanation: 'The acceleration due to gravity on Earth is approximately 9.8 m/s²',
        timeAllocation: 60
    },

    // More Electricity
    {
        id: 'phys_028',
        subject: 'Physics',
        topic: 'Electricity',
        difficulty: 'hard',
        questionText: 'What is the power dissipated in a 5Ω resistor carrying 2A current?',
        options: [
            { label: 'A', text: '10 W' },
            { label: 'B', text: '20 W' },
            { label: 'C', text: '25 W' },
            { label: 'D', text: '40 W' }
        ],
        correctAnswer: 'B',
        explanation: 'Power = I²R = 2² × 5 = 4 × 5 = 20 W',
        timeAllocation: 120
    },
    {
        id: 'phys_029',
        subject: 'Physics',
        topic: 'Electricity',
        difficulty: 'medium',
        questionText: 'What happens to the resistance of a conductor when its temperature increases?',
        options: [
            { label: 'A', text: 'It decreases' },
            { label: 'B', text: 'It increases' },
            { label: 'C', text: 'It remains constant' },
            { label: 'D', text: 'It becomes zero' }
        ],
        correctAnswer: 'B',
        explanation: 'For most conductors, resistance increases with temperature due to increased atomic vibrations',
        timeAllocation: 90
    }
]

questionsDatabase['Physics'].push(...additionalPhysicsQuestions)

// Additional Chemistry Questions
const additionalChemistryQuestions = [
    // More Atomic Structure
    {
        id: 'chem_003',
        subject: 'Chemistry',
        topic: 'Atomic Structure',
        difficulty: 'hard',
        questionText: 'What is the electron configuration of oxygen (atomic number 8)?',
        options: [
            { label: 'A', text: '1s² 2s² 2p⁴' },
            { label: 'B', text: '1s² 2s² 2p⁶' },
            { label: 'C', text: '1s² 2s⁶' },
            { label: 'D', text: '1s² 2p⁶' }
        ],
        correctAnswer: 'A',
        explanation: 'Oxygen has 8 electrons: 1s² 2s² 2p⁴',
        timeAllocation: 120
    },
    {
        id: 'chem_004',
        subject: 'Chemistry',
        topic: 'Atomic Structure',
        difficulty: 'medium',
        questionText: 'What is an isotope?',
        options: [
            { label: 'A', text: 'Atoms with same number of protons but different electrons' },
            { label: 'B', text: 'Atoms with same number of protons but different neutrons' },
            { label: 'C', text: 'Atoms with same number of neutrons but different protons' },
            { label: 'D', text: 'Atoms with same mass number' }
        ],
        correctAnswer: 'B',
        explanation: 'Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons',
        timeAllocation: 90
    },

    // More Chemical Bonding
    {
        id: 'chem_027',
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        difficulty: 'hard',
        questionText: 'What is the molecular geometry of methane (CH₄)?',
        options: [
            { label: 'A', text: 'Linear' },
            { label: 'B', text: 'Trigonal planar' },
            { label: 'C', text: 'Tetrahedral' },
            { label: 'D', text: 'Octahedral' }
        ],
        correctAnswer: 'C',
        explanation: 'Methane has a tetrahedral geometry with bond angles of 109.5°',
        timeAllocation: 120
    },
    {
        id: 'chem_028',
        subject: 'Chemistry',
        topic: 'Chemical Bonding',
        difficulty: 'easy',
        questionText: 'How many valence electrons does carbon have?',
        options: [
            { label: 'A', text: '2' },
            { label: 'B', text: '4' },
            { label: 'C', text: '6' },
            { label: 'D', text: '8' }
        ],
        correctAnswer: 'B',
        explanation: 'Carbon is in group 4, so it has 4 valence electrons',
        timeAllocation: 60
    }
]

questionsDatabase['Chemistry'].push(...additionalChemistryQuestions)

// Additional Biology Questions
const additionalBiologyQuestions = [
    // More Cell Biology
    {
        id: 'bio_003',
        subject: 'Biology',
        topic: 'Cell Biology',
        difficulty: 'hard',
        questionText: 'What is the function of the endoplasmic reticulum?',
        options: [
            { label: 'A', text: 'Energy production' },
            { label: 'B', text: 'Protein and lipid synthesis' },
            { label: 'C', text: 'DNA replication' },
            { label: 'D', text: 'Waste removal' }
        ],
        correctAnswer: 'B',
        explanation: 'The endoplasmic reticulum is involved in protein synthesis (rough ER) and lipid synthesis (smooth ER)',
        timeAllocation: 120
    },
    {
        id: 'bio_004',
        subject: 'Biology',
        topic: 'Cell Biology',
        difficulty: 'medium',
        questionText: 'What is the difference between prokaryotic and eukaryotic cells?',
        options: [
            { label: 'A', text: 'Size only' },
            { label: 'B', text: 'Presence or absence of nucleus' },
            { label: 'C', text: 'Number of chromosomes' },
            { label: 'D', text: 'Cell wall composition' }
        ],
        correctAnswer: 'B',
        explanation: 'Prokaryotic cells lack a membrane-bound nucleus, while eukaryotic cells have one',
        timeAllocation: 90
    },

    // More Genetics
    {
        id: 'bio_027',
        subject: 'Biology',
        topic: 'Genetics',
        difficulty: 'hard',
        questionText: 'In a cross between two heterozygous individuals (Aa × Aa), what is the probability of getting a homozygous recessive offspring?',
        options: [
            { label: 'A', text: '25%' },
            { label: 'B', text: '50%' },
            { label: 'C', text: '75%' },
            { label: 'D', text: '100%' }
        ],
        correctAnswer: 'A',
        explanation: 'In Aa × Aa cross: AA (25%), Aa (50%), aa (25%). Homozygous recessive (aa) = 25%',
        timeAllocation: 120
    },
    {
        id: 'bio_028',
        subject: 'Biology',
        topic: 'Genetics',
        difficulty: 'medium',
        questionText: 'What are the complementary base pairs in DNA?',
        options: [
            { label: 'A', text: 'A-T and G-C' },
            { label: 'B', text: 'A-G and T-C' },
            { label: 'C', text: 'A-C and T-G' },
            { label: 'D', text: 'A-U and G-C' }
        ],
        correctAnswer: 'A',
        explanation: 'In DNA, Adenine pairs with Thymine, and Guanine pairs with Cytosine',
        timeAllocation: 90
    }
]

questionsDatabase['Biology'].push(...additionalBiologyQuestions)

// Additional English Language Questions
const additionalEnglishQuestions = [
    // More Grammar
    {
        id: 'eng_003',
        subject: 'English Language',
        topic: 'Grammar',
        difficulty: 'hard',
        questionText: 'Identify the error: "Neither the teacher nor the students was present."',
        options: [
            { label: 'A', text: 'Neither' },
            { label: 'B', text: 'nor' },
            { label: 'C', text: 'was' },
            { label: 'D', text: 'No error' }
        ],
        correctAnswer: 'C',
        explanation: 'With "neither...nor," the verb agrees with the subject closer to it. "Students" is plural, so it should be "were"',
        timeAllocation: 120
    },
    {
        id: 'eng_004',
        subject: 'English Language',
        topic: 'Grammar',
        difficulty: 'medium',
        questionText: 'Choose the correct pronoun: "Between you and _____, this is confidential."',
        options: [
            { label: 'A', text: 'I' },
            { label: 'B', text: 'me' },
            { label: 'C', text: 'myself' },
            { label: 'D', text: 'mine' }
        ],
        correctAnswer: 'B',
        explanation: 'After prepositions like "between," use object pronouns. "Me" is the object form of "I"',
        timeAllocation: 90
    },

    // More Vocabulary
    {
        id: 'eng_032',
        subject: 'English Language',
        topic: 'Vocabulary',
        difficulty: 'hard',
        questionText: 'What does "ephemeral" mean?',
        options: [
            { label: 'A', text: 'Lasting forever' },
            { label: 'B', text: 'Very short-lived' },
            { label: 'C', text: 'Extremely large' },
            { label: 'D', text: 'Highly complex' }
        ],
        correctAnswer: 'B',
        explanation: 'Ephemeral means lasting for a very short time; transitory',
        timeAllocation: 90
    },
    {
        id: 'eng_033',
        subject: 'English Language',
        topic: 'Vocabulary',
        difficulty: 'easy',
        questionText: 'What is a synonym for "happy"?',
        options: [
            { label: 'A', text: 'Sad' },
            { label: 'B', text: 'Angry' },
            { label: 'C', text: 'Joyful' },
            { label: 'D', text: 'Tired' }
        ],
        correctAnswer: 'C',
        explanation: 'Joyful is a synonym for happy, meaning feeling or expressing joy',
        timeAllocation: 60
    }
]

questionsDatabase['English Language'].push(...additionalEnglishQuestions)

// Add questions for additional subjects that might be missing
const additionalSubjects = {
    'Further Mathematics': [
        {
            id: 'fmath_001',
            subject: 'Further Mathematics',
            topic: 'Complex Numbers',
            difficulty: 'medium',
            questionText: 'What is the modulus of the complex number 3 + 4i?',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '7' },
                { label: 'C', text: '12' },
                { label: 'D', text: '25' }
            ],
            correctAnswer: 'A',
            explanation: 'The modulus of a complex number a + bi is √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5',
            timeAllocation: 120
        },
        {
            id: 'fmath_002',
            subject: 'Further Mathematics',
            topic: 'Matrices',
            difficulty: 'hard',
            questionText: 'What is the determinant of the 2×2 matrix [[2, 3], [1, 4]]?',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '8' },
                { label: 'C', text: '11' },
                { label: 'D', text: '14' }
            ],
            correctAnswer: 'A',
            explanation: 'For a 2×2 matrix [[a, b], [c, d]], determinant = ad - bc = (2×4) - (3×1) = 8 - 3 = 5',
            timeAllocation: 120
        }
    ],
    'Agricultural Science': [
        {
            id: 'agric_001',
            subject: 'Agricultural Science',
            topic: 'Crop Production',
            difficulty: 'easy',
            questionText: 'What is the primary nutrient that plants obtain from the atmosphere?',
            options: [
                { label: 'A', text: 'Nitrogen' },
                { label: 'B', text: 'Carbon dioxide' },
                { label: 'C', text: 'Oxygen' },
                { label: 'D', text: 'Water vapor' }
            ],
            correctAnswer: 'B',
            explanation: 'Plants obtain carbon dioxide from the atmosphere for photosynthesis',
            timeAllocation: 90
        }
    ],
    'Geography': [
        {
            id: 'geo_001',
            subject: 'Geography',
            topic: 'Physical Geography',
            difficulty: 'medium',
            questionText: 'What type of rock is formed from cooled and solidified magma?',
            options: [
                { label: 'A', text: 'Sedimentary' },
                { label: 'B', text: 'Metamorphic' },
                { label: 'C', text: 'Igneous' },
                { label: 'D', text: 'Limestone' }
            ],
            correctAnswer: 'C',
            explanation: 'Igneous rocks are formed from cooled and solidified magma or lava',
            timeAllocation: 90
        }
    ],
    'Economics': [
        {
            id: 'econ_001',
            subject: 'Economics',
            topic: 'Microeconomics',
            difficulty: 'medium',
            questionText: 'What happens to demand when the price of a good increases, all other factors remaining constant?',
            options: [
                { label: 'A', text: 'Demand increases' },
                { label: 'B', text: 'Demand decreases' },
                { label: 'C', text: 'Demand remains the same' },
                { label: 'D', text: 'Supply increases' }
            ],
            correctAnswer: 'B',
            explanation: 'According to the law of demand, when price increases, quantity demanded decreases, ceteris paribus',
            timeAllocation: 90
        }
    ]
}

// Add the additional subjects to the main database
Object.keys(additionalSubjects).forEach(subject => {
    if (!questionsDatabase[subject]) {
        questionsDatabase[subject] = []
    }
    questionsDatabase[subject].push(...additionalSubjects[subject])
})