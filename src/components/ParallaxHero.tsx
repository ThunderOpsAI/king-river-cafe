'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero({ imageUrl, children }: { imageUrl: string; children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[700px] lg:min-h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y }}
        initial={{ scale: 1.25 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        aria-hidden
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-900/20" />
      <motion.div 
        style={{ opacity }} 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
