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
    <section className="py-10 sm:py-[1.875rem] lg:py-14">
      <div className="container grid max-w-container gap-y-10 sm:gap-y-[3.25rem] lg:gap-y-[4.5rem]">
        <Separator />
        <div>
          <Title type="h2" size="xl" className="sr-only">
            Experience
          </Title>

          <ul className="grid items-center gap-x-2.5 gap-y-6 text-center sm:grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] sm:gap-y-[3.25rem] sm:text-left md:gap-x-[1.875rem] lg:grid-cols-[repeat(auto-fit,_minmax(21.5625rem,_1fr))] lg:gap-y-[3.625rem]">
            {experiences.map((exp) => (
              <li className="sm:space-y-3.5" key={exp.name}>
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
