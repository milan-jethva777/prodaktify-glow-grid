
import { useState } from "react";
import ImageContainer from "@/components/ImageContainer";
import UploadButton from "@/components/UploadButton";
import GridOverlay from "@/components/GridOverlay";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

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
          <div className="text-2xl font-bold bg-gradient-to-r from-white via-green-400 to-emerald-500 bg-clip-text text-transparent">
            Prodaktify
          </div>
          <nav className="flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">Features</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-400 to-emerald-500 bg-clip-text text-transparent">
            Create AI product design for free
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your ideas into stunning product designs using advanced AI technology
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pb-20">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          {/* Image Container */}
          <ImageContainer image={uploadedImage} />
          
          {/* Upload Section */}
          <div className="flex flex-col items-center space-y-4">
            <UploadButton onImageUpload={handleImageUpload} />
            <p className="text-gray-500 text-sm text-center max-w-md">
              Upload your image to transform it with AI-powered enhancements
            </p>
          </div>
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
