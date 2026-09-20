'use client';
import { motion } from 'framer-motion';

interface MenuCardProps {
  name: string;
  badge: string;
  desc: string;
  price: string;
}

export default function MenuCard({ name, badge, desc, price }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(180, 83, 9, 0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 via-amber-600 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
            {badge}
          </span>
          <span className="font-serif font-bold text-stone-900 text-lg">{price}</span>
        </div>
        <h3 className="font-serif text-xl text-stone-900 font-semibold mb-2 group-hover:text-amber-900 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-stone-500 font-light leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
