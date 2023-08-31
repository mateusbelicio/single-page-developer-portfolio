import { useContext } from 'react';
import { ToastContext } from './toastContext';

export function useToast() {
  const {
    isToastOpen,
    message,
    closeToast,
    showToast,
    toastType,
    position,
    direction,
  } = useContext(ToastContext);

  return {
    isToastOpen,
    message,
    closeToast,
    showToast,
    toastType,
    position,
    direction,
  };
}
