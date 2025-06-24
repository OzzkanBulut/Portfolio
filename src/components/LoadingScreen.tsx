import React from 'react';

const LoadingScreen = () => {
  // CSS animasyonu için inline style
  const loadingBarStyle = `
    @keyframes loadingBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <style dangerouslySetInnerHTML={{ __html: loadingBarStyle }} />
      
      <div
        className="text-6xl text-green-400 mb-8 font-mono animate-pulse"
        style={{ 
          fontFamily: "'Courier New', monospace",
          textShadow: '0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981'
        }}
      >
        {'INITIALIZING'}
      </div>

      <div className="w-64 h-4 bg-green-900 rounded-full overflow-hidden" style={{ boxShadow: '0 0 20px #10b981' }}>
        <div 
          className="h-full bg-green-400 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: '100%',
            boxShadow: '0 0 10px #10b981',
            animation: 'loadingBar 1.5s ease-out forwards'
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
