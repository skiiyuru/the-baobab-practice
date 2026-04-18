import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Users2, Compass, TrendingUp, Scaling, Sprout, TreeDeciduous, Leaf, Flower, ChevronDown, Scale, Flame, HeartHandshake, ChartNoAxesCombined } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimateIn } from './AnimateIn';
import journeyImg from '../../assets/journey.jpeg';

const services = [
  {
    icon: AlertCircle,
    title: 'Crisis Response',
    subtitle: 'Adaptive Change Under Pressure',
    description: 'Rapid transformation when time is compressed, stakes are high, and survival feels uncertain.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: Users2,
    title: 'Leadership Transition',
    subtitle: 'Navigating Change with Wisdom',
    description: 'Guide organizations through planned successions, unexpected departures, or structural changes.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Compass,
    title: 'Cultural Transition',
    subtitle: 'Embodying New Mission & Values',
    description: 'Shift from stated to lived mission and values through collective identity evolution.',
    iconColor: 'text-foreground',
  },
  {
    icon: TrendingUp,
    title: 'Organizational Revival',
    subtitle: 'Rebuilding Trust & Performance',
    description: 'Restore trust, authenticity, and ownership as foundations for sustainable performance.',
    iconColor: 'text-brand-green',
  },
  {
    icon: Scaling,
    title: 'Scaling',
    subtitle: 'Growth Without Losing Soul',
    description: 'Manage rapid growth while preserving culture, quality, and sustainable systems.',
    iconColor: 'text-brand-clay',
  },
];

const phases = [
  {
    icon: Sprout,
    title: 'ROOT',
    subtitle: 'Diagnose & Align',
    duration: '4–6 Weeks',
    purpose: 'Understand the real challenge beneath the symptoms and establish shared purpose.',
    activities: [
      'Organizational immersion through listening sessions and team shadowing',
      'Distinguish between technical and adaptive challenges',
      'Co-create vision of thriving and establish psychological safety',
    ],
    deliverable: 'Adaptive Challenge Map & Shared Commitment Compact',
    phaseColor: 'bg-phase-root-bg border-phase-root-border text-phase-root-text',
  },
  {
    icon: TreeDeciduous,
    title: 'TRUNK',
    subtitle: 'Build Foundation',
    duration: '8–12 Weeks',
    purpose: 'Develop adaptive capacity through safe-to-fail experiments.',
    activities: [
      'Build leadership containers with systemic thinking and feedback rituals',
      'Design small, reversible experiments for new behaviors',
      'Workshops on adaptive leadership and courageous conversations',
    ],
    deliverable: 'Experimental Learning Portfolio & Leadership Practice Blueprint',
    phaseColor: 'bg-phase-trunk-bg border-phase-trunk-border text-phase-trunk-text',
  },
  {
    icon: Leaf,
    title: 'BRANCH',
    subtitle: 'Scale & Integrate',
    duration: '12–24 Weeks',
    purpose: 'Spread successful practices across the organization.',
    activities: [
      'Distill lessons from experiments and create success narratives',
      'Align structures, develop internal coaches, adjust incentives',
      'Build peer learning communities and embed adaptive routines',
    ],
    deliverable: 'Integration Roadmap & Internal Capability Network',
    phaseColor: 'bg-phase-branch-bg border-phase-branch-border text-phase-branch-text',
  },
  {
    icon: Flower,
    title: 'CANOPY',
    subtitle: 'Sustain & Evolve',
    duration: 'Ongoing',
    purpose: "Embed adaptive capacity into the organization's DNA.",
    activities: [
      'Regular health checks, renewal ceremonies, coaching circles',
      'Develop next-gen leaders and document guiding principles',
      'Link to broader learning communities and prepare for future challenges',
    ],
    deliverable: 'Sustainable Practice Playbook & Evolution Readiness Assessment',
    phaseColor: 'bg-phase-canopy-bg border-phase-canopy-border text-phase-canopy-text',
  },
];

const distinctivePractices = [
  {
    icon: Scale,
    numeral: '01',
    title: 'The "Both/And" Method',
    description: 'Balance competing values, stability & agility, performance & well-being, individual & collective success, legacy & innovation.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: Flame,
    numeral: '02',
    title: 'Heat Regulation',
    description: 'Manage the "productive heat" of change, avoid complacency and burnout, foster engagement and creativity.',
    iconColor: 'text-brand-green',
  },
  {
    icon: HeartHandshake,
    numeral: '03',
    title: 'Loss Acknowledgement Rituals',
    description: 'Honor what is being left behind, grieve endings, and create psychological safety for new beginnings.',
    iconColor: 'text-brand-clay',
  },
  {
    icon: ChartNoAxesCombined,
    numeral: '04',
    title: 'Good Enough for Now, Safe Enough to Try',
    description: 'Encourage rapid prototyping, value learning over perfection, and treat failure as data.',
    iconColor: 'text-brand-green',
  },
];



export function Services() {
  return (
    <section id="services" className="bg-brand-light">
      <div className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className='mb-16'>
          <AnimateIn>
            <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight  mb-4 text-center">
              Architectures for <span className="font-serif italic font-normal text-brand-green">Change</span>
            </h2> 
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-xl text-center mx-auto">
            We will not just help you solve today's problem. We will help you build the capacity to solve tomorrow's unknown challenges.
            </p>
          </AnimateIn>
          </div>

          <div className="w-full">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimateIn key={index} delay={index * 0.1} variant="fade-up">
                  <motion.div 
                    initial="idle"
                    whileHover="hover"
                    className="group relative flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-12 border-t border-border last:border-b"
                  >
                    {/* Background hover highlight */}
                    <motion.div 
                      variants={{ idle: { scaleY: 0.8, opacity: 0 }, hover: { scaleY: 1, opacity: 1 } }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      style={{ originY: 0.5 }}
                      className="absolute inset-x-[-1.5rem] inset-y-0 bg-brand-light rounded-md z-0 pointer-events-none hidden lg:block"
                    />

                    <div className="relative z-10 flex flex-col lg:flex-row w-full gap-x-8 gap-y-4 lg:items-center">
                      {/* Column 1: Numeral & Icon */}
                      <div className="flex items-center gap-6 lg:w-[22%] w-full">
                        <motion.span 
                          variants={{
                            idle: { color: 'var(--resilience-clay)', opacity: 0.25, x: 0 },
                            hover: { color: 'var(--growth-green)', opacity: 0.9, x: 8 }
                          }}
                          transition={{ duration: 0.3 }}
                          className="font-headline font-light text-5xl lg:text-[4.5rem] shrink-0 w-[4.5rem] leading-none tabular-nums"
                        >
                           {String(index + 1).padStart(2, '0')}
                        </motion.span>
                        <motion.div
                          variants={{
                            idle: { scale: 1, rotate: 0 },
                            hover: { scale: 1.15, rotate: 12 }
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className={`size-10 lg:size-12 ${service.iconColor}`} />
                        </motion.div>
                      </div>

                      {/* Column 2: Title & Subtitle */}
                      <div className="lg:w-[38%] w-full pl-[6rem] lg:pl-0 mt-2 lg:mt-0">
                        <motion.h3 
                          variants={{ idle: { x: 0 }, hover: { x: 12 } }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="text-xl lg:text-2xl font-bold text-foreground mb-1 tracking-tight"
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          variants={{ idle: { x: 0 }, hover: { x: 12 } }}
                          transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                          className="text-brand-green font-serif italic text-lg opacity-90 m-0"
                        >
                          {service.subtitle}
                        </motion.p>
                      </div>

                      {/* Column 3: Description */}
                      <div className="lg:w-[40%] w-full pl-[6rem] lg:pl-0 mt-2 lg:mt-0">
                        <p className="text-muted-foreground leading-relaxed text-base lg:text-[1.05rem] max-w-lg group-hover:text-foreground transition-colors duration-300 m-0">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Break - Distilled */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Image */}
            <div className="w-full lg:w-7/12">
              <AnimateIn variant="fade-up" duration={0.8}>
                 <div className="rounded-2xl overflow-hidden shadow-sm">
                   <motion.div
                     whileHover={{ scale: 1.03 }}
                     transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                     className="size-full"
                   >
                     <ImageWithFallback
                       src={journeyImg}
                       alt="The Gathering Canopy - Collective strength through connection"
                       className="size-full object-cover"
                     />
                   </motion.div>
                 </div>
              </AnimateIn>
            </div>
            
            {/* Typography */}
            <div className="w-full lg:w-5/12 lg:pl-8">
               <AnimateIn delay={0.2} variant="fade-up">
                 <h3 className="text-4xl lg:text-5xl lg:leading-[1.1] font-headline tracking-tighter text-foreground mb-8">
                   Your Journey.<br />
                   <span className="font-serif italic text-brand-clay font-normal">Our Commitment.</span>
                 </h3>
                 
                 <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                   We walk alongside you, every step. Your organization knows its own terrain. We bring the tools, presence, and partnership to navigate it with clarity and confidence.
                 </p>
                 
                 <div className="pl-6 border-l-[3px] w-full max-w-lg border-brand-green/30">
                   <p className="text-lg font-medium text-foreground leading-relaxed mb-1">
                     No blueprints. No presets.<br />
                     Your path, your pace.<br />
                     Your change. Made to last.
                   </p>
                 </div>
               </AnimateIn>
            </div>

          </div>
        </div>
      </div>

      {/* The Baobab Growth Cycle — Asymmetric Editorial Timeline */}
      <div className="py-24 lg:py-36 bg-brand-light relative">
        {/* Subtle top border texture linking it to the previous section */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-clay/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             {/* Left - Sticky Intro */}
             <div className="lg:col-span-4 lg:sticky lg:top-32">
               <div>
                  <AnimateIn>
                    <p className="text-xs tracking-[0.2em] uppercase font-semibold text-brand-green/80 flex items-center gap-4 mb-4">
                       <span className="w-8 h-[2px] bg-brand-green/80"></span>
                       Our Process
                    </p>
                    <h3 className="text-4xl lg:text-6xl font-headline tracking-tight text-foreground mb-6 leading-[1.1]">
                      The Baobab<br/>Growth Cycle™
                    </h3>
                  </AnimateIn>
                  <AnimateIn delay={0.1}>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-sm m-0">
                      Cyclical, not linear. Authentic, sustainable growth requires patient development through distinct, living phases of learning.
                    </p>
                  </AnimateIn>
               </div>
             </div>

             {/* Right - The Immersive Timeline */}
             <div className="lg:col-span-8 relative">
                <div className="flex flex-col relative">
                  {/* Desktop Connecting Line Tracker */}
                  <div className="hidden md:block absolute left-[39px] lg:left-[47px] top-[40px] bottom-[100px] w-[2px] bg-brand-clay/10 z-0" />

                  {phases.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                       <div key={index} className="relative z-10 group flex flex-col md:flex-row md:items-start gap-4 lg:gap-10 pb-16 lg:pb-24">
                          
                          {/* Mobile Header (Hidden on Desktop) */}
                          <div className="flex items-center gap-4 md:hidden mb-4 relative bg-brand-light z-10">
                               <motion.div 
                                 className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-[4px] border-brand-light shadow-sm ${phase.phaseColor}`}
                               >
                                  <Icon className="size-6" />
                               </motion.div>
                               <div>
                                  <h4 className="text-xl font-headline font-semibold text-foreground m-0">
                                    {phase.title}
                                  </h4>
                                  <span className="text-[0.65rem] font-bold tracking-widest uppercase text-brand-green bg-brand-green/10 px-2 py-1 rounded-full w-fit block mt-1">
                                    {phase.duration}
                                  </span>
                               </div>
                          </div>

                          {/* Desktop Anchor Node Column */}
                          <div className="hidden md:flex flex-col items-center shrink-0 relative bg-brand-light pb-2">
                             <motion.div 
                               className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center relative z-10 border-[8px] border-brand-light shadow-sm bg-white ${phase.phaseColor}`}
                               whileHover={{ scale: 1.15, rotate: 12 }}
                               transition={{ type: "spring", stiffness: 300, damping: 15 }}
                             >
                                <Icon className="size-8 lg:size-10" />
                             </motion.div>
                          </div>
                          
                          {/* Data Column */}
                          <div className="flex-1 md:pt-4">
                             <AnimateIn delay={index * 0.1} variant="fade-up">

                                {/* Desktop Header */}
                                <div className="hidden md:block mb-8">
                                  <motion.div 
                                     className="flex items-center gap-4 mb-2 relative left-0"
                                     whileHover={{ x: 5 }}
                                     transition={{ duration: 0.2 }}
                                  >
                                      <h4 className="text-2xl lg:text-3xl font-headline font-semibold tracking-wide text-foreground m-0">
                                        {phase.title}
                                      </h4>
                                      <span className="text-xs font-bold tracking-widest uppercase text-brand-green bg-brand-green/10 px-3 py-1.5 rounded-full tabular-nums w-fit">
                                        {phase.duration}
                                      </span>
                                  </motion.div>
                                  <p className="text-xl lg:text-2xl font-serif italic text-muted-foreground m-0">
                                    {phase.subtitle}
                                  </p>
                                </div>
                                
                                {/* Mobile Subtitle */}
                                <div className="md:hidden mb-6">
                                  <p className="text-lg font-serif italic text-muted-foreground m-0">
                                    {phase.subtitle}
                                  </p>
                                </div>

                                {/* Phase Content Card */}
                                <motion.div 
                                  className={`p-6 md:p-8 lg:p-10 rounded-2xl border-2 bg-white/50 ${phase.phaseColor} transition-all duration-300`}
                                  whileHover={{ y: -4, boxShadow: '0 20px 40px -10px oklch(0.35 0.05 55 / 0.06)' }}
                                >
                                   <p className="text-lg lg:text-xl font-medium text-foreground mb-8 leading-relaxed max-w-3xl m-0">
                                     {phase.purpose}
                                   </p>

                                   <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mt-8 border-t border-black/5 pt-8">
                                      {/* Activities List */}
                                      <div className="flex-1">
                                        <p className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/40 mb-5 m-0">
                                          Key Activities
                                        </p>
                                        <ul className="space-y-4 m-0 p-0 list-none">
                                           {phase.activities.map((act, i) => (
                                             <li key={i} className="flex items-start gap-4 text-base text-foreground/80 leading-relaxed">
                                               <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-brand-green/80 shrink-0" />
                                               <span>{act}</span>
                                             </li>
                                           ))}
                                        </ul>
                                      </div>

                                      {/* Deliverable Block */}
                                      <div className="xl:w-1/3">
                                         <div className="bg-white/80 p-6 rounded-xl border border-black/5 h-full flex flex-col justify-center">
                                            <p className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/40 mb-3 m-0">
                                              Deliverable
                                            </p>
                                            <p className="text-base font-semibold text-foreground leading-snug m-0">
                                              {phase.deliverable}
                                            </p>
                                         </div>
                                      </div>
                                   </div>
                                </motion.div>
                                
                             </AnimateIn>
                          </div>
                          
                       </div>
                    );
                  })}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Different — Brutalist Shift Manifesto */}
      <div className="py-24 lg:py-36 bg-brand-earth text-white selection:bg-brand-sand selection:text-brand-earth overflow-hidden relative">
        {/* Abstract graphic element in background to add depth */}
        <motion.div 
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[100px] border-white/5 pointer-events-none hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-32">
            <AnimateIn>
              <h2 className="text-4xl lg:text-5xl font-headline text-foreground leading-tight tracking-tight" style={{ color: 'white' }}>
                What makes us <br />
                <span className="font-serif italic font-normal" style={{ color: 'var(--growth-green)' }}>different.</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="text-lg md:text-xl max-w-md m-0 md:text-right font-medium" style={{ color: 'var(--warm-sand)' }}>
                Traditional consulting focuses on static adoption. We focus on sustainable, living adaptation.
              </p>
            </AnimateIn>
          </div>

          <div className="max-w-6xl ml-auto border-t border-white/10">
            {[
              ['Planning then implementing', 'Experimenting then learning'],
              ['Managing resistance', 'Engaging resistance as data'],
              ['Focusing on adoption', 'Focusing on adaptation'],
              ['Creating dependency', 'Building internal capability'],
              ['Measuring compliance', 'Measuring learning and growth'],
              ['Linear project timelines', 'Cyclical, ongoing practice'],
            ].map(([traditional, baobab], index) => (
               <AnimateIn key={index} delay={index * 0.08} variant="fade-in">
                 <motion.div 
                   initial="idle"
                   whileHover="hover"
                   className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 border-b border-white/10 relative cursor-default"
                 >
                   {/* Traditional Approach (Faded + Crossed out) */}
                   <div className="w-full md:w-[45%] pr-8 mb-4 md:mb-0">
                     <p className="text-md uppercase tracking-[0.2em] text-white/30 mb-3 font-semibold">Instead of</p>
                     <p className="text-2xl md:text-3xl font-medium text-white/30 line-through decoration-white/20 m-0">
                       {traditional}
                     </p>
                   </div>

                   {/* Divider / Arrow for desktop */}
                   <div className="hidden md:flex w-[10%] justify-center">
                     <motion.div
                       variants={{
                         idle: { x: 0, opacity: 0.2, color: 'rgba(255,255,255,0.5)' },
                         hover: { x: 10, opacity: 1, color: 'var(--growth-green)' }
                       }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     >
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                         <path d="M5 12h14"></path>
                         <path d="m12 5 7 7-7 7"></path>
                       </svg>
                     </motion.div>
                   </div>

                   {/* The Baobab Framework (Bold + Highlighted) */}
                   <div className="w-full md:w-[45%] md:pl-8 mt-2 md:mt-0">
                     <p className="text-md uppercase tracking-[0.2em] mb-3 font-semibold group-hover:text-brand-green/80 text-brand-green/40 transition-colors">We believe in</p>
                     <motion.p 
                       variants={{
                         idle: { x: 0 },
                         hover: { x: 10 }
                       }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                       className="text-xl md:text-2xl lg:text-3xl font-headline font-bold leading-tight m-0 text-white group-hover:text-brand-green transition-colors duration-500"
                     >
                       {baobab}
                     </motion.p>
                   </div>
                 </motion.div>
               </AnimateIn>
            ))}
          </div>

        </div>
      </div>

      {/* Baobab Distinctive Practices — Distilled Zigzag */}
      <div className="py-24 lg:py-32 bg-brand-light relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:items-center mb-16 lg:mb-24 lg:text-center text-left">
            <AnimateIn>
              <h2 className="text-4xl lg:text-6xl font-headline text-foreground tracking-tight mb-4">
                Baobab Distinctive <span className="font-serif italic font-normal text-brand-green">Practices</span>
              </h2>
            </AnimateIn>
            {/* <AnimateIn delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-xl lg:mx-auto m-0">
                Four non-traditional disciplines that fundamentally reshape how change is integrated.
              </p>
            </AnimateIn> */}
          </div>

          <div className="flex flex-col gap-16 lg:gap-28">
            {distinctivePractices.map((practice, index) => {
              const Icon = practice.icon;
              const isEven = index % 2 === 0;

              return (
                 <div 
                   key={index}
                   className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
                 >
                    {/* The Essence of the Visual */}
                    <div className="w-full lg:w-1/3 flex justify-center relative">
                       <AnimateIn delay={index * 0.1}>
                         <motion.div
                           className="relative flex items-center justify-center p-8"
                           whileHover={{ scale: 1.1, rotate: isEven ? 5 : -5 }}
                           transition={{ type: "spring", stiffness: 300, damping: 20 }}
                         >
                           <Icon className={`size-20 lg:size-28 ${practice.iconColor} opacity-90`} />
                           
                           {/* Watermark Numeral */}
                           <span className="absolute text-[8rem] lg:text-[12rem] font-headline font-bold text-brand-clay/10 -z-10 pointer-events-none select-none transition-colors duration-500 group-hover:text-brand-green/10">
                             {practice.numeral}
                           </span>
                         </motion.div>
                       </AnimateIn>
                    </div>

                    {/* The Essence of the Typography */}
                    <div className="w-full lg:w-1/2">
                       <AnimateIn delay={index * 0.1 + 0.1} variant="fade-up">
                         <div className={`max-w-lg ${isEven ? 'lg:ml-0' : 'lg:ml-auto'}`}>
                           <h4 className="text-2xl lg:text-4xl font-headline font-semibold mb-4 text-foreground leading-[1.2]">
                             {practice.title}
                           </h4>
                           <p className="text-lg text-muted-foreground leading-relaxed m-0">
                             {practice.description}
                           </p>
                         </div>
                       </AnimateIn>
                    </div>
                 </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Impeccable Distilled CTA */}
      <div className="py-24 lg:py-36 bg-brand-earth relative overflow-hidden selection:bg-brand-sand selection:text-brand-earth">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
             
             {/* Left - The editorial headline */}
             <div className="w-full md:w-1/2 lg:w-3/5">
                <AnimateIn>
                  <h2 className="text-4xl lg:text-6xl xl:text-7xl font-headline tracking-tight leading-[1.1] m-0 text-white">
                    Ready for <br className="hidden lg:block"/>
                    <span className="font-serif italic font-normal text-brand-green">Human.Led</span> Change?
                  </h2>
                </AnimateIn>
             </div>

             {/* Right - The grounded action */}
             <div className="w-full md:w-1/2 lg:w-2/5 pt-2 md:pt-4">
                <AnimateIn delay={0.1}>
                  <p className="text-lg lg:text-xl leading-relaxed mb-10 m-0" style={{ color: 'var(--warm-sand)' }}>
                    Let's break the cycle of traditional consulting and begin building sustainable, living adaptation for your organization.
                  </p>
                </AnimateIn>
                <AnimateIn delay={0.2} variant="fade-up">
                  <Button
                    size="lg"
                    onClick={() => {
                       const element = document.getElementById('contact');
                       if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-sand text-brand-earth hover:bg-white text-lg px-8 py-7 font-semibold transition-colors duration-300"
                    style={{ borderRadius: '0.625rem' }}
                  >
                    Start a Conversation
                  </Button>
                </AnimateIn>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}