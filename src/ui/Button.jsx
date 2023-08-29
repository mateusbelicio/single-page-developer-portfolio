function Button({ children, as = undefined, className = '', ...rest }) {
  const Element = as ? as : 'button';

  return (
    <Element
      className={
        'focus-default flex flex-col gap-2.5 text-base uppercase leading-relaxed tracking-[2.29px] text-neutral-50 transition-colors duration-200 after:h-0.5 after:w-full after:bg-primary hover:text-primary ' +
        className
      }
      {...rest}
    >
      {children}
    </Element>
  );
}

export default Button;
