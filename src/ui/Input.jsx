import { useEffect, useId } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';

import errorIcon from '../assets/icon-error.svg';

function Input({
  type = 'text',
  name,
  value,
  handleChange,
  hasError,
  ...rest
}) {
  const id = useId();
  const controls = useAnimationControls();
  const inputStyle =
    'focus:data-[invalid=true]:border-error data-[invalid=true]:border-error border-b border-neutral-50 bg-transparent pb-4 pl-6 pr-8 uppercase outline-none focus:border-primary';

  useEffect(() => {
    if (hasError) controls.start('start');
  }, [hasError, controls]);

  return (
    <div className="relative flex flex-col">
      {type === 'textarea' ? (
        <textarea
          className={inputStyle + ' h-[6.75rem] resize-none'}
          id={id}
          aria-errormessage={`${id}-error`}
          value={value}
          onChange={handleChange}
          name={name}
          data-invalid={hasError}
          required
          {...rest}
        />
      ) : (
        <input
          className={inputStyle}
          type={type}
          id={id}
          aria-errormessage={`${id}-error`}
          value={value}
          onChange={handleChange}
          name={name}
          data-invalid={hasError}
          required
          {...rest}
        />
      )}
      <label className="sr-only" htmlFor={id}>
        {name}
      </label>
      {hasError && (
        <AnimatePresence>
          <span className="absolute right-0 block h-6 w-6">
            <img src={errorIcon} alt="" aria-hidden="true" />
          </span>
          <motion.span
            id={`${id}-error`}
            variants={{
              hidden: { opacity: 0, x: 0 },
              start: {
                opacity: 1,
                x: [0, -10, 10, -10, 10, -10, 10, -10, 8, -8, 0],
              },
            }}
            initial="hidden"
            transition={{ duration: 0.6, ease: 'easeOut' }}
            animate={controls}
            className="absolute right-0 top-[calc(100%+0.3125rem)] text-xs -tracking-[0.17px] text-error"
          >
            Sorry, invalid format here
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}

export default Input;
