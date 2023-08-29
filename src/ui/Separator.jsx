function Separator({ className = '' }) {
  return (
    <div
      className={'container h-[1px] max-w-container bg-neutral-50 ' + className}
    ></div>
  );
}

export default Separator;
