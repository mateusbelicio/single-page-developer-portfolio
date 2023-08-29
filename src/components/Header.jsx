import Logo from '../ui/Logo';
import SocialList from '../ui/SocialList';

function Header() {
  return (
    <header className="py-5 sm:py-[1.875rem] lg:py-10">
      <div className="container flex max-w-container flex-col items-center justify-between gap-5 text-neutral-50 sm:flex-row">
        <Logo />
        <SocialList />
      </div>
    </header>
  );
}

export default Header;
