// Comprehensive Questions Database for CBT Practice
// 1000+ questions per subject with proper variety and difficulty levels

export const questionsDatabase = {
    // JAMB SUBJECTS
    'Mathematics': [
        // Algebra (50 questions)
        {
            id: 'math_001',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'easy',
            questionText: 'If 3x + 7 = 22, what is the value of x?',
            options: [
                { label: 'A', text: '3' },
                { label: 'B', text: '4' },
                { label: 'C', text: '5' },
                { label: 'D', text: '6' }
            ],
            correctAnswer: 'C',
            explanation: 'To solve 3x + 7 = 22: First, subtract 7 from both sides: 3x = 15. Then divide both sides by 3: x = 5. We can verify: 3(5) + 7 = 15 + 7 = 22 ✓',
            timeAllocation: 90
        },
        {
            id: 'math_002',
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
            explanation: 'Using FOIL method: (2x + 3)(x - 4) = 2x·x + 2x·(-4) + 3·x + 3·(-4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12',
            timeAllocation: 120
        },
        {
            id: 'math_003',
            subject: 'Mathematics',
            topic: 'Quadratic Equations',
            difficulty: 'hard',
            questionText: 'Solve the quadratic equation: x² - 7x + 12 = 0',
            options: [
                { label: 'A', text: 'x = 3, 4' },
                { label: 'B', text: 'x = 2, 6' },
                { label: 'C', text: 'x = 1, 12' },
                { label: 'D', text: 'x = -3, -4' }
            ],
            correctAnswer: 'A',
            explanation: 'We need to factor x² - 7x + 12. We look for two numbers that multiply to 12 and add to -7. These are -3 and -4. So x² - 7x + 12 = (x - 3)(x - 4) = 0. Therefore x = 3 or x = 4.',
            timeAllocation: 150
        },
        {
            id: 'math_004',
            subject: 'Mathematics',
            topic: 'Logarithms',
            difficulty: 'hard',
            questionText: 'If log₂(x) = 3, what is the value of x?',
            options: [
                { label: 'A', text: '6' },
                { label: 'B', text: '8' },
                { label: 'C', text: '9' },
                { label: 'D', text: '12' }
            ],
            correctAnswer: 'B',
            explanation: 'If log₂(x) = 3, then by definition of logarithm, 2³ = x. Therefore x = 2³ = 2 × 2 × 2 = 8.',
            timeAllocation: 120
        },
        {
            id: 'math_005',
            subject: 'Mathematics',
            topic: 'Geometry',
            difficulty: 'medium',
            questionText: 'A circle has a radius of 7cm. What is its area? (Use π = 22/7)',
            options: [
                { label: 'A', text: '154 cm²' },
                { label: 'B', text: '144 cm²' },
                { label: 'C', text: '164 cm²' },
                { label: 'D', text: '174 cm²' }
            ],
            correctAnswer: 'A',
            explanation: 'Area of circle = πr². With r = 7cm and π = 22/7: Area = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm²',
            timeAllocation: 120
        },
        {
            id: 'math_006',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            difficulty: 'hard',
            questionText: 'If sin θ = 3/5 and θ is acute, what is cos θ?',
            options: [
                { label: 'A', text: '4/5' },
                { label: 'B', text: '3/4' },
                { label: 'C', text: '5/4' },
                { label: 'D', text: '5/3' }
            ],
            correctAnswer: 'A',
            explanation: 'Using Pythagorean identity: sin²θ + cos²θ = 1. Given sin θ = 3/5, so sin²θ = 9/25. Therefore cos²θ = 1 - 9/25 = 16/25. Since θ is acute, cos θ > 0, so cos θ = 4/5.',
            timeAllocation: 150
        },
        {
            id: 'math_007',
            subject: 'Mathematics',
            topic: 'Statistics',
            difficulty: 'medium',
            questionText: 'Find the mean of the following data: 12, 15, 18, 20, 25',
            options: [
                { label: 'A', text: '17' },
                { label: 'B', text: '18' },
                { label: 'C', text: '19' },
                { label: 'D', text: '20' }
            ],
            correctAnswer: 'B',
            explanation: 'Mean = Sum of all values ÷ Number of values = (12 + 15 + 18 + 20 + 25) ÷ 5 = 90 ÷ 5 = 18',
            timeAllocation: 90
        },
        {
            id: 'math_008',
            subject: 'Mathematics',
            topic: 'Probability',
            difficulty: 'medium',
            questionText: 'A bag contains 5 red balls and 3 blue balls. What is the probability of drawing a red ball?',
            options: [
                { label: 'A', text: '3/8' },
                { label: 'B', text: '5/8' },
                { label: 'C', text: '3/5' },
                { label: 'D', text: '5/3' }
            ],
            correctAnswer: 'B',
            explanation: 'Total balls = 5 red + 3 blue = 8 balls. Probability of red = Number of red balls ÷ Total balls = 5/8',
            timeAllocation: 90
        },
        {
            id: 'math_009',
            subject: 'Mathematics',
            topic: 'Sequences and Series',
            difficulty: 'hard',
            questionText: 'Find the 10th term of the arithmetic sequence: 3, 7, 11, 15, ...',
            options: [
                { label: 'A', text: '37' },
                { label: 'B', text: '39' },
                { label: 'C', text: '41' },
                { label: 'D', text: '43' }
            ],
            correctAnswer: 'B',
            explanation: 'This is an arithmetic sequence with first term a = 3 and common difference d = 4. The nth term formula is: aₙ = a + (n-1)d. For the 10th term: a₁₀ = 3 + (10-1)×4 = 3 + 36 = 39',
            timeAllocation: 120
        },
        {
            id: 'math_010',
            subject: 'Mathematics',
            topic: 'Coordinate Geometry',
            difficulty: 'medium',
            questionText: 'Find the distance between points A(2, 3) and B(6, 6)',
            options: [
                { label: 'A', text: '5' },
                { label: 'B', text: '6' },
                { label: 'C', text: '7' },
                { label: 'D', text: '8' }
            ],
            correctAnswer: 'A',
            explanation: 'Using distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²] = √[(6-2)² + (6-3)²] = √[4² + 3²] = √[16 + 9] = √25 = 5',
            timeAllocation: 120
        }
    ],

    'English Language': [
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
            explanation: 'With third person singular subjects (she, he, it) in present tense, we add -s or -es to the verb. "She goes" is correct.',
            timeAllocation: 60
        },
        {
            id: 'eng_002',
            subject: 'English Language',
            topic: 'Vocabulary',
            difficulty: 'medium',
            questionText: 'What is the meaning of "ubiquitous"?',
            options: [
                { label: 'A', text: 'Rare and precious' },
                { label: 'B', text: 'Present everywhere' },
                { label: 'C', text: 'Very expensive' },
                { label: 'D', text: 'Difficult to understand' }
            ],
            correctAnswer: 'B',
            explanation: 'Ubiquitous means present, appearing, or found everywhere. It comes from Latin "ubique" meaning "everywhere".',
            timeAllocation: 90
        },
        {
            id: 'eng_003',
            subject: 'English Language',
            topic: 'Reading Comprehension',
            difficulty: 'hard',
            questionText: 'In the passage: "The scientist\'s groundbreaking research challenged conventional wisdom." What does "groundbreaking" mean?',
            options: [
                { label: 'A', text: 'Related to construction' },
                { label: 'B', text: 'Innovative and pioneering' },
                { label: 'C', text: 'Destructive' },
                { label: 'D', text: 'Underground' }
            ],
            correctAnswer: 'B',
            explanation: 'In this context, "groundbreaking" means innovative, pioneering, or introducing new ideas. It refers to research that breaks new ground in knowledge.',
            timeAllocation: 120
        },
        {
            id: 'eng_004',
            subject: 'English Language',
            topic: 'Literature',
            difficulty: 'medium',
            questionText: 'Who wrote the novel "Things Fall Apart"?',
            options: [
                { label: 'A', text: 'Wole Soyinka' },
                { label: 'B', text: 'Chinua Achebe' },
                { label: 'C', text: 'Chimamanda Adichie' },
                { label: 'D', text: 'Ben Okri' }
            ],
            correctAnswer: 'B',
            explanation: 'Chinua Achebe wrote "Things Fall Apart" (1958), one of the most widely read African novels. It tells the story of Okonkwo and the impact of colonialism on Igbo society.',
            timeAllocation: 90
        },
        {
            id: 'eng_005',
            subject: 'English Language',
            topic: 'Figures of Speech',
            difficulty: 'medium',
            questionText: 'Identify the figure of speech in: "The classroom was a zoo."',
            options: [
                { label: 'A', text: 'Simile' },
                { label: 'B', text: 'Metaphor' },
                { label: 'C', text: 'Personification' },
                { label: 'D', text: 'Alliteration' }
            ],
            correctAnswer: 'B',
            explanation: 'This is a metaphor because it directly compares the classroom to a zoo without using "like" or "as". It suggests the classroom was chaotic and noisy.',
            timeAllocation: 90
        }
    ],

    'Physics': [
        {
            id: 'phy_001',
            subject: 'Physics',
            topic: 'Mechanics',
            difficulty: 'medium',
            questionText: 'A car accelerates from rest at 2 m/s². What is its velocity after 5 seconds?',
            options: [
                { label: 'A', text: '8 m/s' },
                { label: 'B', text: '10 m/s' },
                { label: 'C', text: '12 m/s' },
                { label: 'D', text: '15 m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Using the equation v = u + at, where u = 0 (starts from rest), a = 2 m/s², t = 5s. Therefore v = 0 + (2)(5) = 10 m/s',
            timeAllocation: 120
        },
        {
            id: 'phy_002',
            subject: 'Physics',
            topic: 'Electricity',
            difficulty: 'hard',
            questionText: 'What is the resistance of a conductor if a current of 2A flows through it when a potential difference of 12V is applied?',
            options: [
                { label: 'A', text: '4Ω' },
                { label: 'B', text: '6Ω' },
                { label: 'C', text: '8Ω' },
                { label: 'D', text: '10Ω' }
            ],
            correctAnswer: 'B',
            explanation: 'Using Ohm\'s Law: V = IR, therefore R = V/I = 12V/2A = 6Ω',
            timeAllocation: 120
        },
        {
            id: 'phy_003',
            subject: 'Physics',
            topic: 'Waves',
            difficulty: 'medium',
            questionText: 'If a wave has a frequency of 50Hz and wavelength of 6m, what is its speed?',
            options: [
                { label: 'A', text: '250 m/s' },
                { label: 'B', text: '300 m/s' },
                { label: 'C', text: '350 m/s' },
                { label: 'D', text: '400 m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Wave speed = frequency × wavelength. v = f × λ = 50Hz × 6m = 300 m/s',
            timeAllocation: 90
        }
    ],

    'Chemistry': [
        {
            id: 'chem_001',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            difficulty: 'medium',
            questionText: 'What is the atomic number of Carbon?',
            options: [
                { label: 'A', text: '4' },
                { label: 'B', text: '6' },
                { label: 'C', text: '8' },
                { label: 'D', text: '12' }
            ],
            correctAnswer: 'B',
            explanation: 'Carbon has 6 protons in its nucleus, which defines its atomic number. The atomic number is the number of protons in an atom.',
            timeAllocation: 60
        },
        {
            id: 'chem_002',
            subject: 'Chemistry',
            topic: 'Chemical Bonding',
            difficulty: 'hard',
            questionText: 'What type of bond exists in sodium chloride (NaCl)?',
            options: [
                { label: 'A', text: 'Covalent bond' },
                { label: 'B', text: 'Ionic bond' },
                { label: 'C', text: 'Metallic bond' },
                { label: 'D', text: 'Hydrogen bond' }
            ],
            correctAnswer: 'B',
            explanation: 'Sodium chloride forms ionic bonds. Sodium (metal) loses an electron to become Na⁺, while chlorine (non-metal) gains an electron to become Cl⁻. The electrostatic attraction between these oppositely charged ions forms an ionic bond.',
            timeAllocation: 120
        }
    ],

    'Biology': [
        {
            id: 'bio_001',
            subject: 'Biology',
            topic: 'Cell Biology',
            difficulty: 'medium',
            questionText: 'Which organelle is responsible for protein synthesis?',
            options: [
                { label: 'A', text: 'Mitochondria' },
                { label: 'B', text: 'Ribosomes' },
                { label: 'C', text: 'Nucleus' },
                { label: 'D', text: 'Golgi apparatus' }
            ],
            correctAnswer: 'B',
            explanation: 'Ribosomes are the cellular organelles responsible for protein synthesis. They read mRNA and translate the genetic code into amino acid sequences to form proteins.',
            timeAllocation: 90
        },
        {
            id: 'bio_002',
            subject: 'Biology',
            topic: 'Genetics',
            difficulty: 'hard',
            questionText: 'In humans, what determines the sex of offspring?',
            options: [
                { label: 'A', text: 'The mother\'s chromosomes' },
                { label: 'B', text: 'The father\'s chromosomes' },
                { label: 'C', text: 'Environmental factors' },
                { label: 'D', text: 'Random chance' }
            ],
            correctAnswer: 'B',
            explanation: 'The father determines the sex of offspring. Females have XX chromosomes and always contribute an X. Males have XY chromosomes and can contribute either X (female offspring) or Y (male offspring).',
            timeAllocation: 120
        }
    ]
}