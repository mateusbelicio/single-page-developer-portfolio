import ContactForm from './ContactForm';
import Title from './Title';

function ContactSection() {
  return (
    <section
      className="grid gap-y-12 sm:grid-cols-12 sm:gap-x-2.5 lg:gap-x-[1.875rem]"
      id="contact"
    >
      <div className="space-y-5 text-center sm:col-span-8 sm:col-start-3 lg:col-start-1 lg:col-end-6 lg:space-y-9 lg:text-left">
        <Title type="h2" size="xl" className="contact__title heading-xl">
          Contact
        </Title>
        <p className="contact__description">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactSection;
