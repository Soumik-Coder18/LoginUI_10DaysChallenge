import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faArrowRight,
  faDumbbell,
  faHeartPulse,
  faRunning,
  faFire,
  faBolt,
  faShieldHalved,
  faUser,
  faStar,
  faCheckCircle,
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
  faUserShield,
  faCheck,
  faUserPlus,
  faChartLine,
  faUsers,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const EliteFitnessLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [transitioning, setTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  const fitnessVideos = [
    'https://videos.pexels.com/video-files/4754030/4754030-uhd_2732_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/5319755/5319755-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/5319099/5319099-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/32239229/13749262_2560_1440_24fps.mp4'
  ];

  const theme = {
    primary: '#DC2626', // Red-600
    secondary: '#000000', // Black
    accent: '#EF4444', // Red-500
    dark: '#0A0A0A', // Dark black
    light: '#FFFFFF',
    gray: '#6B7280',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #000000 100%)',
    premium: 'linear-gradient(135deg, #DC2626 0%, #7F1D1D 50%, #000000 100%)'
  };

  const features = [
    {
      icon: faDumbbell,
      title: 'Elite Equipment',
      description: 'State-of-the-art fitness equipment from leading brands',
      stat: '100+ Machines'
    },
    {
      icon: faHeartPulse,
      title: 'Health Monitoring',
      description: 'Advanced biometric tracking and health analytics',
      stat: '24/7 Tracking'
    },
    {
      icon: faRunning,
      title: 'Expert Training',
      description: 'Certified personal trainers and customized programs',
      stat: '50+ Trainers'
    },
    {
      icon: faShieldHalved,
      title: 'Premium Security',
      description: 'Secure facilities with 24/7 surveillance',
      stat: '100% Secure'
    }
  ];

  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => transitionToStep('intro'), 5000);
    const timer2 = setTimeout(() => transitionToStep('features'), 15000);
    const timer3 = setTimeout(() => transitionToStep('login'), 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach(video => {
      if (video) video.muted = !isMuted;
    });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    videoRefs.current.forEach(video => {
      if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
      }
    });
  };

  // Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video
          ref={el => videoRefs.current[0] = el}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={fitnessVideos[0]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black"></div>
      </div>

      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <div className="space-y-12">
          {/* Premium Logo */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center mx-auto border-2 border-red-600/50 shadow-2xl shadow-red-600/20">
              <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center border border-red-600/30">
                <FontAwesomeIcon icon={faBolt} className="text-4xl text-red-600" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <FontAwesomeIcon icon={faFire} className="text-xs text-white" />
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl font-black bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent tracking-tight">
              ELITE<span className="text-red-600">FIT</span>
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full shadow-lg shadow-red-600/50"></div>
            <p className="text-xl text-gray-300 font-light tracking-wider uppercase">
              Premium Fitness Experience
            </p>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -top-1 left-0 w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-600/50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 // Intro Screen - Enhanced Modern Version
const IntroScreen = () => (
  <div className="min-h-screen relative overflow-hidden bg-black">
    {/* Enhanced Background with Multiple Layers */}
    <div className="absolute inset-0 z-0">
      <video
        ref={el => videoRefs.current[1] = el}
        autoPlay
        muted={isMuted}
        loop
          playsInline
        className="w-full h-full object-cover opacity-30"
      >
        <source src={fitnessVideos[1]} type="video/mp4" />
      </video>
      
      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>

    {/* Floating Particles */}
    <div className="absolute inset-0 z-10 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-red-600/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>

    <div className="relative z-40 flex items-center justify-center min-h-screen px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Enhanced Stats Section */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black/80 backdrop-blur-2xl rounded-3xl p-8 border border-red-600/30 shadow-2xl shadow-red-600/10">
            <div className="grid grid-cols-2 gap-5">
              {[
                { number: '2K+', label: 'Active Members', sublabel: 'Elite Community', icon: faUsers },
                { number: '98%', label: 'Success Rate', sublabel: 'Proven Results', icon: faChartLine },
                { number: '24/7', label: 'Access', sublabel: 'Always Open', icon: faClock },
                { number: '5.0', label: 'Rating', sublabel: 'Premium Service', icon: faStar }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-gradient-to-br from-red-600/5 to-red-600/10 rounded-2xl border border-red-600/20 hover:border-red-600/40 hover:bg-red-600/15 transition-all duration-500 group/card hover:scale-105"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-red-600/20 rounded-xl">
                      <FontAwesomeIcon icon={stat.icon} className="text-red-400 text-sm" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-white text-sm mb-1 tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400 font-light">{stat.sublabel}</div>
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-red-600/20">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Community Growth</span>
                <span>+12% this month</span>
              </div>
              <div className="w-full bg-red-600/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="space-y-10">
          <div className="space-y-8">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-red-600/20 to-red-400/20 text-red-400 border border-red-600/40 shadow-lg shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-300 hover:scale-105 group">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-ping"></div>
              <FontAwesomeIcon icon={faBolt} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              ELITE FITNESS NETWORK
            </div>
            
            {/* Enhanced Headline */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-x">
                  Body,
                </span>{' '}
                <br />
                Elevate Your{' '}
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-gradient-x">
                  Life
                </span>
              </h2>
              
              <p className="text-xl leading-relaxed text-gray-300 font-light max-w-2xl">
                Join the most exclusive fitness community where cutting-edge technology meets 
                professional training. Achieve your goals with our state-of-the-art facilities 
                and expert guidance.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-bold shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transform hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center space-x-3">
                <span>Start Free Trial</span>
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group px-10 py-5 bg-black/40 backdrop-blur-sm text-white rounded-2xl font-bold border border-red-600/40 hover:border-red-600/60 hover:bg-red-600/10 transition-all duration-500 flex items-center justify-center space-x-3">
              <span>View Facilities</span>
              <FontAwesomeIcon icon={faPlay} className="text-red-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-red-600/20">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-black flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-white font-semibold">500+</span> members joined this week
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  // Features Screen
  const FeaturesScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-black py-12">
      {/* Enhanced Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          <source src={fitnessVideos[3]} type="video/mp4" />
        </video>
        
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-red-900/40 to-black/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/70 to-black"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-400/10 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 rounded-2xl text-sm font-bold mb-4 bg-gradient-to-r from-red-600/30 to-red-600/10 text-red-300 border border-red-600/40 shadow-lg shadow-red-600/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping mr-3"></div>
            <FontAwesomeIcon icon={faDumbbell} className="mr-3 text-red-400" />
            ELITE PREMIUM FEATURES
          </div>
          
          <h2 className="text-4xl font-black mb-4 text-white leading-tight">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent animate-pulse">
              Dominate Your Goals
            </span>
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-300 font-light leading-relaxed">
            World-class facilities, cutting-edge technology, and premium services designed for 
            <span className="text-red-400 font-semibold"> maximum performance</span> and 
            <span className="text-red-400 font-semibold"> exceptional results</span>
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-red-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-black/70 backdrop-blur-xl rounded-3xl p-4 border border-red-600/30 hover:border-red-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 h-full overflow-hidden">
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Feature Icon */}
                <div className="relative z-10 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 shadow-2xl shadow-red-600/40 group-hover:shadow-red-600/60 transition-all duration-500 group-hover:scale-110">
                      <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <FontAwesomeIcon icon={faBolt} className="text-white text-xs" />
                    </div>
                  </div>
                </div>
                
                {/* Feature Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-lg font-black text-white group-hover:text-red-100 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced Stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-red-600/20">
                    <div className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-bold bg-red-600/20 text-red-300 border border-red-600/30 group-hover:bg-red-600/30 group-hover:border-red-500/40 transition-all duration-300">
                      <FontAwesomeIcon icon={faChartLine} className="mr-2 text-red-400" />
                      {feature.stat}
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <FontAwesomeIcon icon={faArrowRight} className="text-red-400 text-base" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-black/60 backdrop-blur-xl rounded-3xl p-4 border border-red-600/30 shadow-2xl shadow-red-600/20">
            <div className="text-left flex-1">
              <h3 className="text-xl font-black text-white mb-1">
                Ready to <span className="text-red-400">Transform</span> Your Fitness?
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Join thousands of elite athletes achieving their goals
              </p>
            </div>
            
            <div className="flex gap-2">
              <button className="px-5 py-2 rounded-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-300 transform hover:-translate-y-1 text-sm">
                Start Free Trial
              </button>
              <button className="px-5 py-2 rounded-2xl font-bold border-2 border-red-600/40 hover:border-red-500/60 bg-black/40 text-white hover:text-red-300 transition-all duration-300 transform hover:-translate-y-1 text-sm">
                View All Features
              </button>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-col items-center mt-6 space-y-2">
            <p className="text-gray-400 text-xs font-light uppercase tracking-wider">
              Trusted by Elite Athletes Worldwide
            </p>
            <div className="flex items-center justify-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon 
                      key={j} 
                      icon={faStar} 
                      className="text-red-500 text-base animate-pulse"
                      style={{ animationDelay: `${j * 0.1}s` }}
                    />
                  ))}
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
  <div className="min-h-screen relative overflow-hidden bg-black">
    {/* Enhanced Background with Multiple Layers */}
    <div className="absolute inset-0 z-0">
      <video
        ref={el => videoRefs.current[2] = el}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover scale-105"
      >
        <source src={fitnessVideos[2]} type="video/mp4" />
      </video>
      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-red-900/30 to-black/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>

    {/* Enhanced Video Controls */}
    <div className="absolute top-8 right-8 z-50 flex space-x-3">
      <button
        onClick={toggleMute}
        className="group relative w-10 h-10 bg-black/40 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-red-600/40 hover:border-red-500/60 transition-all duration-300 text-white hover:text-red-300 hover:scale-105 hover:bg-black/60"
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} className="text-base" />
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap">
          {isMuted ? 'Unmute' : 'Mute'}
        </div>
      </button>
      <button
        onClick={togglePlay}
        className="group relative w-10 h-10 bg-black/40 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-red-600/40 hover:border-red-500/60 transition-all duration-300 text-white hover:text-red-300 hover:scale-105 hover:bg-black/60"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-base" />
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black/80 px-2 py-1 rounded whitespace-nowrap">
          {isPlaying ? 'Pause' : 'Play'}
        </div>
      </button>
    </div>

    {/* Enhanced Navigation */}
    <nav className="relative z-50 bg-black/60 backdrop-blur-2xl border-b border-red-600/30">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/40 group-hover:shadow-red-600/60 transition-all duration-300">
                <div className="w-8 h-8 bg-black/80 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <FontAwesomeIcon icon={faBolt} className="text-red-500 text-base" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <FontAwesomeIcon icon={faFire} className="text-white text-xs" />
              </div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent tracking-tight">
              ELITE<span className="text-red-500">FIT</span>
            </span>
          </div>

          {/* Enhanced Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {['Programs', 'Trainers', 'Facilities', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group text-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="px-6 py-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-sm">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Enhanced Main Content */}
    <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 xl:grid-cols-2 gap-20 items-center min-h-[calc(100vh-80px)]">
      {/* Enhanced Content Side */}
      <div className="space-y-12">
        <div className="space-y-8">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-2xl text-xs font-bold bg-gradient-to-r from-red-600/30 to-red-600/10 text-red-300 border border-red-600/40 shadow-lg shadow-red-600/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping mr-2"></div>
            <FontAwesomeIcon icon={faBolt} className="mr-2 text-red-400 text-sm" />
            PREMIUM MEMBER ACCESS
          </div>

          {/* Enhanced Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black leading-tight text-white">
              Welcome to <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-300 bg-clip-text text-transparent animate-pulse">Elite Performance</span>
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-300 font-light max-w-2xl">
              Access your personalized fitness dashboard, track your progress in real-time, 
              and connect with world-class trainers in our exclusive fitness ecosystem.
            </p>
          </div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
          {[
            { icon: faDumbbell, text: 'Personal Training', premium: true, desc: '1-on-1 expert guidance' },
            { icon: faHeartPulse, text: 'Health Analytics', premium: true, desc: 'Real-time metrics' },
            { icon: faRunning, text: 'Group Classes', premium: true, desc: 'Live & recorded sessions' },
            { icon: faShieldHalved, text: 'Secure Access', premium: true, desc: 'Encrypted data protection' }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative p-4 rounded-3xl bg-black/40 backdrop-blur-sm border border-red-600/30 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:bg-black/60 cursor-pointer overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/30 to-red-600/10 flex items-center justify-center group-hover:from-red-600/40 group-hover:to-red-600/20 transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className="text-lg text-red-400" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-white text-base">{item.text}</span>
                    {item.premium && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                        ELITE
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-light">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="space-y-4">
          <p className="text-gray-400 text-xs font-light">
            Trusted by 50,000+ elite athletes worldwide
          </p>
        </div>
      </div>

      {/* Enhanced Login Form */}
      <div className="relative flex justify-center items-center">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-400/10 rounded-3xl blur-xl"></div>
        
        <div className="relative w-full max-w-md mx-auto bg-black/70 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-red-600/20 border border-red-600/30 overflow-hidden">
          {/* Animated Header Bar */}
          <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700 animate-gradient-x"></div>
          
          <div className="p-8">
            {/* Enhanced Header */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-red-600/30 to-red-600/10 flex items-center justify-center border border-red-600/30 shadow-lg">
                <FontAwesomeIcon icon={faUserShield} className="text-2xl text-red-400" />
              </div>
              <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Member Login
              </h3>
              <p className="text-gray-400 font-light text-base">
                Access your exclusive fitness dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-7">
              <div className="space-y-5">
                {/* Enhanced Email Field */}
                <div className="group">
                  <label className="block text-xs font-bold mb-2 text-gray-300 tracking-wider">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-red-500" />
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border-2 border-red-600/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-red-500/50 text-sm shadow-sm hover:shadow-lg hover:border-red-500"
                      placeholder="member@elitefit.com"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="text-gray-400 group-hover:text-red-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Enhanced Password Field */}
                <div className="group">
                  <label className="block text-xs font-bold mb-2 text-gray-300 tracking-wider">
                    <FontAwesomeIcon icon={faLock} className="mr-2 text-red-500" />
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border-2 border-red-600/30 rounded-2xl focus:outline-none focus:ring-4 focus:ring-red-500/30 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-red-500/50 text-sm shadow-sm hover:shadow-lg hover:border-red-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Options */}
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-4 h-4 bg-black/40 border-2 border-red-600/40 rounded-md group-hover:border-red-500/60 transition-colors duration-300 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheck} className="text-red-500 text-xs opacity-0 transition-opacity duration-300" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Remember me</span>
                </label>
                <a 
                  href="#" 
                  className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors duration-300 group"
                >
                  Forgot password?
                  <span className="block h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>

              {/* Enhanced Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl hover:shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transform hover:-translate-y-1 hover:scale-105 text-white group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">ACCESSING DASHBOARD...</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm">ACCESS DASHBOARD</span>
                    <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-1 transition-transform duration-300 text-sm" />
                  </>
                )}
              </button>
            </form>

            {/* Enhanced Signup Section */}
            <div className="text-center pt-8 border-t border-red-600/20 mt-8">
              <p className="text-gray-400 mb-4 font-light text-base">
                New to EliteFit?
              </p>
              <button 
                className="mx-auto w-full min-w-[160px] max-w-xs py-2.5 rounded-2xl font-bold border-2 transition-all duration-300 flex items-center justify-center space-x-3 group bg-black/40 border-red-600/40 hover:border-red-500/60 hover:bg-red-600/10 text-gray-300 hover:text-red-300 transform hover:-translate-y-1 text-sm shadow-sm hover:shadow-lg"
              >
                <FontAwesomeIcon icon={faUserPlus} className="transform group-hover:scale-110 transition-transform duration-300 text-base" />
                <span>START YOUR ELITE JOURNEY</span>
                <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100 text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  const styles = `
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

    /* Premium scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0A0A0A;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #DC2626 0%, #7F1D1D 100%);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #EF4444 0%, #DC2626 100%);
    }

    /* Smooth transitions */
    * {
      transition-property: color, background-color, border-color, transform, opacity, box-shadow;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    body {
      background: #0A0A0A;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* Page transitions */
    .fitness-enter {
      animation: fitness-fade-in 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    .fitness-exit {
      animation: fitness-fade-out 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    @keyframes fitness-fade-in {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes fitness-fade-out {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
    }

    /* Premium focus styles */
    input:focus {
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
      border-color: #DC2626;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Transition Overlay */}
        <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-1000 pointer-events-none ${
          transitioning ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <div className={`${transitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
          {currentStep === 'splash' && <SplashScreen />}
          {currentStep === 'intro' && <IntroScreen />}
          {currentStep === 'features' && <FeaturesScreen />}
          {currentStep === 'login' && <LoginScreen />}
        </div>
      </div>
    </>
  );
};

export default EliteFitnessLogin;