import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Terminal,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  MapPin,
  Phone,
  ChevronDown,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Ananya.U</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    activeSection === item.toLowerCase() ? 'text-primary-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-sm font-medium text-gray-600 hover:text-primary-600 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/10 to-primary-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Content */}
          <div className="text-left space-y-6">
            <div className="animate-fade-down">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-50 to-blue-50 rounded-full text-primary-700 text-sm font-semibold mb-6 border border-primary-100">
                <Sparkles size={16} className="mr-2" />
                Open to Opportunities
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ananya U
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Computer Science &<br />Data Science Student
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Passionate about building intelligent solutions through{' '}
              <span className="text-primary-600 font-semibold">AI/ML</span>,{' '}
              <span className="text-primary-600 font-semibold">Full-Stack Development</span>, and{' '}
              <span className="text-primary-600 font-semibold">Data Science</span>.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all hover:shadow-xl flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href="https://github.com/anu0908r" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-110 border border-gray-100">
                <Github size={22} className="text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/ananya-u-34205530a" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-110 border border-gray-100">
                <Linkedin size={22} className="text-gray-700" />
              </a>
              <a href="https://leetcode.com/u/anuanya_u/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-110 border border-gray-100">
                <Code size={22} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Right Side - Professional Profile Image */}
          <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-primary-400 rounded-full blur-xl opacity-30"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  {/* Placeholder - Replace with your image */}
                  <img 
                    src="/profile.jpg" 
                    alt="Ananya U"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback when no image */}
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 hidden">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl font-bold text-primary-600">AU</span>
                    </div>
                    <p className="text-sm font-medium">Add your photo as</p>
                    <p className="text-xs text-gray-400 mt-1">/public/profile.jpg</p>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate about creating impactful solutions through technology
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Who I Am</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a <span className="font-semibold text-gray-900">Computer Science & Data Science student</span> at CMR Institute of Technology, Bengaluru, 
                    with a strong foundation in AI/ML, full-stack development, and IoT systems.
                  </p>
                  <p>
                    My journey in tech is driven by <span className="font-semibold text-primary-600">curiosity</span> and a desire to build innovative solutions that make a difference. 
                    I thrive on learning new technologies and applying them to real-world problems.
                  </p>
                  <p>
                    Currently maintaining a <span className="font-semibold text-primary-600">CGPA of 8.9</span>, I'm eager to contribute to dynamic organizations where I can 
                    apply my skills and continuously grow both professionally and personally.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail-Oriented'].map((trait) => (
                  <div key={trait} className="px-4 py-3 bg-gradient-to-br from-primary-50 to-blue-50 text-primary-700 rounded-xl text-sm font-semibold text-center border border-primary-100 hover:scale-105 transition-transform">
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <div className="bg-gradient-to-br from-primary-600 to-blue-600 p-6 rounded-3xl text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-white/90">Bengaluru, Karnataka</p>
                <p className="text-white/90">India</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm break-all">uananya324@gmail.com</p>
                <p className="text-gray-600 text-sm break-all">anu23csds@cmrit.ac.in</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-600">+91 8618989199</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'Python', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI/ML & Data Science</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Analysis'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'SQLite'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['Flask', 'React', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Terminal size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['GitHub', 'VS Code', 'Arduino IDE', 'Jupyter', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm card-hover">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">IoT & Embedded</h3>
              <div className="flex flex-wrap gap-2">
                {['ESP32', 'Arduino', 'Blynk IoT', 'C/C++'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative solutions leveraging AI/ML, Full-Stack Development, and IoT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education Portal */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-primary-600 to-blue-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Brain size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Education Portal</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                  AI-powered web application providing personalized learning assistance for DSA, OS, and English Grammar 
                  using Google Gemini API with interactive UI and real-time content generation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'Flask', 'Gemini AI', 'JavaScript', 'SQLite'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 rounded-lg text-xs font-semibold border border-primary-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link">
                    <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link">
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Heart Disease Prediction */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Database size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Heart Disease Prediction</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                  Machine learning model using Logistic Regression to predict heart disease. Implemented data preprocessing, 
                  feature selection, and model evaluation for high accuracy predictions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm group/link">
                    <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm group/link">
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Home Automation */}
            <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Cloud size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Home Automation System</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                  IoT-based system using ESP32 and Blynk platform for remote control of household appliances. 
                  Features real-time monitoring, scheduling, and Wi-Fi connectivity for smart home automation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['ESP32', 'C/C++', 'Arduino IDE', 'Blynk IoT', 'Wi-Fi'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link">
                    <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link">
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & <span className="gradient-text">Involvement</span>
          </h2>

          <div className="space-y-8">
            {/* Timeline Item */}
            <div className="relative pl-8 border-l-2 border-primary-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Briefcase size={20} className="text-primary-600" />
                  <h3 className="text-xl font-bold">Geeks for Geeks Club Member</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">2023 - Present</span>
                  <span className="text-sm">• CMRIT, Bengaluru</span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Active participation in technical discussions and coding competitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Collaborated with peers on problem-solving and algorithm optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Enhanced DSA skills through regular practice and peer learning
                  </li>
                </ul>
              </div>
            </div>

            {/* Hackathon */}
            <div className="relative pl-8 border-l-2 border-primary-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Award size={20} className="text-primary-600" />
                  <h3 className="text-xl font-bold">Smart India Hackathon Participant</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">2025</span>
                  <span className="text-sm">• Government of India</span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Participated in India's largest hackathon with innovative project solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Collaborated in a team to solve real-world problems using technology
                  </li>
                </ul>
              </div>
            </div>

            {/* Cultural Activity */}
            <div className="relative pl-8 border-l-2 border-primary-300">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-600 rounded-full"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm card-hover">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Sparkles size={20} className="text-primary-600" />
                  <h3 className="text-xl font-bold">Cultural Activities</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">2023 - Present</span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Participated in AISIRI Flash-Mob organized by Samskrutika Kannada Sangha at CMRIT
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Balanced technical pursuits with cultural engagement and teamwork
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Analysis and Design of Algorithms', platform: 'Coursera', icon: Award },
              { title: 'Data Structures', platform: 'Online Course', icon: BookOpen },
              { title: 'Python for Beginners', platform: 'Udemy', icon: Code },
              { title: 'Programming in C', platform: 'Udemy', icon: Terminal },
            ].map((cert, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl card-hover">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <cert.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.platform}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl text-white text-center">
            <Award size={48} className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Smart India Hackathon 2025</h3>
            <p className="text-primary-100">Participated in India's biggest hackathon organized by Government of India</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={32} className="text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-2">Computer Science & Data Science</p>
                  <p className="text-gray-600 mb-3">CMR Institute of Technology, Bengaluru</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      2023 - 2027 (Pursuing)
                    </span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full font-semibold">
                      CGPA: 8.9
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-University */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={32} className="text-purple-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">Pre-University Course</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Science Stream</p>
                  <p className="text-gray-600 mb-3">MES ACS PU College, Bengaluru</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      Completed 2023
                    </span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-semibold">
                      Score: 94.16%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SSLC */}
            <div className="bg-white p-8 rounded-2xl shadow-sm card-hover">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={32} className="text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">SSLC</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">Secondary School Leaving Certificate</p>
                  <p className="text-gray-600 mb-3">G E KAY Convent High School, Bengaluru</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      Completed 2021
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-semibold">
                      Score: 94.56%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:uananya324@gmail.com" className="text-gray-600 hover:text-primary-600">
                        uananya324@gmail.com
                      </a>
                      <br />
                      <a href="mailto:anu23csds@cmrit.ac.in" className="text-gray-600 hover:text-primary-600">
                        anu23csds@cmrit.ac.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-gray-600">+91 8618989199</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-gray-600">
                        #20, 1st stage, 2nd phase<br />
                        Manjunath Nagar, Rajajinagar<br />
                        Bengaluru, Karnataka - 560010
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/anu0908r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Github size={24} className="text-gray-700 hover:text-primary-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ananya-u-34205530a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Linkedin size={24} className="text-gray-700 hover:text-primary-600" />
                  </a>
                  <a
                    href="https://leetcode.com/u/anuanya_u/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Code size={24} className="text-gray-700 hover:text-primary-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Ananya U</h3>
            <p className="text-gray-600">Computer Science & Data Science Student</p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/anu0908r" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ananya-u-34205530a" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/anuanya_u/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Code size={20} />
            </a>
            <a href="mailto:uananya324@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Ananya U. All rights reserved.</p>
            <p className="mt-2">Designed with ❤️ using React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
