import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, Globe, ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();
  const values = [
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Pushing boundaries with AI R&D and cutting-edge solutions"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Engineering excellence down to the micron level"
    },
    {
      icon: Globe,
      title: "Sustainability", 
      description: "Tech that serves people and the planet responsibly"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaborating to amplify your success and growth"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", suffix: "" },
    { value: "40", label: "Cost Reduction", suffix: "%" },
    { value: "100", label: "Countries Served", suffix: "+" },
    { value: "18", label: "Average ROI Timeline", suffix: " months" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-glow">
      <div className="container mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-2 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>About Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Fusing Advanced </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI</span>
            <br />
            <span className="text-foreground">with World-Class </span>
            <span className="text-primary">Engineering</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            At AI Tech & Engineering, we solve complex global challenges by building smarter, faster, 
            and sustainable systems that redefine industry standards. From our roots in logistics and trade, 
            we've evolved into pioneers of AI-driven engineering solutions.
          </p>

          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Evolution</h3>
            <p className="text-lg text-muted-foreground">
              Today, we harness data, automation, and human expertise to create transformative solutions 
              across sectors, helping businesses work smarter, grow faster, and build resilient futures.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our Core </span>
            <span className="text-primary">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
              key={index} 
              className="glass-card text-center scroll-animate"
              >
                <div className="glass rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="glass-card p-12 mb-20 scroll-animate">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Measurable </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center scroll-animate">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-foreground">Ready to Transform Your </span>
              <span className="text-primary">Business?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join hundreds of companies worldwide who trust us to deliver intelligent solutions 
              that drive efficiency, innovation, and sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8">
                Schedule Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="glass" size="lg" className="px-8">
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;