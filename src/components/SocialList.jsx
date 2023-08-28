import SocialLink from '../ui/SocialLink';

const links = [
  { icon: 'github', name: 'Github' },
  { icon: 'frontend-mentor', name: 'Frontend Mentor' },
  { icon: 'linkedin', name: 'Linkedin' },
  { icon: 'twitter', name: 'Twitter' },
];

function SocialList() {
  return (
    <ul className="flex items-center gap-8">
      {links.map((link) => (
        <li key={link.name} className="h-6">
          <SocialLink {...link} />
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
