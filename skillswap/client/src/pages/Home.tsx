import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Zap, Users, Brain, Palette, MessageSquare, Database, Cpu, ArrowRight, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * SkillSwap Home Page
 * Design: Futuristic Depth & Motion
 * - 3D layered interface with neon cyan/purple accents
 * - 90% technical tools showcase
 * - One-to-one peer connection focus
 * - Shyam AI integration
 */

export default function Home() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  // Technical tools showcase (90% of content)
  const technicalTools = [
    {
      id: 1,
      name: "Code Editor",
      description: "Real-time collaborative coding environment with syntax highlighting",
      icon: Code,
      category: "Development",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      name: "AI Assistant",
      description: "Shyam AI guides your learning journey with personalized insights",
      icon: Brain,
      category: "AI Learning",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Design Studio",
      description: "Create, share, and learn design with real-time collaboration",
      icon: Palette,
      category: "Design",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      name: "Database Tools",
      description: "Explore SQL, NoSQL, and data modeling with live examples",
      icon: Database,
      category: "Backend",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      name: "System Architecture",
      description: "Learn scalable system design through interactive diagrams",
      icon: Cpu,
      category: "Architecture",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      name: "Communication Hub",
      description: "Video, audio, and text chat for seamless peer-to-peer learning",
      icon: MessageSquare,
      category: "Connection",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const skillCategories = [
    { name: "Programming", skills: ["Python", "JavaScript", "React", "Node.js", "Go"] },
    { name: "Design", skills: ["UI/UX", "Figma", "Web Design", "Animation", "Branding"] },
    { name: "Communication", skills: ["Public Speaking", "Writing", "Negotiation", "Leadership"] },
    { name: "Data", skills: ["SQL", "Analytics", "Machine Learning", "Data Visualization"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">SkillSwap</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition">Explore</button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition">How It Works</button>
            <Button className="tech-button text-xs">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663474595594/EwqDm29rPM8bKGuVVLkvgn/hero-3d-neon-o5dhE4ub4p2H6SaXdxXhpT.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Floating orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: "1s" }}></div>

        {/* Hero content */}
        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Exchange Skills, Not Money
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect one-to-one with peers to learn coding, design, communication, and technical tools. Powered by Shyam AI, the platform that breaks learning barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="tech-button">Start Learning Now</Button>
              <Button variant="outline" className="px-6 py-3 rounded-lg border-cyan-500/50 hover:bg-cyan-500/10">
                Watch Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 text-center">
            <div className="card-3d p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
              <div className="text-2xl font-bold gradient-text">50K+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="card-3d p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
              <div className="text-2xl font-bold gradient-text">1000+</div>
              <div className="text-sm text-muted-foreground">Skill Exchanges</div>
            </div>
            <div className="card-3d p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
              <div className="text-2xl font-bold gradient-text">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tools Showcase - 90% Focus */}
      <section className="relative py-20 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Powerful Tools for Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              90% of SkillSwap is dedicated to cutting-edge technical tools that make peer-to-peer learning seamless and effective.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="stagger-item card-3d p-6 rounded-xl bg-card/50 backdrop-blur border border-border hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredTool(index)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Glow effect on hover */}
                  {hoveredTool === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  )}

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-foreground">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {tool.category}
                      </span>
                      <ArrowRight className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill Exchange Visualization */}
      <section className="relative py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visualization */}
            <div className="relative h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474595594/EwqDm29rPM8bKGuVVLkvgn/skill-exchange-visual-hD9XvCYBaqLkBRtSaxzFSt.webp"
                alt="Skill Exchange"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                One-to-One Peer Connections
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SkillSwap connects learners directly with mentors. No intermediaries, no fees—just genuine knowledge exchange between passionate individuals.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time video, audio, and screen sharing",
                  "Personalized learning paths with Shyam AI",
                  "Verified skill badges and achievements",
                  "Community-driven feedback and ratings",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="tech-button mt-8">Explore Connections</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="relative py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Learn Any Skill</h2>
            <p className="text-lg text-muted-foreground">From programming to communication—SkillSwap has it all</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="stagger-item p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, sidx) => (
                    <div key={sidx} className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shyam AI Section */}
      <section className="relative py-20 bg-gradient-to-b from-background via-purple-500/5 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-cyan-400">AI-Powered Learning</span>
              </div>

              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Meet Shyam AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your intelligent learning companion. Shyam AI analyzes your progress, suggests optimal learning paths, and connects you with the perfect peer mentor for your goals.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Personalized learning recommendations",
                  "Real-time skill gap analysis",
                  "Optimal mentor matching algorithm",
                  "Progress tracking and insights",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-purple-500" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="tech-button">Chat with Shyam AI</Button>
            </div>

            {/* Right: Avatar */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474595594/EwqDm29rPM8bKGuVVLkvgn/shyam-ai-avatar-a6xUFPmbgheUizH8n5RatP.webp"
                alt="Shyam AI"
                className="w-64 h-64 object-contain relative z-10 float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 bg-gradient-to-b from-background to-card/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">How SkillSwap Works</h2>
            <p className="text-lg text-muted-foreground">40% education content, 90% powerful tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Create Profile", desc: "Set your skills and learning goals" },
              { step: "2", title: "Find Mentor", desc: "AI matches you with perfect peer" },
              { step: "3", title: "Connect", desc: "Use our tools for real-time learning" },
              { step: "4", title: "Grow", desc: "Exchange skills and earn badges" },
            ].map((item, idx) => (
              <div key={idx} className="stagger-item relative">
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <ArrowRight className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-cyan-500 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners exchanging skills without barriers. Your first connection is just a click away.
          </p>
          <Button className="tech-button text-lg px-8 py-4">Get Started Free</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border bg-background/50 backdrop-blur">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-cyan-500" />
                <span className="font-bold gradient-text">SkillSwap</span>
              </div>
              <p className="text-sm text-muted-foreground">Exchange skills, not money</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Resources", links: ["Docs", "API", "Support"] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-cyan-400 transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 SkillSwap. All rights reserved. Powered by Shyam AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
