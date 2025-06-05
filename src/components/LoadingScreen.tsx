import { useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  useEffect(() => {
    // Set a timer to complete loading after video duration
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5500); // Adjusted to match total animation duration

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative flex items-center justify-center w-full" style={{ minHeight: '180px' }}>
        {/* Animated Red Ovals SVG */}
        <svg
          width="600"
          height="320"
          viewBox="0 0 600 320"
          fill="none"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block"
          style={{ zIndex: 1 }}
        >
          {/* Orange Glow - expanded bounds */}
          <ellipse
            cx="420"
            cy="120"
            rx="90"
            ry="60"
            fill="url(#glowGradient)"
            filter="url(#blur)"
          />
          <defs>
            <radialGradient id="glowGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#FFD580" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
            </radialGradient>
            <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="32" />
            </filter>
          </defs>
          {/* First Red Oval Path */}
          <ellipse
            cx="300"
            cy="160"
            rx="240"
            ry="90"
            fill="none"
            stroke="#FF3B3B"
            strokeWidth="6"
            strokeDasharray="1100"
            strokeDashoffset="1100"
            style={{
              animation: 'draw-oval 1.5s cubic-bezier(0.77,0,0.175,1) forwards',
              transform: 'rotate(-15deg)',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 0 12px #FF3B3B88)'
            }}
          />
          {/* Second Red Oval Path (slightly offset, thinner, delayed) */}
          <ellipse
            cx="300"
            cy="160"
            rx="225"
            ry="80"
            fill="none"
            stroke="#FF3B3B"
            strokeWidth="3.5"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{
              animation: 'draw-oval2 1.2s 1.1s cubic-bezier(0.77,0,0.175,1) forwards',
              transform: 'rotate(-17deg)',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 0 8px #FF3B3B66)'
            }}
          />
          <style>{`
            @keyframes draw-oval {
              to { stroke-dashoffset: 0; }
            }
            @keyframes draw-oval2 {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </svg>
        {/* Mobile SVG (smaller) */}
        <svg
          width="320"
          height="140"
          viewBox="0 0 320 140"
          fill="none"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none block sm:hidden"
          style={{ zIndex: 1 }}
        >
          {/* Orange Glow - expanded bounds */}
          <ellipse
            cx="220"
            cy="55"
            rx="45"
            ry="30"
            fill="url(#glowGradientMobile)"
            filter="url(#blurMobile)"
          />
          <defs>
            <radialGradient id="glowGradientMobile" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#FFD580" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
            </radialGradient>
            <filter id="blurMobile" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>
          {/* First Red Oval Path */}
          <ellipse
            cx="160"
            cy="70"
            rx="120"
            ry="45"
            fill="none"
            stroke="#FF3B3B"
            strokeWidth="4"
            strokeDasharray="600"
            strokeDashoffset="600"
            style={{
              animation: 'draw-oval 1.5s cubic-bezier(0.77,0,0.175,1) forwards',
              transform: 'rotate(-15deg)',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 0 8px #FF3B3B88)'
            }}
          />
          {/* Second Red Oval Path (slightly offset, thinner, delayed) */}
          <ellipse
            cx="160"
            cy="70"
            rx="110"
            ry="38"
            fill="none"
            stroke="#FF3B3B"
            strokeWidth="2.5"
            strokeDasharray="540"
            strokeDashoffset="540"
            style={{
              animation: 'draw-oval2 1.2s 1.1s cubic-bezier(0.77,0,0.175,1) forwards',
              transform: 'rotate(-17deg)',
              transformOrigin: 'center',
              filter: 'drop-shadow(0 0 6px #FF3B3B66)'
            }}
          />
          <style>{`
            @keyframes draw-oval {
              to { stroke-dashoffset: 0; }
            }
            @keyframes draw-oval2 {
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </svg>
        {/* Animated Text */}
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg relative"
          style={{
            letterSpacing: '0.15em',
            animation: 'cognitimax-fade 2s infinite alternate',
            zIndex: 2,
          }}
        >
          COGNITIMAX
        </h1>
        <style>{`
          @keyframes cognitimax-fade {
            0% { opacity: 0.7; transform: scale(0.96); }
            100% { opacity: 1; transform: scale(1.04); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default LoadingScreen;
