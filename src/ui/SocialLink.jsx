import icons from '../assets/icons.svg';

function SocialLink({ icon, name, href = '#' }) {
  return (
    <a href={href} className="text-current h-6 w-6 inline-block focus-default" aria-label={name}>
      <svg className="block h-full w-full">
        <use xlinkHref={`${icons}#icon-${icon}`} />
      </svg>
    </a>
  );
}

export default SocialLink;
