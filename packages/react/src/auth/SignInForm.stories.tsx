import { Title } from '@mantine/core';
import { Meta } from '@storybook/react';
import { SignInForm } from './SignInForm';
import { Logo } from '../Logo/Logo';

export default {
  title: 'Medplum/SignInForm',
  component: SignInForm,
} as Meta;

export function Basic(): JSX.Element {
  return (
    <SignInForm onSuccess={() => alert('Signed in!')}>
      <Logo size={32} />
      <Title>Sign in to  Demo</Title>
    </SignInForm>
  );
}

export function WithLinks(): JSX.Element {
  return (
    <SignInForm
      onSuccess={() => alert('Signed in!')}
      onForgotPassword={() => alert('Forgot password')}
      onRegister={() => alert('Register')}
    >
      <Title>Sign in to  Demo</Title>
    </SignInForm>
  );
}

export function WithFooter(): JSX.Element {
  return (
    <>
      <SignInForm
        onSuccess={() => alert('Signed in!')}
        onForgotPassword={() => alert('Forgot password')}
        onRegister={() => alert('Register')}
      >

        <Title>Sign in to  Demo</Title>
      </SignInForm>
    </>
  );
}

export function WithGoogle(): JSX.Element {
  return (
    <>
      <SignInForm
        onSuccess={() => alert('Signed in!')}
        onForgotPassword={() => alert('Forgot password')}
        onRegister={() => alert('Register')}
        googleClientId="xyz"
      >

        <Title>Sign in to  Demo</Title>
      </SignInForm>
    </>
  );
}

export function GoogleOnly(): JSX.Element {
  return (
    <>
      <SignInForm
        onSuccess={() => alert('Signed in!')}
        onForgotPassword={() => alert('Forgot password')}
        googleClientId="xyz"
        disableEmailAuth
      >

        <Title>Sign in to  Demo</Title>
      </SignInForm>
    </>
  );
}
