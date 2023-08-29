import icons from '../assets/icons.svg';

function SocialLink({ icon, name, href = '#' }) {
  return (
    <a
      href={href}
      className="focus-default inline-block h-5 w-5 text-current hover:text-primary sm:h-6 sm:w-6"
      aria-label={name}
    >
      <svg className="block h-full w-full">
        <use xlinkHref={`${icons}#icon-${icon}`} />
      </svg>
    </a>
  );
}

export default SocialLink;
