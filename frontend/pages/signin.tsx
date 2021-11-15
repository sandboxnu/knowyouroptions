import styled from 'styled-components';
import React, { ReactElement, useState } from 'react';
import TabBar from '../templates/TabBar';
import SvgEye from '../public/eye.svg';
import SvgFacebook from '../public/facebook.svg';
import SvgGoogle from '../public/google.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0.5rem;
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
      stroke: #7e1a6a;
    }
    path {
      fill: #7e1a6a;
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
    outline: #7e1a6a auto 1px;
  }
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  padding: 0rem;
  margin: 0rem;

  :focus-visible {
    outline: #7e1a6a auto 1px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
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

function handleSubmit() {
  // TODO: handle the submit
}

const signInFields: Array<[string, boolean]> = [
  ['E-MAIL', false],
  ['PASSWORD', true],
];
const signUpFields: Array<[string, boolean]> = [
  ...signInFields,
  ['CONFIRM PASSWORD', true],
];

const SignInForm = (): ReactElement => {
  return (
    <Form onSubmit={handleSubmit}>
      {signInFields.map(([name, hidable]: [string, boolean]) => {
        const [hidden, setHidden] = useState(hidable);
        return (
          <Label key={name}>
            {name}
            <InputRow>
              <Input type={hidden ? 'password' : 'text'} autoFocus={false} />
              {hidable && <Eye onClick={() => setHidden(!hidden)} />}
            </InputRow>
          </Label>
        );
      })}
      <ForgotPassword>FORGOT PASSWORD?</ForgotPassword>
      <Submit type="submit" value="Sign in" />
    </Form>
  );
};

const SignUpForm = (): ReactElement => {
  return (
    <Form onSubmit={handleSubmit}>
      {signUpFields.map(([name, hidable]: [string, boolean]) => {
        const [hidden, setHidden] = useState(hidable);
        return (
          <Label key={name}>
            {name}
            <InputRow>
              <Input type={hidden ? 'password' : 'text'} autoFocus={false} />
              {hidable && <Eye onClick={() => setHidden(!hidden)} />}
            </InputRow>
          </Label>
        );
      })}
      <Submit type="submit" value="Continue" />
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
