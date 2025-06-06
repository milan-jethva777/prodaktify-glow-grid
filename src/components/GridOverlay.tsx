
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Flowing Wave Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center bottom',
          opacity: 0.7,
          animation: 'waterFlow 8s ease-in-out infinite'
        }}
      />
      
      {/* Secondary flowing layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '150px 150px',
          transform: 'perspective(800px) rotateX(65deg)',
          transformOrigin: 'center bottom',
          opacity: 0.5,
          animation: 'waterFlow 12s ease-in-out infinite reverse'
        }}
      />
      
      {/* Smooth flowing particles */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '200px 200px, 300px 300px, 250px 250px',
          animation: 'gentleFloat 15s ease-in-out infinite'
        }}
      />
      
      {/* Flowing vertical lines */}
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 99px,
            rgba(34, 197, 94, 0.4) 100px,
            rgba(34, 197, 94, 0.4) 101px
          )`,
          transform: 'perspective(1200px) rotateX(70deg)',
          transformOrigin: 'center bottom',
          opacity: 0.6,
          animation: 'smoothUpward 10s linear infinite'
        }}
      />
      
      {/* Gentle wave effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 45%, 
              rgba(34, 197, 94, 0.1) 50%, 
              transparent 55%
            )
          `,
          backgroundSize: '400px 400px',
          animation: 'waveMotion 20s ease-in-out infinite'
        }}
      />
      
      {/* Radial fade overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center bottom, 
              rgba(0, 0, 0, 0) 0%, 
              rgba(0, 0, 0, 0.1) 20%, 
              rgba(0, 0, 0, 0.4) 50%, 
              rgba(0, 0, 0, 0.7) 80%, 
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />
      
      {/* Soft green glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{
          background: `
            linear-gradient(to top,
              rgba(34, 197, 94, 0.2) 0%,
              rgba(34, 197, 94, 0.1) 40%,
              rgba(34, 197, 94, 0.05) 70%,
              transparent 100%
            )
          `,
          animation: 'gentleGlow 8s ease-in-out infinite'
        }}
      />
      
      <style>
        {`
          @keyframes waterFlow {
            0%, 100% { 
              background-position: 0px 0px, 0px 0px;
              transform: perspective(1000px) rotateX(60deg) translateZ(0px);
            }
            25% { 
              background-position: 25px 25px, -25px 25px;
              transform: perspective(1000px) rotateX(62deg) translateZ(20px);
            }
            50% { 
              background-position: 50px 50px, -50px 50px;
              transform: perspective(1000px) rotateX(65deg) translateZ(40px);
            }
            75% { 
              background-position: 25px 75px, -25px 75px;
              transform: perspective(1000px) rotateX(62deg) translateZ(20px);
            }
          }
          
          @keyframes smoothUpward {
            0% { 
              background-position: 0px 0px;
              transform: perspective(1200px) rotateX(70deg) translateY(0px);
            }
            100% { 
              background-position: 0px -200px;
              transform: perspective(1200px) rotateX(70deg) translateY(-100px);
            }
          }
          
          @keyframes gentleFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 0.8;
            }
            33% { 
              transform: translateY(-30px) scale(1.05);
              opacity: 1;
            }
            66% { 
              transform: translateY(-60px) scale(0.95);
              opacity: 0.6;
            }
          }
          
          @keyframes waveMotion {
            0%, 100% { 
              background-position: 0px 0px;
              transform: translateX(0px) scale(1);
            }
            50% { 
              background-position: 200px 100px;
              transform: translateX(50px) scale(1.1);
            }
          }
          
          @keyframes gentleGlow {
            0%, 100% { 
              opacity: 1;
              filter: blur(15px);
            }
            50% { 
              opacity: 0.8;
              filter: blur(20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridOverlay;
