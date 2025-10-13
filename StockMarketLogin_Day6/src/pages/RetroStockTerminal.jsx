import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faLock,
  faEye,
  faEyeSlash,
  faSignInAlt,
  faChartLine,
  faDollarSign,
  faExchangeAlt,
  faDatabase,
  faNetworkWired,
  faShieldAlt,
  faBell,
  faCog,
  faHistory,
  faArrowUp,
  faCircle,
  faSearch,
  faGlobe,
  faMobileAlt,
  faLaptop,
  faShield,
  faRocket,
  faUsers,
  faAward,
  faClock,
  faCheckCircle,
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
  faArrowRight,
  faBolt,
  faStar,
  faArrowDown,
  faCubes,
  faMicrochip,
  faRobot,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import {
  Line,
  Bar,
  Doughnut,
  Pie
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ProfessionalTradingPlatform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState('splash');
  const [transitioning, setTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  // Modern Professional Theme
  const theme = {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#3b82f6',
    success: '#10b981',
    danger: '#ef4444',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textLight: '#94a3b8',
    border: '#334155'
  };

  // Enhanced Professional Chart Data
  const nasdaqData = {
    labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'],
    datasets: [
      {
        label: 'NASDAQ',
        data: [15234, 15245, 15212, 15267, 15289, 15312, 15298, 15345, 15367, 15323, 15345, 15378, 15412, 15425],
        borderColor: theme.primary,
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: theme.primary,
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6
      }
    ]
  };

  const volumeData = {
    labels: ['MSFT', 'AAPL', 'GOOGL', 'AMZN', 'TSLA', 'META', 'NVDA', 'NFLX'],
    datasets: [
      {
        label: 'Volume (M)',
        data: [45, 38, 29, 42, 35, 28, 52, 31],
        backgroundColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(96, 165, 250, 0.8)',
          'rgba(37, 99, 235, 0.6)',
          'rgba(59, 130, 246, 0.6)',
          'rgba(96, 165, 250, 0.6)',
          'rgba(37, 99, 235, 0.4)',
          'rgba(59, 130, 246, 0.4)'
        ],
        borderColor: theme.background,
        borderWidth: 2
      }
    ]
  };

  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Gainers',
        data: [12, 19, 8, 15, 22],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: theme.success,
        borderWidth: 2
      },
      {
        label: 'Losers',
        data: [8, 12, 6, 9, 14],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: theme.danger,
        borderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#1e293b',
        titleColor: '#f1f5f9',
        bodyColor: '#f1f5f9',
        borderColor: theme.primary,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(51, 65, 85, 0.5)',
          drawBorder: false
        },
        ticks: {
          color: theme.textLight,
          font: {
            family: 'Inter, sans-serif',
            size: 11
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(51, 65, 85, 0.5)',
          drawBorder: false
        },
        ticks: {
          color: theme.textLight,
          font: {
            family: 'Inter, sans-serif',
            size: 11
          }
        }
      }
    }
  };

  const volumeChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: theme.textLight,
          font: {
            family: 'Inter, sans-serif'
          }
        }
      }
    }
  };

  const transitionToStep = (nextStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => transitionToStep('hero'), 3000);
    const timer2 = setTimeout(() => transitionToStep('dashboard'), 10000);
    const timer3 = setTimeout(() => transitionToStep('analytics'), 18000);
    const timer4 = setTimeout(() => transitionToStep('login'), 26000);

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

  const marketIndices = [
    { name: 'S&P 500', value: '4,780.94', change: '+0.36%', isPositive: true },
    { name: 'DOW JONES', value: '37,468.61', change: '+0.22%', isPositive: true },
    { name: 'NASDAQ', value: '15,425.94', change: '+0.32%', isPositive: true },
    { name: 'RUSSELL 2000', value: '1,968.25', change: '-0.15%', isPositive: false },
    { name: 'FTSE 100', value: '7,615.54', change: '+0.18%', isPositive: true },
    { name: 'DAX', value: '16,745.81', change: '+0.45%', isPositive: true }
  ];

  const topMovers = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '189.25', change: '+2.35%', isPositive: true },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: '248.42', change: '-1.28%', isPositive: false },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: '495.22', change: '+3.67%', isPositive: true },
    { symbol: 'MSFT', name: 'Microsoft', price: '378.85', change: '+1.24%', isPositive: true }
  ];

  // Layout 1: Hero Section Layout with animated quotes
  const HeroSection = () => {
    // Quotes for animation
    const quotes = [
      "Trade smarter, not harder.",
      "Invest for the long term.",
      "Risk management is key.",
      "Knowledge is your capital."
    ];
    // Typewriter state
    const [quoteIdx, setQuoteIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const [charIdx, setCharIdx] = useState(0);
    // Animation timing
    const TYPE_SPEED = 40;
    const ERASE_SPEED = 25;
    const HOLD_TIME = 1200;
    useEffect(() => {
      let timeout;
      if (typing) {
        if (charIdx < quotes[quoteIdx].length) {
          timeout = setTimeout(() => {
            setDisplayed(quotes[quoteIdx].slice(0, charIdx + 1));
            setCharIdx(charIdx + 1);
          }, TYPE_SPEED);
        } else {
          // Hold at full quote, then start erasing
          timeout = setTimeout(() => setTyping(false), HOLD_TIME);
        }
      } else {
        if (charIdx > 0) {
          timeout = setTimeout(() => {
            setDisplayed(quotes[quoteIdx].slice(0, charIdx - 1));
            setCharIdx(charIdx - 1);
          }, ERASE_SPEED);
        } else {
          // Move to next quote
          timeout = setTimeout(() => {
            setQuoteIdx((quoteIdx + 1) % quotes.length);
            setTyping(true);
          }, 200);
        }
      }
      return () => clearTimeout(timeout);
    }, [charIdx, typing, quoteIdx, quotes]);

    // On quoteIdx change, start typing from 0
    useEffect(() => {
      setCharIdx(0);
      setDisplayed("");
      setTyping(true);
    }, [quoteIdx]);

    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-40 flex flex-col items-center justify-center min-h-screen text-center px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Animated Professional Logo */}
            <div className="relative mb-8 flex justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/40"
                style={{
                  background: "radial-gradient(circle at 60% 40%, #3b82f6 0%, #2563eb 60%, #1e40af 100%)",
                  boxShadow: "0 6px 32px 0 rgba(37,99,235,0.25), 0 2px 8px 0 rgba(59,130,246,0.18)",
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0f172a 60%, #1e40af 100%)",
                    boxShadow: "0 0 16px 0 rgba(59,130,246,0.10)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-5xl text-blue-200 drop-shadow-lg"
                    style={{
                      filter: "drop-shadow(0 0 8px #3b82f6bb)",
                      background: "linear-gradient(90deg, #60a5fa 10%, #2563eb 90%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-white tracking-tight">
                QUANT<span className="text-blue-500">PRO</span>
              </h1>
              {/* Animated Quotes */}
              <div className="relative h-8 flex flex-col items-center justify-center">
                <span
                  className="block text-lg md:text-xl font-medium text-blue-200 tracking-wide min-h-[2rem] transition-opacity duration-500"
                  style={{ fontFamily: 'Inter, monospace', letterSpacing: '0.01em' }}
                  aria-live="polite"
                >
                  {displayed}
                  <span className="inline-block w-2 h-6 align-middle bg-blue-400 ml-1 animate-blink"
                    style={{
                      verticalAlign: 'middle',
                      borderRadius: '2px'
                    }}
                  ></span>
                </span>
              </div>
              <style>
                {`
                  @keyframes blink {
                    0%, 49% { opacity: 1; }
                    50%, 100% { opacity: 0; }
                  }
                  .animate-blink {
                    animation: blink 1s steps(1) infinite;
                  }
                `}
              </style>
              <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
                Institutional-Grade Trading Platform for Professional Investors
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: '$2.1T+', label: 'Daily Volume' },
                { value: '500K+', label: 'Active Traders' },
                { value: '99.9%', label: 'Platform Uptime' },
                { value: '150+', label: 'Global Markets' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Loading Animation */}
            <div className="flex justify-center pt-8">
              <div className="relative">
                <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Layout 2: Dashboard Grid Layout
  const DashboardSection = () => (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      </div>

      <div className="relative z-40 w-full max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            LIVE MARKET DASHBOARD
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Real-Time <span className="text-blue-400">Market Intelligence</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional trading tools and real-time data at your fingertips
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="xl:col-span-2 bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">NASDAQ Composite</h3>
              <div className="flex space-x-2">
                {['1D', '1W', '1M', '1Y'].map((period) => (
                  <button
                    key={period}
                    className="px-4 py-2 text-sm rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 transition-all duration-300"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-80">
              <Line data={nasdaqData} options={chartOptions} />
            </div>
          </div>

          {/* Market Indices */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Global Indices</h3>
            <div className="space-y-4">
              {marketIndices.map((index, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      index.isPositive ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      <FontAwesomeIcon 
                        icon={index.isPositive ? faArrowUp : faArrowDown} 
                        className={index.isPositive ? 'text-green-400' : 'text-red-400'} 
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white">{index.name}</div>
                      <div className="text-blue-300 text-sm">{index.value}</div>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${index.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {index.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volume Distribution */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Volume Leaders</h3>
            <div className="h-64">
              <Doughnut data={volumeData} options={volumeChartOptions} />
            </div>
          </div>

          {/* Top Movers */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Top Movers</h3>
            <div className="space-y-4">
              {topMovers.map((stock, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <span className="font-bold text-blue-400">{stock.symbol}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{stock.name}</div>
                      <div className="text-gray-400 text-sm">{stock.price}</div>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${stock.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Weekly Performance</h3>
            <div className="h-64">
              <Bar data={performanceData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Layout 3: Split Screen Analytics
  const AnalyticsSection = () => (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-40 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                  ADVANCED ANALYTICS
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Institutional-Grade <span className="text-blue-400">Trading Tools</span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Access professional trading analytics, real-time market data, and advanced 
                  charting tools used by institutional traders worldwide.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: faRocket, title: 'Lightning Execution', desc: 'Sub-10ms trade execution' },
                  { icon: faShieldAlt, title: 'Bank-Level Security', desc: 'Military-grade encryption' },
                  { icon: faRobot, title: 'AI Analytics', desc: 'Smart trading insights' },
                  { icon: faCubes, title: 'Multi-Asset', desc: 'Stocks, Forex, Crypto' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={feature.icon} className="text-blue-400 text-lg" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{feature.title}</div>
                      <div className="text-gray-400 text-sm">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => transitionToStep('login')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <span>Access Trading Platform</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Trading Stats */}
                <div className="space-y-6">
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-green-400 mb-2">+24.8%</div>
                    <div className="text-gray-400">Avg. Return</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-blue-400 mb-2">0.8ms</div>
                    <div className="text-gray-400">Avg. Latency</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-white mb-2">99.97%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                    <div className="text-gray-400">Markets</div>
                  </div>
                </div>
              </div>
              
              {/* Live Activity */}
              <div className="mt-8 bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50">
                <h4 className="text-lg font-bold text-white mb-4">Live Trading Activity</h4>
                <div className="space-y-3">
                  {[
                    { action: 'BUY', symbol: 'AAPL', shares: '100', price: '189.25' },
                    { action: 'SELL', symbol: 'TSLA', shares: '50', price: '248.42' },
                    { action: 'BUY', symbol: 'NVDA', shares: '75', price: '495.22' }
                  ].map((trade, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className={`font-bold ${trade.action === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.action}
                      </span>
                      <span className="text-white">{trade.symbol}</span>
                      <span className="text-gray-400">{trade.shares} shares</span>
                      <span className="text-blue-300">${trade.price}</span>
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

  // Layout 4: Centered Minimalist Login
const LoginSection = () => (
  <div className="min-h-screen relative overflow-hidden bg-slate-900">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-40 w-full max-w-7xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30">
          <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
          SECURE TRADER LOGIN
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Access Your <span className="text-blue-400">Trading Dashboard</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Sign in to access real-time market data, advanced charts, and professional trading tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Login Form + Bar Chart */}
        <div className="flex flex-col gap-8">
          {/* Login Form */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Trader Authentication</h3>
                <p className="text-gray-400">Enter your credentials to continue</p>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                    placeholder="trader@quantpro.com"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-2xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="w-5 h-5 bg-slate-600 border border-slate-500 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-xs opacity-0" />
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-300">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span>Access Trading Platform</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-400" />
                <span>Bank-grade security & encryption</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Section - now inside the left column below login form */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h4 className="text-lg font-bold text-white mb-3">Sample Market Volume (Bar Chart)</h4>
            <div className="h-103">
              <Bar
                data={{
                  labels: ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA'],
                  datasets: [
                    {
                      label: 'Volume (M)',
                      data: [32, 45, 28, 38, 41, 52],
                      backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(96, 165, 250, 0.8)',
                        'rgba(37, 99, 235, 0.6)',
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(96, 165, 250, 0.6)'
                      ],
                      borderColor: '#0f172a',
                      borderWidth: 2
                    }
                  ]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      backgroundColor: '#1e293b',
                      titleColor: '#f1f5f9',
                      bodyColor: '#f1f5f9',
                      borderColor: '#2563eb',
                      borderWidth: 1,
                      cornerRadius: 8,
                      displayColors: false
                    }
                  },
                  scales: {
                    x: {
                      grid: { color: 'rgba(51, 65, 85, 0.5)', drawBorder: false },
                      ticks: { color: '#94a3b8', font: { family: 'Inter, sans-serif', size: 11 } }
                    },
                    y: {
                      grid: { color: 'rgba(51, 65, 85, 0.5)', drawBorder: false },
                      ticks: { color: '#94a3b8', font: { family: 'Inter, sans-serif', size: 11 } }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Market Data & Charts */}
        <div className="space-y-8">
          {/* Live Market Overview */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Live Market Overview</h3>
              <div className="text-green-400 text-sm font-semibold flex items-center space-x-2">
                <FontAwesomeIcon icon={faCircle} className="text-xs animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>
            
            {/* Mini Chart */}
            <div className="h-48 mb-6">
              <Line 
                data={{
                  labels: ['13:00', '14:00', '15:00', '16:00'],
                  datasets: [{
                    label: 'NASDAQ',
                    data: [15345, 15367, 15323, 15425],
                    borderColor: theme.primary,
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { 
                      grid: { display: false },
                      ticks: { color: theme.textLight, font: { size: 11 } }
                    },
                    y: { 
                      grid: { color: 'rgba(51, 65, 85, 0.3)' },
                      ticks: { color: theme.textLight, font: { size: 11 } }
                    }
                  }
                }}
              />
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'S&P 500', value: '4,780.94', change: '+0.36%', positive: true },
                { label: 'NASDAQ', value: '15,425.94', change: '+0.32%', positive: true },
                { label: 'DOW JONES', value: '37,468.61', change: '+0.22%', positive: true },
                { label: 'VIX', value: '13.25', change: '-2.15%', positive: false }
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl">
                  <div>
                    <div className="text-white text-sm font-semibold">{stat.label}</div>
                    <div className="text-blue-300 text-sm">{stat.value}</div>
                  </div>
                  <div className={`text-sm font-bold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Distribution */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Asset Allocation</h3>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="h-48">
                <Doughnut 
                  data={{
                    labels: ['Stocks', 'Bonds', 'Crypto', 'Cash'],
                    datasets: [{
                      data: [45, 25, 15, 15],
                      backgroundColor: [
                        'rgba(37, 99, 235, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(96, 165, 250, 0.8)',
                        'rgba(37, 99, 235, 0.6)'
                      ],
                      borderColor: theme.background,
                      borderWidth: 2
                    }]
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                        labels: {
                          color: theme.textLight,
                          font: { family: 'Inter, sans-serif' }
                        }
                      }
                    }
                  }}
                />
              </div>
              <div className="space-y-4">
                {[
                  { asset: 'US Stocks', value: '$245,230', change: '+2.3%', positive: true },
                  { asset: 'Bonds', value: '$89,450', change: '+0.8%', positive: true },
                  { asset: 'Cryptocurrency', value: '$67,890', change: '-1.2%', positive: false },
                  { asset: 'Cash', value: '$45,670', change: '+0.1%', positive: true }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 ? 'bg-blue-500' : 
                        index === 1 ? 'bg-blue-400' : 
                        index === 2 ? 'bg-blue-300' : 'bg-blue-600'
                      }`}></div>
                      <span className="text-white text-sm">{item.asset}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-sm font-semibold">{item.value}</div>
                      <div className={`text-xs ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: faChartLine, label: 'Market Analysis', color: 'blue' },
                { icon: faExchangeAlt, label: 'Trade Execution', color: 'green' },
                { icon: faDatabase, label: 'Portfolio', color: 'purple' },
                { icon: faHistory, label: 'Trade History', color: 'orange' }
              ].map((action, index) => (
                <button
                  key={index}
                  className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 group hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${action.color}-500/20`}>
                      <FontAwesomeIcon 
                        icon={action.icon} 
                        className={`text-${action.color}-400 text-lg group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <span className="text-white text-sm font-semibold text-left">{action.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Stats Footer */}
      <div className="mt-16 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '99.97%', label: 'Platform Uptime' },
            { value: '< 50ms', label: 'Average Latency' },
            { value: '256-bit', label: 'Encryption' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    body {
      background: #0f172a;
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
      background: #0f172a;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #2563eb 0%, #1e40af 100%);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
    }

    /* Smooth transitions */
    * {
      transition-property: color, background-color, border-color, transform, opacity, box-shadow;
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Focus states */
    input:focus {
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
      border-color: #2563eb;
    }

    /* Backdrop blur support */
    @supports (backdrop-filter: blur(10px)) {
      .backdrop-blur-lg {
        backdrop-filter: blur(16px);
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      <div className="relative min-h-screen overflow-hidden bg-slate-900">
        <div className={`${transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-800`}>
          {currentStep === 'hero' && <HeroSection />}
          {currentStep === 'dashboard' && <DashboardSection />}
          {currentStep === 'analytics' && <AnalyticsSection />}
          {currentStep === 'login' && <LoginSection />}
        </div>
      </div>
    </>
  );
};

export default ProfessionalTradingPlatform;