
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
      
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-white via-green-400 to-emerald-500 bg-clip-text text-transparent">
            Prodaktify
          </h1>
          <p className="text-center text-gray-400 mt-2 text-lg">
            AI-Powered Image Generation
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
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
