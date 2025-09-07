import { useEffect, useState } from "react";
import motionwayLogo from "@/assets/motionway-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/10 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-neural-pulse" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-secondary/15 blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-accent/10 blur-[110px] animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Logo container */}
      <div className="relative z-10 text-center">
        <div className="animate-scale-in">
          {/* Logo with glass effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-secondary/10 blur-3xl animate-pulse-glow" />
            <div className="relative glass-card p-16 mx-4 backdrop-blur-xl">
              {/* Logo */}
              <div className="w-48 h-32 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl animate-pulse" />
                <img 
                  src={motionwayLogo} 
                  alt="Motionway" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  style={{ 
                    filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
              
              {/* Progress bar */}
              <div className="w-64 mx-auto">
                <div className="h-1 bg-border/30 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                {/* Loading text */}
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-muted-foreground animate-pulse">
                    {progress < 30 && "Initializing..."}
                    {progress >= 30 && progress < 60 && "Loading resources..."}
                    {progress >= 60 && progress < 90 && "Preparing experience..."}
                    {progress >= 90 && "Almost ready..."}
                  </p>
                  
                  {/* Animated dots */}
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-secondary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;