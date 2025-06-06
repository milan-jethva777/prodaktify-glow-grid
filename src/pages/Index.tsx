
import { useState } from "react";
import ImageContainer from "@/components/ImageContainer";
import UploadButton from "@/components/UploadButton";
import GridOverlay from "@/components/GridOverlay";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import { Linkedin, X, Instagram, Youtube } from "lucide-react";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

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
      <header className="relative z-10 py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white drop-shadow-lg">
            Prodaktify
          </div>
          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-2xl">
            Create AI product design for free
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Transform your ideas into stunning product designs using advanced AI technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Image Container (upload button is now inside ImageContainer) */}
          <ImageContainer image={uploadedImage} onImageUpload={handleImageUpload} />
          
          {/* Upload Section Info */}
          {!uploadedImage && (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-400 text-sm text-center max-w-md">
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
      <footer className="relative z-10 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-600 text-sm">
              © 2024 Prodaktify. Powered by advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
