import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';

function Reveal({ children, width = 'w-fit ', className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimationControls();
  const slideControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className={'relative overflow-hidden ' + width + className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-primary"
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      />
    </div>
  );
}

export default Reveal;
