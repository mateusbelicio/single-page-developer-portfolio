import Logo from '../ui/Logo';
import SocialList from './SocialList';

function Header() {
  return (
    <header className="py-10">
      <div className="flex flex-col gap-8 sm:flex-row items-center justify-between text-neutral-100 container max-w-container">
        <Logo />
        <SocialList />
      </div>
    </header>
  );
}

export default Header;
