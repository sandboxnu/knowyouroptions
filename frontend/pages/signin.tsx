import styled from 'styled-components';
import React, { ReactElement, useState } from 'react';
import TabBar from '../templates/TabBar';
import SvgEye from '../public/eye.svg';
import SvgFacebook from '../public/facebook.svg';
import SvgGoogle from '../public/google.svg';
import { API } from '../api-client';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import Toast from '../components/Toast';
import { HttpException } from '@nestjs/common';
import { Redirect } from '../classes/response-classes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0.5rem;
`;

const Continue = styled.button`
  background-color: #911d7a;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  color: white;
  cursor: pointer;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
`;

const Eye = styled(SvgEye)`
  align-self: center;
  cursor: pointer;
  margin: 0 0 0 -2rem;
`;

const FacebookIcon = styled(SvgFacebook)`
  cursor: pointer;
  margin-right: 2rem;

  :hover {
    g[fill='none'] {
      stroke: #7e1a6a;
    }
    path {
      fill: #7e1a6a;
    }
  }
`;

const ForgotPassword = styled.a`
  align-self: flex-end;
  color: #aaaaaa;
  cursor: pointer;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  color: #aaaaaa;
  display: flex;
  flex-direction: column;
`;

const GoogleIcon = styled(SvgGoogle)`
  cursor: pointer;

  :hover {
    g[fill='none'] {
      stroke: #911d7a;
    }
    path {
      fill: #911d7a;
    }
  }
`;

const Input = styled.input`
  background-color: #fafafa;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 0;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;

  :focus-visible {
    outline: #911d7a auto 1px;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  padding: 0rem;
  margin: 0rem;

  :focus-visible {
    outline: #911d7a auto 1px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

const NameLabel = styled(Label)`
  margin-top: 2rem;
`;

const OAuth = styled.span`
  align-self: center;
  color: #aaaaaa;
  font-size: 0.75rem;
  justify-self: flex-end;
  margin: 3rem 0 1rem 0;
`;

const OAuthIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SignInTabBar = styled(TabBar)`
  box-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  padding: 0;

  h2 {
    margin-left: 0rem;
    margin-right: 0.5rem;
    padding: 0.75rem 0rem;
  }
`;

const Submit = styled(Input)`
  background-color: #7e1a6a;
  color: white;
  cursor: pointer;
`;

const signInFields: Array<[string, boolean]> = [
  ['E-MAIL', false],
  ['PASSWORD', true],
];
const signUpFields: Array<[string, boolean]> = [
  ...signInFields,
  ['CONFIRM PASSWORD', true],
];

const SignInForm = (): ReactElement => {
  const router = useRouter();
  const [error, setError] = useState('');

  const signin = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const elements = form.elements as typeof form.elements & {
      'E-MAIL': { value: string };
      PASSWORD: { value: string };
    };

    try {
      const response: Redirect = await API.signIn.get({
        email: elements['E-MAIL'].value,
        password: elements.PASSWORD.value,
      });
      setError('');
      await axios.get(response.redirect, { withCredentials: true });
      router.push('/');
    } catch (e) {
      const err = e as AxiosError<HttpException>;
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <Form onSubmit={signin}>
      {signInFields.map(([name, hidable]: [string, boolean]) => {
        const [hidden, setHidden] = useState(hidable);
        return (
          <Label key={name}>
            {name}
            <InputRow>
              <Input type={hidden ? 'password' : 'text'} name={name} />
              {hidable && <Eye onClick={() => setHidden(!hidden)} />}
            </InputRow>
          </Label>
        );
      })}
      <ForgotPassword>FORGOT PASSWORD?</ForgotPassword>
      <Submit type="submit" value="Sign in" />
      {error && <Toast text={error} onClose={() => setError('')} />}
    </Form>
  );
};

const SignUpForm = (): ReactElement => {
  const [subtab, setSubtab] = useState(0);
  const router = useRouter();
  const [error, setError] = useState('');

  const signup = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const elements = form.elements as typeof form.elements & {
      'E-MAIL': { value: string };
      PASSWORD: { value: string };
      'CONFIRM PASSWORD': { value: string };
      NAME: { value: string };
    };

    if (elements['CONFIRM PASSWORD'].value !== elements.PASSWORD.value) {
      setError('Password and confirm password do not match.');
      return;
    }

    try {
      const response: Redirect = await API.signUp.post({
        email: elements['E-MAIL'].value,
        password: elements.PASSWORD.value,
        name: elements.NAME.value,
      });
      setError('');
      await axios.get(response.redirect, { withCredentials: true });

      router.push('/welcome');
    } catch (e) {
      const err = e as AxiosError<HttpException>;
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <Form onSubmit={signup}>
      {signUpFields.map(([name, hidable]: [string, boolean]) => {
        const [hidden, setHidden] = useState(hidable);
        return (
          <Label key={name} style={{ display: subtab !== 0 ? 'none' : 'flex' }}>
            {name}
            <InputRow>
              <Input type={hidden ? 'password' : 'text'} name={name} />
              {hidable && <Eye onClick={() => setHidden(!hidden)} />}
            </InputRow>
          </Label>
        );
      })}
      <NameLabel key="NAME" style={{ display: subtab === 0 ? 'none' : 'flex' }}>
        WHAT WOULD YOU LIKE TO BE CALLED?
        <InputRow>
          <Input type="text" name="NAME" />
        </InputRow>
      </NameLabel>
      {subtab === 0 ? (
        <Continue type="button" onClick={() => setSubtab(1)}>
          Continue
        </Continue>
      ) : (
        <Submit type="submit" value="Sign up" />
      )}
      {error && (
        <Toast
          text={error}
          onClose={() => {
            setError('');
            setSubtab(0);
          }}
        />
      )}
    </Form>
  );
};

const SignIn = (): ReactElement => {
  const tabNames = ['Sign In', 'Sign Up'];
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Container>
      <SignInTabBar
        tabs={tabNames}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />
      {tabIndex === 0 ? (
        <>
          <SignInForm />
          <OAuth>OR CONTINUE WITH</OAuth>
          <OAuthIconContainer>
            <FacebookIcon />
            <GoogleIcon />
          </OAuthIconContainer>
        </>
      ) : (
        <SignUpForm />
      )}
    </Container>
  );
};

export default SignIn;
