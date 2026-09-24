import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressAndTop: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribeScroll = scrollY.on('change', (latest) => {
      setIsVisible(latest > 280);
    });

    const unsubscribePercent = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
    });

    return () => {
      unsubscribeScroll();
      unsubscribePercent();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Top Luminous Reading Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none bg-sky-950/20 backdrop-blur-xs">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-gradient-to-r from-[#81CBFA] via-[#38bdf8] to-[#FFD200] origin-left shadow-[0_0_14px_rgba(129,203,250,0.9)]"
        />
      </div>

      {/* Floating Scroll to Top Button with Circular Progress Ring */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed bottom-20 md:bottom-6 left-4 z-40"
          >
            <button
              onClick={scrollToTop}
              className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0c2b50]/90 hover:bg-[#103a6b] text-white shadow-xl shadow-black/40 border border-[#81CBFA]/40 backdrop-blur-md transition-all duration-200 active:scale-90 cursor-pointer"
              title={`Kembali ke atas (${scrollPercent}%)`}
              aria-label="Kembali ke bagian paling atas halaman"
            >
              {/* Circular SVG Progress */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  className="stroke-white/15"
                  strokeWidth="2.5"
                  fill="transparent"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  className="stroke-[#81CBFA] transition-all duration-150"
                  strokeWidth="2.5"
                  strokeDasharray="106.8"
                  strokeDashoffset={106.8 - (106.8 * scrollPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <ArrowUp className="w-4 h-4 text-[#81CBFA] group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
