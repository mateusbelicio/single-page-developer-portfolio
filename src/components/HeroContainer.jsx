function HeroContainer({ children }) {
  return (
    <div className="rings-pattern container grid max-w-container justify-items-center gap-y-10 text-center before:-top-4 before:right-1/2 before:-z-40 sm:relative sm:grid-cols-12 sm:justify-items-start sm:gap-x-2.5 sm:text-left sm:before:-top-16 sm:before:right-full sm:before:translate-x-1/2 lg:items-start lg:gap-x-[1.875rem] lg:before:-top-2">
      {children}
    </div>
  );
}

export default HeroContainer;
