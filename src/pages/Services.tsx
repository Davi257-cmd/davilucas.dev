import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Calendar, Bot, Star, Zap, Shield } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Rocket,
      title: "Full-Stack Development",
      description: "Complete web & mobile solutions from concept to deployment",
      includes: [
        "React/React Native Frontend",
        "Python/Node.js Backend",
        "Database Design & Optimization",
        "API Development & Integration",
        "Deployment & DevOps Setup",
        "Automated Testing Suite",
      ],
      price: "Custom Quote",
      timeline: "2-12 weeks",
      gradient: "from-electric-blue to-neon-purple",
    },
    {
      icon: Calendar,
      title: "Booking Systems",
      description: "Specialized scheduling solutions for clinics, salons & services",
      includes: [
        "Smart Scheduling Engine",
        "SMS/Email Notifications",
        "Payment Integration",
        "Admin Dashboard",
        "Mobile App for Clients",
        "Analytics & Reporting",
        "24/7 Support (initial period)",
      ],
      price: "From $5,000",
      timeline: "4-8 weeks",
      gradient: "from-neon-green to-vibrant-cyan",
      featured: true,
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description: "Intelligent automation with LangChain/LangGraph",
      includes: [
        "Custom AI Agent Development",
        "Natural Language Processing",
        "Data Integration & RAG",
        "Multi-Platform Support",
        "Conversation Analytics",
        "Continuous Learning Setup",
      ],
      price: "From $4,000",
      timeline: "2-6 weeks",
      gradient: "from-electric-pink to-neon-purple",
    },
  ];

  const addOnServices = [
    {
      name: "Landing Pages",
      description: "High-converting React landing pages",
      price: "From $1,500",
    },
    {
      name: "E-commerce Setup",
      description: "Shopify/WordPress store configuration",
      price: "From $2,000",
    },
    {
      name: "QA Automation",
      description: "Cypress testing suite implementation",
      price: "$100/hour",
    },
    {
      name: "Technical Consulting",
      description: "Architecture review & optimization",
      price: "$120/hour",
    },
    {
      name: "Code Review",
      description: "Security & performance audit",
      price: "$80/hour",
    },
    {
      name: "Maintenance & Support",
      description: "Ongoing updates & bug fixes",
      price: "From $500/month",
    },
  ];

  const workflowSteps = [
    { number: "01", title: "Discovery", duration: "1-3 days" },
    { number: "02", title: "Proposal & Quote", duration: "1-2 days" },
    { number: "03", title: "Planning & Design", duration: "3-7 days" },
    { number: "04", title: "Development", duration: "Varies" },
    { number: "05", title: "Testing & QA", duration: "3-5 days" },
    { number: "06", title: "Deployment", duration: "1-2 days" },
    { number: "07", title: "Support", duration: "Ongoing" },
  ];

  const testimonials = [
    {
      quote: "Davi delivered our booking system ahead of schedule. Excellent work!",
      author: "Dr. Silva",
      company: "Clinic Health",
      rating: 5,
    },
    {
      quote: "The AI chatbot increased our customer engagement by 300%.",
      author: "Maria Costa",
      company: "E-commerce Store",
      rating: 5,
    },
    {
      quote: "Professional, responsive, and highly skilled. Highly recommend!",
      author: "João Santos",
      company: "Tech Startup",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Services & <span className="text-gradient-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for your needs. Transparent pricing, exceptional
              results.
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-8 glass border-border hover:border-primary transition-all h-full flex flex-col ${
                    service.featured ? "border-primary shadow-lg scale-105" : ""
                  }`}
                >
                  {service.featured && (
                    <Badge className="mb-4 bg-gradient-primary border-0 w-fit">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="mb-6 flex-1">
                    <p className="text-sm font-semibold mb-3 text-primary">Includes:</p>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Price</span>
                      <span className="text-xl font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                    <Button
                      className={
                        service.featured
                          ? "w-full bg-gradient-primary border-0"
                          : "w-full"
                      }
                      variant={service.featured ? "default" : "outline"}
                      asChild
                    >
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Add-on <span className="text-gradient-secondary">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOnServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 glass border-border hover:border-primary transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold">{service.name}</h3>
                    <Zap className="w-5 h-5 text-neon-purple shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Work <span className="text-gradient-primary">Process</span>
            </h2>
            <div className="grid md:grid-cols-7 gap-4">
              {workflowSteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 glass border-border hover:border-primary transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.duration}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Client <span className="text-gradient-secondary">Testimonials</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 glass border-border hover:border-primary transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-neon-green text-neon-green"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <Card className="p-12 text-center bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free consultation and custom quote. No commitment required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary border-0" asChild>
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portfolio">View Past Work</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
