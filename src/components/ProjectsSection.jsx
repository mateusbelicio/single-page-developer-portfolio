import projectImage1 from '../assets/thumbnail-project-1-large.webp';
import projectImage2 from '../assets/thumbnail-project-2-large.webp';
import projectImage3 from '../assets/thumbnail-project-3-large.webp';
import projectImage4 from '../assets/thumbnail-project-4-large.webp';
import projectImage5 from '../assets/thumbnail-project-5-large.webp';
import projectImage6 from '../assets/thumbnail-project-6-large.webp';

import projectImageSmall1 from '../assets/thumbnail-project-1-small.webp';
import projectImageSmall2 from '../assets/thumbnail-project-2-small.webp';
import projectImageSmall3 from '../assets/thumbnail-project-3-small.webp';
import projectImageSmall4 from '../assets/thumbnail-project-4-small.webp';
import projectImageSmall5 from '../assets/thumbnail-project-5-small.webp';
import projectImageSmall6 from '../assets/thumbnail-project-6-small.webp';

import Title from './Title';
import Button from '../ui/Button';
import ProjectsList from './ProjectsList';
import ProjectItem from './ProjectItem';
import Reveal from '../features/revealOnScroll/Reveal';

function ProjectsSection() {
  return (
    <section className="pb-20 pt-10 sm:pb-[6.25rem] sm:pt-[4.375rem] lg:pb-[8.75rem] lg:pt-[5.25rem]">
      <div className="container max-w-container space-y-10 sm:space-y-[3.75rem] lg:space-y-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Reveal>
            <Title type="h2" size="xl">
              Projects
            </Title>
          </Reveal>
          <Reveal>
            <Button as="a" href="#contact">
              Contact me
            </Button>
          </Reveal>
        </div>

        <ProjectsList>
          <ProjectItem
            title="Design portfolio"
            src={projectImage1}
            srcSmall={projectImageSmall1}
            tags={['HTML', 'CSS']}
          />
          <ProjectItem
            title="E-learning landing page"
            src={projectImage2}
            srcSmall={projectImageSmall2}
            tags={['HTML', 'CSS']}
          />
          <ProjectItem
            title="Todo web app"
            src={projectImage3}
            srcSmall={projectImageSmall3}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Entertainment web app"
            src={projectImage4}
            srcSmall={projectImageSmall4}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Memory Game"
            src={projectImage5}
            srcSmall={projectImageSmall5}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
          <ProjectItem
            title="Art gallery showcase"
            src={projectImage6}
            srcSmall={projectImageSmall6}
            tags={['HTML', 'CSS', 'JavaScript']}
          />
        </ProjectsList>
      </div>
    </section>
  );
}

export default ProjectsSection;
