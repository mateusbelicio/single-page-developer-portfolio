import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useToast } from './useToast';
import { positions, variants, toastTypes } from './toastConfig';

const TIME_OPEN = 5000;

function Toast() {
  const { isToastOpen, message, closeToast, toastType, position, direction } =
    useToast();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeToast();
    }, TIME_OPEN);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [closeToast]);

  return (
    <AnimatePresence>
      {isToastOpen && (
        <motion.div
          key={toastType}
          variants={variants[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`${positions[position]} ${toastTypes[toastType]} fixed z-50 flex items-center gap-3 rounded-lg px-6 py-3 text-sm uppercase`}
        >
          <span>{message}</span>
          <button
            type="button"
            onClick={closeToast}
            className="text-2xl transition-colors hover:text-neutral-900"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
