import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faArrowRight,
  faPlay,
  faPause,
  faChevronRight,
  faChevronLeft,
  faStar,
  faBrain,
  faRocket,
  faAward,
  faChartLine,
  faUsers,
  faClock,
  faCheckCircle,
  faGraduationCap,
  faBookOpen,
  faMicroscope,
  faShieldAlt,
  faCrown,
  faGem,
  faUserGraduate,
  faUser, 
  faUserTie,
  faUserNurse,
  faUserMd,
  faQuoteLeft,
  faQuoteRight,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

const NeuroPrepPro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [transitioning, setTransitioning] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Professional Purple Theme
  const theme = {
    primary: '#7C3AED',       // Vibrant purple
    secondary: '#5B21B6',     // Deep purple
    accent: '#8B5CF6',        // Light purple
    dark: '#1F1F2C',          // Dark background
    light: '#F8FAFC',         // Light background
    muted: '#6B7280',         // Gray text
    white: '#FFFFFF',
    success: '#10B981',       // Emerald
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    gradientLight: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    neural: 'linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)'
  };

  const features = [
    {
      icon: faBrain,
      title: 'Neural Learning AI',
      description: 'Adaptive algorithms that map your cognitive patterns and optimize study efficiency.',
      stats: '47% Faster Recall'
    },
    {
      icon: faChartLine,
      title: 'Predictive Analytics',
      description: 'AI-powered performance forecasting with 94% accuracy in score prediction.',
      stats: '94% Accuracy'
    },
    {
      icon: faMicroscope,
      title: 'Deep Focus Mode',
      description: 'Eliminate distractions with neuroscience-backed concentration techniques.',
      stats: '3.2x Focus'
    },
    {
      icon: faBookOpen,
      title: 'Smart Content',
      description: 'Dynamic question banks that evolve based on your learning progress.',
      stats: '10K+ Questions'
    },
    {
      icon: faUsers,
      title: 'Expert Network',
      description: 'Direct access to top instructors and subject matter specialists.',
      stats: '200+ Experts'
    },
    {
      icon: faShieldAlt,
      title: 'Progress Shield',
      description: 'Guaranteed improvement with our performance protection system.',
      stats: '100% Success'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Elena Rodriguez',
      exam: 'USMLE Step 1',
      score: '262 Score',
      text: 'The neural learning system identified my weak areas I didn\'t even know existed. The predictive analytics were spot on.',
      avatar: 'ER',
      rating: 5
    },
    {
      name: 'James Chen, Esq.',
      exam: 'Bar Exam',
      score: '98th Percentile',
      text: 'The AI-driven study plan adapted to my schedule and learning style. Passed on my first attempt with flying colors.',
      avatar: 'JC',
      rating: 5
    },
    {
      name: 'Dr. Michael Park',
      exam: 'MCAT',
      score: '524 Score',
      text: 'The deep focus mode and neural algorithms helped me achieve a perfect score in the critical analysis section.',
      avatar: 'MP',
      rating: 5
    }
  ];

  const stats = [
    { number: '96%', label: 'Success Rate', sublabel: 'First-time pass rate' },
    { number: '50K+', label: 'Professionals', sublabel: 'Global community' },
    { number: '2.8x', label: 'Learning Speed', sublabel: 'Compared to traditional' },
    { number: '4.9/5', label: 'Rating', sublabel: 'Based on 15K reviews' }
  ];

  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => transitionToStep('intro'), 2500);
    const timer2 = setTimeout(() => transitionToStep('features'), 7000);
    const timer3 = setTimeout(() => transitionToStep('testimonials'), 13000);
    const timer4 = setTimeout(() => transitionToStep('login'), 19000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={i < rating ? "text-purple-400" : "text-gray-300"} 
        size="xs"
      />
    ));
  };

  // Neuro Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 flex items-center justify-center">
      {/* Neural Network Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-purple-900 to-purple-900"></div>
        {/* Neural connections */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${theme.primary}30 0%, transparent 70%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-8 max-w-2xl mx-auto">
        <div className="space-y-8">
          {/* Neuro Logo */}
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/30 transform rotate-6">
              <div className="w-24 h-24 bg-gradient-to-br from-white to-purple-100 rounded-2xl flex items-center justify-center transform -rotate-6 shadow-inner">
                <FontAwesomeIcon icon={faBrain} className="text-3xl text-purple-600" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faCrown} className="text-xs text-purple-600" />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Neuro<span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">Prep</span>Pro
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
            <p className="text-xl text-purple-200 font-light tracking-wide">
              AI-Powered Cognitive Learning Platform
            </p>
          </div>

          {/* Neural loading indicator */}
          <div className="flex justify-center pt-8">
            <div className="relative">
              <div className="w-64 h-2 bg-purple-800/50 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-400/25"
                  style={{ animation: 'neural-loading 2s ease-in-out infinite' }}
                ></div>
              </div>
              <div className="absolute -top-1 left-0 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Neuro Intro Screen
  const IntroScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-white">
      {/* Neural background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-40 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Neuro illustration side */}
          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-purple-100 border border-white/50">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-gray-700 text-sm mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
              
              {/* Neural floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-400/10 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-2xl -rotate-12"></div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <FontAwesomeIcon icon={faBrain} className="mr-3" />
                NEURO-OPTIMIZED LEARNING
              </div>
              
              <h2 className="text-5xl font-bold leading-tight text-gray-800">
                Master Exams with <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Cognitive Science</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-600 font-light">
                Our AI-powered platform uses neuroscience principles to optimize your study patterns, 
                enhance memory retention, and predict performance with unprecedented accuracy.
              </p>
            </div>

            {/* Neuro CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Start Neural Trial</span>
                <FontAwesomeIcon icon={faRocket} className="text-white" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold shadow-lg shadow-purple-500/10 border border-purple-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Neuro Features Screen
  const FeaturesScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 py-20">
      {/* Neural background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8">
        {/* Neuro Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-300 border border-purple-500/30">
            <FontAwesomeIcon icon={faBrain} className="mr-3 text-purple-400" />
            NEURO FEATURES
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Cognitive <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Enhancement</span> Technology
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 font-light">
            Advanced neuroscience meets artificial intelligence for optimal learning performance
          </p>
        </div>

        {/* Neuro Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Neural glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with neural background */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300">
                  <FontAwesomeIcon icon={feature.icon} className="text-xl text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-light">
                  {feature.description}
                </p>
                
                {/* Stats badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Neuro Testimonials Screen
const TestimonialsScreen = () => {
  // Gender-based icon mapping
  const getGenderIcon = (name) => {
    const maleIcons = [faUserTie, faUserMd];
    const femaleIcons = [faUserGraduate, faUserNurse, faUser];
    
    // Simple gender detection based on name
    const isFemale = name.includes('Elena') || name.includes('Sarah') || name.includes('Emily');
    const isMale = name.includes('James') || name.includes('Michael') || name.includes('Chen') || name.includes('Park');
    
    if (isFemale) return femaleIcons[Math.floor(Math.random() * femaleIcons.length)];
    if (isMale) return maleIcons[Math.floor(Math.random() * maleIcons.length)];
    return faUser; // default
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-25 py-20 flex items-center">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-40 w-full max-w-6xl mx-auto px-8">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105">
            <FontAwesomeIcon icon={faAward} className="mr-3 text-white" />
            NEURO SUCCESS STORIES
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
            Trusted by <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Top Performers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Discover how professionals across various fields achieved exceptional results with our neuro-optimized platform
          </p>
        </div>

        {/* Modern Testimonial Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-purple-500/10 border border-white/60 overflow-hidden group hover:shadow-purple-500/20 transition-all duration-500">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600"></div>
            <div className="absolute top-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>

            <div className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Avatar Section */}
                <div className="lg:col-span-4 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="relative">
                      {/* Main Avatar Circle */}
                      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white shadow-2xl shadow-purple-500/30 transform group-hover:scale-105 transition-transform duration-500">
                        <div className="w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <FontAwesomeIcon 
                            icon={getGenderIcon(testimonials[currentSlide].name)} 
                            className="text-4xl text-white/90" 
                          />
                        </div>
                      </div>
                      
                      {/* Floating Rating Badge */}
                      <div className="absolute -top-2 -right-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-purple-100 flex items-center space-x-1">
                        {renderStars(testimonials[currentSlide].rating)}
                        <span className="text-sm font-bold text-purple-700 ml-1">
                          {testimonials[currentSlide].rating}.0
                        </span>
                      </div>
                      
                      {/* Achievement Pulse */}
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <FontAwesomeIcon icon={faAward} className="text-white text-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-8 text-center lg:text-left">
                  {/* Testimonial Text */}
                  <div className="relative mb-8">
                    <FontAwesomeIcon 
                      icon={faQuoteLeft} 
                      className="absolute -top-4 -left-2 text-purple-200 text-4xl transform -rotate-12" 
                    />
                    <p className="text-2xl lg:text-3xl leading-relaxed text-gray-800 font-light italic relative z-10">
                      {testimonials[currentSlide].text}
                    </p>
                    <FontAwesomeIcon 
                      icon={faQuoteRight} 
                      className="absolute -bottom-4 -right-2 text-purple-200 text-4xl transform rotate-12" 
                    />
                  </div>

                  {/* Author Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                        {testimonials[currentSlide].name}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <span className="px-6 py-3 rounded-2xl text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-purple-600" />
                        <span>{testimonials[currentSlide].exam}</span>
                      </span>
                      <span className="px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-700 border border-purple-200/50 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-2">
                        <FontAwesomeIcon icon={faTrophy} className="text-purple-600" />
                        <span>{testimonials[currentSlide].score}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Carousel Controls */}
          <div className="flex justify-between items-center mt-12 px-4">
            {/* Previous Button */}
            <button 
              onClick={prevSlide}
              className="group flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-300 transition-all duration-300 transform hover:-translate-x-1"
            >
              <FontAwesomeIcon 
                icon={faChevronLeft} 
                className="text-purple-600 group-hover:text-purple-700 transition-colors text-lg" 
              />
              <span className="font-semibold text-purple-700 text-sm">Previous</span>
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? 'w-12 h-3 bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/30' 
                      : 'w-3 h-3 bg-purple-200 hover:bg-purple-300 hover:scale-125'
                  }`}
                >
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="group flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-300 transition-all duration-300 transform hover:translate-x-1"
            >
              <span className="font-semibold text-purple-700 text-sm">Next</span>
              <FontAwesomeIcon 
                icon={faChevronRight} 
                className="text-purple-600 group-hover:text-purple-700 transition-colors text-lg" 
              />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full h-1 bg-purple-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-purple-700 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-sm text-purple-600 font-medium">
                {currentSlide + 1} of {testimonials.length}
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Verified Results</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span>Real Professionals</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <span>Actual Scores</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  // Neuro Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Neural background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, ${theme.primary} 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Neural orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Neuro Navigation */}
      <nav className="relative z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Neuro Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-inner">
                    <FontAwesomeIcon icon={faBrain} className="text-purple-600 text-sm" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faCrown} className="text-purple-600 text-xs" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                Neuro<span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">Prep</span>Pro
              </span>
            </div>

            {/* Neuro Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {['Features', 'Research', 'Pricing', 'Enterprise', 'Support'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="font-semibold text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-lg"
                >
                  {item}
                </a>
              ))}
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
        {/* Neuro Content Side */}
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600/20 to-purple-700/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/10">
              <FontAwesomeIcon icon={faRocket} className="mr-3 text-white" />
              NEURO-OPTIMIZED PLATFORM
            </div>

            <h2 className="text-5xl font-bold leading-tight text-white">
              Ready to <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">Activate</span> Your Potential?
            </h2>
            
            <p className="text-xl leading-relaxed text-gray-300 font-light">
              Access our cognitive learning platform powered by neuroscience and AI. 
              Experience personalized study paths, neural performance tracking, and join elite achievers worldwide.
            </p>
          </div>

          {/* Neuro Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {[
              { icon: faBrain, text: 'Neural Learning AI', premium: true },
              { icon: faChartLine, text: 'Predictive Analytics', premium: true },
              { icon: faUsers, text: 'Expert Mentors', premium: true },
              { icon: faAward, text: 'Performance Shield', premium: true }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-700/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-purple-700/30 transition-all duration-300">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-lg text-white" 
                  />
                </div>
                <div>
                  <span className="font-semibold text-white block">{item.text}</span>
                  {item.premium && (
                    <span className="text-xs text-purple-400 font-medium">NEURO</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neuro Login Form */}
        <div className="relative">
          {/* Form background with neural glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-400/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/10 border border-gray-700/50 overflow-hidden">
            {/* Form header gradient bar */}
            <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-700"></div>
            
            <div className="p-10">
              {/* Form header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-3 text-white">
                  Access Neural Platform
                </h3>
                <p className="text-gray-400 font-light">
                  Enter your credentials to optimize your learning
                </p>
              </div>

              {/* Neuro Login Form */}
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 focus:ring-purple-500/50 focus:border-purple-500"
                        placeholder="student@institution.edu"
                        required
                      />
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 focus:ring-purple-500/50 focus:border-purple-500"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <a 
                    href="#" 
                    className="text-sm font-semibold hover:text-purple-400 transition-colors duration-300 text-purple-500"
                  >
                    Forgot your password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-1 text-white"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Activating Neural Access...</span>
                    </>
                  ) : (
                    <>
                      <span>Access Neural Platform</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                    </>
                  )}
                </button>
              </form>

              {/* Registration CTA */}
              <div className="text-center pt-8 border-t border-gray-700/50 mt-10">
                <p className="text-gray-400 mb-6 font-light">
                  New to NeuroPrepPro?
                </p>
                <button 
                  className="w-full py-4 rounded-2xl font-semibold border transition-all duration-300 flex items-center justify-center space-x-3 group bg-gray-700/50 border-gray-600 hover:border-purple-500/50 hover:bg-purple-500/10 text-gray-300 hover:text-purple-300"
                >
                  <FontAwesomeIcon icon={faBrain} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Start Neural Journey</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const styles = `
    @keyframes neural-loading {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes neural-float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }

    /* Neuro scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #1F1F2C;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #7C3AED 0%, #5B21B6 100%);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #6D28D9 0%, #4C1D95 100%);
    }

    /* Smooth neuro transitions */
    * {
      transition-property: color, background-color, border-color, transform, opacity, box-shadow;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Neuro focus styles */
    input:focus {
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
      border-color: #7C3AED;
    }

    body {
      background: #1F1F2C;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* Neuro page transitions */
    .neuro-enter {
      animation: neural-fade-in 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    .neuro-exit {
      animation: neural-fade-out 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    @keyframes neural-fade-in {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes neural-fade-out {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative min-h-screen overflow-hidden">
        {/* Neural transition overlay */}
        <div className={`fixed inset-0 bg-gray-900 z-50 transition-opacity duration-800 pointer-events-none ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <div className={`${transitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-800`}>
          {currentStep === 'splash' && <SplashScreen />}
          {currentStep === 'intro' && <IntroScreen />}
          {currentStep === 'features' && <FeaturesScreen />}
          {currentStep === 'testimonials' && <TestimonialsScreen />}
          {currentStep === 'login' && <LoginScreen />}
        </div>
      </div>
    </>
  );
};

export default NeuroPrepPro;