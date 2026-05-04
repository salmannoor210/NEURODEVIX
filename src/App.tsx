import { motion } from "motion/react";
import { 
  Code2, Cpu, Smartphone, LineChart, ShoppingCart, 
  Server, Layers, Terminal, Mail, MapPin, ChevronRight, Zap, Globe, Shield,
  Palette, BrainCircuit, LayoutTemplate, Database, Activity, GitBranch, Plus
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const solutions = [
  { 
    title: "AI Chatbots", 
    icon: Cpu, 
    desc: "Intelligent conversational agents powered by state-of-the-art NLP models. Automate interactions and boost engagement.",
    tags: ["NLP", "LLM", "Automated"] 
  },
  { 
    title: "Mobile Applications", 
    icon: Smartphone, 
    desc: "High-performance, cross-platform mobile experiences for iOS and Android built on robust frameworks.",
    tags: ["iOS", "Android", "React Native"] 
  },
  { 
    title: "Crypto Trading Apps", 
    icon: LineChart, 
    desc: "Secure, real-time cryptocurrency trading platforms, algorithmic bots, and deep analytic tools.",
    tags: ["Web3", "Real-Time", "Secure"] 
  },
  { 
    title: "E-Commerce Solutions", 
    icon: ShoppingCart, 
    desc: "Scalable digital storefronts engineered for high transaction volume, ultra-fast speeds, and conversions.",
    tags: ["Scalable", "Fast", "Payments"] 
  },
  { 
    title: "Web APIs", 
    icon: Server, 
    desc: "Robust, secure, and lightning-fast RESTful and GraphQL backend services designed for high availability.",
    tags: ["REST", "GraphQL", "Microservices"] 
  },
  { 
    title: "ERP Systems", 
    icon: Layers, 
    desc: "Comprehensive enterprise resource planning systems to automate, track, and streamline your entire business ops.",
    tags: ["Automation", "Enterprise", "Data"] 
  }
];

const leadership = [
  { 
    name: "Salman Noor", 
    role: "CEO & Head of Development", 
    description: "Directing technical strategies, complex system architectures, and executing high-level growth initiatives across the agency.",
    align: "left"
  },
  { 
    name: "Wania Shahid", 
    role: "COO & Head of Development", 
    description: "Orchestrating operations down to the microsecond and co-leading development teams to deliver cutting-edge, scalable solutions.",
    align: "right"
  }
];

const teamMembers = [
  { name: "Muneeb Aslam", role: "Lead Graphic Designer", icon: Palette },
  { name: "Zain Ahmed", role: "AI & ML Engineer", icon: BrainCircuit },
  { name: "Ayesha Tariq", role: "Frontend Architect", icon: LayoutTemplate },
  { name: "Umer Farooq", role: "Backend / Cloud", icon: Database },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
        <div className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 w-full border-b border-emerald-500/10 bg-slate-950/70 backdrop-blur-xl z-50"
        >
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 text-emerald-400 font-display font-bold text-xl tracking-wider hover:text-emerald-300 transition-colors cursor-pointer">
              <Terminal className="w-6 h-6" />
              <span>NEURODEVIX</span>
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm font-mono text-slate-400">
              <a href="#about" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>01. About</a>
              <a href="#solutions" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>02. Solutions</a>
              <a href="#team" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>03. Team</a>
              <a href="#contact" className="px-5 py-2.5 border border-emerald-500/30 text-emerald-400 shadow-[inset_0_0_10px_rgba(16,185,129,0.1)] rounded hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all uppercase tracking-wider text-xs">
                Connect With Us
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Header Spacer */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-20 px-6 min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl relative z-10"
          >

            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Architecting the <br/>
              <span className="text-emerald-400 text-glow">Digital Future.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
              We are an ultra-high-tech development agency delivering bleeding-edge solutions. 
              From intelligent AI networks to high-frequency crypto trading algorithms, we build technology that redefines boundaries.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5">
              <a href="#solutions" className="px-8 py-4 bg-emerald-500 text-slate-950 font-display font-bold tracking-wide rounded hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center gap-2">
                EXPLORE SYSTEMS <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-slate-900/80 backdrop-blur border border-emerald-500/30 text-emerald-400 font-display font-bold tracking-wide rounded hover:bg-emerald-500/10 transition-all flex items-center gap-2">
                <Activity className="w-5 h-5" /> Contact With Us
              </a>
            </motion.div>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 font-mono text-xs"
          >
            <span className="tracking-widest">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
          </motion.div>
        </section>

        {/* Identity & Experience */}
        <section id="about" className="py-32 px-6 border-y border-emerald-500/10 bg-slate-900/30 relative overflow-hidden">
          {/* Decorative lines */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent max-md:hidden"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              <motion.div variants={slideLeft} className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-6">
                  <div className="w-12 h-12 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold text-white">
                      <span className="text-emerald-400">5+ Years</span> active.
                    </h2>
                    <p className="text-slate-500 font-mono text-xs mt-1 uppercase tracking-wider">Unrelenting Innovation</p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  At Neurodevix, we don't just write code; we engineer connected ecosystems. Our agency was founded on the principle of pushing technological boundaries. Over the past half-decade, we've transformed complex problems into elegant, highly scalable digital infrastructures.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                    <Code2 className="w-5 h-5 text-emerald-500"/>
                    <span className="font-mono text-sm text-slate-300">Next-Gen Stacks</span>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                    <Globe className="w-5 h-5 text-emerald-500"/>
                    <span className="font-mono text-sm text-slate-300">Global Scale</span>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                    <Shield className="w-5 h-5 text-emerald-500"/>
                    <span className="font-mono text-sm text-slate-300">Entity Security</span>
                  </div>
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded flex items-center gap-3 hover:border-emerald-500/30 transition-colors">
                    <GitBranch className="w-5 h-5 text-emerald-500"/>
                    <span className="font-mono text-sm text-slate-300">Agile Workflow</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={slideRight} className="relative order-1 lg:order-2 flex justify-center">
                <div className="aspect-square w-full max-w-md rounded-full border border-emerald-500/20 flex items-center justify-center neon-border p-8 relative">
                  <div className="absolute inset-0 border-t-2 border-r border-emerald-400/80 rounded-full animate-spin" style={{ animationDuration: '6s', animationTimingFunction: 'linear' }}></div>
                  <div className="absolute inset-8 border-b-2 border-l border-emerald-500/50 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse', animationTimingFunction: 'linear' }}></div>
                  <div className="absolute inset-16 border-t-2 border-emerald-600/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
                  
                  <div className="text-center z-10 bg-slate-950/80 backdrop-blur w-full h-full rounded-full border border-emerald-500/30 flex flex-col items-center justify-center shadow-[inset_0_0_50px_rgba(16,185,129,0.1)]">
                     <span className="block text-7xl font-display font-bold text-white mb-2 text-glow">5<span className="text-emerald-400">+</span></span>
                     <span className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase">Years Active</span>
                  </div>
                  
                  {/* Decorative nodes */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-950 border-2 border-emerald-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-slate-950 border-2 border-emerald-400 rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-32 px-6 max-w-7xl mx-auto relative">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-20 text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
               <span className="h-px w-8 bg-emerald-500/50"></span>
               <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase">// System Capabilities</h2>
               <span className="h-px w-8 bg-emerald-500/50"></span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Technological Arsenal</h3>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group p-8 rounded bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden backdrop-blur-sm shadow-xl">
                {/* Hover gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center mb-8 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                    <item.icon className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-emerald-500/20 group-hover:text-emerald-400/80 rounded transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-6 border-y border-emerald-500/10 bg-slate-900/30 relative">
          <div className="max-w-7xl mx-auto">
             <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="mb-20 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                 <span className="h-px w-8 bg-emerald-500/50"></span>
                 <h2 className="text-emerald-400 font-mono text-sm tracking-widest uppercase">// Core Directives</h2>
                 <span className="h-px w-8 bg-emerald-500/50"></span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white">The Neurodevix Syndicate</h3>
            </motion.div>

            {/* Leadership */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {leadership.map((leader, idx) => (
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={leader.align === "left" ? slideLeft : slideRight}
                  key={idx} className="p-10 border border-emerald-500/20 bg-slate-950/80 rounded relative neon-border group hover:border-emerald-500/40 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 group-hover:text-emerald-400 transition-all">
                    <Terminal className="w-24 h-24" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-3xl font-display font-bold text-white mb-2">{leader.name}</h4>
                    <p className="text-emerald-400 font-mono text-sm mb-6 pb-6 border-b border-slate-800">{leader.role}</p>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-sm">{leader.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Operatives Grid containing specific team + "+7 More" circle */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"
            >
              {teamMembers.map((member, idx) => (
                <motion.div key={idx} variants={fadeUp} className="p-6 border border-slate-800 bg-slate-900/80 rounded hover:border-emerald-500/40 hover:bg-slate-900 transition-all flex flex-col justify-center text-center items-center group">
                   <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                     <member.icon className="text-emerald-500 w-6 h-6 group-hover:scale-110 transition-transform" />
                   </div>
                   <h5 className="font-display font-bold text-slate-200 mb-2 group-hover:text-emerald-300 transition-colors text-lg">{member.name}</h5>
                   <p className="text-xs font-mono text-slate-500 uppercase tracking-tight">{member.role}</p>
                </motion.div>
              ))}
              
              {/* +7 More Circle badge format */}
              <motion.div variants={fadeUp} className="p-6 border border-emerald-500/20 border-dashed bg-emerald-950/20 rounded hover:bg-emerald-900/20 transition-all flex flex-col justify-center text-center items-center group cursor-default shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]">
                 <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 mb-5 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
                   <div className="absolute inset-0 border border-emerald-400 rounded-full animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}></div>
                   <Plus className="text-emerald-400 w-5 h-5 absolute ml-[-18px]" strokeWidth={3} />
                   <span className="text-3xl font-display font-bold text-emerald-400 ml-3">7</span>
                 </div>
                 <h5 className="text-xs font-mono text-emerald-400/80 uppercase tracking-[0.2em]">More Operatives</h5>
                 <p className="text-[10px] text-slate-500 mt-2">Expansion Pack</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact */}
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center relative">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-emerald-500/50"></div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto border border-emerald-500/20 p-12 md:p-16 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600"></div>
              
              <h2 className="text-4xl font-display font-bold text-white mb-6">Start Communication</h2>
              <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">Ready to deploy your next big enterprise system? Our encrypted channels are open for new transmissions.</p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center text-left">
                <a href="mailto:salmannooroff@gmail.com" className="flex-1 flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group">
                  <div className="bg-emerald-500/10 p-4 rounded-full group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300 border border-emerald-500/20">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg md:text-sm lg:text-lg">salmannooroff@gmail.com</p>
                  </div>
                </a>

                <div className="flex-1 flex items-center gap-4 text-left border border-slate-800 bg-slate-950 p-6 rounded-lg">
                   <div className="bg-slate-900 p-4 rounded-full border border-slate-800">
                    <MapPin className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                     <p className="font-display font-semibold text-slate-300">H No 150, Shamsi Colony, Karachi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-32 pt-8 border-t border-slate-800/50 text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono flex-wrap">
              <p>Â© {new Date().getFullYear()} NEURODEVIX. ALL SYSTEMS OPERATIONAL.</p>
            </div>
        </section>
      </div>
    </div>
  );
}
