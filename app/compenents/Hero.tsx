"use client";
import React from 'react';
import { Mail } from 'lucide-react';

// Types
interface TechIconProps {
  children: React.ReactNode;
  delay: string;
  position: string;
}

interface AnimatedIconProps {
  src: string;
  alt: string;
  className: string;
}

// Components
const TechIcon: React.FC<TechIconProps> = ({ children, delay, position }) => (
  <div
    className={`absolute ${position} animate-float opacity-0`}
    style={{
      animation: `float 3s ease-in-out infinite ${delay}, fadeIn 0.5s ease-out ${delay} forwards`
    }}
  >
    {children}
  </div>
);

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ src, alt, className }) => (
  <div className={className}>
    <span className="text-4xl">{src}</span>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-amber-950 to-orange-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <div className="space-y-2">
              <p className="text-orange-400 text-lg font-medium animate-fadeIn">
                Hey, I am <span className="text-orange-500 font-bold">Noah</span>
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight animate-slideUp">
                Web Developer
              </h1>
            </div>

            <p className="text-gray-300 text-lg max-w-md animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet mob.
            </p>

            <div className="flex gap-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50">
                Hire me
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Character & Tech Icons */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Tech Icons floating around */}
            <TechIcon delay="0s" position="top-10 left-20">
              <div className="bg-orange-500/20 backdrop-blur-sm p-4 rounded-2xl border border-orange-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
            </TechIcon>

            <TechIcon delay="0.5s" position="top-32 right-24">
              <div className="bg-orange-500/20 backdrop-blur-sm p-4 rounded-2xl border border-orange-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl" style={{ filter: 'hue-rotate(180deg)' }}>🔷</span>
              </div>
            </TechIcon>

            <TechIcon delay="1s" position="top-48 left-10">
              <div className="bg-red-500/20 backdrop-blur-sm p-4 rounded-2xl border border-red-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">🔶</span>
              </div>
            </TechIcon>

            <TechIcon delay="1.5s" position="bottom-32 left-32">
              <div className="bg-green-500/20 backdrop-blur-sm p-4 rounded-2xl border border-green-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">📗</span>
              </div>
            </TechIcon>

            <TechIcon delay="0.3s" position="bottom-20 right-20">
              <div className="bg-pink-500/20 backdrop-blur-sm p-4 rounded-2xl border border-pink-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">🎨</span>
              </div>
            </TechIcon>

            <TechIcon delay="0.8s" position="top-1/2 right-10">
              <div className="bg-yellow-500/20 backdrop-blur-sm p-4 rounded-2xl border border-yellow-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">☕</span>
              </div>
            </TechIcon>

            <TechIcon delay="2s" position="bottom-40 right-40">
              <div className="bg-orange-500/20 backdrop-blur-sm p-4 rounded-2xl border border-orange-500/30 hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
            </TechIcon>

            {/* Central Character Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-3xl opacity-30 absolute -bottom-10"></div>
                <div className="relative text-center space-y-4">
                  <div className="text-9xl">👨‍💻</div>
                  <div className="text-6xl">☕</div>
                </div>
              </div>
            </div>

            {/* Decorative Lightning Bolts */}
            <div className="absolute top-10 right-10 animate-pulse">
              <span className="text-6xl text-orange-500 drop-shadow-2xl">⚡</span>
            </div>
            <div className="absolute bottom-20 left-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
              <span className="text-6xl text-orange-500 drop-shadow-2xl">⚡</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;