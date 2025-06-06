
import UploadButton from "./UploadButton";

interface ImageContainerProps {
  image: string | null;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageContainer = ({ image, onImageUpload }: ImageContainerProps) => {
  return (
    <div className="relative group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      
      {/* Main Container - Made more transparent with dark background */}
      <div className="relative bg-black/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        {/* Upload button positioned inside container but above the image */}
        <div className="w-full flex justify-center mb-6">
          <UploadButton onImageUpload={onImageUpload} />
        </div>
        
        {image ? (
          <div className="relative w-full h-full mt-4">
            <img 
              src={image} 
              alt="Uploaded content" 
              className="w-full h-full object-contain max-h-[400px] md:max-h-[500px] rounded-lg shadow-2xl"
            />
            {/* Image Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        ) : (
          <div className="text-center space-y-4 mt-4">
            {/* Placeholder Icon */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-6">
              <svg 
                className="w-12 h-12 text-green-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-300">
              Your AI-Enhanced Image
            </h3>
            <p className="text-gray-500 max-w-md">
              Upload an image above to see it transformed with cutting-edge AI technology
            </p>
            
            {/* Animated Dots */}
            <div className="flex justify-center space-x-2 pt-4">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;
