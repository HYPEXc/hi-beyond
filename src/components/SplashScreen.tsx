import { useEffect, useState } from "react";
import logoIcon from "@/assets/logo-icon-only.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-neural-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/8 blur-[80px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo container */}
      <div className="relative z-10 text-center animate-scale-in">
        <div className="glass-card p-12 mx-4">
          <div className="w-24 h-24 mx-auto mb-6 animate-pulse-glow">
            <img 
              src={logoIcon} 
              alt="AI Tech & Engineering" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Loading animation */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;