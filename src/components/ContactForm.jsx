import { useState } from 'react';
import { useToast } from '../features/toasts/useToast';

import { isNotEmpty, isOnlyWords, isValidEmail } from '../utils/validations';

import Button from '../ui/Button';
import Input from '../ui/Input';
import Toast from '../features/toasts/Toast';

const initialErrorState = {
  name: false,
  email: false,
  message: false,
};

function ContactForm() {
  const { showToast } = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(initialErrorState);
  const [isSending, setIsSending] = useState(false);

  const errorName = !isOnlyWords(name) || !isNotEmpty(name);
  const errorEmail = !isValidEmail(email) || !isNotEmpty(email);
  const errorMessage = !isNotEmpty(message);
  const canSubmit = !errorName && !errorEmail && !errorMessage;

  const onChangeName = (e) => {
    setName(e.target.value);
    setHasError((cur) => ({ ...cur, name: false }));
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setHasError((cur) => ({ ...cur, email: false }));
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
    setHasError((cur) => ({ ...cur, message: false }));
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit) {
      showToast.error('Failed to submit the form');
      return setHasError({
        name: errorName,
        email: errorEmail,
        message: errorMessage,
      });
    }

    setHasError(initialErrorState);

    // Only to simulate a form submission
    setIsSending(true);

    setTimeout(() => {
      resetForm();
      setIsSending(false);
      showToast.success('Message sent successfully!');
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex w-full max-w-md flex-col gap-8 sm:col-span-8 sm:col-start-3 sm:max-w-none lg:col-start-8 lg:col-end-[-1]"
    >
      <Toast />
      <Input
        name="name"
        placeholder="name"
        value={name}
        handleChange={onChangeName}
        hasError={hasError.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        handleChange={onChangeEmail}
        hasError={hasError.email}
      />
      <Input
        type="textarea"
        name="message"
        placeholder="message"
        value={message}
        handleChange={onChangeMessage}
        hasError={hasError.message}
      />

      <Button
        type="submit"
        className="self-end disabled:cursor-not-allowed"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}

export default ContactForm;
