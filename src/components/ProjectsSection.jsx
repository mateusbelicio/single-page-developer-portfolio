import Title from './Title';
import Button from '../ui/Button';
import ProjectsList from './ProjectsList';
import ProjectItem from './ProjectItem';

import projectImage1 from '../assets/thumbnail-project-1-large.webp';
import projectImage2 from '../assets/thumbnail-project-2-large.webp';
import projectImage3 from '../assets/thumbnail-project-3-large.webp';
import projectImage4 from '../assets/thumbnail-project-4-large.webp';
import projectImage5 from '../assets/thumbnail-project-5-large.webp';
import projectImage6 from '../assets/thumbnail-project-6-large.webp';

function ProjectsSection() {
  return (
    <section className="pb-20 pt-10 sm:pb-[6.25rem] sm:pt-[4.375rem] lg:pb-[8.75rem] lg:pt-[5.25rem]">
      <div className="container max-w-container space-y-10 sm:space-y-[3.75rem] lg:space-y-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Title type="h2" size="xl">
            Projects
          </Title>
          <Button as="a" href="#contact">
            Contact me
          </Button>
        </div>

        <ProjectsList>
          <ProjectItem
            title="Design portfolio"
            src={projectImage1}
            tags={['HTML', 'CSS']}
          />
          <ProjectItem
            title="E-learning landing page"
            src={projectImage2}
            tags={['HTML', 'CSS']}
          />
          <ProjectItem
            title="Todo web app"
            src={projectImage3}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Entertainment web app"
            src={projectImage4}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Memory Game"
            src={projectImage5}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Art gallery showcase"
            src={projectImage6}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
        </ProjectsList>
      </div>
    </section>
  );
}

export default ProjectsSection;
