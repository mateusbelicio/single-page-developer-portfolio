import heroImage from '../assets/hero-image.webp';

function HeroImage() {
  return (
    <picture className="hero__image circle-pattern before:to-neutral-800/1 sm:left-none relative row-start-1 flex h-[15.125rem] w-[10.875rem] before:absolute before:bottom-0 before:left-0 before:right-0 before:-z-50 before:h-96 before:bg-gradient-to-t before:from-neutral-800 after:bottom-0 after:left-[calc(100%+2.25rem)] sm:absolute sm:bottom-0 sm:col-start-8 sm:col-end-[-1] sm:row-start-1 sm:h-[29.5625rem] sm:w-[20.125rem] sm:before:h-[37.5rem] sm:before:bg-neutral-800 sm:after:left-auto sm:after:right-0 sm:after:translate-x-1/2 lg:relative lg:h-[36.1875rem] lg:w-full lg:before:h-[45rem] lg:after:bottom-[4.375rem] lg:after:right-full">
      <img
        className="h-full w-full shrink-0 object-cover object-top"
        src={heroImage}
        alt="Grayscale profile picture of Adam Keyes"
      />
    </picture>
  );
}

export default HeroImage;
