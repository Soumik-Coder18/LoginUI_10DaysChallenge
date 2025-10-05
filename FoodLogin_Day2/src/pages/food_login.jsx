import React, { useState, useRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash,
  faSignInAlt,
  faUserPlus,
  faCheck,
  faGem,
  faShieldAlt,
  faClock,
  faUtensils,
  faFire,
  faStar,
  faHeart,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGoogle, 
  faApple
} from '@fortawesome/free-brands-svg-icons';

// Import Lottie files from assets
import BurgerLottie from '../assets/BurgerLottie.json';
import FoodDeliveryLottie from '../assets/FoodDeliveryLottie.json';
import FoodAlignLeft from '../assets/FoodAlignLeft.jpeg';
import CookingAnimation from '../assets/CookingAnimation.json';

const ProfessionalFoodLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [currentStep, setCurrentStep] = useState('loading');
  const [transitioning, setTransitioning] = useState(false);
  const [particleType, setParticleType] = useState('floating');
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const audioRef = useRef(null);

  // Subtle sound effects
  useEffect(() => {
    audioRef.current = new Audio();
    // In a real app, you'd add subtle hover/click sounds
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Enhanced loading with progress simulation
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 150));
    }
    
    setIsLoading(false);
    console.log('Login attempted with:', { email, password });
  };

  // Revolutionary step transitions with dynamic timing
  useEffect(() => {
    const transitionToStep = (nextStep, delay = 0, particleEffect = 'floating') => {
      setTimeout(() => {
        setTransitioning(true);
        setParticleType(particleEffect);
        setTimeout(() => {
          setCurrentStep(nextStep);
          setTransitioning(false);
        }, 1200);
      }, delay);
    };

    const transitionSequence = [
      { step: 'animation', delay: 3000, effect: 'spiral' },
      { step: 'welcome', delay: 2500, effect: 'wave' },
      { step: 'login', delay: 2000, effect: 'gentle' }
    ];

    if (currentStep === 'loading') {
      transitionToStep('animation', 3500, 'spiral');
    } else {
      const currentIndex = transitionSequence.findIndex(item => item.step === currentStep);
      if (currentIndex < transitionSequence.length - 1) {
        const next = transitionSequence[currentIndex + 1];
        transitionToStep(next.step, next.delay, next.effect);
      }
    }
  }, [currentStep]);

  // Advanced particle system with multiple behaviors - Updated Colors
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: 0, y: 0, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      initParticles();
    };

    class Particle {
      constructor() {
        this.type = particleType;
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width / 2;
        this.y = Math.random() * canvas.height / 2;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.baseSize = this.size;
        
        // Updated food-themed colors: red, yellow, orange
        const foodColors = [
          { r: 220, g: 38, b: 38 },    // red-600 - Tomato Red
          { r: 234, g: 88, b: 12 },    // orange-600 - Orange
          { r: 245, g: 158, b: 11 },   // amber-500 - Golden Yellow
          { r: 202, g: 138, b: 4 },    // yellow-600 - Mustard
          { r: 194, g: 65, b: 12 },    // red-800 - Deep Red
          { r: 251, g: 191, b: 36 },   // amber-400 - Light Golden
          { r: 217, g: 119, b: 6 },    // orange-500 - Carrot Orange
          { r: 180, g: 83, b: 9 }      // orange-700 - Spicy Orange
        ];
        
        const color = foodColors[Math.floor(Math.random() * foodColors.length)];
        this.color = `rgba(${color.r}, ${color.g}, ${color.b}, ${this.alpha})`;
        
        this.waveOffset = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Different behaviors based on particle type
        switch(particleType) {
          case 'spiral':
            this.waveOffset += 0.02;
            const spiralRadius = 0.5 + Math.sin(this.waveOffset) * 0.3;
            this.x += Math.cos(this.waveOffset) * spiralRadius;
            this.y += Math.sin(this.waveOffset) * spiralRadius;
            break;
            
          case 'wave':
            this.waveOffset += 0.015;
            this.x += this.speedX;
            this.y += this.speedY + Math.sin(this.waveOffset + this.x * 0.01) * 0.5;
            break;
            
          case 'gentle':
            this.waveOffset += 0.008;
            this.x += this.speedX;
            this.y += this.speedY;
            break;
            
          default: // floating
            this.waveOffset += 0.01;
            this.x += this.speedX + Math.sin(this.waveOffset) * 0.2;
            this.y += this.speedY + Math.cos(this.waveOffset) * 0.2;
        }

        // Mouse interaction
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const force = (100 - distance) / 100;
            this.x += dx * force * 0.02;
            this.y += dy * force * 0.02;
          }
        }

        // Pulsing effect
        this.pulseOffset += this.pulseSpeed;
        this.size = this.baseSize * (1 + Math.sin(this.pulseOffset) * 0.3);

        // Boundary wrapping with buffer
        if (this.x > canvas.width / 2 + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width / 2 + 50;
        if (this.y > canvas.height / 2 + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height / 2 + 50;

        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Create sophisticated gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
        const rgbaMatch = this.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([0-9.]*)\)/);
        const r = rgbaMatch ? rgbaMatch[1] : 255;
        const g = rgbaMatch ? rgbaMatch[2] : 0;
        const b = rgbaMatch ? rgbaMatch[3] : 0;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
        gradient.addColorStop(1, this.color);
        
        ctx.fillStyle = gradient;
        
        // Dynamic shapes based on size and type
        if (this.size > 2.5) {
          ctx.beginPath();
          const sides = this.size > 3.5 ? 6 : 5;
          for (let i = 0; i < sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            const x = this.size * Math.cos(angle);
            const y = this.size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        }
        
        ctx.fill();
        ctx.restore();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = window.innerWidth < 768 ? 60 : 120;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
      
      // Updated background gradient with food colors
      const gradient = ctx.createLinearGradient(0, 0, canvas.width / 2, canvas.height / 2);
      gradient.addColorStop(0, 'rgba(254, 252, 232, 0.4)'); // yellow-50
      gradient.addColorStop(0.3, 'rgba(255, 251, 235, 0.3)'); // amber-50
      gradient.addColorStop(0.7, 'rgba(255, 247, 237, 0.2)'); // orange-50
      gradient.addColorStop(1, 'rgba(255, 237, 213, 0.1)'); // orange-100
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Advanced connection system with food colors
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = 0.2 * (1 - distance/150);
            const lineGradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            lineGradient.addColorStop(0, `rgba(220, 38, 38, ${opacity})`); // red-600
            lineGradient.addColorStop(0.5, `rgba(234, 88, 12, ${opacity})`); // orange-600
            lineGradient.addColorStop(1, `rgba(245, 158, 11, ${opacity})`); // amber-500
            
            ctx.beginPath();
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 0.5 + (1 - distance/150) * 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleType]);

  // Revolutionary Loading Screen - Updated Colors
  const LoadingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 text-center">
        <div className="relative mb-8">
          <div className="w-40 h-40 bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 rounded-3xl mx-auto flex items-center justify-center shadow-2xl animate-float">
            <Player
              autoplay
              loop
              src={CookingAnimation}
              style={{ height: '80px', width: '80px', filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-br from-red-500 to-amber-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
              Preparing Your Culinary Journey
            </h2>
            <p className="text-amber-700 font-light">Loading delicious experience...</p>
          </div>
          
          <div className="w-64 h-2 bg-amber-200 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-full animate-progress"
              style={{ animationDuration: '2s' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Animation Screen - Updated Colors
  const AnimationScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="relative mb-12">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <Player
                autoplay
                loop
                src={BurgerLottie}
                style={{ height: '200px', width: '200px' }}
                className="drop-shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-amber-500 rounded-full blur-2xl opacity-20 -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-16 bg-gradient-to-b from-red-500 to-amber-500 rounded-full animate-wave"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-4 tracking-tighter">
                <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  EPICUREAN
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-amber-800 font-light max-w-2xl mx-auto leading-relaxed">
                Where <span className="text-red-600 font-semibold">culinary artistry</span> meets digital excellence
              </p>
              
              <div className="flex justify-center items-center space-x-6 text-sm text-amber-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Premium Ingredients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <span>Master Chefs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Welcome Screen - Updated Colors
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <div className="relative mb-12">
            <div className="w-64 h-64 mx-auto mb-8">
              <Player
                autoplay
                loop
                src={FoodDeliveryLottie}
                style={{ height: '250px', width: '250px' }}
                className="drop-shadow-xl animate-float"
              />
            </div>
            
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Welcome to <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Epicurean</span>
              </h1>
              
              <p className="text-2xl text-amber-800 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
                Experience the future of gourmet dining with our revolutionary platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { 
                  icon: faGem, 
                  text: 'Premium Excellence', 
                  desc: 'Michelin-star quality ingredients', 
                  gradient: 'from-red-500 to-orange-500'
                },
                { 
                  icon: faRocket, 
                  text: 'Instant Delivery', 
                  desc: '20 minutes or free', 
                  gradient: 'from-orange-500 to-amber-500'
                },
                { 
                  icon: faShieldAlt, 
                  text: 'Blockchain Secure', 
                  desc: 'Military-grade encryption', 
                  gradient: 'from-red-600 to-orange-600'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-100 transition-all duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon 
                      icon={feature.icon} 
                      className="text-2xl text-white"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.text}
                  </h3>
                  <p className="text-amber-700 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Revolutionary Login Screen - Updated Colors
  const LoginScreen = () => (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${FoodAlignLeft})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-800/50 to-red-900/30"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {/* Left Section - Enhanced with Food Colors */}
        <div className="flex items-center justify-start px-8 lg:px-16 xl:px-24 py-12 text-white">
          <div className="max-w-2xl space-y-10">
            <div className="space-y-6">
              <h1 className="text-7xl font-black leading-tight drop-shadow-2xl">
                Culinary
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h1>
              <p className="text-xl font-light leading-relaxed text-amber-100 max-w-lg">
                Join the future of dining where every meal is a masterpiece and every delivery is an experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { number: '50K+', label: 'Food Lovers', icon: faHeart },
                { number: '500+', label: 'Master Chefs', icon: faStar },
                { number: '4.9★', label: 'Rating', icon: faFire },
                { number: '15min', label: 'Avg. Delivery', icon: faRocket },
              ].map((item, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="text-red-300 text-sm" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-300">{item.number}</h3>
                  </div>
                  <p className="text-sm text-amber-200 font-light">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Menu
              </button>
              <button className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 text-white rounded-xl font-semibold backdrop-blur-lg transition-all duration-300 transform hover:scale-105 border border-amber-500/20">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Login Section with Food Colors */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-amber-50/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 border border-amber-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-red-400/10 to-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-orange-400/10 to-yellow-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <FontAwesomeIcon icon={faUtensils} className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl font-black text-red-600 mb-1">Welcome Back!</h2>
              <p className="text-amber-700 text-lg">
                Join our culinary revolution
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="relative">
                  <label className="text-sm font-semibold text-amber-800 block mb-3">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-3 bg-white border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 outline-none text-amber-900 placeholder-amber-400 transition-all duration-300 shadow-lg"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <FontAwesomeIcon icon={faEnvelope} className="text-amber-400" />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className="text-sm font-semibold text-amber-800 block mb-3">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-6 py-3 bg-white border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-200 focus:border-amber-400 outline-none text-amber-900 placeholder-amber-400 transition-all duration-300 shadow-lg"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-amber-500 border-amber-300 rounded focus:ring-amber-400" />
                  <span className="text-amber-700">Remember me</span>
                </label>
                <a href="#" className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white py-3 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faSignInAlt} />
                      <span>Sign In to Epicurean</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            <div className="mt-8 relative z-10">
              <div className="flex items-center justify-center space-x-4 text-amber-600 text-sm mb-6">
                <div className="flex-grow border-t border-amber-200"></div>
                <span className="px-4 text-amber-500 font-medium">OR CONTINUE WITH</span>
                <div className="flex-grow border-t border-amber-200"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    icon: faGoogle, 
                    name: 'Google',
                    class: 'bg-white hover:bg-amber-50 text-amber-700 border-2 border-amber-200 hover:border-red-200'
                  },
                  { 
                    icon: faApple, 
                    name: 'Apple',
                    class: 'bg-amber-900 hover:bg-amber-800 text-white border-2 border-amber-900 hover:border-amber-800'
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center space-x-3 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl ${social.class}`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                    <span className="text-sm">{social.name}</span>
                  </button>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-amber-700">
                  New to Epicurean?{' '}
                  <a href="#" className="text-red-600 hover:text-red-700 font-bold transition-colors duration-200">
                    Create Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes wave {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.3); }
    }
    
    @keyframes progress {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fade-out-down {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(30px);
      }
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-wave {
      animation: wave 1.5s ease-in-out infinite;
    }
    
    .animate-progress {
      animation: progress 2s ease-in-out infinite;
    }
    
    .page-enter {
      animation: fade-in-up 1s ease-out forwards;
    }
    
    .page-exit {
      animation: fade-out-down 1s ease-in forwards;
    }
    
    .min-h-screen {
      min-height: 100vh;
      height: 100vh;
      max-height: 100vh;
    }
    
    /* Custom scrollbar with food colors */
    ::-webkit-scrollbar {
      width: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: #fef3c7;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #f59e0b;
      border-radius: 3px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #dc2626;
    }
    
    /* Selection color with food theme */
    ::selection {
      background: #fed7aa;
      color: #c2410c;
    }
    
    /* Smooth transitions for all interactive elements */
    * {
      transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      {transitioning && <LoadingScreen />}
      
      <div className={`${transitioning ? 'hidden' : 'block'}`}>
        {currentStep === 'loading' && (
          <div className="page-enter">
            <LoadingScreen />
          </div>
        )}
        
        {currentStep === 'animation' && (
          <div className="page-enter">
            <AnimationScreen />
          </div>
        )}
        
        {currentStep === 'welcome' && (
          <div className="page-enter">
            <WelcomeScreen />
          </div>
        )}
        
        {currentStep === 'login' && (
          <div className="page-enter">
            <LoginScreen />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfessionalFoodLogin;