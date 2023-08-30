import { useId } from 'react';

function Input({
  type = 'text',
  name,
  value,
  handleChange,
  hasError,
  ...rest
}) {
  const id = useId();
  const inputStyle =
    'focus:invalid:border-error invalid:border-error border-b border-neutral-50 bg-neutral-800 pb-4 pl-6 pr-8 uppercase outline-none focus:border-primary';

  return (
    <div className="relative flex flex-col" data-invalid="false">
      {type === 'textarea' ? (
        <textarea
          className={inputStyle + ' resize-none'}
          id={id}
          aria-errormessage={`${id}-error`}
          value={value}
          onChange={handleChange}
          name={name}
          cols="30"
          rows="5"
          aria-invalid={hasError}
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
          aria-invalid={hasError}
          {...rest}
        />
      )}
      <label className="sr-only" htmlFor={id}>
        {}
      </label>
      {hasError && (
        <span
          id={`${id}-error`}
          className="text-error absolute right-0 top-[calc(100%+0.3125rem)] text-xs -tracking-[0.17px]"
        >
          Sorry, invalid format here
        </span>
      )}
    </div>
  );
}

export default Input;
