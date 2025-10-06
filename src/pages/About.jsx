import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react'
import { teamImages, heroImages } from '../assets'
import DynamicHero from '../components/ui/DynamicHero'

const About = () => {
  const stats = [
    { number: "50,000+", label: "Active Students", icon: <Users className="h-8 w-8" /> },
    { number: "0", label: "Expert Instructors", icon: <Award className="h-8 w-8" /> },
    { number: "5,000+", label: "Courses Available", icon: <Lightbulb className="h-8 w-8" /> },
    { number: "150+", label: "Countries Reached", icon: <Globe className="h-8 w-8" /> }
  ]

  const values = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Excellence in Education",
      description: "We are committed to providing world-class education that empowers learners to achieve their goals and transform their careers."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Student-Centered Approach",
      description: "Every decision we make is guided by what's best for our students. We prioritize accessibility, engagement, and practical learning outcomes."
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Global Community",
      description: "We believe in the power of diverse perspectives and foster a global learning community where knowledge knows no boundaries."
    }
  ]

  const team = [
    {
      name: "CEO & Founder",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in EdTech, driving innovation in exam preparation",
      image: teamImages.ceo
    },
    {
      name: "CTO & Co-Founder",
      role: "Chief Technology Officer",
      bio: "Technology expert passionate about scalable learning platforms and CBT systems",
      image: teamImages.cto
    },
    {
      name: "Head of Education",
      role: "Educational Director",
      bio: "Expert in curriculum development with deep knowledge of examination systems",
      image: teamImages.headOfEducation
    },
    {
      name: "Lead Developer",
      role: "Technical Lead",
      bio: "Senior developer with expertise in modern web technologies and educational platforms",
      image: teamImages.leadDeveloper
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dynamic Hero Section */}
      <DynamicHero
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white py-20"
        imageKey="aboutHero"
        videoKey="platformOverview"
        interval={15000}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Edunexs LearnSphere
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
            We're on a mission to democratize education and make world-class learning
            accessible to everyone, everywhere.
          </p>
        </div>
      </DynamicHero>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Edunexs LearnSphere, we believe that education is the most powerful tool
                for personal and professional transformation. Our platform connects learners
                with world-class instructors and cutting-edge content to create meaningful
                learning experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We're committed to breaking down barriers to education and creating a global
                community where knowledge flows freely, skills are developed continuously,
                and potential is unlocked at every level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-500">2019</div>
                  <div className="text-gray-600 dark:text-gray-400">Founded</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-500">5M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Lives Impacted</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-primary-500">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Global Impact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connecting learners across 150+ countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how we're making a difference in the world of education
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the learning experience we create
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate educators and technologists working to transform learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Learning Revolution
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Be part of a global community that's transforming education and unlocking human potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Start Learning Today
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About