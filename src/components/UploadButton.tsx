
import { useRef } from "react";

interface UploadButtonProps {
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton = ({ onImageUpload }: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
      
      {/* Button */}
      <button
        onClick={handleButtonClick}
        className="relative px-6 py-2 bg-green-500 hover:bg-black border border-green-400/50 hover:border-green-400 rounded-lg text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 group"
      >
        {/* Upload Icon */}
        <svg 
          className="w-4 h-4 group-hover:animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
          />
        </svg>
        
        <span>Upload Image</span>
        
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </button>
      
      {/* Pulse Ring Effect */}
      <div className="absolute inset-0 rounded-lg border-2 border-green-400/20 group-hover:animate-ping"></div>
    </div>
  );
};

export default UploadButton;
