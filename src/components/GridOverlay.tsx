
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Perspective Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(600px) rotateX(60deg)',
          transformOrigin: 'center bottom',
          opacity: 0.6
        }}
      />
      
      {/* Horizontal perspective lines */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 58px,
            rgba(0, 255, 136, 0.4) 59px,
            rgba(0, 255, 136, 0.4) 60px
          )`,
          transform: 'perspective(800px) rotateX(75deg)',
          transformOrigin: 'center bottom',
          opacity: 0.8
        }}
      />
      
      {/* Vertical perspective lines */}
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
          opacity: 0.6
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
      
      {/* Green glow effect at horizon */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: `
            linear-gradient(to top,
              rgba(0, 255, 136, 0.1) 0%,
              rgba(0, 255, 136, 0.05) 30%,
              transparent 100%
            )
          `
        }}
      />
      
      <style>
        {`
          @keyframes gridGlow {
            0%, 100% { 
              filter: brightness(1) drop-shadow(0 0 10px rgba(0, 255, 136, 0.3));
            }
            50% { 
              filter: brightness(1.2) drop-shadow(0 0 20px rgba(0, 255, 136, 0.5));
            }
          }
        `}
      </style>
    </div>
  );
};

export default GridOverlay;
