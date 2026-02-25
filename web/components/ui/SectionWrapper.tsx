"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
