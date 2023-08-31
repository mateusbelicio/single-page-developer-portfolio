import Reveal from '../features/revealOnScroll/Reveal';
import Button from '../ui/Button';
import Title from './Title';

function ProjectItem({
  src,
  srcSmall = undefined,
  projectLink = '#',
  codeLink = '#',
  title,
  tags = [],
}) {
  return (
    <li className="sm:col-span-6">
      <article className="grid grid-rows-[repeat(3,_min-content)] gap-y-5 sm:[&>*]:col-start-1 sm:[&>*]:col-end-1">
        <Reveal className="block h-[15.8125rem] w-full border border-neutral-800 sm:h-[25rem] lg:row-start-1">
          <picture>
            {srcSmall && (
              <source
                media="(max-width: 48em)"
                srcSet={srcSmall}
                sizes="48em"
              />
            )}
            <img
              src={src}
              width="546"
              height="400"
              alt={`Thumbnail of the "${title}" project`}
              className="flex h-full w-full items-center justify-center object-cover object-top"
            />
          </picture>
        </Reveal>
        <div className="space-y-2">
          <Reveal>
            <Title type="h3" size="md" className="project__title heading-m">
              {title}
            </Title>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-[1.125rem] gap-y-2">
              {tags.map((tag) => (
                <span className="" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex items-center gap-8 lg:z-10 lg:row-start-1 lg:flex-col lg:justify-center lg:gap-12 lg:bg-black/75 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:focus-within:opacity-100 lg:hover:opacity-100">
          <Button
            as="a"
            href={projectLink}
            className="project__btn btn btn--view"
          >
            View project
          </Button>
          <Button as="a" href={codeLink} className="project__btn btn btn--code">
            View code
          </Button>
        </div>
      </article>
    </li>
  );
}

export default ProjectItem;
