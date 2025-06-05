
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Perspective Grid Background with Animation */}
      <div 
        className="absolute inset-0 animate-pulse"
        style={{
          background: `
            linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'center bottom',
          opacity: 0.6,
          animation: 'gridFlow 8s ease-in-out infinite'
        }}
      />
      
      {/* Flowing horizontal lines */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 58px,
            rgba(0, 255, 136, 0.6) 59px,
            rgba(0, 255, 136, 0.6) 60px
          )`,
          transform: 'perspective(800px) rotateX(75deg)',
          transformOrigin: 'center bottom',
          opacity: 0.8,
          animation: 'waveFlow 6s ease-in-out infinite'
        }}
      />
      
      {/* Animated vertical perspective lines */}
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 58px,
            rgba(0, 255, 136, 0.4) 59px,
            rgba(0, 255, 136, 0.4) 60px
          )`,
          transform: 'perspective(800px) rotateX(75deg)',
          transformOrigin: 'center bottom',
          opacity: 0.6,
          animation: 'pulseGlow 4s ease-in-out infinite'
        }}
      />
      
      {/* Flowing wave effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background: `
            linear-gradient(45deg,
              rgba(0, 255, 136, 0.1) 0%,
              rgba(0, 255, 136, 0.3) 25%,
              rgba(0, 255, 136, 0.1) 50%,
              rgba(0, 255, 136, 0.3) 75%,
              rgba(0, 255, 136, 0.1) 100%
            )
          `,
          transform: 'perspective(1000px) rotateX(80deg)',
          transformOrigin: 'center bottom',
          animation: 'flowingWave 10s ease-in-out infinite',
          opacity: 0.4
        }}
      />
      
      {/* Radial fade overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center bottom, 
              rgba(0, 0, 0, 0) 0%, 
              rgba(0, 0, 0, 0.3) 40%, 
              rgba(0, 0, 0, 0.8) 70%, 
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />
      
      {/* Enhanced green glow effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `
            linear-gradient(to top,
              rgba(0, 255, 136, 0.2) 0%,
              rgba(0, 255, 136, 0.1) 30%,
              rgba(0, 255, 136, 0.05) 60%,
              transparent 100%
            )
          `,
          animation: 'glowPulse 3s ease-in-out infinite'
        }}
      />
      
      <style>
        {`
          @keyframes gridFlow {
            0%, 100% { 
              transform: perspective(600px) rotateX(60deg) translateZ(0px);
              filter: brightness(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3));
            }
            50% { 
              transform: perspective(600px) rotateX(65deg) translateZ(20px);
              filter: brightness(1.3) drop-shadow(0 0 25px rgba(0, 255, 136, 0.6));
            }
          }
          
          @keyframes waveFlow {
            0%, 100% { 
              transform: perspective(800px) rotateX(75deg) translateY(0px);
              opacity: 0.8;
            }
            50% { 
              transform: perspective(800px) rotateX(70deg) translateY(-10px);
              opacity: 1;
            }
          }
          
          @keyframes pulseGlow {
            0%, 100% { 
              opacity: 0.6;
              filter: brightness(1);
            }
            50% { 
              opacity: 0.9;
              filter: brightness(1.4) blur(0.5px);
            }
          }
          
          @keyframes flowingWave {
            0% { 
              transform: perspective(1000px) rotateX(80deg) translateX(-100px);
            }
            50% { 
              transform: perspective(1000px) rotateX(75deg) translateX(0px);
            }
            100% { 
              transform: perspective(1000px) rotateX(80deg) translateX(100px);
            }
          }
          
          @keyframes glowPulse {
            0%, 100% { 
              opacity: 1;
              filter: blur(10px);
            }
            50% { 
              opacity: 0.7;
              filter: blur(15px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridOverlay;
