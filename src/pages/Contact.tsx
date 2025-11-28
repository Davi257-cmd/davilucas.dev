import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Linkedin, Github, MessageSquare, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("project");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "I'll get back to you within 24 hours.",
    });
  };

  const faqs = [
    {
      question: "How much does a project cost?",
      answer:
        "Project costs vary based on scope and complexity. Booking systems start from $5,000, AI solutions from $4,000, and landing pages from $1,500. Contact me for a custom quote.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes! I work primarily remote but can accommodate hybrid arrangements for local clients. I'm experienced in collaborating with distributed teams globally.",
    },
    {
      question: "What's the minimum delivery time?",
      answer:
        "Simple landing pages can be delivered in 1-2 weeks. More complex projects like booking systems typically take 4-8 weeks. Rush delivery is available for urgent projects.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes! All projects include initial support period. Ongoing maintenance packages are available starting from $500/month with bug fixes, updates, and feature additions.",
    },
    {
      question: "What's your work process?",
      answer:
        "I follow a 7-step process: Discovery → Proposal → Planning → Development → Testing → Deployment → Support. You'll receive regular updates and previews throughout.",
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
              Let's <span className="text-gradient-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a client with a project or a recruiter with an opportunity,
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <Card className="p-8 glass border-border">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="project">Project</TabsTrigger>
                    <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                  </TabsList>

                  {/* Project Form */}
                  <TabsContent value="project">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Project Name</Label>
                        <Input id="company" placeholder="Acme Inc." />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-type">Project Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web">Web Application</SelectItem>
                              <SelectItem value="mobile">Mobile App</SelectItem>
                              <SelectItem value="ai">AI/ML Solution</SelectItem>
                              <SelectItem value="booking">Booking System</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                              <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                              <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                              <SelectItem value="25k+">$25k+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Tell me about your project..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-primary border-0"
                      >
                        Request Quote
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Recruiter Form */}
                  <TabsContent value="recruiter">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="recruiter-name">Your Name</Label>
                          <Input id="recruiter-name" placeholder="Jane Smith" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="recruiter-email">Email</Label>
                          <Input
                            id="recruiter-email"
                            type="email"
                            placeholder="jane@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company</Label>
                          <Input id="company-name" placeholder="Tech Corp" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position">Position</Label>
                          <Input
                            id="position"
                            placeholder="Senior Full-Stack Developer"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tech-stack">Required Tech Stack</Label>
                          <Input
                            id="tech-stack"
                            placeholder="React, Python, AI/ML"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary">Salary Range</Label>
                          <Input id="salary" placeholder="$80k - $120k" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="job-description">Job Description</Label>
                        <Textarea
                          id="job-description"
                          placeholder="Tell me about the role..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-secondary border-0"
                      >
                        Send Opportunity
                      </Button>
                    </form>
                  </TabsContent>

                  {/* General Form */}
                  <TabsContent value="general">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="general-name">Name</Label>
                          <Input id="general-name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="general-email">Email</Label>
                          <Input
                            id="general-email"
                            type="email"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">
                              Technical Consultation
                            </SelectItem>
                            <SelectItem value="collaboration">
                              Collaboration Opportunity
                            </SelectItem>
                            <SelectItem value="speaking">
                              Speaking/Teaching
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" variant="outline">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 glass border-primary/30">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@davilucas.dev"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@davilucas.dev</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground">Connect with me</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">View my code</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="p-6 glass border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Response Time</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Typically within 24 hours during business days
                </p>
              </Card>

              <Card className="p-6 glass border-border">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-bold">Availability</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Open to new projects</p>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green mt-1.5" />
                  <span className="text-sm text-muted-foreground">
                    Currently accepting freelance work
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <Card className="p-8 glass border-border max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
