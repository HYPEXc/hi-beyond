import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Brain, Cpu, Zap } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:contact@aitecheng.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-neural-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-3 text-primary text-sm font-medium tracking-wider mb-6">
            <Brain className="w-5 h-5 animate-pulse-glow" />
            <span className="font-display">Get In Touch</span>
            <div className="w-8 h-px bg-gradient-primary" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-display">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge AI solutions? 
            Our team of experts is here to turn your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 scroll-animate">
            <div className="glass-card p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-display">Connect With Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@aitecheng.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="relative mt-8 pt-8 border-t border-primary/20">
                <div className="flex justify-center space-x-6">
                  <div className="glass rounded-full p-3 animate-pulse-glow border border-primary/30">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <div className="glass rounded-full p-3 animate-pulse-glow border border-secondary/30" style={{ animationDelay: '1s' }}>
                    <Brain className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="glass rounded-full p-3 animate-pulse-glow border border-accent/30" style={{ animationDelay: '2s' }}>
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate">
            <form onSubmit={handleSubmit} className="glass-card p-8 border border-primary/20 space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground font-display">Send Us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 transition-all duration-300"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject *</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 transition-all duration-300"
                  placeholder="Project inquiry, consultation, etc."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background/50 min-h-[120px] resize-none transition-all duration-300"
                  placeholder="Tell us about your project, goals, and how we can help..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full glass border border-primary/30 hover:border-primary/50 bg-gradient-primary/10 hover:bg-gradient-primary/20 text-primary hover:text-primary transition-all duration-300"
                size="lg"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;