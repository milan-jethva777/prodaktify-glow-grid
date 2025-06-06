
import { useState, useEffect } from "react";
import ImageContainer from "@/components/ImageContainer";
import UploadButton from "@/components/UploadButton";
import GridOverlay from "@/components/GridOverlay";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import { Linkedin, X, Instagram, Youtube } from "lucide-react";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <GridOverlay />
      
      {/* Navigation Header */}
      <header className="relative z-10 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            Prodaktify
          </div>
          
          {/* Desktop Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Youtube size={20} />
              </a>
            </nav>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Social Icons Menu - Visible when mobileMenuOpen is true */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm p-4 flex justify-center border-t border-gray-800">
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex flex-col items-center">
                <X size={20} />
                <span className="text-xs mt-1">X</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex flex-col items-center">
                <Linkedin size={20} />
                <span className="text-xs mt-1">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex flex-col items-center">
                <Instagram size={20} />
                <span className="text-xs mt-1">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors flex flex-col items-center">
                <Youtube size={20} />
                <span className="text-xs mt-1">YouTube</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Adjusted padding and responsive text sizes */}
      <section className="relative z-10 pt-12 pb-20 px-4 md:px-6 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 text-white drop-shadow-2xl">
            Create AI product design for free
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Transform your ideas into stunning product designs using advanced AI technology
          </p>
        </div>
      </section>

      {/* Main Content - Now positioned below the hero section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 pb-20 mt-20">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Image Container (upload button is now inside ImageContainer) */}
          <ImageContainer image={uploadedImage} onImageUpload={handleImageUpload} />
          
          {/* Upload Section Info */}
          {!uploadedImage && (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400 text-xs sm:text-sm text-center max-w-md">
                Upload your image to transform it with AI-powered enhancements
              </p>
            </div>
          )}
        </div>
      </main>

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <footer className="relative z-10 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="border-t border-gray-800 pt-6 md:pt-8">
            <p className="text-gray-600 text-xs md:text-sm">
              © 2024 Prodaktify. Powered by advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
