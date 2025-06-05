
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Perspective Grid Background with Smooth Animation */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(800px) rotateX(75deg)',
          transformOrigin: 'center bottom',
          opacity: 0.8,
          animation: 'smoothGridFlow 12s linear infinite'
        }}
      />
      
      {/* Secondary Grid Layer for Depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(70deg)',
          transformOrigin: 'center bottom',
          opacity: 0.6,
          animation: 'smoothGridFlow 8s linear infinite reverse'
        }}
      />
      
      {/* Flowing horizontal lines */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 78px,
            rgba(34, 197, 94, 0.6) 79px,
            rgba(34, 197, 94, 0.6) 80px
          )`,
          transform: 'perspective(1000px) rotateX(80deg)',
          transformOrigin: 'center bottom',
          opacity: 0.7,
          animation: 'smoothUpwardFlow 10s linear infinite'
        }}
      />
      
      {/* Animated vertical perspective lines */}
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 78px,
            rgba(34, 197, 94, 0.5) 79px,
            rgba(34, 197, 94, 0.5) 80px
          )`,
          transform: 'perspective(1000px) rotateX(80deg)',
          transformOrigin: 'center bottom',
          opacity: 0.5,
          animation: 'smoothUpwardFlow 14s linear infinite'
        }}
      />
      
      {/* Depth particles effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px, 200px 200px, 250px 250px',
          animation: 'particleFlow 15s linear infinite'
        }}
      />
      
      {/* Radial fade overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center bottom, 
              rgba(0, 0, 0, 0) 0%, 
              rgba(0, 0, 0, 0.2) 30%, 
              rgba(0, 0, 0, 0.6) 60%, 
              rgba(0, 0, 0, 0.9) 90%, 
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />
      
      {/* Enhanced green glow effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background: `
            linear-gradient(to top,
              rgba(34, 197, 94, 0.3) 0%,
              rgba(34, 197, 94, 0.15) 30%,
              rgba(34, 197, 94, 0.05) 60%,
              transparent 100%
            )
          `,
          animation: 'glowPulse 4s ease-in-out infinite'
        }}
      />
      
      <style>
        {`
          @keyframes smoothGridFlow {
            0% { 
              background-position: 0px 0px, 0px 0px;
            }
            100% { 
              background-position: 0px -80px, -80px 0px;
            }
          }
          
          @keyframes smoothUpwardFlow {
            0% { 
              background-position: 0px 0px;
              transform: perspective(1000px) rotateX(80deg) translateZ(0px);
            }
            100% { 
              background-position: 0px -160px;
              transform: perspective(1000px) rotateX(80deg) translateZ(50px);
            }
          }
          
          @keyframes particleFlow {
            0% { 
              transform: translateY(0px) translateZ(0px);
              opacity: 0.8;
            }
            50% { 
              opacity: 1;
            }
            100% { 
              transform: translateY(-200px) translateZ(100px);
              opacity: 0;
            }
          }
          
          @keyframes glowPulse {
            0%, 100% { 
              opacity: 1;
              filter: blur(15px);
            }
            50% { 
              opacity: 0.7;
              filter: blur(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridOverlay;
