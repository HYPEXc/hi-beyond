import { Button } from "@/components/ui/button";
import { Brain, Cog, Leaf, Shield, ArrowRight, Zap, Target, Layers, Lock, RefreshCw } from "lucide-react";
import aiBrainImage from "@/assets/ai-brain.jpg";
import roboticsImage from "@/assets/robotics-automation.jpg";
import sustainableImage from "@/assets/sustainable-tech.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  useScrollAnimation();
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Systems",
      description: "Smart automation, predictive analytics & machine learning AI products",
      image: aiBrainImage,
      features: [
        "Predictive Analytics",
        "Intelligent Process Automation", 
        "Visual Recognition Systems",
        "Data Intelligence Platforms"
      ]
    },
    {
      icon: Cog,
      title: "Robotics & Automation",
      description: "Industrial, mechanical & sustainable infrastructure solutions",
      image: roboticsImage,
      features: [
        "Industrial Robotics",
        "Autonomous Mobile Systems",
        "Remote Inspection Solutions", 
        "Collaborative Robotics"
      ]
    },
    {
      icon: Leaf,
      title: "Sustainable Technology",
      description: "IoT, robotics & cloud solutions for tomorrow's challenges",
      image: sustainableImage,
      features: [
        "Smart Facility Solutions",
        "Green Technology Integration",
        "Digital Twin Technology",
        "Sustainable Infrastructure"
      ]
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-2 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
            <br />
            <span className="text-foreground">for Modern Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your operations with our integrated approach to AI, robotics, and sustainable engineering
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card group scroll-animate"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Service Icon */}
              <div className="flex items-center mb-4">
                <div className="glass rounded-xl p-3 mr-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Digital Transformation Section */}
        <div className="glass-card text-center p-12 scroll-animate">
          <div className="flex items-center justify-center space-x-2 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>Digital Transformation</span>
          </div>
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-foreground">Modernize for the </span>
            <span className="text-primary">Technology Era</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We guide your journey from outdated systems to streamlined, secure, and scalable digital operations 
            – with clear ROI at every stage.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: "Technology Strategy", icon: Target },
              { name: "System Integration", icon: Layers }, 
              { name: "Cybersecurity Solutions", icon: Lock },
              { name: "Legacy Modernization", icon: RefreshCw }
            ].map((item, index) => (
              <div key={index} className="glass p-4 rounded-xl">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-background" />
                </div>
                <h4 className="font-semibold text-foreground">{item.name}</h4>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" className="px-12">
            Start Your Transformation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;