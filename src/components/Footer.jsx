import ToastProvider from '../features/toasts/toastContext';

import Logo from '../ui/Logo';
import Separator from '../ui/Separator';
import SocialList from '../ui/SocialList';
import ContactSection from './ContactSection';

function Footer() {
  return (
    <ToastProvider>
      <footer className="bg-neutral-800 py-[3.75rem] sm:pb-10 lg:pb-[5.875rem] lg:pt-[5.125rem] ">
        <div className="container max-w-container">
          <ContactSection />
          <Separator className="mb-10 mt-20 sm:mb-8 sm:mt-24 lg:mb-12 lg:mt-[5.75rem]" />
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <Logo />
            <SocialList />
          </div>
        </div>
      </footer>
    </ToastProvider>
  );
}

export default Footer;
