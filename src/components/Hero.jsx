import Title from './Title';
import Button from '../ui/Button';
import HeroImage from './HeroImage';
import HeroContainer from './HeroContainer';

import Reveal from '../features/revealOnScroll/Reveal';

function Hero() {
  return (
    <section
      className="pb-10 pt-7 sm:pb-[1.875rem] sm:pt-[3.75rem] lg:pb-12 lg:pt-[1.875rem] "
      id="hero"
    >
      <HeroContainer>
        <div className="flex flex-col items-center gap-y-6 sm:z-10 sm:col-start-1 sm:col-end-9 sm:row-start-1 sm:items-start sm:gap-y-8 lg:gap-y-11 lg:pt-14">
          <Reveal>
            <Title type="h1" size="xl" className="hero__title sm:mb-7 lg:mb-0">
              <span className="md:block lg:inline">Nice to</span> meet you!
              I&apos;m{' '}
              <span className="relative whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-1.5 after:w-full after:bg-primary sm:after:bottom-1">
                Adam Keyes
              </span>
              .
            </Title>
          </Reveal>

          <Reveal>
            <p className="hero__description max-w-[36ch] sm:col-span-6 lg:mb-[1.375rem]">
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </Reveal>

          <Reveal>
            <Button as="a" href="#contact">
              Contact me
            </Button>
          </Reveal>
        </div>

        <HeroImage />
      </HeroContainer>
    </section>
  );
}

export default Hero;
