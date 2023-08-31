import Reveal from '../features/revealOnScroll/Reveal';
import ContactForm from './ContactForm';
import Title from './Title';

function ContactSection() {
  return (
    <section
      className="rings-pattern grid gap-y-12 before:bottom-2.5 before:right-1/2 sm:grid-cols-12 sm:gap-x-2.5 sm:before:bottom-0 sm:before:right-full sm:before:col-start-3 sm:before:translate-y-1/2 lg:gap-x-[1.875rem] lg:before:bottom-5 lg:before:col-start-3 lg:before:-translate-x-[1.875rem]"
      id="contact"
    >
      <div className="space-y-5 text-center sm:col-span-8 sm:col-start-3 lg:col-start-1 lg:col-end-6 lg:space-y-9 lg:text-left">
        <Reveal className="mx-auto lg:mx-0">
          <Title type="h2" size="xl" className="heading-xl">
            Contact
          </Title>
        </Reveal>

        <Reveal>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </Reveal>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
