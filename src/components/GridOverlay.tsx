
const GridOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgba(0, 255, 136, 0.03) 0%, 
              rgba(0, 0, 0, 0.8) 70%, 
              rgba(0, 0, 0, 1) 100%
            )
          `
        }}
      />
      
      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default GridOverlay;
