import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faSignInAlt,
  faUserPlus,
  faStar,
  faShieldAlt,
  faCheckCircle,
  faCreditCard,
  faHeadset,
  faCrown,
  faGem,
  faMagic,
  faShoppingBag,
  faTruck,
  faAward,
  faRocket,
  faSearch,
  faHeart,
  faShoppingCart,
  faUser,
  faBars,
  faTimes,
  faArrowRight,
  faPlay,
  faPause,
  faChevronRight,
  faChevronLeft,
  faExpand
} from '@fortawesome/free-solid-svg-icons';

const PremiumLuxuryLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [transitioning, setTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);
  const videoContainersRef = useRef([]);

  const luxuryVideos = [
    'https://videos.pexels.com/video-files/8047523/8047523-hd_1920_1080_25fps.mp4',
    'https://videos.pexels.com/video-files/8154894/8154894-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/6540460/6540460-uhd_2560_1440_24fps.mp4',
    'https://videos.pexels.com/video-files/5378930/5378930-uhd_2732_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/6256822/6256822-uhd_2732_1440_25fps.mp4'
  ];

  const theme = {
    primary: '#000000',
    secondary: '#FFFFFF',
    accent: '#D4AF37',
    light: '#F5F5F5',
    dark: '#1A1A1A',
    gray: '#666666'
  };

  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 1200);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => transitionToStep('intro'), 5000);
    const timer2 = setTimeout(() => transitionToStep('showcase'), 14000);
    const timer3 = setTimeout(() => transitionToStep('features'), 24000);
    const timer4 = setTimeout(() => transitionToStep('login'), 34000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // Video preloading and smooth handling
  useEffect(() => {
    luxuryVideos.forEach((videoSrc, index) => {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.preload = 'auto';
      video.load();
    });
  }, []);

  const handleVideoLoad = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log('Video play failed:', e));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % luxuryVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + luxuryVideos.length) % luxuryVideos.length);
  };

  // Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black z-10"></div>
      
      {/* Minimal animated background */}
      <div className="absolute inset-0 z-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${15 + Math.random() * 10}s infinite`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <div className="space-y-16">
          {/* Minimal Logo */}
          <div className="relative">
            <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-24 h-24 border border-white/30 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCrown} className="text-4xl text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-8 fade-in-text">
            <h1 className="text-6xl font-light text-white font-serif tracking-widest">
              NOBILE
            </h1>
            <div className="w-24 h-px bg-white/40 mx-auto"></div>
            <p className="text-sm text-white/60 font-light tracking-widest uppercase">
              Timeless Elegance
            </p>
          </div>

          {/* Minimal loading */}
          <div className="flex justify-center">
            <div className="w-32 h-px bg-white/20 overflow-hidden">
              <div className="h-full bg-white animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Intro Screen
  const IntroScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-black z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
          onLoadedData={() => handleVideoLoad(0)}
          ref={el => videoRefs.current[0] = el}
        >
          <source src={luxuryVideos[0]} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-40 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-block border border-white/30 px-6 py-3">
                <span className="text-white/80 text-sm tracking-widest font-light">ESTABLISHED 1928</span>
              </div>
              
              <h2 className="text-5xl font-light text-white font-serif leading-tight tracking-wide">
                Where Craftsmanship Meets <br />
                <span className="italic">Timeless Sophistication</span>
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-light">
                For nearly a century, we have curated the world's most exceptional creations, 
                serving discerning clients who appreciate the art of true luxury.
              </p>
            </div>

            {/* Minimal stats */}
            <div className="flex justify-center space-x-16 pt-12">
              {[
                { number: '27', label: 'Countries' },
                { number: '94', label: 'Years' },
                { number: '∞', label: 'Elegance' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-light text-white mb-2 font-serif">{stat.number}</div>
                  <div className="text-white/50 text-xs tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Product Showcase Screen
  const ShowcaseScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          onLoadedData={() => handleVideoLoad(1)}
          ref={el => videoRefs.current[1] = el}
        >
          <source src={luxuryVideos[1]} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <span className="text-white/60 text-sm tracking-widest font-light">CURATED COLLECTIONS</span>
          </div>
          <h2 className="text-4xl font-light text-white font-serif mb-6 tracking-wide">
            Heritage <span className="italic">Collections</span>
          </h2>
        </div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Video Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-black border border-white/10 overflow-hidden">
              <video
                key={currentVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={() => handleVideoLoad(currentVideo)}
                ref={el => videoRefs.current[currentVideo] = el}
              >
                <source src={luxuryVideos[currentVideo]} type="video/mp4" />
              </video>
              
              {/* Video Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <button 
                  onClick={prevVideo}
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                >
                  <FontAwesomeIcon icon={faChevronLeft} className="text-white text-sm" />
                </button>
                <div className="text-white text-sm tracking-widest backdrop-blur-sm bg-black/30 px-3 py-1">
                  {currentVideo + 1} / {luxuryVideos.length}
                </div>
                <button 
                  onClick={nextVideo}
                  className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-white text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="text-white space-y-12">
            {[
              {
                category: 'HAUTE HORLOGERIE',
                name: 'Tourbillon Masterpiece',
                price: 'From $85,000',
                description: 'A symphony of mechanical excellence, featuring a flying tourbillon and perpetual calendar complication.'
              },
              {
                category: 'LEATHER GOODS',
                name: 'Artisanal Collection',
                price: 'From $12,000',
                description: 'Handcrafted from the finest European leathers, each piece tells a story of traditional craftsmanship.'
              },
              {
                category: 'FINE JEWELRY',
                name: 'Heritage Collection',
                price: 'From $25,000',
                description: 'Exceptional diamonds and precious gems set in designs that transcend time.'
              }
            ].map((product, index) => (
              <div key={index} className="border-b border-white/10 pb-8 last:border-b-0 group hover:border-white/30 transition-all duration-700">
                <div className="text-white/40 text-xs tracking-widest mb-3 group-hover:text-white/60 transition-colors duration-500">{product.category}</div>
                <h3 className="text-2xl font-light font-serif mb-4 group-hover:text-gold transition-colors duration-500">{product.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 font-light group-hover:text-white/70 transition-colors duration-500">{product.description}</p>
                <div className="text-lg font-light group-hover:text-gold transition-colors duration-500">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Features Screen
  const FeaturesScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-15"
          onLoadedData={() => handleVideoLoad(2)}
          ref={el => videoRefs.current[2] = el}
        >
          <source src={luxuryVideos[2]} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-40 w-full max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="border border-black/20 px-6 py-3 inline-block">
                <span className="text-black/60 text-sm tracking-widest font-light">EXCLUSIVE SERVICES</span>
              </div>
              
              <h2 className="text-4xl font-light text-black font-serif leading-tight tracking-wide">
                Bespoke <span className="italic">Experiences</span> <br />
                For Discerning Clients
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {[
                {
                  icon: faUser,
                  title: 'Personal Concierge',
                  description: 'Dedicated lifestyle managers providing unparalleled service and attention to detail.'
                },
                {
                  icon: faShieldAlt,
                  title: 'Discrete Authentication',
                  description: 'Comprehensive verification ensuring the integrity and provenance of every piece.'
                },
                {
                  icon: faTruck,
                  title: 'White Glove Delivery',
                  description: 'Global delivery with personalized presentation and installation services.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 group cursor-pointer transition-all duration-700 hover:translate-x-2">
                  <div className="w-12 h-12 border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-500">
                    <FontAwesomeIcon icon={feature.icon} className="text-black group-hover:text-white text-lg transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-light text-lg text-black mb-2 font-serif group-hover:text-gold transition-colors duration-500">{feature.title}</h4>
                    <p className="text-black/60 text-sm leading-relaxed font-light group-hover:text-black/80 transition-colors duration-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Exclusive Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={`relative overflow-hidden bg-black border border-black/20 transition-all duration-700 hover:border-gold/50 ${
                  item === 1 ? 'col-span-2 aspect-video' :
                  item === 2 ? 'aspect-square' :
                  item === 3 ? 'aspect-square' :
                  'aspect-video'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                    <div className="text-white text-center space-y-4 p-8">
                      <FontAwesomeIcon icon={faGem} className="text-white/40 text-2xl" />
                      <div className="text-white/60 text-xs tracking-widest">EXCLUSIVE</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <FontAwesomeIcon icon={faCrown} className="text-gold text-xl mb-2" />
                      <div className="text-gold text-xs tracking-widest">PRIVATE COLLECTION</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-8"
          onLoadedData={() => handleVideoLoad(3)}
          ref={el => videoRefs.current[3] = el}
        >
          <source src={luxuryVideos[3]} type="video/mp4" />
        </video>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCrown} className="text-black text-sm" />
              </div>
              <span className="text-xl font-light text-black font-serif tracking-widest">NOBILE</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-12">
              {['Collections', 'Heritage', 'Private Client', 'Ateliers'].map((item) => (
                <a key={item} href="#" className="text-black/60 hover:text-black text-sm tracking-widest font-light transition-colors duration-500">
                  {item}
                </a>
              ))}
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-8">
              <button className="text-black/40 hover:text-black transition-colors duration-500">
                <FontAwesomeIcon icon={faSearch} className="text-sm" />
              </button>
              <button className="text-black/40 hover:text-black transition-colors duration-500">
                <FontAwesomeIcon icon={faUser} className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-40 w-full max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[calc(100vh-80px)]">
        {/* Left Side - Brand Showcase */}
        <div className="text-black space-y-16">
          {/* Brand Header */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="border border-black/20 px-6 py-3 inline-block">
                <span className="text-black/60 text-sm tracking-widest font-light">PRIVATE ACCESS</span>
              </div>

              <h2 className="text-5xl font-light text-black font-serif leading-tight tracking-wide">
                Welcome to <span className="italic">Your</span> <br />
                World of Elegance
              </h2>
              
              <p className="text-lg text-black/60 leading-relaxed font-light max-w-2xl">
                Access exclusive collections, personalized consultations, and privileged services 
                reserved for our most discerning clients.
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-6 max-w-md">
            {[
              { icon: faShieldAlt, text: 'Secure Access' },
              { icon: faCheckCircle, text: 'Verified Identity' },
              { icon: faHeadset, text: '24/7 Concierge' },
              { icon: faAward, text: 'Certified Authenticity' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 border border-black/10 hover:border-black/30 transition-all duration-500 group hover:bg-black/5">
                <FontAwesomeIcon icon={item.icon} className="text-black/40 text-sm group-hover:text-gold transition-colors duration-500" />
                <span className="text-black/60 text-xs tracking-widest font-light group-hover:text-black/80 transition-colors duration-500">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Heritage Statement */}
          <div className="border-t border-black/10 pt-8 max-w-2xl">
            <p className="text-black/40 text-sm tracking-widest font-light">
              SERVING DISCRIMINATING CLIENTS SINCE 1928
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white border border-black/10 relative overflow-hidden backdrop-blur-sm bg-white/95">
          {/* Form Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/30"></div>

          <div className="relative z-10 p-12">
            {/* Form Header */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <FontAwesomeIcon icon={faCrown} className="text-black/40 text-lg mb-4" />
              </div>
              <h3 className="text-2xl font-light text-black font-serif mb-3 tracking-wide">Private Access</h3>
              <p className="text-black/40 text-sm tracking-widest">Enter your credentials</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-6">
                {/* Email Field */}
                <div className="relative">
                  <label className="text-xs tracking-widest text-black/60 font-light block mb-4">EMAIL ADDRESS</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-black/20 focus:border-black outline-none text-black placeholder-black/30 transition-all duration-500 font-light tracking-wide"
                      placeholder="Enter your email"
                      required
                    />
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black/30" 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <label className="text-xs tracking-widest text-black/60 font-light block mb-4">PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-black/20 focus:border-black outline-none text-black placeholder-black/30 transition-all duration-500 font-light tracking-wide"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black/30 hover:text-black transition-colors duration-500"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <a href="#" className="text-black/40 hover:text-black text-xs tracking-widest transition-colors duration-500 font-light">
                  FORGOT PASSWORD?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black text-white py-4 border border-black hover:bg-white hover:text-black transition-all duration-500 font-light tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>VERIFYING...</span>
                    </>
                  ) : (
                    <>
                      <span>ACCESS PRIVATE PORTAL</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Registration CTA */}
            <div className="text-center pt-12 border-t border-black/10">
              <p className="text-black/40 text-sm mb-6 tracking-widest font-light">
                NEW TO NOBILE?
              </p>
              <button className="w-full py-4 border border-black/20 text-black/60 hover:text-black hover:border-black transition-all duration-500 font-light tracking-widest text-sm group">
                <div className="flex items-center justify-center space-x-3">
                  <FontAwesomeIcon icon={faUserPlus} className="text-xs group-hover:translate-x-1 transition-transform duration-500" />
                  <span>REQUEST PRIVATE ACCESS</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const styles = `
    @keyframes loading-bar {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    /* Premium page transitions */
    .page-enter {
      animation: fade-in-up 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    .page-exit {
      animation: fade-out-down 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.97);
        filter: blur(6px);
      }
      60% {
        opacity: 0.8;
        transform: translateY(10px) scale(1.02);
        filter: blur(2px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }

    @keyframes fade-out-down {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
      100% {
        opacity: 0;
        transform: translateY(40px) scale(0.97);
        filter: blur(6px);
      }
    }

    body {
      background: #FFFFFF;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #FAFAFA;
    }
    ::-webkit-scrollbar-thumb {
      background: #000000;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #333333;
    }

    /* Enhance all transitions globally */
    * {
      transition-property: color, background-color, border-color, transform, opacity, filter;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    }

    /* Premium focus states */
    input:focus {
      transition-duration: 0.3s;
    }

    /* Video container styling */
    video {
      filter: grayscale(20%);
    }

    /* Serif font for luxury feel */
    .font-serif {
      font-family: 'Times New Roman', Times, serif;
    }

    /* Gold color for luxury accents */
    .text-gold {
      color: #D4AF37;
    }
    .hover\\:text-gold:hover {
      color: #D4AF37;
    }
    .border-gold {
      border-color: #D4AF37;
    }
    .hover\\:border-gold:hover {
      border-color: #D4AF37;
    }

    /* Smooth video transitions */
    .video-container {
      transition: opacity 0.8s ease-in-out;
    }

    /* Premium fade layer */
    .transition-layer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(0,0,0,0.85), rgba(0,0,0,1));
      z-index: 1000;
      pointer-events: none;
      opacity: 0;
      transition: opacity 1s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .transition-layer.active {
      opacity: 1;
    }

    .animate-loading-bar {
      animation: loading-bar 2s ease-in-out infinite;
    }

    /* Fade-in for NOBILE and Timeless Elegance */
    .fade-in-text {
      animation: fadeInText 2.2s cubic-bezier(0.25, 1, 0.5, 1) both;
    }

    @keyframes fadeInText {
      0% {
        opacity: 0;
        transform: translateY(30px);
        filter: blur(6px);
      }
      60% {
        opacity: 0.8;
        transform: translateY(10px);
        filter: blur(2px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative bg-white min-h-screen overflow-hidden">
        {/* Smooth premium transition overlay */}
        <div className={`transition-layer ${transitioning ? 'active' : ''}`}></div>
        <div className={`${transitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1200`}>
          {currentStep === 'splash' && <SplashScreen />}
          {currentStep === 'intro' && <IntroScreen />}
          {currentStep === 'showcase' && <ShowcaseScreen />}
          {currentStep === 'features' && <FeaturesScreen />}
          {currentStep === 'login' && <LoginScreen />}
        </div>
      </div>
    </>
  );
};

export default PremiumLuxuryLogin;