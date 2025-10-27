import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faCar,
  faMapMarkerAlt,
  faUser,
  faShieldAlt,
  faRocket,
  faCheckCircle,
  faArrowRight,
  faPlay,
  faPause,
  faPhone,
  faCreditCard,
  faUserShield,
  faCrown,
  faBolt,
  faClock,
  faShield,
  faGlobe,
  faUsers,
  faAward,
  faMobile,
  faQrcode,
  faWallet,
  faHandHoldingUsd,
  faHeadset,
  faCertificate,
  faLeaf,
  faGem,
  faStar,
  faSeedling,
  faTree,
  faMountain,
  faCloud,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import carAnimation from '../assets/Car.json';

const CarBookingLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  const theme = {
    primary: '#016B61',
    secondary: '#014D46',
    accent: '#02897A',
    light: '#E8F5F2',
    white: '#FFFFFF',
    dark: '#1A1A1A',
    gradient: 'linear-gradient(135deg, #016B61 0%, #02897A 100%)'
  };

  // Auto-transition between steps
  useEffect(() => {
    const timers = [
      setTimeout(() => transitionToStep('hero'), 3000),
      setTimeout(() => transitionToStep('features'), 8000),
      setTimeout(() => transitionToStep('safety'), 13000),
      setTimeout(() => transitionToStep('login'), 18000)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const transitionToStep = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  // Premium Splash Screen
  const SplashScreen = () => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-green-50 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-green-50 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          {/* Animated Car Logo */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-[#016B61] to-[#02897A] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#016B61]/30">
              <div className="text-white text-4xl">
                <FontAwesomeIcon icon={faCar} />
              </div>
            </div>
            
            {/* Floating Particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#016B61] rounded-full"
                style={{
                  left: `${Math.cos((i * 90) * (Math.PI / 180)) * 80 + 50}%`,
                  top: `${Math.sin((i * 90) * (Math.PI / 180)) * 80 + 50}%`,
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-black tracking-tight">
            <span className="text-[#016B61]">GREEN</span>
            <span className="text-gray-900">RIDE</span>
          </h1>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#016B61] to-transparent rounded-full"></div>
            <FontAwesomeIcon icon={faLeaf} className="text-[#016B61] text-sm" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-[#016B61] to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 font-light tracking-wide">
            Premium Eco-Friendly Mobility
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div 
          className="mt-20 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex justify-center space-x-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-[#016B61] rounded-full"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm font-medium">Loading premium experience...</p>
        </motion.div>
      </div>
    </motion.div>
  );

  // Hero Section
  const HeroSection = () => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#016B61]/5 to-transparent"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#016B61]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-40 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white border border-[#016B61]/20 shadow-lg">
                <div className="w-3 h-3 bg-[#016B61] rounded-full mr-3"></div>
                <span className="text-[#016B61] font-bold text-sm tracking-wide">ELITE SUSTAINABLE MOBILITY</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Eco-Luxury<br />
                <span className="text-[#016B61]">
                  Reimagined
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience premium electric vehicles with carbon-neutral rides, 
                professional chauffeurs, and sustainable luxury at its finest.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { value: '100%', label: 'Electric Fleet', icon: faLeaf },
                { value: '4.9★', label: 'Rating', icon: faStar },
                { value: '90s', label: 'Avg. Wait', icon: faBolt },
                { value: '0g', label: 'CO₂ Impact', icon: faTree }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mx-auto mb-4 w-14 h-14 bg-[#016B61] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <FontAwesomeIcon icon={stat.icon} className="text-white text-lg" />
                  </div>
                  <div className="text-2xl font-black text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="px-8 py-4 bg-[#016B61] hover:bg-[#014D46] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Book Your Ride
              </button>
              <button className="px-8 py-4 border-2 border-[#016B61] text-[#016B61] hover:bg-[#016B61] hover:text-white rounded-2xl font-bold transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Visual - Car Animation Placeholder */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative h-96 bg-gradient-to-br from-[#016B61]/10 to-[#02897A]/10 rounded-3xl border-2 border-[#016B61]/20 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-[#016B61] rounded-2xl flex items-center justify-center mx-auto">
                    <FontAwesomeIcon icon={faCar} className="text-white text-3xl" />
                  </div>
                  <div className="text-[#016B61] font-bold text-lg">Premium Electric Fleet</div>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Luxury electric vehicles ready for your sustainable journey
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <FontAwesomeIcon icon={faArrowDown} className="text-[#016B61] text-lg" />
        </div>
      </motion.div>
    </motion.div>
  );

  // Features Section
  const FeaturesSection = () => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative z-40 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white border border-[#016B61]/20 shadow-lg mb-8">
            <FontAwesomeIcon icon={faGem} className="text-[#016B61] mr-3" />
            <span className="text-[#016B61] font-bold tracking-wide">PREMIUM FEATURES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Why <span className="text-[#016B61]">GreenRide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of sustainable luxury mobility with our exclusive features
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: faLeaf,
              title: 'Carbon Neutral',
              description: '100% electric fleet with verified carbon offset',
              features: ['Zero emissions', 'Carbon credits', 'Eco-friendly']
            },
            {
              icon: faGem,
              title: 'Luxury Comfort',
              description: 'Premium interiors with sustainable materials',
              features: ['Leather seats', 'Climate control', 'Spacious']
            },
            {
              icon: faBolt,
              title: 'Instant Booking',
              description: '90-second pickup guarantee',
              features: ['Quick match', 'Live tracking', 'No wait']
            },
            {
              icon: faShieldAlt,
              title: 'Premium Safety',
              description: 'Advanced safety with professional drivers',
              features: ['Trained drivers', 'Vehicle checks', '24/7 support']
            },
            {
              icon: faCrown,
              title: 'Elite Service',
              description: 'Dedicated concierge and premium support',
              features: ['Personal assistant', 'Priority service', 'VIP treatment']
            },
            {
              icon: faStar,
              title: 'Smart Features',
              description: 'AI-powered routing and climate control',
              features: ['Smart routing', 'Auto climate', 'App control']
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-[#016B61] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-sm text-gray-500">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#016B61] text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Safety Section
  const SafetySection = () => (
    <motion.div
      className="min-h-screen relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative z-40 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Safety Features */}
          <motion.div
            className="space-y-12"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-white border border-[#016B61]/20 shadow-lg">
                <FontAwesomeIcon icon={faShieldAlt} className="text-[#016B61] mr-3" />
                <span className="text-[#016B61] font-bold">PREMIUM SAFETY</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Your Safety,<br />
                <span className="text-[#016B61]">
                  Our Priority
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced safety protocols and verified partners ensure your complete peace of mind throughout every journey.
              </p>
            </div>

            {/* Safety Features */}
            <div className="space-y-6">
              {[
                { icon: faUserShield, text: 'Enhanced Driver Verification & Screening' },
                { icon: faMapMarkerAlt, text: 'Real-time Premium Ride Tracking' },
                { icon: faShieldAlt, text: '24/7 Elite Safety Support' },
                { icon: faQrcode, text: 'Contactless Premium Verification' },
                { icon: faMobile, text: 'Emergency Premium Assistance' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#016B61] transition-all duration-300 group cursor-pointer hover:shadow-lg"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 bg-[#016B61] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={item.icon} className="text-white text-lg" />
                  </div>
                  <span className="text-gray-900 font-semibold flex-1 text-lg">{item.text}</span>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-[#016B61] text-xl" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Safety Visual */}
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Safety Visual - Lottie Animation */}
              <div className="relative w-[40rem] h-[40rem] mx-auto">
                <div className="absolute inset-8 bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Lottie animationData={carAnimation} loop={true} className="w-[90%] h-[90%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  // Login Screen
  const LoginScreen = () => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative z-40 min-h-screen flex items-center justify-center px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Brand */}
          <motion.div
            className="space-y-12"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#016B61] rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="text-white text-2xl">
                      <FontAwesomeIcon icon={faCar} />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-5xl font-black text-gray-900">
                    GREEN<span className="text-[#016B61]">RIDE</span>
                  </h1>
                  <p className="text-gray-600 text-lg">Sustainable Luxury</p>
                </div>
              </div>

              <h2 className="text-6xl font-black text-gray-900 leading-tight">
                Welcome<br />
                <span className="text-[#016B61]">
                  Back
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Access your premium sustainable mobility account and continue your journey with unparalleled eco-luxury service.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6">
              {[
                { icon: faBolt, text: 'Instant premium matching' },
                { icon: faLeaf, text: '100% electric fleet' },
                { icon: faShieldAlt, text: 'Enhanced safety protocols' },
                { icon: faCrown, text: 'Elite concierge service' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-5 p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#016B61] transition-all duration-300 group"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-[#016B61] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-lg" />
                  </div>
                  <span className="text-gray-900 font-semibold text-lg flex-1">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            className="flex justify-center"
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-[#016B61] rounded-2xl flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Member Login</h3>
                    <p className="text-gray-600">Access your premium account</p>
                  </div>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="p-8 space-y-8">
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="group">
                    <label className="block text-sm font-bold mb-4 text-gray-700 tracking-wide">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#016B61] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 shadow-sm"
                        placeholder="Enter your email"
                        required
                      />
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#016B61] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="group">
                    <label className="block text-sm font-bold mb-4 text-gray-700 tracking-wide">
                      PASSWORD
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-5 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#016B61] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 shadow-sm pr-14"
                        placeholder="Enter your password"
                        required
                      />
                      <FontAwesomeIcon 
                        icon={faLock} 
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#016B61] transition-colors duration-300"
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Options */}
                <div className="flex justify-between items-center">
                  <label className="flex items-center space-x-4 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="sr-only" />
                      <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-md group-hover:border-[#016B61] transition-colors duration-300 flex items-center justify-center shadow-sm">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#016B61] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      Remember me
                    </span>
                  </label>
                  <a href="#" className="text-[#016B61] hover:text-[#014D46] font-bold transition-colors duration-300 text-sm">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed bg-[#016B61] hover:bg-[#014D46] shadow-2xl hover:shadow-xl transform hover:-translate-y-1 text-white group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative z-10 flex items-center space-x-3">
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="font-semibold">SIGNING IN...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <span className="font-semibold">SIGN IN TO GREENRIDE</span>
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Footer */}
              <div className="p-8 border-t border-gray-200 bg-gradient-to-r from-white to-gray-50 text-center">
                <p className="text-gray-600 text-sm mb-6">
                  New to GreenRide?
                </p>
                <button className="w-full py-5 border-2 border-[#016B61] text-[#016B61] hover:text-white hover:bg-[#016B61] transition-all duration-300 font-bold rounded-2xl shadow-sm hover:shadow-md">
                  CREATE PREMIUM ACCOUNT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    body {
      background: #ffffff;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    ::-webkit-scrollbar-thumb {
      background: #016B61;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #014D46;
    }

    /* Selection Styles */
    ::selection {
      background: rgba(1, 107, 97, 0.2);
      color: #014D46;
    }

    /* Focus States */
    input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(1, 107, 97, 0.1);
    }

    /* Smooth Transitions */
    * {
      transition-property: color, background-color, border-color, transform, opacity, box-shadow;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  `;

  const RenderedSection = React.useMemo(() => {
    switch (currentStep) {
      case 'splash':
        return <SplashScreen />;
      case 'hero':
        return <HeroSection />;
      case 'features':
        return <FeaturesSection />;
      case 'safety':
        return <SafetySection />;
      case 'login':
        return <LoginScreen />;
      default:
        return <SplashScreen />;
    }
  }, [currentStep]);

  return (
    <>
      <style>{styles}</style>
      <div className="relative min-h-screen overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          {RenderedSection}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CarBookingLogin;