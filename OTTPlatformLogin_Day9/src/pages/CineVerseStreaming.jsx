import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faPlay,
  faUser,
  faCrown,
  faStar,
  faHeart,
  faRocket,
  faShieldAlt,
  faCheckCircle,
  faArrowRight,
  faBolt,
  faVideo,
  faFilm,
  faTheaterMasks,
  faMusic,
  faAward,
  faUserAstronaut,
  faSignInAlt,
  faGem,
  faInfinity,
  faChartLine,
  faGlobe,
  faMobile,
  faTv,
  faDownload,
  faCalendar,
  faUsers,
  faTicketAlt,
  faClock,
  faSearch,
  faHome,
  faCompass,
  faBookmark,
  faUserCircle,
  faCog,
  faBell,
  faGift,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const PremiumStreamingRedesign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('cinematic');
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('featured');
  const [isScrolled, setIsScrolled] = useState(false);

  // Background images array
  const backgroundImages = [
    'https://images.pexels.com/photos/17676082/pexels-photo-17676082/free-photo-of-blonde-woman-in-beret-in-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14145598/pexels-photo-14145598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/30057380/pexels-photo-30057380/free-photo-of-creative-cosplay-with-red-and-black-aesthetic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7991114/pexels-photo-7991114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transitionToStep = (nextStep) => {
    setCurrentStep(nextStep);
  };

  // FIXED: Proper auto-transition without string evaluation
  useEffect(() => {
    const timers = [
      setTimeout(() => transitionToStep('showcase'), 9000),
      setTimeout(() => transitionToStep('features'), 18000),
      setTimeout(() => transitionToStep('pricing'), 27000),
      setTimeout(() => transitionToStep('login'), 36000)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  // Floating particles component
  const FloatingParticles = ({ count = 20, color = "red" }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 bg-${color}-400/30 rounded-full`}
          initial={{
            y: Math.random() * 1000,
            x: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            y: -100,
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );

  // Navigation Component
  const Navigation = () => (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 py-4' 
          : 'bg-transparent py-8'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
              <FontAwesomeIcon icon={faFilm} className="text-white text-xl" />
            </div>
            <span className="text-2xl font-black text-white">
              CINEMA<span className="text-red-500">VERSE</span>
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'Movies', 'Series', 'Live TV', 'My List'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white text-lg font-medium transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div 
                  className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-500 rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <motion.button 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faSearch} className="text-xl" />
            </motion.button>
            <motion.button 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faGift} className="text-xl" />
            </motion.button>
            <motion.button 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faBell} className="text-xl" />
            </motion.button>
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FontAwesomeIcon icon={faUserCircle} className="text-white text-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );

  // Hero Section
  const HeroSection = React.memo(() => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-900/10 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90"></div>
        
        {/* Animated Elements */}
        <FloatingParticles count={25} />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <motion.div 
          className="w-full max-w-6xl text-center space-y-16"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          {/* Main Logo/Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter"
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              CINEMA
              <motion.span 
                className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                VERSE
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-gray-300 font-light tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Where Every Story Comes Alive
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2 }}
          >
            {[
              { icon: faFilm, title: '8K Ultra HD', desc: 'Crystal Clear Quality', delay: 1.4 },
              { icon: faTheaterMasks, title: 'Live Theater', desc: 'Exclusive Performances', delay: 1.6 },
              { icon: faMusic, title: 'Dolby Atmos', desc: 'Immersive Sound', delay: 1.8 }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-10 bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-700 group cursor-pointer"
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: feature.delay, duration: 0.8 }}
                onHoverStart={() => setHoveredCard(feature.title)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-red-500 group-hover:to-red-700 transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                </motion.div>
                <motion.h3 
                  className="text-white font-bold text-xl mb-3 group-hover:text-red-300 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: feature.delay + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-base group-hover:text-gray-300 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: feature.delay + 0.3 }}
                >
                  {feature.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.button
              onClick={() => transitionToStep('showcase')}
              className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-500 flex items-center space-x-4 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Content</span>
              <FontAwesomeIcon icon={faArrowRight} className="relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => transitionToStep('login')}
              className="px-12 py-5 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-4 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Sign In</span>
              <FontAwesomeIcon icon={faUser} className="relative z-10" />
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>

          {/* Loading Progress */}
          <motion.div 
            className="max-w-md mx-auto space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-lg">
              <motion.div 
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 3.5, duration: 4, ease: "easeInOut" }}
              />
            </div>
            <motion.p 
              className="text-gray-400 text-lg font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 1 }}
            >
              Loading premium experience...
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  ));

  // Content Showcase Section
  const ShowcaseSection = React.memo(() => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-black py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Navigation />
      
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[1]})`
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/40 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/95"></div>
        <FloatingParticles count={15} />
      </div>

      <div className="relative z-40 w-full max-w-8xl mx-auto px-8 py-24 mt-20">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20 space-y-8"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <motion.div 
            className="inline-flex items-center px-8 py-4 rounded-3xl text-base font-bold bg-red-600/20 text-red-300 border border-red-500/40 backdrop-blur-2xl shadow-2xl shadow-red-500/10"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <FontAwesomeIcon icon={faAward} className="mr-3 text-red-400 text-lg" />
            PREMIUM CURATED COLLECTION
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Exclusive <motion.span 
              className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent"
              initial={{ backgroundPosition: '0%' }}
              animate={{ backgroundPosition: '100%' }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Content
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover handpicked masterpieces from award-winning creators worldwide
          </motion.p>
        </motion.div>

        {/* Content Tabs */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-black/40 backdrop-blur-2xl rounded-2xl p-2 border border-white/10">
            {['Featured', 'Movies', 'Series', 'Live', 'Sports'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {[
            {
              title: 'Quantum Legacy',
              genre: 'Sci-Fi Thriller',
              rating: '4.9',
              image: backgroundImages[0],
              year: '2024',
              duration: '2h 18m'
            },
            {
              title: 'Midnight Dynasty',
              genre: 'Historical Drama',
              rating: '4.7',
              image: backgroundImages[2],
              year: '2024',
              duration: '2h 45m'
            },
            {
              title: 'Echoes of Time',
              genre: 'Mystery',
              rating: '4.8',
              image: backgroundImages[3],
              year: '2024',
              duration: '1h 58m'
            },
            {
              title: 'Neon Samurai',
              genre: 'Action',
              rating: '4.6',
              image: backgroundImages[1],
              year: '2024',
              duration: '2h 12m'
            },
            {
              title: 'Dragon\'s Crown',
              genre: 'Fantasy',
              rating: '4.9',
              image: backgroundImages[0],
              year: '2024',
              duration: '2h 32m'
            },
            {
              title: 'Shadow Strike',
              genre: 'Espionage',
              rating: '4.7',
              image: backgroundImages[2],
              year: '2024',
              duration: '2h 05m'
            },
            {
              title: 'Cosmic Dreams',
              genre: 'Adventure',
              rating: '4.8',
              image: backgroundImages[3],
              year: '2024',
              duration: '2h 28m'
            },
            {
              title: 'Royal Bloodline',
              genre: 'Drama',
              rating: '4.6',
              image: backgroundImages[1],
              year: '2024',
              duration: '2h 15m'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative bg-black/40 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/60 transition-all duration-700 cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.6, type: "spring" }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredCard(item.title)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Background Image with Enhanced Effects */}
              <div className="relative h-64 overflow-hidden">
                <motion.div 
                  className="h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                
                {/* Rating Badge */}
                <motion.div 
                  className="absolute top-4 left-4 flex items-center space-x-1 px-3 py-2 bg-black/70 backdrop-blur-lg rounded-2xl border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                  <span className="text-white text-sm font-bold">{item.rating}</span>
                </motion.div>

                {/* Play Button */}
                <motion.button 
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-red-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <FontAwesomeIcon icon={faPlay} className="ml-1 text-lg" />
                </motion.button>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-red-400 text-sm font-semibold tracking-wide">{item.genre}</span>
                  <span className="text-gray-400 text-sm">{item.year}</span>
                </div>
                <motion.h3 
                  className="text-white font-bold text-lg leading-tight group-hover:text-red-300 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-sm font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1.3 }}
                >
                  {item.duration}
                </motion.p>
              </div>

              {/* Hover Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"
                initial={{ opacity: 0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-28"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
        >
          <div className="inline-flex flex-col items-center space-y-8 bg-black/50 backdrop-blur-3xl rounded-4xl p-16 border border-red-500/30 shadow-2xl shadow-red-500/20 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-400/10 rounded-full blur-3xl"></div>
            
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/40"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <FontAwesomeIcon icon={faCrown} className="text-white text-3xl" />
            </motion.div>
            <motion.h3 
              className="text-4xl font-black text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
            >
              Ready for the Ultimate
              <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Experience?
              </span>
            </motion.h3>
            <motion.p 
              className="text-gray-300 text-xl font-light max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
            >
              Join millions of viewers in our cinematic universe with exclusive content and premium features
            </motion.p>
            <motion.button 
              onClick={() => transitionToStep('features')}
              className="px-16 py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-500 flex items-center space-x-4 group relative overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 1 }}
            >
              <span className="relative z-10">Explore Features</span>
              <motion.div
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  ));

  // Features Section
  const FeaturesSection = React.memo(() => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-black py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black"></div>
        <FloatingParticles count={20} />
      </div>

      <div className="relative z-40 max-w-8xl mx-auto px-8 py-24 mt-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 space-y-8"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <motion.div 
            className="inline-flex items-center px-8 py-4 rounded-3xl text-base font-bold bg-red-600/20 text-red-300 border border-red-500/40 backdrop-blur-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FontAwesomeIcon icon={faRocket} className="mr-3 text-red-400" />
            PREMIUM FEATURES
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Why Choose
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              CinemaVerse?
            </span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {[
            {
              icon: faTv,
              title: '4K & 8K Streaming',
              description: 'Experience crystal-clear quality with support for 4K and 8K resolution streaming.',
              features: ['Ultra HD Quality', 'HDR Support', 'Adaptive Bitrate']
            },
            {
              icon: faUsers,
              title: 'Multi-Device Sync',
              description: 'Watch seamlessly across all your devices with automatic progress synchronization.',
              features: ['5 Devices Simultaneously', 'Cross-Platform Sync', 'Offline Viewing']
            },
            {
              icon: faDownload,
              title: 'Offline Downloads',
              description: 'Download your favorite content and watch anywhere, anytime without internet.',
              features: ['Unlimited Downloads', 'Multiple Quality Options', 'Auto-Delete Option']
            },
            {
              icon: faShieldAlt,
              title: 'Premium Security',
              description: 'Your data and privacy are protected with enterprise-grade security measures.',
              features: ['End-to-End Encryption', 'Privacy First', 'Secure Payments']
            },
            {
              icon: faGlobe,
              title: 'Global Content',
              description: 'Access exclusive international content from every corner of the world.',
              features: ['100+ Countries', 'Multi-language Support', 'Cultural Content']
            },
            {
              icon: faInfinity,
              title: 'Unlimited Access',
              description: 'Get unlimited streaming with no ads and no restrictions on our entire library.',
              features: ['Ad-Free Experience', 'No Content Limits', 'Early Access Releases']
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-black/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 hover:border-red-500/50 transition-all duration-500 group cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-start space-x-6">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center group-hover:from-red-500 group-hover:to-red-400 transition-all duration-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 text-sm" />
                        <span className="text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.button 
            onClick={() => transitionToStep('pricing')}
            className="px-16 py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-500 flex items-center space-x-4 mx-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Pricing Plans</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  ));

  // Pricing Section
  const PricingSection = React.memo(() => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-black py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Navigation />
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/15 to-black"></div>
        <FloatingParticles count={15} />
      </div>

      <div className="relative z-40 max-w-8xl mx-auto px-8 py-24 mt-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20 space-y-8"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <motion.div 
            className="inline-flex items-center px-8 py-4 rounded-3xl text-base font-bold bg-red-600/20 text-red-300 border border-red-500/40 backdrop-blur-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FontAwesomeIcon icon={faGem} className="mr-3 text-red-400" />
            FLEXIBLE PLANS
          </motion.div>
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Choose Your
            <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Start with a free trial. No commitment. Cancel anytime.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: 'Basic',
              price: '$9.99',
              period: '/month',
              description: 'Perfect for casual viewers',
              popular: false,
              features: [
                'HD Streaming',
                '1 Device at a time',
                'Limited Content Library',
                'Standard Support',
                '720p Quality'
              ]
            },
            {
              name: 'Premium',
              price: '$14.99',
              period: '/month',
              description: 'Most popular choice',
              popular: true,
              features: [
                '4K Ultra HD Streaming',
                '4 Devices Simultaneously',
                'Full Content Library',
                'Priority Support',
                'Offline Downloads',
                'No Ads'
              ]
            },
            {
              name: 'Family',
              price: '$19.99',
              period: '/month',
              description: 'Best for families & groups',
              popular: false,
              features: [
                '8K & 4K Streaming',
                '6 Devices Simultaneously',
                'Full Content + Early Access',
                '24/7 Premium Support',
                'Unlimited Offline Downloads',
                'Personal Profiles',
                'Kids Safe Mode'
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-10 backdrop-blur-2xl border-2 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-br from-red-600/20 to-red-400/10 border-red-500/50 scale-105'
                  : 'bg-black/40 border-white/10'
              }`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-red-500/25">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2 mb-2">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-300">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-red-500 text-sm" />
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-2xl shadow-red-600/40 hover:shadow-red-600/60'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.button 
            onClick={() => transitionToStep('login')}
            className="px-16 py-5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-500 flex items-center space-x-4 mx-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  ));

  // Footer Component
  const Footer = () => (
    <motion.footer 
      className="relative bg-black border-t border-white/10 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={faFilm} className="text-white text-xl" />
              </div>
              <span className="text-2xl font-black text-white">
                CINEMA<span className="text-red-500">VERSE</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The ultimate streaming experience with premium content, stunning quality, and exclusive features for true cinema lovers.
            </p>
            <div className="flex space-x-4">
              {[faGlobe, faUsers, faFilm, faHeart].map((icon, index) => (
                <motion.button
                  key={index}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Content',
              links: ['Movies', 'TV Shows', 'Live TV', 'Sports', 'Documentaries']
            },
            {
              title: 'Support',
              links: ['Help Center', 'Contact Us', 'System Status', 'Bug Report', 'Feature Request']
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Press', 'Legal', 'Privacy Policy']
            }
          ].map((section, index) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-white font-bold text-lg">{section.title}</h3>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-400">
            © 2025 CinemaVerse. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {['Terms', 'Privacy', 'Cookies', 'Security'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );

  // Premium Login Section with FIXED form accessibility
  const LoginScreen = React.memo(() => (
    <motion.div 
      className="min-h-screen relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Navigation />
      
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImages[3]})`
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
        />
        
        {/* Multiple overlay layers */}
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/15 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        
        {/* Animated elements */}
        <FloatingParticles count={20} />
      </div>

      {/* Main Layout */}
      <div className="relative z-40 min-h-screen flex pt-20">
        {/* Left Side - Enhanced Brand Showcase */}
        <div className="flex-1 hidden lg:flex items-center justify-center p-16 relative">
          <div className="max-w-2xl text-center space-y-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-7xl font-black text-white mb-8 leading-tight"
                initial={{ letterSpacing: '0.1em' }}
                animate={{ letterSpacing: '0.02em' }}
                transition={{ duration: 1.5 }}
              >
                CINEMA
                <motion.span 
                  className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent mt-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  VERSE
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Your gateway to unparalleled cinematic experiences in stunning quality
              </motion.p>
            </motion.div>

            {/* Enhanced Features List */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {[
                { icon: faCheckCircle, text: '8K Ultra HD Streaming', delay: 1.2 },
                { icon: faCheckCircle, text: 'Dolby Atmos Sound', delay: 1.4 },
                { icon: faCheckCircle, text: 'Exclusive Original Content', delay: 1.6 },
                { icon: faCheckCircle, text: 'Multi-Device Support', delay: 1.8 }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center space-x-6 text-gray-300 group cursor-pointer"
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: feature.delay, duration: 0.8, type: "spring" }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center group-hover:from-red-500 group-hover:to-red-400 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-lg" />
                  </motion.div>
                  <span className="text-xl group-hover:text-white transition-colors duration-500">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-12 pt-12 border-t border-white/20"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {[
                { value: '15.8M', label: 'Active Viewers', icon: faUser },
                { value: '50K+', label: 'Premium Titles', icon: faFilm },
                { value: '95%', label: 'Satisfaction', icon: faHeart }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex items-center justify-center group-hover:from-red-500 group-hover:to-red-400 transition-all duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={stat.icon} className="text-white text-xl" />
                  </motion.div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors duration-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side - Enhanced Login Form */}
        <div className="flex-1 flex items-center justify-center p-12 relative">
          {/* Background decorative elements */}
          <div className="absolute top-20 right-20 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-red-400/10 rounded-full blur-3xl"></div>

          {/* Form Container */}
          <motion.div 
            className="w-full max-w-lg"
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            {/* Enhanced Header */}
            <motion.div 
              className="text-center mb-16 space-y-8"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto bg-gradient-to-br from-red-600 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-500/40 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <FontAwesomeIcon icon={faUserAstronaut} className="text-white text-3xl relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-400 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              <motion.h2 
                className="text-5xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Welcome
                <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                  Back
                </span>
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Sign in to continue your cinematic journey
              </motion.p>
            </motion.div>

            {/* Enhanced Login Form */}
            <motion.div 
              className="bg-black/40 backdrop-blur-3xl rounded-3xl p-12 border border-white/20 shadow-2xl shadow-red-500/10 relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* Form background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-400/5 rounded-full blur-2xl"></div>

              <form onSubmit={handleLogin} className="space-y-8 relative z-10">
                {/* FIXED: Enhanced Email Field with proper accessibility */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-300 mb-4">
                    Email Address
                  </label>
                  <div className="relative group">
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-5 bg-black/40 border border-white/20 rounded-2xl focus:outline-none focus:border-red-500 transition-all duration-500 text-white placeholder-gray-500 backdrop-blur-lg group-hover:border-white/40"
                      placeholder="Enter your email"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-400 transition-colors duration-500" 
                    />
                  </div>
                </motion.div>

                {/* FIXED: Enhanced Password Field with proper accessibility */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <label htmlFor="password" className="block text-lg font-semibold text-gray-300 mb-4">
                    Password
                  </label>
                  <div className="relative group">
                    <motion.input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-6 py-5 bg-black/40 border border-white/20 rounded-2xl focus:outline-none focus:border-red-500 transition-all duration-500 text-white placeholder-gray-500 backdrop-blur-lg pr-16 group-hover:border-white/40"
                      placeholder="Enter your password"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                    <FontAwesomeIcon 
                      icon={faLock} 
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-red-400 transition-colors duration-500" 
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors duration-500"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </motion.button>
                  </div>
                </motion.div>

                {/* FIXED: Enhanced Remember Me & Forgot Password */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <label htmlFor="remember" className="flex items-center space-x-4 cursor-pointer group">
                    <motion.input 
                      id="remember"
                      name="remember"
                      type="checkbox" 
                      className="rounded-xl bg-black/40 border-white/20 text-red-500 focus:ring-red-500 w-6 h-6 cursor-pointer group-hover:border-red-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <span className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">Remember me</span>
                  </label>
                  <motion.button 
                    type="button" 
                    className="text-red-400 hover:text-red-300 text-lg transition-colors duration-500 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Forgot password?
                  </motion.button>
                </motion.div>

                {/* Enhanced Login Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-5 rounded-2xl font-bold text-xl transition-all duration-500 flex items-center justify-center space-x-4 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 text-white group relative overflow-hidden"
                  whileHover={{ 
                    scale: isLoading ? 1 : 1.02,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSignInAlt} className="relative z-10" />
                      <span className="relative z-10">Sign In to CinemaVerse</span>
                    </>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </form>

              {/* Enhanced Divider */}
              <motion.div 
                className="flex items-center my-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                <span className="px-6 text-gray-400 text-lg font-light">or continue with</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
              </motion.div>

              {/* Enhanced Social Login */}
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                {[
                  { icon: faGem, label: 'Google', color: 'red' },
                  { icon: faShieldAlt, label: 'Apple', color: 'red' }
                ].map((social, index) => (
                  <motion.button 
                    key={social.label}
                    type="button"
                    className="py-4 bg-black/40 border border-white/10 rounded-2xl text-white hover:border-white/30 transition-all duration-500 flex items-center justify-center space-x-4 group relative overflow-hidden"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={social.icon} className={`text-${social.color}-400 group-hover:text-${social.color}-300 transition-colors duration-500 relative z-10`} />
                    <span className="relative z-10">{social.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Enhanced Sign Up Link */}
              <motion.div 
                className="text-center mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                <p className="text-gray-400 text-lg">
                  New to CinemaVerse?{' '}
                  <motion.button 
                    type="button"
                    className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-500"
                    whileHover={{ x: 5 }}
                  >
                    Create an account
                  </motion.button>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  ));

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    body {
      background: #000000;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: #000000;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #E50914 0%, #B81D24 100%);
      border-radius: 6px;
      border: 2px solid #000000;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #B81D24 0%, #E50914 100%);
    }

    /* Selection styles */
    ::selection {
      background: rgba(229, 9, 20, 0.4);
      color: white;
      text-shadow: none;
    }

    /* Smooth transitions */
    .backdrop-blur-lg {
      backdrop-filter: blur(20px);
    }
    
    .backdrop-blur-xl {
      backdrop-filter: blur(24px);
    }
    
    .backdrop-blur-2xl {
      backdrop-filter: blur(40px);
    }
    
    .backdrop-blur-3xl {
      backdrop-filter: blur(64px);
    }

    /* Focus styles */
    input:focus {
      outline: none;
      ring: none;
    }

    /* Loading animation */
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .shimmer {
      animation: shimmer 3s infinite linear;
      background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
      background-size: 1000px 100%;
    }

    /* Custom glow effects */
    .glow-red {
      box-shadow: 0 0 50px rgba(229, 9, 20, 0.3);
    }

    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Prevent text selection on interactive elements */
    button, .interactive {
      user-select: none;
      -webkit-user-select: none;
    }

    /* Gradient text animation */
    .gradient-text {
      background: linear-gradient(45deg, #E50914, #B81D24, #E50914);
      background-size: 200% 200%;
      animation: gradientShift 3s ease infinite;
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;

  const RenderedSection = React.useMemo(() => {
    switch (currentStep) {
      case 'cinematic':
        return <HeroSection />;
      case 'showcase':
        return <ShowcaseSection />;
      case 'features':
        return <FeaturesSection />;
      case 'pricing':
        return <PricingSection />;
      case 'login':
        return <LoginScreen />;
      default:
        return <HeroSection />;
    }
  }, [currentStep]);

  return (
    <>
      <style>{styles}</style>
      <div className="relative min-h-screen overflow-hidden bg-black">
        <AnimatePresence mode="wait">{RenderedSection}</AnimatePresence>
      </div>
    </>
  );
};

export default PremiumStreamingRedesign;