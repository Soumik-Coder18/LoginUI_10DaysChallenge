import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faSignInAlt,
  faUserPlus,
  faHotel,
  faStar,
  faMapMarkerAlt,
  faShieldAlt,
  faCheckCircle,
  faCreditCard,
  faHeadset,
  faCrown,
  faGem,
  faMagic,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle, 
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const LuxuryHotelBooking = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('video1');
  const [transitioning, setTransitioning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  // Luxury color theme
  const theme = {
    primary: '#75532A',
    secondary: '#4C381A',
    accent: '#D4AF37',
    light: '#F5F0E6',
    dark: '#1A1208'
  };

  // Smooth transitions between screens
  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      transitionToStep('welcome');
    }, 5000);

    const timer2 = setTimeout(() => {
      transitionToStep('video2');
    }, 9000);

    const timer3 = setTimeout(() => {
      transitionToStep('features');
    }, 14000);

    const timer4 = setTimeout(() => {
      transitionToStep('video3');
    }, 19000);

    const timer5 = setTimeout(() => {
      transitionToStep('login');
    }, 24000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    console.log('Login attempted with:', { email, password });
  };

  // Video background component
  const VideoBackground = ({ videoRef, videoSrc, children }) => (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        onCanPlay={() => {
          try {
            videoRef?.current?.play?.();
          } catch (e) {
            // autoplay may be blocked; we'll rely on user interaction or fallback
            console.warn('Video play blocked or failed', e);
          }
        }}
        onError={(e) => console.error('Video error', e)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* slightly lower overlay opacity so video is visible beneath the gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#4C381A] to-[#75532A] opacity-70 z-10"></div>
      <div className="absolute inset-0 bg-black/30 z-20"></div>
      
      {/* Animated luxury particles */}
      <div className="absolute inset-0 z-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37] rounded-full animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      {children}
    </div>
  );

  // Video 1 Component
  const Video1Screen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <VideoBackground 
        videoRef={videoRef1}
        videoSrc="https://videos.pexels.com/video-files/6467634/6467634-uhd_2732_1440_25fps.mp4"
      >
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white font-serif mb-4">
              Welcome to Luxury
            </h1>
            <p className="text-2xl text-[#D4AF37] font-light max-w-2xl mx-auto">
              Experience the pinnacle of hospitality excellence
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );

  // Welcome Screen with luxury aesthetic
  const WelcomeScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#4C381A] to-[#75532A] opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        
        {/* Animated luxury particles */}
        <div className="absolute inset-0 z-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37] rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
        {/* Luxury Brand Header */}
        <div className="space-y-8 mb-16">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#75532A] rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 border-2 border-[#D4AF37]/30">
                <FontAwesomeIcon icon={faCrown} className="text-3xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faGem} className="text-xs text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5F0E6] to-[#D4AF37] bg-clip-text text-transparent font-serif">
                RoyalStay
              </h1>
              <p className="text-[#F5F0E6]/70 text-lg font-light tracking-widest mt-2">LUXURY COLLECTION</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <h2 className="text-4xl font-light text-[#F5F0E6] mb-4 font-serif">
                Where Excellence Meets Elegance
              </h2>
              <div className="flex justify-center space-x-2">
                <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
                <div className="w-6 h-0.5 bg-[#D4AF37]"></div>
                <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
              </div>
            </div>
            <p className="text-xl text-[#F5F0E6]/80 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Experience unparalleled luxury in our curated collection of world-class hotels and resorts
            </p>
          </div>
        </div>

        {/* Animated luxury indicator */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-[#D4AF37] rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <p className="text-[#F5F0E6]/60 text-sm tracking-widest">ENTERING THE REALM OF LUXURY</p>
        </div>
      </div>
    </div>
  );

  // Video 2 Component
  const Video2Screen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <VideoBackground 
        videoRef={videoRef2}
        videoSrc="https://videos.pexels.com/video-files/19314728/19314728-uhd_2560_1440_60fps.mp4"
      >
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white font-serif mb-4">
              Unmatched Elegance
            </h1>
            <p className="text-2xl text-[#D4AF37] font-light max-w-2xl mx-auto">
              Discover our world-class accommodations and amenities
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );

  // Features Showcase Screen
  const FeaturesScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#4C381A] to-[#75532A] opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        
        {/* Animated luxury particles */}
        <div className="absolute inset-0 z-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37] rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] text-sm tracking-widest">EXCLUSIVE BENEFITS</span>
            <div className="w-12 h-0.5 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-5xl font-bold text-[#F5F0E6] mb-6 font-serif">
            The RoyalStay Experience
          </h2>
          <p className="text-xl text-[#F5F0E6]/70 font-light max-w-3xl mx-auto leading-relaxed">
            Discover why discerning travelers choose RoyalStay for their most memorable journeys
          </p>
        </div>

        {/* Luxury Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: faCrown,
              title: 'Royal Treatment',
              description: 'Personalized butler service and exclusive amenities',
              features: ['24/7 Personal Butler', 'Luxury Spa Access', 'Private Concierge']
            },
            {
              icon: faGem,
              title: 'Elite Accommodations',
              description: 'Exquisitely designed suites with premium comforts',
              features: ['Designer Suites', 'Premium Linens', 'Smart Room Controls']
            },
            {
              icon: faStar,
              title: 'Award Winning',
              description: 'Consistently recognized for exceptional service',
              features: ['5-Star Ratings', 'Luxury Awards', 'Guest Excellence']
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#75532A] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-12">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-[#F5F0E6] mb-4 text-center font-serif">
                  {feature.title}
                </h3>
                
                <p className="text-[#F5F0E6]/70 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-[#F5F0E6]/80">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            onClick={() => transitionToStep('video3')}
            className="px-16 py-5 bg-gradient-to-r from-[#75532A] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#75532A] text-[#1A1208] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <FontAwesomeIcon icon={faMagic} className="text-lg" />
              <span>ACCESS EXCLUSIVE OFFERS</span>
              <FontAwesomeIcon icon={faMagic} className="text-lg" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#75532A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );

  // Video 3 Component
  const Video3Screen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <VideoBackground 
        videoRef={videoRef3}
        videoSrc="https://videos.pexels.com/video-files/6467633/6467633-uhd_2732_1440_25fps.mp4"
      >
        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white font-serif mb-4">
              Your Journey Begins
            </h1>
            <p className="text-2xl text-[#D4AF37] font-light max-w-2xl mx-auto">
              Join our exclusive community of luxury travelers
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </VideoBackground>
    </div>
  );

  // Main Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-[#1A1208]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#4C381A] to-[#75532A] opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        
        {/* Animated luxury particles */}
        <div className="absolute inset-0 z-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#D4AF37] rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-40 w-full max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
        {/* Left Side - Luxury Brand Showcase */}
        <div className="text-[#F5F0E6] space-y-12">
          {/* Brand Header */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#75532A] rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12">
                  <FontAwesomeIcon icon={faCrown} className="text-2xl text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faGem} className="text-xs text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5F0E6] to-[#D4AF37] bg-clip-text text-transparent font-serif">
                  RoyalStay
                </h1>
                <p className="text-[#F5F0E6]/70 text-sm tracking-widest">PRIVILEGED ACCESS</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-light text-[#F5F0E6] font-serif">
                Welcome Back, <br />
                <span className="text-[#D4AF37]">Valued Guest</span>
              </h2>
              <p className="text-lg text-[#F5F0E6]/80 leading-relaxed tracking-wide">
                Access exclusive member benefits, personalized offers, and manage your luxury stays.
              </p>
            </div>
          </div>

          {/* Luxury Trust Indicators */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: faCheckCircle, text: 'Best Rate Guarantee', color: 'text-[#D4AF37]' },
                { icon: faCreditCard, text: 'Secure Encryption', color: 'text-[#D4AF37]' },
                { icon: faHeadset, text: '24/7 VIP Support', color: 'text-[#D4AF37]' },
                { icon: faShieldAlt, text: 'Privacy Protected', color: 'text-[#D4AF37]' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <FontAwesomeIcon icon={item.icon} className={`${item.color} text-sm`} />
                  <span className="text-[#F5F0E6]/90 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Awards */}
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-[#D4AF37]/20">
            <p className="text-[#F5F0E6]/70 text-sm text-center tracking-widest">
              RECOGNIZED BY LUXURY TRAVEL AWARDS 2024
            </p>
          </div>
        </div>

        {/* Right Side - Luxury Login Form */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          {/* Form Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #D4AF37 2px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10">
            {/* Form Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
                <FontAwesomeIcon icon={faCrown} className="text-[#D4AF37] text-sm" />
                <div className="w-8 h-0.5 bg-[#D4AF37]"></div>
              </div>
              <h3 className="text-3xl font-bold text-[#F5F0E6] mb-2 font-serif">Member Portal</h3>
              <p className="text-[#F5F0E6]/70">Access your exclusive benefits</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-4">
                {/* Email Field */}
                <div className="relative">
                  <label className="text-sm font-semibold text-[#F5F0E6] block mb-3 tracking-wide">EMAIL ADDRESS</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none text-[#F5F0E6] placeholder-[#F5F0E6]/40 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" 
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative">
                  <label className="text-sm font-semibold text-[#F5F0E6] block mb-3 tracking-wide">PASSWORD</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-5 py-3 bg-white/10 border border-[#D4AF37]/30 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none text-[#F5F0E6] placeholder-[#F5F0E6]/40 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#D4AF37] hover:text-[#F5F0E6] transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-3 cursor-pointer">
                </label>
                <a href="#" className="text-[#D4AF37] hover:text-[#F5F0E6] transition-colors duration-200 font-semibold">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#75532A] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#75532A] text-[#1A1208] py-3 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-[#1A1208] border-t-transparent rounded-full animate-spin"></div>
                      <span className="font-bold">ACCESSING PORTAL...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSignInAlt} className="text-lg text-amber-50" />
                      <span className="font-bold text-amber-50">Step Into Luxury</span>
                      <FontAwesomeIcon icon={faMagic} className="text-lg text-amber-50" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#75532A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Social Login & Registration */}
            <div className="mt-8">
              {/* Social Login */}
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-4 text-[#F5F0E6]/60 text-sm mb-6">
                  <div className="flex-grow border-t border-[#D4AF37]/20"></div>
                  <span>Or continue with</span>
                  <div className="flex-grow border-t border-[#D4AF37]/20"></div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: faGoogle, color: 'hover:bg-yellow-500/20 border-[#D4AF37]/20 hover:border-yellow-400/50 text-[#F5F0E6] hover:text-yellow-400' },
                    { icon: faFacebook, color: 'hover:bg-yellow-500/20 border-[#D4AF37]/20 hover:border-yellow-400/50 text-[#F5F0E6] hover:text-yellow-400' },
                    { icon: faTwitter, color: 'hover:bg-yellow-500/20 border-[#D4AF37]/20 hover:border-yellow-400/50 text-[#F5F0E6] hover:text-yellow-400' },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`flex items-center justify-center py-3 rounded-2xl border transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${social.color}`}
                    >
                      <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Registration CTA */}
              <div className="text-center pt-4 border-t border-[#D4AF37]/20">
                <p className="text-[#F5F0E6]/70 mb-2">
                  Ready to experience luxury?
                </p>
                <button className="w-full py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1208] rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm">
                  <div className="flex items-center justify-center space-x-3">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>JOIN ROYALSTAY COLLECTION</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const styles = `
    /* Premium seamless crossfade transition */
    @keyframes premium-crossfade-in {
      0% {
        opacity: 0;
        transform: scale(1.05) blur(8px);
        filter: brightness(0.85);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.02) blur(4px);
        filter: brightness(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1) blur(0);
        filter: brightness(1);
      }
    }

    @keyframes premium-crossfade-out {
      0% {
        opacity: 1;
        transform: scale(1) blur(0);
        filter: brightness(1);
      }
      100% {
        opacity: 0;
        transform: scale(0.98) blur(4px);
        filter: brightness(0.8);
      }
    }

    .page-enter {
      animation: premium-crossfade-in 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      position: absolute;
      inset: 0;
    }

    .page-exit {
      animation: premium-crossfade-out 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
      position: absolute;
      inset: 0;
    }

    /* Ensure background stays consistent */
    body {
      background-color: #1A1208;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }

    /* Smooth animations */
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative bg-[#1A1208] min-h-screen">
        {transitioning && (
          <div className="page-exit">
            {currentStep === 'video1' && <Video1Screen />}
            {currentStep === 'welcome' && <WelcomeScreen />}
            {currentStep === 'video2' && <Video2Screen />}
            {currentStep === 'features' && <FeaturesScreen />}
            {currentStep === 'video3' && <Video3Screen />}
            {currentStep === 'login' && <LoginScreen />}
          </div>
        )}
        
        <div className={`${transitioning ? 'hidden' : 'block'}`}>
          {currentStep === 'video1' && (
            <div className="page-enter">
              <Video1Screen />
            </div>
          )}
          
          {currentStep === 'welcome' && (
            <div className="page-enter">
              <WelcomeScreen />
            </div>
          )}
          
          {currentStep === 'video2' && (
            <div className="page-enter">
              <Video2Screen />
            </div>
          )}
          
          {currentStep === 'features' && (
            <div className="page-enter">
              <FeaturesScreen />
            </div>
          )}
          
          {currentStep === 'video3' && (
            <div className="page-enter">
              <Video3Screen />
            </div>
          )}
          
          {currentStep === 'login' && (
            <div className="page-enter">
              <LoginScreen />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LuxuryHotelBooking;