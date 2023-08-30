import Separator from '../ui/Separator';
import Title from './Title';

const experiences = [
  { name: 'HTML', experienceTime: '4 Years' },
  { name: 'CSS', experienceTime: '4 Years' },
  { name: 'JavaScript', experienceTime: '4 Years' },
  { name: 'Accessibility', experienceTime: '4 Years' },
  { name: 'React', experienceTime: '3 Years' },
  { name: 'Sass', experienceTime: '3 Years' },
];

function Experience() {
  return (
    <section className="py-10 sm:py-[1.875rem] lg:py-14 ">
      <div className="rings-pattern container relative grid max-w-container gap-y-10 before:bottom-0  before:left-1/2 before:translate-y-1/2 sm:gap-y-[3.25rem] sm:before:translate-x-1/3 lg:gap-y-[4.5rem] lg:before:left-full lg:before:-translate-x-[7.6875rem]">
        <Separator />
        <div>
          <Title type="h2" size="xl" className="sr-only">
            Experience
          </Title>

          <ul className="grid items-center gap-x-2.5 gap-y-6 text-center sm:grid-cols-12 sm:gap-y-[3.25rem] sm:text-left lg:gap-x-[1.875rem] lg:gap-y-[3.625rem]">
            {experiences.map((exp) => (
              <li
                className="sm:col-span-6 sm:space-y-3.5 lg:col-span-4"
                key={exp.name}
              >
                <Title type="h3">{exp.name}</Title>
                <p className="">{exp.experienceTime} Experience</p>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="sm:hidden" />
      </div>
    </section>
  );
}

export default Experience;
