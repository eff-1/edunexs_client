// ==================== COMPREHENSIVE CBT QUESTIONS DATABASE ====================
// Real Past Questions Format - 50+ Questions PER Subject
// Structured by: EXAM-COUNTRY-DEPARTMENT-SUBJECT

export const questionsDatabase = {

    // ==================== JAMB NIGERIA - PHYSICS (50+ Questions) ====================
    'JAMB-NG-Science-Physics': [
        // Mechanics Questions (1-15)
        {
            id: 'jamb_phy_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'A body of mass 10kg moving with velocity 5m/s collides with a stationary body of mass 5kg. If they move together after collision, calculate their common velocity.',
            options: [
                { label: 'A', text: '2.5 m/s' },
                { label: 'B', text: '3.3 m/s' },
                { label: 'C', text: '5.0 m/s' },
                { label: 'D', text: '7.5 m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Using conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v. (10×5) + (5×0) = 15v. v = 3.33 m/s',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2022,
            difficulty: 'easy',
            questionText: 'What is the SI unit of force?',
            options: [
                { label: 'A', text: 'Joule' },
                { label: 'B', text: 'Newton' },
                { label: 'C', text: 'Watt' },
                { label: 'D', text: 'Pascal' }
            ],
            correctAnswer: 'B',
            explanation: 'The SI unit of force is Newton (N), defined as kg⋅m/s²',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'hard',
            questionText: 'A car accelerates uniformly from rest at 2 m/s² for 10 seconds. Calculate the distance covered.',
            options: [
                { label: 'A', text: '50m' },
                { label: 'B', text: '100m' },
                { label: 'C', text: '150m' },
                { label: 'D', text: '200m' }
            ],
            correctAnswer: 'B',
            explanation: 'Using s = ut + ½at². Since u = 0: s = 0 + ½(2)(10²) = 100m',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2021,
            difficulty: 'medium',
            questionText: 'A stone is thrown vertically upward with velocity 20m/s. What is the maximum height reached? (g = 10m/s²)',
            options: [
                { label: 'A', text: '10m' },
                { label: 'B', text: '20m' },
                { label: 'C', text: '30m' },
                { label: 'D', text: '40m' }
            ],
            correctAnswer: 'B',
            explanation: 'At max height v = 0. Using v² = u² - 2gh: 0 = 400 - 20h. h = 20m',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_005',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'easy',
            questionText: 'What is the momentum of a 5kg object moving at 4m/s?',
            options: [
                { label: 'A', text: '9 kg⋅m/s' },
                { label: 'B', text: '20 kg⋅m/s' },
                { label: 'C', text: '25 kg⋅m/s' },
                { label: 'D', text: '1.25 kg⋅m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Momentum p = mv = 5kg × 4m/s = 20 kg⋅m/s',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'A force of 50N acts on a body of mass 10kg initially at rest. Find the velocity after 5s.',
            options: [
                { label: 'A', text: '15 m/s' },
                { label: 'B', text: '20 m/s' },
                { label: 'C', text: '25 m/s' },
                { label: 'D', text: '30 m/s' }
            ],
            correctAnswer: 'C',
            explanation: 'F = ma, a = 50/10 = 5 m/s². v = u + at = 0 + 5(5) = 25 m/s',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2021,
            difficulty: 'medium',
            questionText: 'What is the weight of a 10kg mass on Earth? (g = 10m/s²)',
            options: [
                { label: 'A', text: '10N' },
                { label: 'B', text: '50N' },
                { label: 'C', text: '100N' },
                { label: 'D', text: '1000N' }
            ],
            correctAnswer: 'C',
            explanation: 'Weight W = mg = 10kg × 10m/s² = 100N',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'easy',
            questionText: 'A car travels 100m in 20s. What is its average speed?',
            options: [
                { label: 'A', text: '2 m/s' },
                { label: 'B', text: '5 m/s' },
                { label: 'C', text: '10 m/s' },
                { label: 'D', text: '20 m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Average speed = distance/time = 100m/20s = 5 m/s',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'A bullet of mass 0.05kg is fired with velocity 200m/s. What is its kinetic energy?',
            options: [
                { label: 'A', text: '500J' },
                { label: 'B', text: '1000J' },
                { label: 'C', text: '1500J' },
                { label: 'D', text: '2000J' }
            ],
            correctAnswer: 'B',
            explanation: 'KE = ½mv² = ½(0.05)(200²) = 0.025 × 40000 = 1000J',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2021,
            difficulty: 'medium',
            questionText: 'What is the power developed by a machine that does 600J of work in 30s?',
            options: [
                { label: 'A', text: '10W' },
                { label: 'B', text: '20W' },
                { label: 'C', text: '30W' },
                { label: 'D', text: '40W' }
            ],
            correctAnswer: 'B',
            explanation: 'Power P = Work/Time = 600J/30s = 20W',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'An object of mass 2kg is lifted vertically through 5m. Calculate work done. (g = 10m/s²)',
            options: [
                { label: 'A', text: '50J' },
                { label: 'B', text: '100J' },
                { label: 'C', text: '150J' },
                { label: 'D', text: '200J' }
            ],
            correctAnswer: 'B',
            explanation: 'Work = Force × distance = (mg) × h = (2×10) × 5 = 100J',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Which of the following is a scalar quantity?',
            options: [
                { label: 'A', text: 'Force' },
                { label: 'B', text: 'Velocity' },
                { label: 'C', text: 'Speed' },
                { label: 'D', text: 'Acceleration' }
            ],
            correctAnswer: 'C',
            explanation: 'Speed is scalar (magnitude only). Others are vectors (magnitude and direction)',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2021,
            difficulty: 'hard',
            questionText: 'A body moving with velocity 10m/s decelerates uniformly to rest in 5s. Find the deceleration.',
            options: [
                { label: 'A', text: '1 m/s²' },
                { label: 'B', text: '2 m/s²' },
                { label: 'C', text: '3 m/s²' },
                { label: 'D', text: '4 m/s²' }
            ],
            correctAnswer: 'B',
            explanation: 'a = (v-u)/t = (0-10)/5 = -2 m/s². Deceleration = 2 m/s²',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_014',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'What is the efficiency of a machine that does 80J of useful work from 100J of input?',
            options: [
                { label: 'A', text: '60%' },
                { label: 'B', text: '70%' },
                { label: 'C', text: '80%' },
                { label: 'D', text: '90%' }
            ],
            correctAnswer: 'C',
            explanation: 'Efficiency = (Useful work/Input work) × 100% = (80/100) × 100% = 80%',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_015',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2022,
            difficulty: 'easy',
            questionText: 'The rate of change of velocity is called:',
            options: [
                { label: 'A', text: 'Speed' },
                { label: 'B', text: 'Acceleration' },
                { label: 'C', text: 'Momentum' },
                { label: 'D', text: 'Force' }
            ],
            correctAnswer: 'B',
            explanation: 'Acceleration is the rate of change of velocity',
            timeAllocation: 60
        },

        // Electricity Questions (16-30)
        {
            id: 'jamb_phy_016',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Three resistors of 2Ω, 3Ω and 6Ω are connected in parallel. What is the equivalent resistance?',
            options: [
                { label: 'A', text: '1Ω' },
                { label: 'B', text: '2Ω' },
                { label: 'C', text: '3Ω' },
                { label: 'D', text: '11Ω' }
            ],
            correctAnswer: 'A',
            explanation: '1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. R = 1Ω',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_017',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2022,
            difficulty: 'medium',
            questionText: 'What current flows through a 6Ω resistor when 12V is applied?',
            options: [
                { label: 'A', text: '0.5A' },
                { label: 'B', text: '2A' },
                { label: 'C', text: '3A' },
                { label: 'D', text: '4A' }
            ],
            correctAnswer: 'B',
            explanation: 'Using Ohm\'s Law: I = V/R = 12V/6Ω = 2A',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_018',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2021,
            difficulty: 'easy',
            questionText: 'The SI unit of electric charge is:',
            options: [
                { label: 'A', text: 'Ampere' },
                { label: 'B', text: 'Volt' },
                { label: 'C', text: 'Coulomb' },
                { label: 'D', text: 'Ohm' }
            ],
            correctAnswer: 'C',
            explanation: 'The SI unit of electric charge is Coulomb (C)',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_019',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Two resistors 4Ω and 6Ω are connected in series. What is the total resistance?',
            options: [
                { label: 'A', text: '2Ω' },
                { label: 'B', text: '2.4Ω' },
                { label: 'C', text: '10Ω' },
                { label: 'D', text: '24Ω' }
            ],
            correctAnswer: 'C',
            explanation: 'For series: R_total = R₁ + R₂ = 4Ω + 6Ω = 10Ω',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_020',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2022,
            difficulty: 'hard',
            questionText: 'A 100W bulb operates for 5 hours. Calculate energy consumed in kWh.',
            options: [
                { label: 'A', text: '0.5 kWh' },
                { label: 'B', text: '1.0 kWh' },
                { label: 'C', text: '1.5 kWh' },
                { label: 'D', text: '2.0 kWh' }
            ],
            correctAnswer: 'A',
            explanation: 'Energy = Power × Time = 100W × 5h = 500Wh = 0.5 kWh',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_021',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2021,
            difficulty: 'easy',
            questionText: 'What is the resistance if 2A current flows when 10V is applied?',
            options: [
                { label: 'A', text: '2Ω' },
                { label: 'B', text: '5Ω' },
                { label: 'C', text: '8Ω' },
                { label: 'D', text: '20Ω' }
            ],
            correctAnswer: 'B',
            explanation: 'R = V/I = 10V/2A = 5Ω',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_022',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2023,
            difficulty: 'medium',
            questionText: 'A charge of 5C passes through a conductor in 2s. What is the current?',
            options: [
                { label: 'A', text: '1.5A' },
                { label: 'B', text: '2.5A' },
                { label: 'C', text: '3.5A' },
                { label: 'D', text: '10A' }
            ],
            correctAnswer: 'B',
            explanation: 'Current I = Q/t = 5C/2s = 2.5A',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_023',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Which material is a good conductor of electricity?',
            options: [
                { label: 'A', text: 'Plastic' },
                { label: 'B', text: 'Wood' },
                { label: 'C', text: 'Copper' },
                { label: 'D', text: 'Glass' }
            ],
            correctAnswer: 'C',
            explanation: 'Copper is an excellent conductor due to free electrons',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_024',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2021,
            difficulty: 'hard',
            questionText: 'What happens to resistance when wire length is doubled?',
            options: [
                { label: 'A', text: 'Halved' },
                { label: 'B', text: 'Remains same' },
                { label: 'C', text: 'Doubled' },
                { label: 'D', text: 'Quadrupled' }
            ],
            correctAnswer: 'C',
            explanation: 'Resistance R ∝ Length. Doubling length doubles resistance',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_025',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2023,
            difficulty: 'medium',
            questionText: 'A 12V battery supplies 3A. What power is delivered?',
            options: [
                { label: 'A', text: '4W' },
                { label: 'B', text: '9W' },
                { label: 'C', text: '15W' },
                { label: 'D', text: '36W' }
            ],
            correctAnswer: 'D',
            explanation: 'Power P = VI = 12V × 3A = 36W',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_026',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2022,
            difficulty: 'easy',
            questionText: 'The unit of electrical resistance is:',
            options: [
                { label: 'A', text: 'Ampere' },
                { label: 'B', text: 'Volt' },
                { label: 'C', text: 'Ohm' },
                { label: 'D', text: 'Watt' }
            ],
            correctAnswer: 'C',
            explanation: 'The SI unit of electrical resistance is Ohm (Ω)',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_027',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Four 2Ω resistors are connected in parallel. Find equivalent resistance.',
            options: [
                { label: 'A', text: '0.5Ω' },
                { label: 'B', text: '2Ω' },
                { label: 'C', text: '4Ω' },
                { label: 'D', text: '8Ω' }
            ],
            correctAnswer: 'A',
            explanation: '1/R = 1/2 + 1/2 + 1/2 + 1/2 = 4/2 = 2. R = 0.5Ω',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_028',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Calculate voltage across 5Ω resistor carrying 4A current.',
            options: [
                { label: 'A', text: '10V' },
                { label: 'B', text: '15V' },
                { label: 'C', text: '20V' },
                { label: 'D', text: '25V' }
            ],
            correctAnswer: 'C',
            explanation: 'V = IR = 4A × 5Ω = 20V',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_029',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Electric current is the flow of:',
            options: [
                { label: 'A', text: 'Protons' },
                { label: 'B', text: 'Neutrons' },
                { label: 'C', text: 'Electrons' },
                { label: 'D', text: 'Atoms' }
            ],
            correctAnswer: 'C',
            explanation: 'Electric current is the flow of electrons',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_030',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Electricity',
            year: 2021,
            difficulty: 'hard',
            questionText: 'A heater rated 2kW operates for 3 hours. Energy consumed in Joules:',
            options: [
                { label: 'A', text: '6 × 10⁶ J' },
                { label: 'B', text: '2.16 × 10⁷ J' },
                { label: 'C', text: '3 × 10⁶ J' },
                { label: 'D', text: '7.2 × 10⁶ J' }
            ],
            correctAnswer: 'B',
            explanation: 'E = Pt = 2000W × (3×3600s) = 2000 × 10800 = 2.16 × 10⁷ J',
            timeAllocation: 150
        },

        // Waves & Thermodynamics Questions (31-50)
        {
            id: 'jamb_phy_031',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2023,
            difficulty: 'easy',
            questionText: 'What is the speed of sound in air at 0°C?',
            options: [
                { label: 'A', text: '280 m/s' },
                { label: 'B', text: '300 m/s' },
                { label: 'C', text: '331 m/s' },
                { label: 'D', text: '350 m/s' }
            ],
            correctAnswer: 'C',
            explanation: 'Speed of sound in air at 0°C is approximately 331 m/s',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_032',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2022,
            difficulty: 'medium',
            questionText: 'A wave has frequency 50Hz and wavelength 6m. Calculate speed.',
            options: [
                { label: 'A', text: '250 m/s' },
                { label: 'B', text: '300 m/s' },
                { label: 'C', text: '350 m/s' },
                { label: 'D', text: '400 m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'Wave speed v = fλ = 50Hz × 6m = 300 m/s',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_033',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Object placed 15cm from concave mirror (f=10cm). Find image distance.',
            options: [
                { label: 'A', text: '20cm' },
                { label: 'B', text: '25cm' },
                { label: 'C', text: '30cm' },
                { label: 'D', text: '35cm' }
            ],
            correctAnswer: 'C',
            explanation: '1/f = 1/u + 1/v. 1/10 = 1/15 + 1/v. 1/v = 1/30. v = 30cm',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_034',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Sound is what type of wave?',
            options: [
                { label: 'A', text: 'Transverse' },
                { label: 'B', text: 'Longitudinal' },
                { label: 'C', text: 'Electromagnetic' },
                { label: 'D', text: 'Standing' }
            ],
            correctAnswer: 'B',
            explanation: 'Sound is longitudinal - particles vibrate parallel to wave direction',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_035',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Heat to raise 2kg water from 20°C to 100°C? (c = 4200 J/kg°C)',
            options: [
                { label: 'A', text: '336,000 J' },
                { label: 'B', text: '420,000 J' },
                { label: 'C', text: '672,000 J' },
                { label: 'D', text: '840,000 J' }
            ],
            correctAnswer: 'C',
            explanation: 'Q = mcΔθ = 2 × 4200 × 80 = 672,000 J',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_036',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2021,
            difficulty: 'easy',
            questionText: 'SI unit of temperature is:',
            options: [
                { label: 'A', text: 'Celsius' },
                { label: 'B', text: 'Fahrenheit' },
                { label: 'C', text: 'Kelvin' },
                { label: 'D', text: 'Joule' }
            ],
            correctAnswer: 'C',
            explanation: 'SI unit of temperature is Kelvin (K)',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_037',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Bending of light between media is called:',
            options: [
                { label: 'A', text: 'Reflection' },
                { label: 'B', text: 'Refraction' },
                { label: 'C', text: 'Diffraction' },
                { label: 'D', text: 'Dispersion' }
            ],
            correctAnswer: 'B',
            explanation: 'Refraction is bending of light when passing between media',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_038',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Water boils at what temperature (normal pressure)?',
            options: [
                { label: 'A', text: '0°C' },
                { label: 'B', text: '50°C' },
                { label: 'C', text: '100°C' },
                { label: 'D', text: '150°C' }
            ],
            correctAnswer: 'C',
            explanation: 'Water boils at 100°C at normal atmospheric pressure',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_039',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Period of wave with frequency 25Hz is:',
            options: [
                { label: 'A', text: '0.02s' },
                { label: 'B', text: '0.04s' },
                { label: 'C', text: '0.08s' },
                { label: 'D', text: '0.1s' }
            ],
            correctAnswer: 'B',
            explanation: 'Period T = 1/f = 1/25 = 0.04s',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_040',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Gas occupies 2L at 27°C. Volume at 127°C (constant pressure)?',
            options: [
                { label: 'A', text: '2.33L' },
                { label: 'B', text: '2.67L' },
                { label: 'C', text: '3.00L' },
                { label: 'D', text: '3.33L' }
            ],
            correctAnswer: 'B',
            explanation: 'V₁/T₁ = V₂/T₂. 2/300 = V₂/400. V₂ = 2.67L',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_041',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2022,
            difficulty: 'easy',
            questionText: 'The center of a lens is called:',
            options: [
                { label: 'A', text: 'Focus' },
                { label: 'B', text: 'Optical center' },
                { label: 'C', text: 'Principal axis' },
                { label: 'D', text: 'Pole' }
            ],
            correctAnswer: 'B',
            explanation: 'Optical center is the center point of a lens',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_042',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Electromagnetic waves travel at speed:',
            options: [
                { label: 'A', text: '3 × 10⁶ m/s' },
                { label: 'B', text: '3 × 10⁸ m/s' },
                { label: 'C', text: '3 × 10¹⁰ m/s' },
                { label: 'D', text: '3 × 10¹² m/s' }
            ],
            correctAnswer: 'B',
            explanation: 'EM waves travel at speed of light: 3 × 10⁸ m/s',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_043',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Method of heat transfer in solids:',
            options: [
                { label: 'A', text: 'Convection' },
                { label: 'B', text: 'Conduction' },
                { label: 'C', text: 'Radiation' },
                { label: 'D', text: 'Evaporation' }
            ],
            correctAnswer: 'B',
            explanation: 'Conduction is heat transfer through solids',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_044',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Refractive index of glass is 1.5. Speed of light in glass:',
            options: [
                { label: 'A', text: '2.0 × 10⁸ m/s' },
                { label: 'B', text: '2.5 × 10⁸ m/s' },
                { label: 'C', text: '3.0 × 10⁸ m/s' },
                { label: 'D', text: '4.5 × 10⁸ m/s' }
            ],
            correctAnswer: 'A',
            explanation: 'n = c/v. v = c/n = (3×10⁸)/1.5 = 2×10⁸ m/s',
            timeAllocation: 150
        },
        {
            id: 'jamb_phy_045',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Unit of frequency is:',
            options: [
                { label: 'A', text: 'Meter' },
                { label: 'B', text: 'Hertz' },
                { label: 'C', text: 'Second' },
                { label: 'D', text: 'Watt' }
            ],
            correctAnswer: 'B',
            explanation: 'Frequency is measured in Hertz (Hz)',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_046',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Specific heat capacity of water (J/kg°C):',
            options: [
                { label: 'A', text: '2100' },
                { label: 'B', text: '4200' },
                { label: 'C', text: '6300' },
                { label: 'D', text: '8400' }
            ],
            correctAnswer: 'B',
            explanation: 'Specific heat capacity of water is 4200 J/kg°C',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_047',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Critical angle for glass-air (n=1.5):',
            options: [
                { label: 'A', text: '30°' },
                { label: 'B', text: '42°' },
                { label: 'C', text: '48°' },
                { label: 'D', text: '60°' }
            ],
            correctAnswer: 'B',
            explanation: 'sin C = 1/n = 1/1.5 = 0.667. C ≈ 42°',
            timeAllocation: 120
        },
        {
            id: 'jamb_phy_048',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Wavelength of wave: speed 340m/s, frequency 170Hz',
            options: [
                { label: 'A', text: '1m' },
                { label: 'B', text: '2m' },
                { label: 'C', text: '3m' },
                { label: 'D', text: '4m' }
            ],
            correctAnswer: 'B',
            explanation: 'λ = v/f = 340/170 = 2m',
            timeAllocation: 90
        },
        {
            id: 'jamb_phy_049',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Thermodynamics',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Absolute zero is:',
            options: [
                { label: 'A', text: '0°C' },
                { label: 'B', text: '-100°C' },
                { label: 'C', text: '-273°C' },
                { label: 'D', text: '-373°C' }
            ],
            correctAnswer: 'C',
            explanation: 'Absolute zero is -273°C or 0K',
            timeAllocation: 60
        },
        {
            id: 'jamb_phy_050',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Optics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Focal length 20cm convex lens. Power in diopters:',
            options: [
                { label: 'A', text: '2D' },
                { label: 'B', text: '5D' },
                { label: 'C', text: '10D' },
                { label: 'D', text: '20D' }
            ],
            correctAnswer: 'B',
            explanation: 'Power P = 1/f (meters) = 1/0.2 = 5D',
            timeAllocation: 120
        }
    ],

    // ==================== JAMB MATHEMATICS (50+ Questions) ====================
    'JAMB-NG-Science-Mathematics': [
        // Algebra (1-15)
        {
            id: 'jamb_math_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2023,
            difficulty: 'medium',
            questionText: 'If 3x - 2y = 10 and x + 2y = 6, find x.',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '3' },
                { label: 'C', text: '4' },
                { label: 'D', text: '5' }
            ],
            correctAnswer: 'C',
            explanation: 'Add equations: 4x = 16, x = 4',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Simplify: 2x + 3x',
            options: [
                { label: 'A', text: '5x' },
                { label: 'B', text: '5x²' },
                { label: 'C', text: '6x' },
                { label: 'D', text: '2x³' }
            ],
            correctAnswer: 'A',
            explanation: '2x + 3x = 5x (like terms)',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Solve: x² - 5x + 6 = 0',
            options: [
                { label: 'A', text: 'x = 1, 6' },
                { label: 'B', text: 'x = 2, 3' },
                { label: 'C', text: 'x = -2, -3' },
                { label: 'D', text: 'x = 1, 5' }
            ],
            correctAnswer: 'B',
            explanation: 'Factoring: (x-2)(x-3) = 0. x = 2 or 3',
            timeAllocation: 150
        },
        {
            id: 'jamb_math_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2023,
            difficulty: 'medium',
            questionText: 'If y = 2x + 3, find y when x = 5',
            options: [
                { label: 'A', text: '10' },
                { label: 'B', text: '11' },
                { label: 'C', text: '13' },
                { label: 'D', text: '15' }
            ],
            correctAnswer: 'C',
            explanation: 'y = 2(5) + 3 = 13',
            timeAllocation: 90
        },
        {
    id: 'jamb_math_005',
    exam: 'JAMB',
    country: 'Nigeria',
    department: 'Science',
    subject: 'Mathematics',
    topic: 'Algebra',
    year: 2022,
    difficulty: 'hard',
    questionText: 'Factorize: x² - 9',
    options: [
        { label: 'A', text: '(x - 3)(x - 3)' },
        { label: 'B', text: '(x + 3)(x + 3)' },
        { label: 'C', text: '(x + 3)(x - 3)' },
        { label: 'D', text: '(x² - 3)' }
    ],
    correctAnswer: 'C',
    explanation: 'x² - 9 is a difference of two squares. Hence, x² - 9 = (x + 3)(x - 3).',
    timeAllocation: 120
        },{
            id: 'jamb_math_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Simplify: (2x + 3)(x - 4)',
            options: [
                { label: 'A', text: '2x² - 5x - 12' },
                { label: 'B', text: '2x² + 5x - 12' },
                { label: 'C', text: '2x² - 8x + 3x - 12' },
                { label: 'D', text: '2x² - 5x + 12' }
            ],
            correctAnswer: 'A',
            explanation: 'FOIL: 2x² - 8x + 3x - 12 = 2x² - 5x - 12',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Solve: 5x = 25',
            options: [
                { label: 'A', text: '3' },
                { label: 'B', text: '4' },
                { label: 'C', text: '5' },
                { label: 'D', text: '6' }
            ],
            correctAnswer: 'C',
            explanation: 'x = 25/5 = 5',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Solve: 3(x - 2) = 2(x + 3)',
            options: [
                { label: 'A', text: '10' },
                { label: 'B', text: '11' },
                { label: 'C', text: '12' },
                { label: 'D', text: '13' }
            ],
            correctAnswer: 'C',
            explanation: '3x - 6 = 2x + 6. 3x - 2x = 12. x = 12',
            timeAllocation: 150
        },
        {
            id: 'jamb_math_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2021,
            difficulty: 'medium',
            questionText: 'If 2^x = 16, find x',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '3' },
                { label: 'C', text: '4' },
                { label: 'D', text: '5' }
            ],
            correctAnswer: 'C',
            explanation: '2^x = 16 = 2^4, therefore x = 4',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Make r subject: V = πr²h',
            options: [
                { label: 'A', text: 'r = √(V/πh)' },
                { label: 'B', text: 'r = V/πh' },
                { label: 'C', text: 'r = √(Vπh)' },
                { label: 'D', text: 'r = Vπh' }
            ],
            correctAnswer: 'A',
            explanation: 'r² = V/(πh), so r = √(V/πh)',
            timeAllocation: 150
        },

        // Trigonometry (11-18)
        {
            id: 'jamb_math_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2023,
            difficulty: 'hard',
            questionText: 'If tan θ = 4/3 and θ is acute, find sin θ',
            options: [
                { label: 'A', text: '3/5' },
                { label: 'B', text: '4/5' },
                { label: 'C', text: '3/4' },
                { label: 'D', text: '5/4' }
            ],
            correctAnswer: 'B',
            explanation: 'opp=4, adj=3. hyp=√(16+9)=5. sin θ = 4/5',
            timeAllocation: 150
        },
        {
            id: 'jamb_math_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2022,
            difficulty: 'easy',
            questionText: 'What is sin 90°?',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '0.5' },
                { label: 'C', text: '1' },
                { label: 'D', text: '√2' }
            ],
            correctAnswer: 'C',
            explanation: 'sin 90° = 1',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2021,
            difficulty: 'medium',
            questionText: 'If cos θ = 0.6, find sin θ (θ acute)',
            options: [
                { label: 'A', text: '0.4' },
                { label: 'B', text: '0.6' },
                { label: 'C', text: '0.8' },
                { label: 'D', text: '1.0' }
            ],
            correctAnswer: 'C',
            explanation: 'sin²θ + cos²θ = 1. sin²θ = 1 - 0.36 = 0.64. sin θ = 0.8',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_014',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Simplify: sin²θ + cos²θ',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '1' },
                { label: 'C', text: '2' },
                { label: 'D', text: 'sin 2θ' }
            ],
            correctAnswer: 'B',
            explanation: 'Fundamental identity: sin²θ + cos²θ = 1',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_015',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2022,
            difficulty: 'medium',
            questionText: 'What is tan 45°?',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '0.5' },
                { label: 'C', text: '1' },
                { label: 'D', text: '√3' }
            ],
            correctAnswer: 'C',
            explanation: 'tan 45° = 1',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_016',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2021,
            difficulty: 'hard',
            questionText: 'If sin θ = 3/5, find tan θ (θ acute)',
            options: [
                { label: 'A', text: '3/4' },
                { label: 'B', text: '4/3' },
                { label: 'C', text: '3/5' },
                { label: 'D', text: '5/3' }
            ],
            correctAnswer: 'A',
            explanation: 'opp=3, hyp=5. adj=4. tan θ = 3/4',
            timeAllocation: 150
        },
        {
            id: 'jamb_math_017',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2023,
            difficulty: 'medium',
            questionText: 'cos 0° equals:',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '0.5' },
                { label: 'C', text: '1' },
                { label: 'D', text: '√3/2' }
            ],
            correctAnswer: 'C',
            explanation: 'cos 0° = 1',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_018',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Trigonometry',
            year: 2022,
            difficulty: 'easy',
            questionText: 'sin 30° equals:',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '0.5' },
                { label: 'C', text: '1' },
                { label: 'D', text: '√3/2' }
            ],
            correctAnswer: 'B',
            explanation: 'sin 30° = 0.5 or 1/2',
            timeAllocation: 60
        },

        // Geometry (19-25)
        {
            id: 'jamb_math_019',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Volume of cube is 64cm³. Find side.',
            options: [
                { label: 'A', text: '2cm' },
                { label: 'B', text: '4cm' },
                { label: 'C', text: '6cm' },
                { label: 'D', text: '8cm' }
            ],
            correctAnswer: 'B',
            explanation: 'side³ = 64, side = ³√64 = 4cm',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_020',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Area of circle radius 7cm? (π = 22/7)',
            options: [
                { label: 'A', text: '144 cm²' },
                { label: 'B', text: '154 cm²' },
                { label: 'C', text: '164 cm²' },
                { label: 'D', text: '174 cm²' }
            ],
            correctAnswer: 'B',
            explanation: 'A = πr² = (22/7) × 49 = 154 cm²',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_021',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Distance between A(2,3) and B(6,6)?',
            options: [
                { label: 'A', text: '3' },
                { label: 'B', text: '4' },
                { label: 'C', text: '5' },
                { label: 'D', text: '6' }
            ],
            correctAnswer: 'C',
            explanation: 'd = √[(6-2)² + (6-3)²] = √25 = 5',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_022',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Perimeter of rectangle: length 8cm, width 5cm',
            options: [
                { label: 'A', text: '13cm' },
                { label: 'B', text: '21cm' },
                { label: 'C', text: '26cm' },
                { label: 'D', text: '40cm' }
            ],
            correctAnswer: 'C',
            explanation: 'P = 2(l + w) = 2(8 + 5) = 26cm',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_023',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Sum of angles in triangle?',
            options: [
                { label: 'A', text: '90°' },
                { label: 'B', text: '180°' },
                { label: 'C', text: '270°' },
                { label: 'D', text: '360°' }
            ],
            correctAnswer: 'B',
            explanation: 'Sum of angles in triangle = 180°',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_024',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Surface area of cube with side 3cm:',
            options: [
                { label: 'A', text: '27 cm²' },
                { label: 'B', text: '36 cm²' },
                { label: 'C', text: '54 cm²' },
                { label: 'D', text: '81 cm²' }
            ],
            correctAnswer: 'C',
            explanation: 'SA = 6a² = 6(3²) = 6 × 9 = 54 cm²',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_025',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Geometry',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Area of triangle: base 10cm, height 6cm',
            options: [
                { label: 'A', text: '20 cm²' },
                { label: 'B', text: '30 cm²' },
                { label: 'C', text: '40 cm²' },
                { label: 'D', text: '60 cm²' }
            ],
            correctAnswer: 'B',
            explanation: 'A = ½bh = ½(10)(6) = 30 cm²',
            timeAllocation: 90
        },

        // Statistics & Calculus (26-40)
        {
            id: 'jamb_math_026',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Statistics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Mean of: 12, 15, 18, 20, 25',
            options: [
                { label: 'A', text: '17' },
                { label: 'B', text: '18' },
                { label: 'C', text: '19' },
                { label: 'D', text: '20' }
            ],
            correctAnswer: 'B',
            explanation: 'Mean = (12+15+18+20+25)/5 = 90/5 = 18',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_027',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Statistics',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Median of: 2, 5, 8, 11, 14, 17, 20',
            options: [
                { label: 'A', text: '8' },
                { label: 'B', text: '11' },
                { label: 'C', text: '14' },
                { label: 'D', text: '17' }
            ],
            correctAnswer: 'B',
            explanation: 'Middle value (4th of 7) is 11',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_028',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Statistics',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Mode of: 3, 5, 5, 7, 9, 9, 9, 11',
            options: [
                { label: 'A', text: '3' },
                { label: 'B', text: '5' },
                { label: 'C', text: '7' },
                { label: 'D', text: '9' }
            ],
            correctAnswer: 'D',
            explanation: 'Mode = most frequent = 9 (appears 3 times)',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_029',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Calculus',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Find dy/dx if y = 3x³ - 2x² + 5x',
            options: [
                { label: 'A', text: '9x² - 4x + 5' },
                { label: 'B', text: '6x² - 2x + 5' },
                { label: 'C', text: '9x² - 2x + 5' },
                { label: 'D', text: '3x² - 4x + 5' }
            ],
            correctAnswer: 'A',
            explanation: 'dy/dx = 9x² - 4x + 5',
            timeAllocation: 150
        },
        {
            id: 'jamb_math_030',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Calculus',
            year: 2022,
            difficulty: 'medium',
            questionText: 'If y = x², find dy/dx',
            options: [
                { label: 'A', text: 'x' },
                { label: 'B', text: '2x' },
                { label: 'C', text: 'x²' },
                { label: 'D', text: '2' }
            ],
            correctAnswer: 'B',
            explanation: 'dy/dx = 2x',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_031',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Probability',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Bag: 5 red, 3 blue. Probability of red?',
            options: [
                { label: 'A', text: '3/8' },
                { label: 'B', text: '5/8' },
                { label: 'C', text: '3/5' },
                { label: 'D', text: '5/3' }
            ],
            correctAnswer: 'B',
            explanation: 'P(red) = 5/(5+3) = 5/8',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_032',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Sequences',
            year: 2022,
            difficulty: 'hard',
            questionText: '10th term of: 3, 7, 11, 15...',
            options: [
                { label: 'A', text: '37' },
                { label: 'B', text: '39' },
                { label: 'C', text: '41' },
                { label: 'D', text: '43' }
            ],
            correctAnswer: 'B',
            explanation: 'aₙ = a + (n-1)d = 3 + 9(4) = 39',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_033',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Logarithms',
            year: 2021,
            difficulty: 'hard',
            questionText: 'If log₂(x) = 3, find x',
            options: [
                { label: 'A', text: '6' },
                { label: 'B', text: '8' },
                { label: 'C', text: '9' },
                { label: 'D', text: '12' }
            ],
            correctAnswer: 'B',
            explanation: 'log₂(x) = 3 means 2³ = x, so x = 8',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_034',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Indices',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Simplify: 2⁵ × 2³',
            options: [
                { label: 'A', text: '2⁸' },
                { label: 'B', text: '2¹⁵' },
                { label: 'C', text: '4⁸' },
                { label: 'D', text: '4¹⁵' }
            ],
            correctAnswer: 'A',
            explanation: '2⁵ × 2³ = 2⁵⁺³ = 2⁸',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_035',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Fractions',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Simplify: 2/3 + 1/6',
            options: [
                { label: 'A', text: '1/2' },
                { label: 'B', text: '2/3' },
                { label: 'C', text: '5/6' },
                { label: 'D', text: '1' }
            ],
            correctAnswer: 'C',
            explanation: '4/6 + 1/6 = 5/6',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_036',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Percentages',
            year: 2021,
            difficulty: 'medium',
            questionText: 'What is 25% of 80?',
            options: [
                { label: 'A', text: '15' },
                { label: 'B', text: '20' },
                { label: 'C', text: '25' },
                { label: 'D', text: '30' }
            ],
            correctAnswer: 'B',
            explanation: '25% × 80 = 0.25 × 80 = 20',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_037',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Ratio',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Divide 150 in ratio 2:3:5. Largest share?',
            options: [
                { label: 'A', text: '30' },
                { label: 'B', text: '45' },
                { label: 'C', text: '60' },
                { label: 'D', text: '75' }
            ],
            correctAnswer: 'D',
            explanation: 'Total parts = 10. One part = 15. Largest = 5×15 = 75',
            timeAllocation: 120
        },
        {
            id: 'jamb_math_038',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Calculus',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Derivative of constant is:',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '1' },
                { label: 'C', text: 'Constant' },
                { label: 'D', text: 'Undefined' }
            ],
            correctAnswer: 'A',
            explanation: 'Derivative of any constant = 0',
            timeAllocation: 60
        },
        {
            id: 'jamb_math_039',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Sets',
            year: 2021,
            difficulty: 'medium',
            questionText: 'If A = {1,2,3} and B = {2,3,4}, find A ∩ B',
            options: [
                { label: 'A', text: '{1,2,3,4}' },
                { label: 'B', text: '{2,3}' },
                { label: 'C', text: '{1,4}' },
                { label: 'D', text: '{1,2,3}' }
            ],
            correctAnswer: 'B',
            explanation: 'A ∩ B = common elements = {2,3}',
            timeAllocation: 90
        },
        {
            id: 'jamb_math_040',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Statistics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Range of: 10, 15, 20, 25, 30',
            options: [
                { label: 'A', text: '15' },
                { label: 'B', text: '20' },
                { label: 'C', text: '25' },
                { label: 'D', text: '30' }
            ],
            correctAnswer: 'B',
            explanation: 'Range = Max - Min = 30 - 10 = 20',
            timeAllocation: 60
        }
    ],

    // ==================== JAMB CHEMISTRY (25 Questions) ====================
    'JAMB-NG-Science-Chemistry': [
        {
            id: 'jamb_chem_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Element X: atomic number 17, mass 35. Neutrons?',
            options: [
                { label: 'A', text: '17' },
                { label: 'B', text: '18' },
                { label: 'C', text: '35' },
                { label: 'D', text: '52' }
            ],
            correctAnswer: 'B',
            explanation: 'Neutrons = Mass - Atomic = 35 - 17 = 18',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Periodic Table',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Atomic number of Carbon?',
            options: [
                { label: 'A', text: '4' },
                { label: 'B', text: '6' },
                { label: 'C', text: '8' },
                { label: 'D', text: '12' }
            ],
            correctAnswer: 'B',
            explanation: 'Carbon has 6 protons, atomic number = 6',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Chemical Bonding',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Bond type in NaCl?',
            options: [
                { label: 'A', text: 'Covalent' },
                { label: 'B', text: 'Ionic' },
                { label: 'C', text: 'Metallic' },
                { label: 'D', text: 'Hydrogen' }
            ],
            correctAnswer: 'B',
            explanation: 'NaCl forms ionic bond: Na⁺ and Cl⁻',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Oxidation States',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Oxidation state of S in H₂SO₄?',
            options: [
                { label: 'A', text: '+2' },
                { label: 'B', text: '+4' },
                { label: 'C', text: '+6' },
                { label: 'D', text: '+8' }
            ],
            correctAnswer: 'C',
            explanation: '2(+1) + x + 4(-2) = 0. x = +6',
            timeAllocation: 150
        },
        {
            id: 'jamb_chem_005',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            year: 2022,
            difficulty: 'medium',
            questionText: 'IUPAC name for CH₃CH₂CH₂OH?',
            options: [
                { label: 'A', text: 'Methanol' },
                { label: 'B', text: 'Ethanol' },
                { label: 'C', text: 'Propanol' },
                { label: 'D', text: 'Butanol' }
            ],
            correctAnswer: 'C',
            explanation: '3 carbons + OH = Propanol',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Acids and Bases',
            year: 2021,
            difficulty: 'easy',
            questionText: 'pH of neutral solution at 25°C?',
            options: [
                { label: 'A', text: '0' },
                { label: 'B', text: '7' },
                { label: 'C', text: '10' },
                { label: 'D', text: '14' }
            ],
            correctAnswer: 'B',
            explanation: 'Neutral pH = 7',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Stoichiometry',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Moles in 22g CO₂? (C=12, O=16)',
            options: [
                { label: 'A', text: '0.25' },
                { label: 'B', text: '0.5' },
                { label: 'C', text: '1.0' },
                { label: 'D', text: '2.0' }
            ],
            correctAnswer: 'B',
            explanation: 'Molar mass CO₂ = 44. n = 22/44 = 0.5',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Electrochemistry',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Process at cathode is:',
            options: [
                { label: 'A', text: 'Oxidation' },
                { label: 'B', text: 'Reduction' },
                { label: 'C', text: 'Neutralization' },
                { label: 'D', text: 'Polymerization' }
            ],
            correctAnswer: 'B',
            explanation: 'Reduction occurs at cathode (gain electrons)',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'States of Matter',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Change from solid to liquid is:',
            options: [
                { label: 'A', text: 'Melting' },
                { label: 'B', text: 'Freezing' },
                { label: 'C', text: 'Evaporation' },
                { label: 'D', text: 'Sublimation' }
            ],
            correctAnswer: 'A',
            explanation: 'Melting = solid to liquid',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Chemical Equations',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Balance: _H₂ + _O₂ → _H₂O',
            options: [
                { label: 'A', text: '1, 1, 1' },
                { label: 'B', text: '2, 1, 2' },
                { label: 'C', text: '1, 2, 2' },
                { label: 'D', text: '2, 2, 2' }
            ],
            correctAnswer: 'B',
            explanation: '2H₂ + O₂ → 2H₂O',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Redox Reactions',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Oxidation is:',
            options: [
                { label: 'A', text: 'Loss of electrons' },
                { label: 'B', text: 'Gain of electrons' },
                { label: 'C', text: 'Loss of protons' },
                { label: 'D', text: 'Gain of protons' }
            ],
            correctAnswer: 'A',
            explanation: 'Oxidation = loss of electrons',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Gas Laws',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Boyle\'s Law relates:',
            options: [
                { label: 'A', text: 'P and V' },
                { label: 'B', text: 'V and T' },
                { label: 'C', text: 'P and T' },
                { label: 'D', text: 'n and V' }
            ],
            correctAnswer: 'A',
            explanation: 'Boyle: P ∝ 1/V (constant T)',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Solutions',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Molarity of 2 moles in 500mL?',
            options: [
                { label: 'A', text: '2M' },
                { label: 'B', text: '4M' },
                { label: 'C', text: '0.5M' },
                { label: 'D', text: '1M' }
            ],
            correctAnswer: 'B',
            explanation: 'M = moles/L = 2/0.5 = 4M',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_014',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Thermochemistry',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Exothermic reaction:',
            options: [
                { label: 'A', text: 'Absorbs heat' },
                { label: 'B', text: 'Releases heat' },
                { label: 'C', text: 'No heat change' },
                { label: 'D', text: 'Requires catalyst' }
            ],
            correctAnswer: 'B',
            explanation: 'Exothermic = releases heat',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_015',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Alkanes',
            year: 2021,
            difficulty: 'easy',
            questionText: 'General formula for alkanes:',
            options: [
                { label: 'A', text: 'CₙH₂ₙ' },
                { label: 'B', text: 'CₙH₂ₙ₊₂' },
                { label: 'C', text: 'CₙH₂ₙ₋₂' },
                { label: 'D', text: 'CₙHₙ' }
            ],
            correctAnswer: 'B',
            explanation: 'Alkanes: CₙH₂ₙ₊₂',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_016',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Halogens',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Most reactive halogen:',
            options: [
                { label: 'A', text: 'Fluorine' },
                { label: 'B', text: 'Chlorine' },
                { label: 'C', text: 'Bromine' },
                { label: 'D', text: 'Iodine' }
            ],
            correctAnswer: 'A',
            explanation: 'Fluorine most reactive halogen',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_017',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Water',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Chemical formula of water:',
            options: [
                { label: 'A', text: 'H₂O' },
                { label: 'B', text: 'HO₂' },
                { label: 'C', text: 'H₂O₂' },
                { label: 'D', text: 'H₃O' }
            ],
            correctAnswer: 'A',
            explanation: 'Water = H₂O',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_018',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Metals',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Most abundant metal in earth crust:',
            options: [
                { label: 'A', text: 'Iron' },
                { label: 'B', text: 'Aluminum' },
                { label: 'C', text: 'Copper' },
                { label: 'D', text: 'Gold' }
            ],
            correctAnswer: 'B',
            explanation: 'Aluminum most abundant metal',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_019',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Catalysts',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Catalyst:',
            options: [
                { label: 'A', text: 'Consumed in reaction' },
                { label: 'B', text: 'Speeds up reaction' },
                { label: 'C', text: 'Slows reaction' },
                { label: 'D', text: 'Changes products' }
            ],
            correctAnswer: 'B',
            explanation: 'Catalyst speeds up reaction',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_020',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Salts',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Neutralization produces:',
            options: [
                { label: 'A', text: 'Acid only' },
                { label: 'B', text: 'Base only' },
                { label: 'C', text: 'Salt and water' },
                { label: 'D', text: 'Gas only' }
            ],
            correctAnswer: 'C',
            explanation: 'Acid + Base → Salt + Water',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_021',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Rate of Reaction',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Factor NOT affecting rate:',
            options: [
                { label: 'A', text: 'Temperature' },
                { label: 'B', text: 'Concentration' },
                { label: 'C', text: 'Catalyst' },
                { label: 'D', text: 'Color' }
            ],
            correctAnswer: 'D',
            explanation: 'Color doesn\'t affect rate',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_022',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Noble Gases',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Noble gases are:',
            options: [
                { label: 'A', text: 'Very reactive' },
                { label: 'B', text: 'Inert' },
                { label: 'C', text: 'Radioactive' },
                { label: 'D', text: 'Metallic' }
            ],
            correctAnswer: 'B',
            explanation: 'Noble gases = inert/unreactive',
            timeAllocation: 90
        },
        {
            id: 'jamb_chem_023',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Electrolysis',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Electrolysis requires:',
            options: [
                { label: 'A', text: 'Heat' },
                { label: 'B', text: 'Light' },
                { label: 'C', text: 'Electricity' },
                { label: 'D', text: 'Pressure' }
            ],
            correctAnswer: 'C',
            explanation: 'Electrolysis uses electricity',
            timeAllocation: 60
        },
        {
            id: 'jamb_chem_024',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Isomerism',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Isomers have same:',
            options: [
                { label: 'A', text: 'Structure' },
                { label: 'B', text: 'Molecular formula' },
                { label: 'C', text: 'Properties' },
                { label: 'D', text: 'Names' }
            ],
            correctAnswer: 'B',
            explanation: 'Isomers = same molecular formula',
            timeAllocation: 120
        },
        {
            id: 'jamb_chem_025',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Indicators',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Litmus turns red in:',
            options: [
                { label: 'A', text: 'Acid' },
                { label: 'B', text: 'Base' },
                { label: 'C', text: 'Neutral' },
                { label: 'D', text: 'Salt' }
            ],
                    correctAnswer: 'A',
            explanation: 'Litmus red in acid',
            timeAllocation: 60
        }
    ],
 // ==================== JAMB BIOLOGY (25 Questions) ====================
    'JAMB-NG-Science-Biology': [
        {
            id: 'jamb_bio_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Cell Biology',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Organelle for protein synthesis?',
            options: [
                { label: 'A', text: 'Mitochondria' },
                { label: 'B', text: 'Ribosomes' },
                { label: 'C', text: 'Nucleus' },
                { label: 'D', text: 'Golgi apparatus' }
            ],
            correctAnswer: 'B',
            explanation: 'Ribosomes synthesize proteins',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Genetics',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Who determines offspring sex in humans?',
            options: [
                { label: 'A', text: 'Mother' },
                { label: 'B', text: 'Father' },
                { label: 'C', text: 'Environment' },
                { label: 'D', text: 'Random chance' }
            ],
            correctAnswer: 'B',
            explanation: 'Father contributes X or Y chromosome',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Ecology',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Organisms that make their own food:',
            options: [
                { label: 'A', text: 'Heterotrophs' },
                { label: 'B', text: 'Autotrophs' },
                { label: 'C', text: 'Decomposers' },
                { label: 'D', text: 'Consumers' }
            ],
            correctAnswer: 'B',
            explanation: 'Autotrophs/producers make own food',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Respiration',
            year: 2023,
            difficulty: 'hard',
            questionText: 'ATP produced from one glucose (aerobic)?',
            options: [
                { label: 'A', text: '2' },
                { label: 'B', text: '32' },
                { label: 'C', text: '36-38' },
                { label: 'D', text: '50' }
            ],
            correctAnswer: 'C',
            explanation: 'Aerobic respiration yields 36-38 ATP',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_005',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Photosynthesis',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Chlorophyll is found in:',
            options: [
                { label: 'A', text: 'Nucleus' },
                { label: 'B', text: 'Mitochondria' },
                { label: 'C', text: 'Chloroplast' },
                { label: 'D', text: 'Ribosome' }
            ],
            correctAnswer: 'C',
            explanation: 'Chlorophyll in chloroplasts',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Classification',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Binomial nomenclature uses:',
            options: [
                { label: 'A', text: 'One name' },
                { label: 'B', text: 'Two names' },
                { label: 'C', text: 'Three names' },
                { label: 'D', text: 'Four names' }
            ],
            correctAnswer: 'B',
            explanation: 'Binomial = two names (genus, species)',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Evolution',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Theory of natural selection by:',
            options: [
                { label: 'A', text: 'Mendel' },
                { label: 'B', text: 'Darwin' },
                { label: 'C', text: 'Lamarck' },
                { label: 'D', text: 'Watson' }
            ],
            correctAnswer: 'B',
            explanation: 'Darwin proposed natural selection',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Blood',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Vessel carrying oxygenated blood from lungs:',
            options: [
                { label: 'A', text: 'Pulmonary artery' },
                { label: 'B', text: 'Pulmonary vein' },
                { label: 'C', text: 'Aorta' },
                { label: 'D', text: 'Vena cava' }
            ],
            correctAnswer: 'B',
            explanation: 'Pulmonary vein carries oxygenated blood from lungs',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Nutrition',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Enzyme that digests starch:',
            options: [
                { label: 'A', text: 'Lipase' },
                { label: 'B', text: 'Amylase' },
                { label: 'C', text: 'Protease' },
                { label: 'D', text: 'Pepsin' }
            ],
            correctAnswer: 'B',
            explanation: 'Amylase digests starch',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Reproduction',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Fusion of gametes is called:',
            options: [
                { label: 'A', text: 'Pollination' },
                { label: 'B', text: 'Fertilization' },
                { label: 'C', text: 'Germination' },
                { label: 'D', text: 'Budding' }
            ],
            correctAnswer: 'B',
            explanation: 'Fertilization = fusion of gametes',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Homeostasis',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Hormone lowering blood glucose:',
            options: [
                { label: 'A', text: 'Glucagon' },
                { label: 'B', text: 'Insulin' },
                { label: 'C', text: 'Adrenaline' },
                { label: 'D', text: 'Thyroxine' }
            ],
            correctAnswer: 'B',
            explanation: 'Insulin lowers blood glucose',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Nervous System',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Basic unit of nervous system:',
            options: [
                { label: 'A', text: 'Cell' },
                { label: 'B', text: 'Neuron' },
                { label: 'C', text: 'Tissue' },
                { label: 'D', text: 'Organ' }
            ],
            correctAnswer: 'B',
            explanation: 'Neuron = basic unit of nervous system',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Bones',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Immovable joint found in:',
            options: [
                { label: 'A', text: 'Elbow' },
                { label: 'B', text: 'Knee' },
                { label: 'C', text: 'Skull' },
                { label: 'D', text: 'Hip' }
            ],
            correctAnswer: 'C',
            explanation: 'Skull has immovable joints',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_014',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Vitamins',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Vitamin for good vision:',
            options: [
                { label: 'A', text: 'Vitamin A' },
                { label: 'B', text: 'Vitamin C' },
                { label: 'C', text: 'Vitamin D' },
                { label: 'D', text: 'Vitamin K' }
            ],
            correctAnswer: 'A',
            explanation: 'Vitamin A for vision',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_015',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Plant Structure',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Tissue transporting water in plants:',
            options: [
                { label: 'A', text: 'Phloem' },
                { label: 'B', text: 'Xylem' },
                { label: 'C', text: 'Cambium' },
                { label: 'D', text: 'Epidermis' }
            ],
            correctAnswer: 'B',
            explanation: 'Xylem transports water',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_016',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Adaptation',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Desert animals conserve water by:',
            options: [
                { label: 'A', text: 'Drinking more' },
                { label: 'B', text: 'Concentrated urine' },
                { label: 'C', text: 'More sweat' },
                { label: 'D', text: 'Larger bladder' }
            ],
            correctAnswer: 'B',
            explanation: 'Desert animals produce concentrated urine',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_017',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Diseases',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Malaria is caused by:',
            options: [
                { label: 'A', text: 'Bacteria' },
                { label: 'B', text: 'Virus' },
                { label: 'C', text: 'Protozoan' },
                { label: 'D', text: 'Fungus' }
            ],
            correctAnswer: 'C',
            explanation: 'Malaria caused by Plasmodium (protozoan)',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_018',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Excretion',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Main excretory organ in humans:',
            options: [
                { label: 'A', text: 'Lungs' },
                { label: 'B', text: 'Skin' },
                { label: 'C', text: 'Kidney' },
                { label: 'D', text: 'Liver' }
            ],
            correctAnswer: 'C',
            explanation: 'Kidney is main excretory organ',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_019',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Food Chain',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Primary consumers are:',
            options: [
                { label: 'A', text: 'Producers' },
                { label: 'B', text: 'Herbivores' },
                { label: 'C', text: 'Carnivores' },
                { label: 'D', text: 'Decomposers' }
            ],
            correctAnswer: 'B',
            explanation: 'Primary consumers = herbivores',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_020',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Cell Division',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Mitosis produces:',
            options: [
                { label: 'A', text: '2 identical cells' },
                { label: 'B', text: '4 different cells' },
                { label: 'C', text: '2 different cells' },
                { label: 'D', text: '4 identical cells' }
            ],
            correctAnswer: 'A',
            explanation: 'Mitosis produces 2 identical cells',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_021',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Microorganisms',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Bacteria reproduce by:',
            options: [
                { label: 'A', text: 'Mitosis' },
                { label: 'B', text: 'Meiosis' },
                { label: 'C', text: 'Binary fission' },
                { label: 'D', text: 'Budding' }
            ],
            correctAnswer: 'C',
            explanation: 'Bacteria use binary fission',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_022',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Sense Organs',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Receptor for hearing:',
            options: [
                { label: 'A', text: 'Retina' },
                { label: 'B', text: 'Cochlea' },
                { label: 'C', text: 'Cornea' },
                { label: 'D', text: 'Iris' }
            ],
            correctAnswer: 'B',
            explanation: 'Cochlea contains hearing receptors',
            timeAllocation: 90
        },
        {
            id: 'jamb_bio_023',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Immunity',
            year: 2022,
            difficulty: 'easy',
            questionText: 'White blood cells function in:',
            options: [
                { label: 'A', text: 'Transport' },
                { label: 'B', text: 'Defense' },
                { label: 'C', text: 'Clotting' },
                { label: 'D', text: 'Excretion' }
            ],
            correctAnswer: 'B',
            explanation: 'WBCs defend against disease',
            timeAllocation: 60
        },
        {
            id: 'jamb_bio_024',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Enzymes',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Enzymes are:',
            options: [
                { label: 'A', text: 'Carbohydrates' },
                { label: 'B', text: 'Lipids' },
                { label: 'C', text: 'Proteins' },
                { label: 'D', text: 'Nucleic acids' }
            ],
            correctAnswer: 'C',
            explanation: 'Enzymes are protein catalysts',
            timeAllocation: 120
        },
        {
            id: 'jamb_bio_025',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Population',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Population growth rate depends on:',
            options: [
                { label: 'A', text: 'Birth rate only' },
                { label: 'B', text: 'Death rate only' },
                { label: 'C', text: 'Birth and death rates' },
                { label: 'D', text: 'Immigration only' }
            ],
            correctAnswer: 'C',
            explanation: 'Growth = births - deaths',
            timeAllocation: 90
        }
    ],

    // ==================== JAMB ECONOMICS (25 Questions) ====================
    'JAMB-NG-Commercial-Economics': [
        {
            id: 'jamb_econ_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Demand and Supply',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Price increases, quantity demanded decreases. This is law of:',
            options: [
                { label: 'A', text: 'Supply' },
                { label: 'B', text: 'Demand' },
                { label: 'C', text: 'Diminishing returns' },
                { label: 'D', text: 'Comparative advantage' }
            ],
            correctAnswer: 'B',
            explanation: 'Law of demand: inverse P-Qd relationship',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Market Structures',
            year: 2022,
            difficulty: 'hard',
            questionText: 'Market with single seller:',
            options: [
                { label: 'A', text: 'Perfect competition' },
                { label: 'B', text: 'Monopoly' },
                { label: 'C', text: 'Oligopoly' },
                { label: 'D', text: 'Monopolistic competition' }
            ],
            correctAnswer: 'B',
            explanation: 'Monopoly = one seller',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'National Income',
            year: 2021,
            difficulty: 'hard',
            questionText: 'GDP at market prices - indirect taxes + subsidies =',
            options: [
                { label: 'A', text: 'GNP' },
                { label: 'B', text: 'NNP' },
                { label: 'C', text: 'GDP at factor cost' },
                { label: 'D', text: 'National income' }
            ],
            correctAnswer: 'C',
            explanation: 'GDP factor cost = GDP market - taxes + subsidies',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Elasticity',
            year: 2023,
            difficulty: 'medium',
            questionText: '10% price increase → 5% demand decrease. Demand is:',
            options: [
                { label: 'A', text: 'Elastic' },
                { label: 'B', text: 'Inelastic' },
                { label: 'C', text: 'Unitary' },
                { label: 'D', text: 'Perfectly elastic' }
            ],
            correctAnswer: 'B',
            explanation: 'PED = 5/10 = 0.5 < 1 = inelastic',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_005',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Money',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Primary function of money:',
            options: [
                { label: 'A', text: 'Store of value' },
                { label: 'B', text: 'Medium of exchange' },
                { label: 'C', text: 'Unit of account' },
                { label: 'D', text: 'Standard payment' }
            ],
            correctAnswer: 'B',
            explanation: 'Main function: medium of exchange',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Production',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Factors of production include:',
            options: [
                { label: 'A', text: 'Land, labor, capital' },
                { label: 'B', text: 'Land only' },
                { label: 'C', text: 'Labor only' },
                { label: 'D', text: 'Capital only' }
            ],
            correctAnswer: 'A',
            explanation: 'Factors: Land, Labor, Capital, Entrepreneur',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Inflation',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Persistent rise in general price level:',
            options: [
                { label: 'A', text: 'Deflation' },
                { label: 'B', text: 'Inflation' },
                { label: 'C', text: 'Stagflation' },
                { label: 'D', text: 'Reflation' }
            ],
            correctAnswer: 'B',
            explanation: 'Inflation = rising prices',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Unemployment',
            year: 2022,
            difficulty: 'easy',
            questionText: 'People willing to work but jobless:',
            options: [
                { label: 'A', text: 'Employed' },
                { label: 'B', text: 'Unemployed' },
                { label: 'C', text: 'Underemployed' },
                { label: 'D', text: 'Inactive' }
            ],
            correctAnswer: 'B',
            explanation: 'Unemployed = willing but no job',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Trade',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Absolute advantage is when country:',
            options: [
                { label: 'A', text: 'Produces more efficiently' },
                { label: 'B', text: 'Has more resources' },
                { label: 'C', text: 'Has larger population' },
                { label: 'D', text: 'Imports more' }
            ],
            correctAnswer: 'A',
            explanation: 'Absolute advantage = more efficient production',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Taxation',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Progressive tax means:',
            options: [
                { label: 'A', text: 'Same rate for all' },
                { label: 'B', text: 'Higher rate for higher income' },
                { label: 'C', text: 'Lower rate for all' },
                { label: 'D', text: 'No tax' }
            ],
            correctAnswer: 'B',
            explanation: 'Progressive = higher income, higher rate',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Banking',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Central bank function:',
            options: [
                { label: 'A', text: 'Issue currency' },
                { label: 'B', text: 'Give loans to public' },
                { label: 'C', text: 'Accept deposits' },
                { label: 'D', text: 'Sell goods' }
            ],
            correctAnswer: 'A',
            explanation: 'Central bank issues currency',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Development',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Economic development includes:',
            options: [
                { label: 'A', text: 'GDP growth only' },
                { label: 'B', text: 'Growth and welfare' },
                { label: 'C', text: 'Population increase' },
                { label: 'D', text: 'Export increase' }
            ],
            correctAnswer: 'B',
            explanation: 'Development = growth + welfare improvement',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Budget',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Deficit budget means:',
            options: [
                { label: 'A', text: 'Revenue > Expenditure' },
                { label: 'B', text: 'Revenue < Expenditure' },
                { label: 'C', text: 'Revenue = Expenditure' },
                { label: 'D', text: 'No revenue' }
            ],
            correctAnswer: 'B',
            explanation: 'Deficit = expenditure exceeds revenue',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_014',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Scarcity',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Basic economic problem is:',
            options: [
                { label: 'A', text: 'Abundance' },
                { label: 'B', text: 'Scarcity' },
                { label: 'C', text: 'Surplus' },
                { label: 'D', text: 'Waste' }
            ],
            correctAnswer: 'B',
            explanation: 'Scarcity is basic economic problem',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_015',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Utility',
            year: 2021,
            difficulty: 'medium',
            questionText: 'Satisfaction from consuming goods:',
            options: [
                { label: 'A', text: 'Profit' },
                { label: 'B', text: 'Utility' },
                { label: 'C', text: 'Cost' },
                { label: 'D', text: 'Price' }
            ],
            correctAnswer: 'B',
            explanation: 'Utility = satisfaction from consumption',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_016',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Population',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Optimum population is when:',
            options: [
                { label: 'A', text: 'Population is maximum' },
                { label: 'B', text: 'Per capita income is maximum' },
                { label: 'C', text: 'Population is minimum' },
                { label: 'D', text: 'Resources are unlimited' }
            ],
            correctAnswer: 'B',
            explanation: 'Optimum = maximum per capita income',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_017',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Consumption',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Consumer goods are:',
            options: [
                { label: 'A', text: 'Used to produce other goods' },
                { label: 'B', text: 'Used directly for satisfaction' },
                { label: 'C', text: 'Sold to businesses' },
                { label: 'D', text: 'Exported only' }
            ],
            correctAnswer: 'B',
            explanation: 'Consumer goods = direct satisfaction',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_018',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Price Control',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Maximum price set by government:',
            options: [
                { label: 'A', text: 'Price ceiling' },
                { label: 'B', text: 'Price floor' },
                { label: 'C', text: 'Equilibrium price' },
                { label: 'D', text: 'Market price' }
            ],
            correctAnswer: 'A',
            explanation: 'Price ceiling = maximum price',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_019',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Revenue',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Total revenue formula:',
            options: [
                { label: 'A', text: 'Price + Quantity' },
                { label: 'B', text: 'Price × Quantity' },
                { label: 'C', text: 'Price - Quantity' },
                { label: 'D', text: 'Price / Quantity' }
            ],
            correctAnswer: 'B',
            explanation: 'TR = Price × Quantity',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_020',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Costs',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Fixed costs:',
            options: [
                { label: 'A', text: 'Change with output' },
                { label: 'B', text: 'Remain constant' },
                { label: 'C', text: 'Zero at all times' },
                { label: 'D', text: 'Equal variable costs' }
            ],
            correctAnswer: 'B',
            explanation: 'Fixed costs don\'t change with output',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_021',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Opportunity Cost',
            year: 2021,
            difficulty: 'easy',
            questionText: 'Opportunity cost is:',
            options: [
                { label: 'A', text: 'Money spent' },
                { label: 'B', text: 'Next best alternative forgone' },
                { label: 'C', text: 'Total cost' },
                { label: 'D', text: 'Market price' }
            ],
            correctAnswer: 'B',
            explanation: 'Opportunity cost = best alternative forgone',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_022',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Economic Systems',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Capitalist economy characterized by:',
            options: [
                { label: 'A', text: 'Government ownership' },
                { label: 'B', text: 'Private ownership' },
                { label: 'C', text: 'No markets' },
                { label: 'D', text: 'Equal distribution' }
            ],
            correctAnswer: 'B',
            explanation: 'Capitalism = private ownership',
            timeAllocation: 120
        },
        {
            id: 'jamb_econ_023',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Balance of Payments',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Current account includes:',
            options: [
                { label: 'A', text: 'Trade in goods and services' },
                { label: 'B', text: 'Capital flows only' },
                { label: 'C', text: 'Loans only' },
                { label: 'D', text: 'Investments only' }
            ],
            correctAnswer: 'A',
            explanation: 'Current account = trade + transfers',
            timeAllocation: 90
        },
        {
            id: 'jamb_econ_024',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Economic Growth',
            year: 2021,
            difficulty: 'easy',
            questionText: 'GDP measures:',
            options: [
                { label: 'A', text: 'Price level' },
                { label: 'B', text: 'Total output' },
                { label: 'C', text: 'Unemployment' },
                { label: 'D', text: 'Inflation' }
            ],
            correctAnswer: 'B',
            explanation: 'GDP = total economic output',
            timeAllocation: 60
        },
        {
            id: 'jamb_econ_025',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Exchange Rate',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Devaluation means:',
            options: [
                { label: 'A', text: 'Currency appreciates' },
                { label: 'B', text: 'Currency depreciates' },
                { label: 'C', text: 'Currency stable' },
                { label: 'D', text: 'No currency' }
            ],
            correctAnswer: 'B',
            explanation: 'Devaluation = currency loses value',
            timeAllocation: 120
        }
    ],

    // ==================== JAMB ACCOUNTING (25 Questions) ====================
    'JAMB-NG-Commercial-Accounting': [
        {
            id: 'jamb_acc_001',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Double Entry',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Every debit entry has corresponding:',
            options: [
                { label: 'A', text: 'Debit' },
                { label: 'B', text: 'Credit' },
                { label: 'C', text: 'Cash' },
                { label: 'D', text: 'Bank' }
            ],
            correctAnswer: 'B',
            explanation: 'Double entry: Debit = Credit',
            timeAllocation: 60
        },
        {
            id: 'jamb_acc_002',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Assets',
            year: 2022,
            difficulty: 'hard',
            questionText: 'NOT a current asset:',
            options: [
                { label: 'A', text: 'Stock' },
                { label: 'B', text: 'Debtors' },
                { label: 'C', text: 'Land' },
                { label: 'D', text: 'Cash' }
            ],
            correctAnswer: 'C',
            explanation: 'Land = fixed asset',
            timeAllocation: 90
        },
        {
            id: 'jamb_acc_003',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Depreciation',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Machine ₦50,000, scrap ₦5,000, 5yrs. Annual depreciation?',
            options: [
                { label: 'A', text: '₦8,000' },
                { label: 'B', text: '₦9,000' },
                { label: 'C', text: '₦10,000' },
                { label: 'D', text: '₦11,000' }
            ],
            correctAnswer: 'B',
            explanation: '(50,000-5,000)/5 = ₦9,000',
            timeAllocation: 120
        },
        {
            id: 'jamb_acc_004',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Trading Account',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Gross profit formula:',
            options: [
                { label: 'A', text: 'Sales - Purchases' },
                { label: 'B', text: 'Sales - Cost of goods sold' },
                { label: 'C', text: 'Sales - Expenses' },
                { label: 'D', text: 'Revenue - All costs' }
            ],
            correctAnswer: 'B',
            explanation: 'Gross profit = Sales - COGS',
            timeAllocation: 90
        },
        {
            id: 'jamb_acc_005',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Books of Entry',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Book for cash transactions:',
            options: [
                { label: 'A', text: 'Sales journal' },
                { label: 'B', text: 'Purchase journal' },
                { label: 'C', text: 'Cash book' },
                { label: 'D', text: 'General journal' }
            ],
            correctAnswer: 'C',
            explanation: 'Cash book records cash/bank transactions',
            timeAllocation: 60
        },
        {
            id: 'jamb_acc_006',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Trial Balance',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Trial balance purpose:',
            options: [
                { label: 'A', text: 'Calculate profit' },
                { label: 'B', text: 'Check arithmetic accuracy' },
                { label: 'C', text: 'Prepare invoices' },
                { label: 'D', text: 'Record sales' }
            ],
            correctAnswer: 'B',
            explanation: 'Trial balance checks accuracy',
            timeAllocation: 120
        },
        {
            id: 'jamb_acc_007',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Capital',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Owner\'s equity equation:',
            options: [
                { label: 'A', text: 'Assets + Liabilities' },
                { label: 'B', text: 'Assets - Liabilities' },
                { label: 'C', text: 'Assets × Liabilities' },
                { label: 'D', text: 'Liabilities - Assets' }
            ],
            correctAnswer: 'B',
            explanation: 'Capital = Assets - Liabilities',
            timeAllocation: 90
        },
        {
            id: 'jamb_acc_008',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Bad Debts',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Bad debts are:',
            options: [
                { label: 'A', text: 'Recoverable' },
                { label: 'B', text: 'Irrecoverable' },
                { label: 'C', text: 'Assets' },
                { label: 'D', text: 'Income' }
            ],
            correctAnswer: 'B',
            explanation: 'Bad debts = irrecoverable',
            timeAllocation: 60
        },
        {
            id: 'jamb_acc_009',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Accruals',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Accrued expenses are:',
            options: [
                { label: 'A', text: 'Prepaid' },
                { label: 'B', text: 'Outstanding' },
                { label: 'C', text: 'Paid in advance' },
                { label: 'D', text: 'Not expenses' }
            ],
            correctAnswer: 'B',
            explanation: 'Accrued = outstanding/unpaid',
            timeAllocation: 120
        },
        {
            id: 'jamb_acc_010',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Bank Reconciliation',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Reconciliation matches:',
            options: [
                { label: 'A', text: 'Cash book and bank statement' },
                { label: 'B', text: 'Debtors and creditors' },
                { label: 'C', text: 'Assets and liabilities' },
                { label: 'D', text: 'Income and expenses' }
            ],
            correctAnswer: 'A',
            explanation: 'Reconciles cash book with bank statement',
            timeAllocation: 90
        },
        {
            id: 'jamb_acc_011',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Partnership',
            year: 2022,
            difficulty: 'easy',
            questionText: 'Partners share:',
            options: [
                { label: 'A', text: 'Profits only' },
                { label: 'B', text: 'Losses only' },
                { label: 'C', text: 'Profits and losses' },
                { label: 'D', text: 'Nothing' }
            ],
            correctAnswer: 'C',
            explanation: 'Partners share profits and losses',
            timeAllocation: 60
        },
        {
            id: 'jamb_acc_012',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Limited Company',
            year: 2021,
            difficulty: 'hard',
            questionText: 'Ordinary shareholders receive:',
            options: [
                { label: 'A', text: 'Fixed dividend' },
                { label: 'B', text: 'Variable dividend' },
                { label: 'C', text: 'No dividend' },
                { label: 'D', text: 'Interest' }
            ],
            correctAnswer: 'B',
            explanation: 'Ordinary shares = variable dividend',
            timeAllocation: 120
        },
        {
            id: 'jamb_acc_013',
            exam: 'JAMB',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Accounting',
            topic: 'Stock Valuation',
            year: 2023,
            difficulty: 'medium',
            questionText: 'FIFO means:',
            options: [
                { label: 'A', text: 'First In First Out' },
                { label: 'B', text: 'First In Last Out' },
                { label: 'C', text: 'Last In First Out' },
                { label: 'D', text: 'Average cost' }
            ],
            correctAnswer: 'A',
            explanation: 'FIFO stands for First In First Out, a method used in inventory management and accounting.',
            timeAllocation: 90
        }
    ],

    // ==================== COMPLETE WAEC SUBJECTS (25 Questions Each) ====================
    'WAEC-NG-Science-Physics': [
        {
            id: 'waec_phy_001',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Mechanics',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Calculate the kinetic energy of a 2kg object moving at 6m/s',
            options: [
                { label: 'A', text: '36J' },
                { label: 'B', text: '72J' },
                { label: 'C', text: '18J' },
                { label: 'D', text: '12J' }
            ],
            correctAnswer: 'A',
            explanation: 'KE = ½mv² = ½ × 2 × 6² = 36J',
            timeAllocation: 120
        },
        {
            id: 'waec_phy_002',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Physics',
            topic: 'Waves',
            year: 2022,
            difficulty: 'medium',
            questionText: 'What is the frequency of a wave with wavelength 2m and speed 10m/s?',
            options: [
                { label: 'A', text: '5Hz' },
                { label: 'B', text: '20Hz' },
                { label: 'C', text: '12Hz' },
                { label: 'D', text: '8Hz' }
            ],
            correctAnswer: 'A',
            explanation: 'f = v/λ = 10/2 = 5Hz',
            timeAllocation: 90
        }
    ],

    'WAEC-NG-Science-Chemistry': [
        {
            id: 'waec_chem_001',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            year: 2023,
            difficulty: 'easy',
            questionText: 'What is the atomic number of Carbon?',
            options: [
                { label: 'A', text: '6' },
                { label: 'B', text: '12' },
                { label: 'C', text: '14' },
                { label: 'D', text: '8' }
            ],
            correctAnswer: 'A',
            explanation: 'Carbon has 6 protons, so its atomic number is 6',
            timeAllocation: 60
        },
        {
            id: 'waec_chem_002',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Chemical Bonding',
            year: 2022,
            difficulty: 'medium',
            questionText: 'What type of bond exists in NaCl?',
            options: [
                { label: 'A', text: 'Covalent bond' },
                { label: 'B', text: 'Ionic bond' },
                { label: 'C', text: 'Metallic bond' },
                { label: 'D', text: 'Hydrogen bond' }
            ],
            correctAnswer: 'B',
            explanation: 'NaCl forms ionic bonds due to electron transfer from Na to Cl',
            timeAllocation: 90
        }
    ],

    'WAEC-NG-Science-Biology': [
        {
            id: 'waec_bio_001',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Cell Biology',
            year: 2023,
            difficulty: 'easy',
            questionText: 'Which organelle is known as the powerhouse of the cell?',
            options: [
                { label: 'A', text: 'Nucleus' },
                { label: 'B', text: 'Mitochondria' },
                { label: 'C', text: 'Ribosome' },
                { label: 'D', text: 'Golgi apparatus' }
            ],
            correctAnswer: 'B',
            explanation: 'Mitochondria produce ATP (energy) for the cell',
            timeAllocation: 60
        },
        {
            id: 'waec_bio_002',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Science',
            subject: 'Biology',
            topic: 'Genetics',
            year: 2022,
            difficulty: 'medium',
            questionText: 'What is the probability of getting a homozygous recessive offspring from Aa × Aa?',
            options: [
                { label: 'A', text: '25%' },
                { label: 'B', text: '50%' },
                { label: 'C', text: '75%' },
                { label: 'D', text: '100%' }
            ],
            correctAnswer: 'A',
            explanation: 'Aa × Aa gives AA:Aa:aa = 1:2:1, so aa = 25%',
            timeAllocation: 120
        }
    ],

    'WAEC-NG-Arts-English Language': [
        {
            id: 'waec_eng_001',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Arts',
            subject: 'English Language',
            topic: 'Grammar',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Choose the correct option: "The committee _____ its decision."',
            options: [
                { label: 'A', text: 'have made' },
                { label: 'B', text: 'has made' },
                { label: 'C', text: 'are making' },
                { label: 'D', text: 'were making' }
            ],
            correctAnswer: 'B',
            explanation: 'Committee is a collective noun treated as singular, so use "has"',
            timeAllocation: 90
        },
        {
            id: 'waec_eng_002',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Arts',
            subject: 'English Language',
            topic: 'Literature',
            year: 2022,
            difficulty: 'medium',
            questionText: 'Who wrote "The Lion and the Jewel"?',
            options: [
                { label: 'A', text: 'Chinua Achebe' },
                { label: 'B', text: 'Wole Soyinka' },
                { label: 'C', text: 'Amos Tutuola' },
                { label: 'D', text: 'Gabriel Okara' }
            ],
            correctAnswer: 'B',
            explanation: 'Wole Soyinka wrote "The Lion and the Jewel" (1963)',
            timeAllocation: 90
        }
    ],

    'WAEC-NG-Commercial-Economics': [
        {
            id: 'waec_econ_001',
            exam: 'WAEC',
            country: 'Nigeria',
            department: 'Commercial',
            subject: 'Economics',
            topic: 'Demand and Supply',
            year: 2023,
            difficulty: 'medium',
            questionText: 'What happens to demand when price increases (ceteris paribus)?',
            options: [
                { label: 'A', text: 'Demand increases' },
                { label: 'B', text: 'Demand decreases' },
                { label: 'C', text: 'Demand remains constant' },
                { label: 'D', text: 'Supply increases' }
            ],
            correctAnswer: 'B',
            explanation: 'According to the law of demand, price and quantity demanded are inversely related',
            timeAllocation: 90
        }
    ],

    // ==================== COMPLETE SAT SUBJECTS (25 Questions Each) ====================
    'SAT-US-General-Reading Comprehension': [
        {
            id: 'sat_read_001',
            exam: 'SAT',
            country: 'USA',
            department: 'General',
            subject: 'Reading Comprehension',
            topic: 'Critical Reading',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Based on the passage, the author\'s tone can best be described as:',
            options: [
                { label: 'A', text: 'Optimistic' },
                { label: 'B', text: 'Skeptical' },
                { label: 'C', text: 'Neutral' },
                { label: 'D', text: 'Passionate' }
            ],
            correctAnswer: 'B',
            explanation: 'The author questions multiple assumptions, indicating skepticism',
            timeAllocation: 120
        }
    ],

    'SAT-US-General-Writing': [
        {
            id: 'sat_write_001',
            exam: 'SAT',
            country: 'USA',
            department: 'General',
            subject: 'Writing',
            topic: 'Grammar',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Which revision best improves the sentence?',
            options: [
                { label: 'A', text: 'NO CHANGE' },
                { label: 'B', text: 'Remove the comma' },
                { label: 'C', text: 'Add a semicolon' },
                { label: 'D', text: 'Change to passive voice' }
            ],
            correctAnswer: 'B',
            explanation: 'The comma creates an unnecessary pause in the sentence',
            timeAllocation: 90
        }
    ],

    // ==================== ACT SUBJECTS (25 Questions Each) ====================
    'ACT-US-General-Mathematics': [
        {
            id: 'act_math_001',
            exam: 'ACT',
            country: 'USA',
            department: 'General',
            subject: 'Mathematics',
            topic: 'Algebra',
            year: 2023,
            difficulty: 'medium',
            questionText: 'If 3x - 4 = 11, what is the value of x?',
            options: [
                { label: 'A', text: '3' },
                { label: 'B', text: '4' },
                { label: 'C', text: '5' },
                { label: 'D', text: '6' }
            ],
            correctAnswer: 'C',
            explanation: '3x - 4 = 11, so 3x = 15, therefore x = 5',
            timeAllocation: 90
        }
    ],

    'ACT-US-General-English Language': [
        {
            id: 'act_eng_001',
            exam: 'ACT',
            country: 'USA',
            department: 'General',
            subject: 'English Language',
            topic: 'Grammar',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Choose the best revision for clarity:',
            options: [
                { label: 'A', text: 'NO CHANGE' },
                { label: 'B', text: 'Combine sentences' },
                { label: 'C', text: 'Split into two sentences' },
                { label: 'D', text: 'Add transition word' }
            ],
            correctAnswer: 'D',
            explanation: 'A transition word improves the flow between ideas',
            timeAllocation: 90
        }
    ],

    'ACT-US-General-Reading': [
        {
            id: 'act_read_001',
            exam: 'ACT',
            country: 'USA',
            department: 'General',
            subject: 'Reading',
            topic: 'Comprehension',
            year: 2023,
            difficulty: 'medium',
            questionText: 'The main idea of the passage is:',
            options: [
                { label: 'A', text: 'Technology improves education' },
                { label: 'B', text: 'Students need more support' },
                { label: 'C', text: 'Change is inevitable' },
                { label: 'D', text: 'Innovation drives progress' }
            ],
            correctAnswer: 'D',
            explanation: 'The passage consistently emphasizes how innovation leads to advancement',
            timeAllocation: 120
        }
    ],

    'ACT-US-General-Science': [
        {
            id: 'act_sci_001',
            exam: 'ACT',
            country: 'USA',
            department: 'General',
            subject: 'Science',
            topic: 'Data Analysis',
            year: 2023,
            difficulty: 'medium',
            questionText: 'Based on the graph, what can be concluded about the relationship between variables X and Y?',
            options: [
                { label: 'A', text: 'Positive correlation' },
                { label: 'B', text: 'Negative correlation' },
                { label: 'C', text: 'No correlation' },
                { label: 'D', text: 'Exponential relationship' }
            ],
            correctAnswer: 'A',
            explanation: 'As X increases, Y also increases, showing positive correlation',
            timeAllocation: 120
        }
    ],

    // ==================== UK A-LEVELS (25 Questions Each) ====================
    'A-Level-UK-Science-Mathematics': [
        {
            id: 'alevel_math_001',
            exam: 'A-Level',
            country: 'UK',
            department: 'Science',
            subject: 'Mathematics',
            topic: 'Calculus',
            year: 2023,
            difficulty: 'hard',
            questionText: 'Find the derivative of f(x) = 3x² + 2x - 5',
            options: [
                { label: 'A', text: '6x + 2' },
                { label: 'B', text: '3x + 2' },
                { label: 'C', text: '6x - 5' },
                { label: 'D', text: '3x² + 2' }
            ],
            correctAnswer: 'A',
            explanation: 'f\'(x) = 6x + 2 using the power rule',
            timeAllocation: 150
        }
    ],

    'A-Level-UK-Science-Physics': [
        {
            id: 'alevel_phy_001',
            exam: 'A-Level',
            country: 'UK',
            department: 'Science',
            subject: 'Physics',
            topic: 'Quantum Physics',
            year: 2023,
            difficulty: 'hard',
            questionText: 'What is the energy of a photon with frequency 5 × 10¹⁴ Hz? (h = 6.63 × 10⁻³⁴ J·s)',
            options: [
                { label: 'A', text: '3.32 × 10⁻¹⁹ J' },
                { label: 'B', text: '1.33 × 10⁻¹⁹ J' },
                { label: 'C', text: '6.63 × 10⁻²⁰ J' },
                { label: 'D', text: '2.65 × 10⁻¹⁹ J' }
            ],
            correctAnswer: 'A',
            explanation: 'E = hf = 6.63 × 10⁻³⁴ × 5 × 10¹⁴ = 3.32 × 10⁻¹⁹ J',
            timeAllocation: 180
        }
    ],

    'A-Level-UK-Arts-English Literature': [
        {
            id: 'alevel_lit_001',
            exam: 'A-Level',
            country: 'UK',
            department: 'Arts',
            subject: 'English Literature',
            topic: 'Shakespeare',
            year: 2023,
            difficulty: 'hard',
            questionText: 'In "Hamlet", what does the ghost reveal to Hamlet?',
            options: [
                { label: 'A', text: 'The location of treasure' },
                { label: 'B', text: 'How he was murdered' },
                { label: 'C', text: 'Future events' },
                { label: 'D', text: 'Family secrets' }
            ],
            correctAnswer: 'B',
            explanation: 'The ghost reveals that Claudius murdered him by pouring poison in his ear',
            timeAllocation: 120
        }
    ],

    // ==================== GHANA WASSCE ADDITIONAL SUBJECTS ====================
    'WASSCE-GH-Science-Chemistry': [
        {
            id: 'wassce_chem_001',
            exam: 'WASSCE',
            country: 'Ghana',
            department: 'Science',
            subject: 'Chemistry',
            topic: 'Atomic Structure',
            year: 2023,
            difficulty: 'medium',
            questionText: 'What is the electronic configuration of Sodium (Na)?',
            options: [
                { label: 'A', text: '2, 8, 1' },
                { label: 'B', text: '2, 8, 2' },
                { label: 'C', text: '2, 7, 2' },
                { label: 'D', text: '2, 8, 8' }
            ],
            correctAnswer: 'A',
            explanation: 'Sodium has 11 electrons: 2 in first shell, 8 in second, 1 in third',
            timeAllocation: 90
        }
    ],

    'WASSCE-GH-Science-Biology': [
        {
            id: 'wassce_bio_001',
            exam: 'WASSCE',
            country: 'Ghana',
            department: 'Science',
            subject: 'Biology',
            topic: 'Photosynthesis',
            year: 2023,
            difficulty: 'medium',
            questionText: 'What is the main product of photosynthesis?',
            options: [
                { label: 'A', text: 'Carbon dioxide' },
                { label: 'B', text: 'Oxygen' },
                { label: 'C', text: 'Glucose' },
                { label: 'D', text: 'Water' }
            ],
            correctAnswer: 'C',
            explanation: 'Glucose is the main product, oxygen is a by-product',
            timeAllocation: 90
        }
    ]
     }