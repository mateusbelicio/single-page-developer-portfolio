import SocialLink from './SocialLink';

const links = [
  { icon: 'github', name: 'Github' },
  { icon: 'frontend-mentor', name: 'Frontend Mentor' },
  { icon: 'linkedin', name: 'Linkedin' },
  { icon: 'twitter', name: 'Twitter' },
];

function SocialList({ className = '' }) {
  return (
    <ul className={`flex items-center gap-6 sm:gap-8 ${className}`}>
      {links.map((link) => (
        <li key={link.name} className="h-5 sm:h-6">
          <SocialLink {...link} />
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
