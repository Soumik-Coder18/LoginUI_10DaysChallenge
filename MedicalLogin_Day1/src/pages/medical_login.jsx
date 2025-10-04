import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUserMd, FaShieldAlt, FaHeartbeat } from 'react-icons/fa';
import Lottie from 'lottie-react';
import doctorAnimation from '../assets/doctor.json';

const MedicalLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Handle login logic here
    console.log({ email, password, rememberMe });
    setIsSubmitting(false);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F8] via-[#D4E9F2] to-[#C4E1E6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Medical Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#8DBCC7] opacity-5 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#A4CCD9] opacity-5 rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border-4 border-[#8DBCC7] opacity-10 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border-4 border-[#A4CCD9] opacity-10 rounded-lg transform rotate-12"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition-all duration-500 backdrop-blur-sm bg-white/95">
        {/* Left Side - Medical Illustration */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#0A4A5E] via-[#1A6B7E] to-[#2A8B9E] flex items-center justify-center p-8 relative overflow-hidden">
          {/* Medical Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-20 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-32 right-24 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white transform rotate-45"></div>
            <div className="absolute bottom-40 left-40 w-6 h-6 border-2 border-white rounded-full"></div>
          </div>

          {/* Pulse Animation */}
          <div className="absolute top-10 right-10 opacity-20">
            <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
          </div>

          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10 text-center`}>
            <div className="mb-8">
              <Lottie 
                animationData={doctorAnimation} 
                loop={true}
                className="w-full h-56 md:h-120 filter drop-shadow-2xl"
              />
            </div>
            
            <div className="text-white space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                  <FaUserMd className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  MediCare Pro
                </h2>
              </div>
              
              <p className="text-white/80 text-lg font-light max-w-md mx-auto leading-relaxed">
                Advanced healthcare platform for medical professionals
              </p>
              
              <div className="flex items-center justify-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-300 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs">4.9/5 Rating</p>
                </div>
                
                <div className="h-8 w-px bg-white/30"></div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <FaShieldAlt className="text-green-300 text-sm" />
                    <span className="text-white text-sm font-semibold">HIPAA</span>
                  </div>
                  <p className="text-white/70 text-xs">Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 p-8 md:p-10 flex items-center justify-center relative">
          {/* Decorative Medical Icons */}
          <div className="absolute top-6 right-6 text-[#8DBCC7] opacity-20">
            <FaHeartbeat className="text-2xl" />
          </div>
          <div className="absolute bottom-6 left-6 text-[#A4CCD9] opacity-20">
            <FaStethoscope className="text-xl" />
          </div>

          <div className={`w-full max-w-md transform transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Header */}
            <div className="text-center mb-6 font-inter">
              <div className="flex items-center justify-center mb-3">
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#0A4A5E] to-[#2A8B9E] p-4 rounded-2xl shadow-lg transform rotate-6 transition-transform duration-500 hover:rotate-12">
                    <FaStethoscope className="text-white text-xl relative z-10" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0A4A5E] to-[#2A8B9E] rounded-2xl blur opacity-30"></div>
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0A4A5E] to-[#2A8B9E] bg-clip-text text-transparent font-inter mb-2">
                Professional Login
              </h1>
              <p className="text-[#0A4A5E] font-light text-lg font-inter">
                Access your medical dashboard securely
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 text-gray-400 group-focus-within:text-[#0A4A5E] transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4A5E] focus:border-transparent transition-all duration-300 outline-none group-hover:border-[#8DBCC7] bg-white/50"
                    placeholder="professional@medical.org"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none z-10 text-gray-400 group-focus-within:text-[#0A4A5E] transition-colors duration-300">
                    <FaLock />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0A4A5E] focus:border-transparent transition-all duration-300 outline-none group-hover:border-[#8DBCC7] bg-white/50"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#0A4A5E] transition-colors duration-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                      rememberMe 
                        ? 'bg-[#0A4A5E] border-[#0A4A5E] shadow-inner' 
                        : 'bg-white border-gray-300 group-hover:border-[#8DBCC7]'
                    }`}>
                      {rememberMe && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                    Remember this device
                  </span>
                </label>
                <a href="#" className="text-sm text-[#0A4A5E] hover:text-[#083848] hover:underline transition-colors duration-300 font-semibold group">
                  <span className="relative after:block after:h-[2px] after:w-0 after:bg-[#0A4A5E] after:absolute after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Forgot password?
                  </span>
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-[#0A4A5E] to-[#2A8B9E] text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group ${
                  isSubmitting 
                    ? 'opacity-90 cursor-not-allowed' 
                    : 'hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-3"></div>
                      Authenticating...
                    </>
                  ) : (
                    'Access Medical Dashboard'
                  )}
                </div>
              </button>

              {/* Divider */}
              <div className="relative flex items-center my-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm bg-white px-3 font-medium">Secure access</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Google Login Button */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-200 text-gray-700 py-3.5 px-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300 group bg-white/50 backdrop-blur-sm"
              >
                <div className="relative">
                  <FaGoogle className="text-[#DB4437] group-hover:scale-110 transition-transform duration-300" />
                </div>
                Continue with Google
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm font-light">
                New to our platform?{' '}
                <a href="#" className="text-[#0A4A5E] hover:text-[#083848] font-semibold transition-colors duration-300 group">
                  <span className="relative after:block after:h-[2px] after:w-0 after:bg-[#0A4A5E] after:absolute after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
                    Request professional access
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 ml-1">→</span>
                  </span>
                </a>
              </p>
            </div>

            {/* Security Footer */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-gray-400 mb-2">
                <FaShieldAlt className="text-sm" />
                <span className="text-xs font-medium">HIPAA Compliant • Encrypted • Secure</span>
              </div>
              <p className="text-center text-gray-400 text-xs font-light">
                © 2025 MediCare Pro Healthcare Systems<br />
                <span className="text-gray-300">v3.2.1 • Professional Edition</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalLogin;