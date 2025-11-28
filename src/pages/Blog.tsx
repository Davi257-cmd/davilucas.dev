import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Calendar, Search, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "Building Scalable Booking Systems",
      excerpt:
        "Best practices for creating appointment scheduling platforms that handle thousands of bookings daily.",
      category: "Development",
      readTime: "8 min",
      date: "2024-01-15",
      image: "gradient-1",
    },
    {
      title: "LangChain in Production: Lessons Learned",
      excerpt:
        "Real-world insights from deploying AI agents using LangChain and LangGraph in production environments.",
      category: "AI/ML",
      readTime: "12 min",
      date: "2024-01-10",
      image: "gradient-2",
    },
    {
      title: "React Performance Optimization Guide",
      excerpt:
        "Advanced techniques to improve React application performance and reduce bundle size by 40%.",
      category: "Frontend",
      readTime: "10 min",
      date: "2024-01-05",
      image: "gradient-3",
    },
    {
      title: "Full-Stack Development in 2024",
      excerpt:
        "The modern tech stack and best practices for building scalable web applications this year.",
      category: "Development",
      readTime: "15 min",
      date: "2023-12-28",
      image: "gradient-4",
    },
  ];

  const allArticles = [
    {
      title: "Mastering TypeScript: Advanced Patterns",
      category: "Frontend",
      readTime: "6 min",
      date: "2023-12-20",
    },
    {
      title: "AI Chatbots: From Prototype to Production",
      category: "AI/ML",
      readTime: "9 min",
      date: "2023-12-15",
    },
    {
      title: "Database Optimization for High Traffic",
      category: "Backend",
      readTime: "11 min",
      date: "2023-12-10",
    },
    {
      title: "Mobile App Development with React Native",
      category: "Mobile",
      readTime: "7 min",
      date: "2023-12-05",
    },
    {
      title: "Automated Testing Strategies",
      category: "QA",
      readTime: "8 min",
      date: "2023-11-30",
    },
    {
      title: "E-commerce Conversion Rate Optimization",
      category: "Business",
      readTime: "5 min",
      date: "2023-11-25",
    },
  ];

  const gradients = [
    "from-electric-blue to-neon-purple",
    "from-vibrant-cyan to-electric-blue",
    "from-electric-pink to-neon-purple",
    "from-neon-green to-vibrant-cyan",
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
              Tech <span className="text-gradient-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Thoughts on development, AI, and building scalable solutions
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-muted/50 border-border"
                />
              </div>
            </div>
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <Card
                  key={index}
                  className="overflow-hidden glass border-border hover:border-primary transition-all group cursor-pointer"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} p-6 flex items-end`}
                  >
                    <Badge className="bg-background/20 backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* All Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
            <div className="space-y-4">
              {allArticles.map((article, index) => (
                <Card
                  key={index}
                  className="p-6 glass border-border hover:border-primary transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <Card className="p-12 text-center bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Subscribe to <span className="text-gradient-primary">Weekly Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest tips on full-stack development, AI, and building scalable
                solutions. Join 500+ developers.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="bg-background/50"
                />
                <Button size="lg" className="bg-gradient-primary border-0 shrink-0">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
