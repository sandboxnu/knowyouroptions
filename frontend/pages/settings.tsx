import { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, device } from '../templates/mediaSizes';
import 'antd/dist/antd.css';
import EditSvg from '../public/edit.svg';
import { Select } from 'antd';
import { Input } from 'antd';
import MenuBar from '../components/Menubar';
import { API } from '../api-client';
import { useRouter } from 'next/router';
const { Option } = Select;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 7%;
  margin-left: 7%;
  padding: 0;
  width: 85w;
  max-width: 1500px;
  padding-top: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100vw;
`;
const Header = styled(Container)`
  background-color: #febba8;
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  justify-content: end;
  margin: 0;
  padding: 1.5rem;
  row-gap: 2rem;

  @media ${device.laptop} {
    min-height: 30vh;
    position: relative;
    padding-left: 7rem;
  }
`;
const Title = styled.h1`
  display: inline;
  font-size: 22px;
  margin: 0;
  @media ${device.laptop} {
    font-size: 48px;
    font-weight: 900;
    line-height: 56px;
    letter-spacing: -0.005em;
  }
`;

const BoxTitle = styled.h1`
  width: 130px;
  color: #911d7a;
  margin-right: 40px;
  margin-top: 1vh;
  white-space: nowrap;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.005em;
  text-align: left;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 15px;
`;

const StyeldEditSvg = styled(EditSvg)`
  right: 15px;
  position: absolute;
`;
const SmallHeader = styled.h2`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #808080;
  margin-top: 2vh;
`;
const InputN = styled(Input)`
  margin-top: 1vh;
  border-radius: 15px;
  height: 40px;
  box-shadow: 0px 4px 6px 4px #00000040;
`;
const SecurityInputPassword = styled(Input.Password)`
  border-radius: 15px;
  height: 40px;
  box-shadow: 0px 4px 6px 4px #00000040;
  width: 70%;
`;
const DeleteDataButton = styled.div`
  width: 158px;
  height: 53px;
  background: #ffffff;
  border: 3px solid #89006c;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const SignOutButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignOutButton = styled.button`
  width: 158px;
  height: 53px;
  background: #89006c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  justify-content: center;
  display: flex;
  color: white;
  align-items: center;
  z-index: 20;
`;
const SecurityTitle = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.005em;
  text-align: left;
  color: #1899a0;
  width: 30%;
`;
const SecurityInput = styled(Input)`
  border-radius: 15px;
  height: 40px;
  box-shadow: 0px 4px 6px 4px #00000040;
  width: 70%;
`;
type CookieProps = {
  cookies: any;
};
const Profile = (CookieProps: CookieProps) => {
  const { cookies } = CookieProps;
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);
  const [cookie, setCookie] = useState(cookies);
  useEffect(() => {
    if (firstLoad) {
      getUser();
      setFirstLoad(false);
    }
  });
  const getUser = async () => {
    try {
      const user = await API.user.getName();
      setName(user);
      const userEmail = await API.user.getEmail();
      setEmail(userEmail);
      const userPronouns = await API.user.getPronouns();
      setPronouns(userPronouns);
    } catch (e) {
      // If user is not signed in (expects not-logged-in error)
      router.push('/signin');
    }
  };
  const signOut = () => {
    API.deleteToken.tokenDelete();
    router.push('/signin');
  };
  console.log(name + 'name');

  return (
    <div>
      <MenuBar />
      <Header>
        <Title>Settings</Title>
      </Header>
      <ContainerPage>
        <Card>
          <BoxTitle>Full Name</BoxTitle>

          <InputN
            onChange={(e) => setName(e.target.value)}
            value={name}
            suffix={<StyeldEditSvg></StyeldEditSvg>}
          />
        </Card>

        <Card>
          <BoxTitle>Pronouns</BoxTitle>
          <InputN
            onChange={(e) => setPronouns(e.target.value)}
            value={pronouns}
            placeholder="Add pronouns"
            suffix={<StyeldEditSvg></StyeldEditSvg>}
          />
        </Card>

        <SmallHeader>Security</SmallHeader>
        <Card>
          <SecurityTitle>Email</SecurityTitle>
          <SecurityInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            suffix={<StyeldEditSvg></StyeldEditSvg>}
          ></SecurityInput>
        </Card>
        <Card>
          <BoxTitle>Password</BoxTitle>
          <InputN
            defaultValue="******"
            suffix={<StyeldEditSvg></StyeldEditSvg>}
          ></InputN>
        </Card>
        <SmallHeader>Data</SmallHeader>
        <p>
          The data will not be shared with any other group. It will only be used
          to help improve this application.
        </p>
        <DeleteDataButton>Delete Data</DeleteDataButton>
        <SignOutButtonContainer>
          <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </SignOutButtonContainer>
      </ContainerPage>
    </div>
  );
};
Profile.getInitialProps = async ({ req }: any) => {
  console.log({
    cookie: '',
  });

  return { cookie: req.headers.cookie };
};
export default Profile;
