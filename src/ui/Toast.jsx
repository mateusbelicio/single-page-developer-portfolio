import { motion } from 'framer-motion';
import { useEffect } from 'react';

const TIME_OPEN = 5000;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

function Toast({ children, type = 'success', isOpen }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
    }, TIME_OPEN);

    return clearTimeout(timeoutId);
  }, []);

  const style = {
    success: 'bg-green-200 text-green-900',
    error: 'bg-red-200 text-red-900',
  };

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className={'fixed right-6 top-6 rounded-lg px-6 py-3 ' + style[type]}
    >
      {children}
    </motion.div>
  );
}

export default Toast;
