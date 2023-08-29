function Title({ type = 'h1', size = 'lg', children, className = '' }) {
  const Component = type;
  const baseStyle = 'font-bold text-neutral-50';

  const variants = {
    md: 'text-2xl font-bold uppercase',
    lg: 'text-[2rem] leading-10 -tracking-[1px] sm:text-5xl sm:leading-[3.5rem] sm:-tracking-[1.5px]',
    xl: 'text-[2.5rem] leading-none -tracking-[1.14px] sm:text-7xl sm:-tracking-[2.05px] lg:text-[5.5rem] lg:-tracking-[2.5px]',
  };

  return (
    <Component className={[baseStyle, variants[size], className].join(' ')}>
      {children}
    </Component>
  );
}

export default Title;
