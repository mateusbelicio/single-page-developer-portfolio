import { createContext, useReducer } from 'react';

export const ToastContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'toast/close':
      return { ...state, isToastOpen: false };
    case 'toast/success':
      return {
        ...state,
        isToastOpen: true,
        toastType: 'success',
        message: action.payload?.message,
        position: action.payload?.position || state.position,
        direction: action.payload?.direction || state.direction,
      };
    case 'toast/error':
      return {
        ...state,
        isToastOpen: true,
        toastType: 'error',
        message: action.payload?.message,
        position: action.payload?.position || state.position,
        direction: action.payload?.direction || state.direction,
      };
    case 'toast/warning':
      return {
        ...state,
        isToastOpen: true,
        toastType: 'warning',
        message: action.payload?.message,
        position: action.payload?.position || state.position,
        direction: action.payload?.direction || state.direction,
      };
  }
}

const initialState = {
  isToastOpen: false,
  message: '',
  toastType: 'success',
  position: 'topRight',
  direction: 'fadeRight',
};

function ToastProvider({ children }) {
  const [{ isToastOpen, message, toastType, position, direction }, dispatch] =
    useReducer(reducer, initialState);

  const closeToast = () => dispatch({ type: 'toast/close' });
  const showToast = {
    success: (message, position = undefined, direction = undefined) => {
      dispatch({
        type: 'toast/success',
        payload: { message, position, direction },
      });
    },
    error: (message, position = undefined, direction = undefined) => {
      dispatch({
        type: 'toast/error',
        payload: { message, position, direction },
      });
    },
    warning: (message, position = undefined, direction = undefined) => {
      dispatch({
        type: 'toast/warning',
        payload: { message, position, direction },
      });
    },
  };

  const context = {
    isToastOpen,
    message,
    closeToast,
    showToast,
    toastType,
    position,
    direction,
  };

  return (
    <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
