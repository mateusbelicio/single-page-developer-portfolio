export const toastTypes = {
  success: 'bg-green-300 text-green-950',
  error: 'bg-red-300 text-red-950',
  warning: 'bg-yellow-300 text-yellow-950',
};

export const positions = {
  topCenter: 'top-6 left-0 right-0 max-w-fit mx-auto',
  topRight: 'top-6 right-6',
  bottomCenter: 'bottom-6 left-0 right-0 max-w-fit mx-auto',
  bottomRight: 'bottom-6 right-6',
};

export const variants = {
  fadeRight: {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  },
  fadeUp: {
    initial: { opacity: 0, y: '-100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100%' },
  },
  fadeDown: {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  },
};
