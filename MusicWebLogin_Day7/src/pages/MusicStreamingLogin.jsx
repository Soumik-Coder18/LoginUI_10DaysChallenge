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
  faVolumeUp,
  faVolumeMute,
  faMusic,
  faHeadphones,
  faWaveSquare,
  faUser,
  faCheck,
  faShieldAlt,
  faMobileAlt,
  faLaptop,
  faGlobe,
  faHeart,
  faCompactDisc,
  faRadio,
  faPodcast,
  faSearch,
  faHome,
  faDownload,
  faCrown,
  faStar,
  faFire,
  faMoon,
  faSun,
  faSeedling,
  faDumbbell,
  faGraduationCap,
  faGlassCheers,
  faCloud,
  faWifi,
  faInfinity,
  faCheckCircle,
  faRocket,
  faMicrophone,
  faSatelliteDish,
  faGem,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

const MusicStreamingLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [transitioning, setTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const musicVideos = [
    'https://videos.pexels.com/video-files/6878108/6878108-uhd_2560_1440_30fps.mp4',
    'https://videos.pexels.com/video-files/7578559/7578559-uhd_2560_1440_25fps.mp4',
    'https://videos.pexels.com/video-files/7578555/7578555-uhd_2560_1440_25fps.mp4'
  ];

  const videoRefs = useRef([]);
  const canvasRef = useRef(null);

  const theme = {
    primary: '#1DB954',
    secondary: '#191414',
    accent: '#1ED760',
    dark: '#000000',
    light: '#FFFFFF',
    gray: '#B3B3B3',
    darkGray: '#535353'
  };

  const features = [
    {
      icon: faMusic,
      title: '100M+ Songs',
      description: 'World\'s largest music catalog',
      stat: 'Always growing'
    },
    {
      icon: faDownload,
      title: 'Offline Mode',
      description: 'Listen anywhere, anytime',
      stat: 'Unlimited downloads'
    },
    {
      icon: faPodcast,
      title: 'Exclusive Podcasts',
      description: 'Original content & shows',
      stat: '8M+ episodes'
    },
    {
      icon: faRadio,
      title: 'Smart Recommendations',
      description: 'AI-powered personalization',
      stat: '99% accurate'
    }
  ];

  const playlists = [
    {
      name: 'Chill Vibes',
      color: 'from-blue-500 to-purple-600',
      icon: faMoon,
      songs: '324 songs'
    },
    {
      name: 'Workout',
      color: 'from-red-500 to-orange-600',
      icon: faDumbbell,
      songs: '287 songs'
    },
    {
      name: 'Focus Flow',
      color: 'from-green-500 to-blue-600',
      icon: faGraduationCap,
      songs: '156 songs'
    },
    {
      name: 'Party Mix',
      color: 'from-purple-500 to-pink-600',
      icon: faGlassCheers,
      songs: '198 songs'
    }
  ];

  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => transitionToStep('hero'), 3500);
    const timer2 = setTimeout(() => transitionToStep('features'), 11000);
    const timer3 = setTimeout(() => transitionToStep('login'), 18000);

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

  // Splash Screen
  const SplashScreen = () => (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
             style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
        <div className="space-y-12">
          {/* Enhanced Animated Logo */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto bg-gradient-to-br from-green-500 to-green-600 shadow-2xl shadow-green-500/30 animate-float">
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center border border-green-500/30">
                <FontAwesomeIcon 
                  icon={faWaveSquare} 
                  className="text-4xl text-green-400 animate-pulse"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl animate-ping-slow"></div>
          </div>

          <div className="space-y-8">
            <h1 className="text-7xl font-black text-white tracking-tight">
              <span className="bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
                WAVE
              </span>
              <span className="text-green-500">MUSIC</span>
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto rounded-full shadow-lg shadow-green-500/50"></div>
            <p className="text-xl text-gray-300 font-light tracking-wide animate-fade-in">
              Where Music Comes to Life
            </p>
          </div>

          {/* Enhanced Loading Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm">
                <div className="h-full bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-full animate-loading-bar"></div>
              </div>
              <div className="absolute -top-1 left-0 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Hero Section
  const HeroSection = () => (
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
          <source src={musicVideos[0]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-900/20 to-black/80"></div>
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-40 flex items-center justify-center min-h-screen px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-bold bg-green-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-3"></div>
                <FontAwesomeIcon icon={faCrown} className="mr-3 text-green-400" />
                PREMIUM STREAMING EXPERIENCE
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Elevate Your <br />
                <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent animate-gradient-x">
                  Sound Journey
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Immerse yourself in crystal-clear audio with personalized recommendations, 
                offline listening, and exclusive content curated just for you.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
              {[
                { value: '100M+', label: 'Songs', icon: faMusic },
                { value: '8M+', label: 'Podcasts', icon: faPodcast },
                { value: '500K+', label: 'Artists', icon: faUser },
                { value: '150+', label: 'Countries', icon: faGlobe }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-green-500/30 transition-all duration-500 group hover:scale-105">
                  <FontAwesomeIcon icon={stat.icon} className="text-green-400 text-xl mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-green-500/10">
              <div className="space-y-8">
                {/* Enhanced Now Playing Card */}
                <div className="bg-gradient-to-r from-green-600/20 to-green-400/10 rounded-3xl p-6 border border-green-500/30 backdrop-blur-sm">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/40">
                        <FontAwesomeIcon icon={faHeadphones} className="text-white text-2xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <FontAwesomeIcon icon={faPlay} className="text-white text-xs" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-1">Now Playing</div>
                      <div className="text-green-300 text-sm mb-2">Your Personalized Mix</div>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span>• 45 min remaining</span>
                        <span>• High Quality</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Playlist Grid with Icons */}
                <div className="grid grid-cols-2 gap-4">
                  {playlists.map((playlist, index) => (
                    <div 
                      key={index} 
                      className={`bg-gradient-to-br ${playlist.color} rounded-2xl p-4 aspect-square flex flex-col justify-between cursor-pointer group hover:scale-105 transition-all duration-500 backdrop-blur-sm relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="relative z-10">
                        <FontAwesomeIcon 
                          icon={playlist.icon} 
                          className="text-white/80 text-lg mb-2 group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="text-white font-bold text-sm mb-1">{playlist.name}</div>
                        <div className="text-white/60 text-xs">{playlist.songs}</div>
                      </div>
                      <div className="relative z-10 flex justify-end">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                          <FontAwesomeIcon icon={faPlay} className="text-white text-xs" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Features Section
  const FeaturesSection = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-green-900/10 to-purple-900/10 py-20">
      <div className="absolute inset-0 z-0">
        <video
          ref={el => videoRefs.current[1] = el}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={musicVideos[1]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/90"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-bold mb-6 bg-green-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/20">
            <FontAwesomeIcon icon={faStar} className="mr-3 text-green-400" />
            WHY MUSIC LOVERS CHOOSE WAVE
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            The Complete <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Music Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Everything you need to discover, stream, and share the music you love
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-black/50 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-green-500/40 transition-all duration-700 hover:transform hover:-translate-y-3 shadow-2xl shadow-black/50"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-green-500/30">
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 font-light">
                  {feature.description}
                </p>
                <div className="flex items-center text-green-400 text-sm font-medium">
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                  {feature.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-black/60 backdrop-blur-2xl rounded-3xl p-8 border border-green-500/30 shadow-2xl shadow-green-500/20 max-w-4xl mx-auto">
            <div className="text-left flex-1">
              <h3 className="text-2xl font-black text-white mb-3">
                Ready to Transform Your Music Experience?
              </h3>
              <p className="text-gray-300 font-light">
                Join millions of music lovers and start your free trial today
              </p>
            </div>
            
            <button 
              onClick={() => transitionToStep('login')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-2xl font-bold shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center space-x-3 group"
            >
              <span>Start Free Trial</span>
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col items-center mt-8 space-y-4">
            <p className="text-gray-400 text-sm font-light uppercase tracking-wider">
              Trusted by Music Lovers Worldwide
            </p>
            <div className="flex items-center justify-center space-x-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon 
                      key={j} 
                      icon={faStar} 
                      className="text-green-500 text-base animate-pulse"
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
    {/* Enhanced Background with Canvas Visualizer */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20"
    />
    
    {/* Enhanced Background Layers */}
    <div className="absolute inset-0 z-0">
      <video
        ref={el => videoRefs.current[2] = el}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover opacity-15"
      >
        <source src={musicVideos[2]} type="video/mp4" />
      </video>
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float-slow opacity-30"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mix-blend-soft-light filter blur-3xl animate-float-medium opacity-25"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-lime-500 to-green-500 rounded-full mix-blend-soft-light filter blur-3xl animate-float-fast opacity-20"></div>
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-green-900/30 to-black/95"></div>
      
      {/* Enhanced Floating Music Elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              fontSize: `${0.5 + Math.random() * 1}rem`
            }}
          >
            <FontAwesomeIcon 
              icon={[faMusic, faWaveSquare, faHeadphones, faCompactDisc][i % 4]} 
            />
          </div>
        ))}
      </div>
    </div>

    {/* Enhanced Video Controls */}
    <div className="absolute top-8 right-8 z-50 flex space-x-3">
      <button
        onClick={toggleMute}
        className="group relative w-12 h-12 bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-green-600/40 hover:border-green-500/60 transition-all duration-300 text-white hover:text-green-300 hover:scale-105 hover:bg-black/80 shadow-2xl shadow-green-500/20"
      >
        <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} className="text-base" />
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-black/90 px-3 py-1.5 rounded-lg whitespace-nowrap border border-green-500/30 backdrop-blur-sm">
          {isMuted ? 'Unmute Audio' : 'Mute Audio'}
        </div>
      </button>
    </div>

    {/* Enhanced Navigation */}
    <nav className="relative z-50 bg-black/70 backdrop-blur-2xl border-b border-green-600/30 shadow-2xl shadow-green-500/10">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/40 group-hover:shadow-green-500/60 transition-all duration-300 animate-glow">
                <div className="w-10 h-10 bg-black/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-green-500/30">
                  <FontAwesomeIcon icon={faWaveSquare} className="text-green-400 text-lg" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <FontAwesomeIcon icon={faCrown} className="text-white text-xs" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent tracking-tight">
                WAVE<span className="text-green-500">PREMIUM</span>
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-400 text-xs" />
                <p className="text-green-400 text-sm font-medium">Lossless Audio • Studio Quality</p>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Premium', 'Support', 'Download', 'Profile'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group text-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <FontAwesomeIcon icon={faRocket} className="text-green-300 text-sm" />
              <span className="text-green-200 text-sm font-semibold">PREMIUM</span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* Enhanced Main Content */}
    <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 xl:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
      {/* Enhanced Left Content */}
      <div className="space-y-12">
        <div className="space-y-8">
          <div className="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-bold bg-green-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm shadow-2xl shadow-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mr-3"></div>
            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-green-400" />
            ELITE MEMBER ACCESS
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Welcome to Your <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-200 bg-clip-text text-transparent animate-gradient-x">
              Premium Soundscape
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
            Experience crystal-clear, studio-quality audio with our advanced spatial sound technology. 
            Access millions of songs in lossless quality, exactly as the artists intended.
          </p>
        </div>

        {/* Enhanced Platform Stats */}
        <div className="grid grid-cols-2 gap-6 max-w-md">
          {[
            { value: '50M+', label: 'Premium Users', icon: faUser, color: 'from-green-500 to-emerald-500' },
            { value: '100M+', label: 'HD Songs', icon: faMusic, color: 'from-emerald-500 to-teal-500' },
            { value: '10M+', label: 'Artists', icon: faMicrophone, color: 'from-teal-500 to-green-500' },
            { value: '99.9%', label: 'Uptime', icon: faShieldAlt, color: 'from-lime-500 to-emerald-500' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-green-500/40 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon icon={stat.icon} className="text-white text-lg" />
              </div>
              <div className="text-2xl font-black text-green-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Device Support */}
        <div className="space-y-6">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Available Everywhere</p>
          <div className="flex space-x-6">
            {[
              { icon: faMobileAlt, label: 'Mobile', desc: 'iOS & Android' },
              { icon: faLaptop, label: 'Desktop', desc: 'Mac & Windows' },
              { icon: faGlobe, label: 'Web Player', desc: 'Any Browser' },
              { icon: faDownload, label: 'Offline', desc: 'Download & Go' }
            ].map((device, index) => (
              <div key={index} className="text-center group flex-1">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 hover:border-green-500/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-500/10">
                  <FontAwesomeIcon 
                    icon={device.icon} 
                    className="text-gray-400 group-hover:text-green-400 text-xl transition-colors duration-300" 
                  />
                </div>
                <div className="text-white text-sm font-semibold mb-1">{device.label}</div>
                <div className="text-gray-500 text-xs">{device.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Badges */}
        <div className="flex items-center space-x-6 pt-6 border-t border-green-600/20">
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon 
                key={i} 
                icon={faStar} 
                className="text-green-500 text-sm animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-gray-400 text-sm font-medium">
            Rated 4.8★ by 2M+ Music Lovers
          </div>
        </div>
      </div>

      {/* Enhanced Login Form */}
      <div className="relative flex justify-center items-center">
        {/* Premium Glow Effects */}
        <div className="absolute -inset-2 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-500/10 rounded-3xl blur-lg"></div>
        
        <div className="relative w-full max-w-md bg-black/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-green-500/30 border border-green-600/40 overflow-hidden">
          {/* Animated Header Bar */}
          <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 animate-gradient-x"></div>
          
          <div className="p-8">
            {/* Premium Header */}
            <div className="text-center mb-10">
              <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-green-600/30 to-emerald-600/20 flex items-center justify-center border border-green-600/40 shadow-2xl backdrop-blur-sm animate-glow">
                <FontAwesomeIcon icon={faSatelliteDish} className="text-2xl text-green-400" />
              </div>
              <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Premium Access
              </h3>
              <p className="text-gray-400 font-light">
                Enter your elite credentials
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-5">
                {/* Premium Email Field */}
                <div className="group">
                  <label className="block text-sm font-bold mb-3 text-gray-300 tracking-wider flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xs" />
                    <span>PREMIUM EMAIL</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-black/40 backdrop-blur-sm border-2 border-green-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-green-500/50 text-sm shadow-lg hover:shadow-xl"
                      placeholder="elite@wavepremium.com"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Premium Password Field */}
                <div className="group">
                  <label className="block text-sm font-bold mb-3 text-gray-300 tracking-wider flex items-center space-x-2">
                    <FontAwesomeIcon icon={faLock} className="text-green-500 text-xs" />
                    <span>SECURE PASSWORD</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-4 bg-black/40 backdrop-blur-sm border-2 border-green-600/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all duration-300 text-white placeholder-gray-500 group-hover:border-green-500/50 text-sm shadow-lg hover:shadow-xl pr-12"
                      placeholder="••••••••••••"
                      required
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Enhanced Options */}
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-5 h-5 bg-black/40 border-2 border-green-600/40 rounded-md group-hover:border-green-500/60 transition-colors duration-300 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xs opacity-0 transition-opacity duration-300" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Remember this device
                  </span>
                </label>
                <a 
                  href="#" 
                  className="text-sm font-bold text-green-400 hover:text-green-300 transition-colors duration-300 group"
                >
                  <span className="group-hover:underline">Secure Recovery</span>
                  <span className="block h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>

              {/* Premium Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-2xl hover:shadow-3xl shadow-green-600/40 hover:shadow-green-600/60 transform hover:-translate-y-1 hover:scale-105 text-white group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">VERIFYING ELITE ACCESS...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCrown} className="text-yellow-300" />
                      <span className="text-sm">ACCESS PREMIUM DASHBOARD</span>
                      <FontAwesomeIcon icon={faRocket} className="text-green-200" />
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Enhanced Social Login */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-4 text-gray-400 text-xs font-semibold">ELITE ACCESS</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center space-x-3 py-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm hover:border-green-500/30">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
                <span className="text-sm font-semibold group-hover:text-blue-400">Apple ID</span>
              </button>
              <button className="flex items-center justify-center space-x-3 py-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm hover:border-green-500/30">
                <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-lg"></div>
                <span className="text-sm font-semibold group-hover:text-green-400">Spotify</span>
              </button>
            </div>

            {/* Premium Sign Up */}
            <div className="text-center border-t border-green-600/20 pt-8">
              <p className="text-gray-400 text-sm mb-4">
                Ready for the ultimate audio experience?
              </p>
              <button className="w-full py-4 border border-green-500/30 text-green-300 hover:text-white hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 font-bold rounded-2xl flex items-center justify-center space-x-3 group backdrop-blur-sm">
                <FontAwesomeIcon icon={faGem} className="text-yellow-400" />
                <span>START PREMIUM TRIAL</span>
                <FontAwesomeIcon 
                  icon={faUserPlus} 
                  className="transform group-hover:translate-x-1 transition-transform duration-300" 
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Footer */}
    <div className="relative z-40 border-t border-green-600/20 mt-12">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm mb-4">
            <a href="#" className="hover:text-green-400 transition-colors duration-300 group">
              <span className="group-hover:underline">Privacy Shield</span>
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300 group">
              <span className="group-hover:underline">Elite Terms</span>
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300 group">
              <span className="group-hover:underline">Support</span>
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            © 2024 WavePremium. Elite audio experience.
          </p>
        </div>
      </div>
    </div>
  </div>
);

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
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #000000;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #1DB954 0%, #1ED760 100%);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #1ED760 0%, #1DB954 100%);
    }

    /* Smooth transitions */
    * {
      transition-property: color, background-color, border-color, transform, opacity, box-shadow, filter;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Enhanced animations */
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes float-slow {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      33% {
        transform: translateY(-15px) translateX(10px);
      }
      66% {
        transform: translateY(10px) translateX(-5px);
      }
    }

    @keyframes float-slower {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      25% {
        transform: translateY(-10px) translateX(-8px);
      }
      50% {
        transform: translateY(5px) translateX(12px);
      }
      75% {
        transform: translateY(-5px) translateX(-10px);
      }
    }

    @keyframes gradient-x {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes loading-bar {
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

    @keyframes ping-slow {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      75%, 100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 12s ease-in-out infinite;
    }

    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }

    .animate-loading-bar {
      animation: loading-bar 2s ease-in-out infinite;
    }

    .animate-ping-slow {
      animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out;
    }

    /* Focus states */
    input:focus {
      box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.1);
      border-color: #1DB954;
    }

    /* Backdrop blur support */
    @supports (backdrop-filter: blur(10px)) {
      .backdrop-blur-sm {
        backdrop-filter: blur(8px);
      }
      .backdrop-blur-lg {
        backdrop-filter: blur(16px);
      }
      .backdrop-blur-xl {
        backdrop-filter: blur(24px);
      }
      .backdrop-blur-2xl {
        backdrop-filter: blur(40px);
      }
    }

    /* Selection styles */
    ::selection {
      background: rgba(29, 185, 84, 0.3);
      color: white;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative min-h-screen overflow-hidden bg-black">
        {/* Fixed transition issue - only show current step */}
        <div className={`${transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-800`}>
          {currentStep === 'splash' && <SplashScreen />}
          {currentStep === 'hero' && <HeroSection />}
          {currentStep === 'features' && <FeaturesSection />}
          {currentStep === 'login' && <LoginScreen />}
        </div>
      </div>
    </>
  );
};

export default MusicStreamingLogin;