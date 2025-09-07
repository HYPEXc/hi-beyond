import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Brain, Cpu, Zap, Network, Bot, Atom } from "lucide-react";
import heroImage from "@/assets/hero-ai-tech.jpg";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  useScrollAnimation();
  const staticText = "AI Tech & Engineering: ";
  const { displayText: changingText } = useTypingEffect([
    "Intelligence",
    "Innovation", 
    "Automation", 
    "Precision",
    "Excellence",
    "Future"
  ], 100);
  const { count: projectsCount, countRef: projectsRef } = useCounterAnimation(500);
  const { count: reductionCount, countRef: reductionRef } = useCounterAnimation(50);
  const { count: countriesCount, countRef: countriesRef } = useCounterAnimation(100);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/10">
      {/* Floating tech particles in upper area */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden">
        <div className="absolute top-8 left-1/4 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-12 right-1/3 w-2 h-2 bg-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-16 left-1/2 w-4 h-4 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-6 right-1/4 w-1.5 h-1.5 bg-neural/60 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-20 left-1/6 w-2.5 h-2.5 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-10 right-1/6 w-3.5 h-3.5 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '5s' }} />
        
        {/* Subtle connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="25%" y1="32" x2="50%" y2="64" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" />
          <line x1="50%" y1="64" x2="75%" y2="24" stroke="hsl(var(--secondary))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="75%" y1="24" x2="83%" y2="40" stroke="hsl(var(--accent))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Enhanced neural network background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-neural-pulse" />
        
        {/* Floating neural nodes */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/8 blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-secondary/6 blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent/5 blur-[60px] animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-neural/4 blur-[40px] animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Orbiting AI elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 animate-rotate-slow">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow" style={{ transform: 'translateX(-50%)' }} />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" style={{ transform: 'translateX(-50%)', animationDelay: '1s' }} />
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ transform: 'translateY(-50%)', animationDelay: '2s' }} />
              <div className="absolute right-0 top-1/2 w-2 h-2 bg-neural rounded-full animate-pulse-glow" style={{ transform: 'translateY(-50%)', animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="space-y-10 animate-slide-up relative z-10">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-display">
                <div className="text-white">
                  {staticText}
                </div>
                <div className="h-[80px] lg:h-[100px] flex items-start">
                  <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
                    {changingText}
                    {changingText && <span className="animate-pulse text-primary ml-1">|</span>}
                  </span>
                </div>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                Pioneering the convergence of <span className="text-primary font-medium">Artificial Intelligence</span> and 
                <span className="text-secondary font-medium"> Precision Engineering</span> – architecting intelligent systems 
                that redefine possibilities and accelerate digital transformation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="hero" size="lg" className="text-lg px-10 py-5 h-auto">
                <Zap className="mr-3 w-5 h-5" />
                Explore AI Solutions
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button variant="neural" size="lg" className="text-lg px-10 py-5 h-auto">
                <Play className="mr-3 w-5 h-5" />
                Neural Network Demo
              </Button>
            </div>

            {/* Enhanced metrics with AI focus */}
            <div className="grid grid-cols-3 gap-6 mt-12 mb-8">
              <div className="text-center scroll-animate glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <Cpu className="w-8 h-8 text-primary mx-auto mb-3" />
                <div ref={projectsRef} className="text-3xl font-bold text-primary font-display">{projectsCount}+</div>
                <div className="text-sm text-muted-foreground font-medium">AI Models</div>
              </div>
              <div className="text-center scroll-animate glass rounded-xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
                <Network className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div ref={reductionRef} className="text-3xl font-bold text-secondary font-display">{reductionCount}%</div>
                <div className="text-sm text-muted-foreground font-medium">Efficiency</div>
              </div>
              <div className="text-center scroll-animate glass rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300">
                <Bot className="w-8 h-8 text-accent mx-auto mb-3" />
                <div ref={countriesRef} className="text-3xl font-bold text-accent font-display">{countriesCount}+</div>
                <div className="text-sm text-muted-foreground font-medium">Clients</div>
              </div>
            </div>

            {/* Additional tech highlights */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Neural Networks</span>
              </div>
              <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-secondary/20">
                <Atom className="w-4 h-4 text-secondary" />
                <span className="text-sm text-muted-foreground">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-accent/20">
                <Bot className="w-4 h-4 text-accent" />
                <span className="text-sm text-muted-foreground">Machine Learning</span>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative scroll-animate z-20">
            <div className="glass-card p-8 border border-primary/30">
              <img 
                src={heroImage} 
                alt="Advanced AI Technology and Neural Networks" 
                className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-glow rounded-[2rem] opacity-20" />
              
              {/* Neural network overlay */}
              <div className="absolute inset-0 bg-gradient-mesh opacity-10 rounded-[2rem] animate-neural-pulse" />
            </div>
            
            {/* Advanced floating AI elements */}
            <div className="absolute -top-8 -right-8 glass rounded-2xl p-4 animate-pulse-glow border border-primary/40">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-4 animate-pulse-glow border border-secondary/40" style={{ animationDelay: '1s' }}>
              <Atom className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute top-1/2 -left-6 glass rounded-full p-4 animate-pulse-glow border border-accent/40" style={{ animationDelay: '2s' }}>
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <div className="absolute top-1/4 -right-6 glass rounded-full p-3 animate-pulse-glow border border-neural/40" style={{ animationDelay: '3s' }}>
              <Network className="w-5 h-5 text-neural" />
            </div>
            
            {/* Data streams */}
            <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-secondary/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;