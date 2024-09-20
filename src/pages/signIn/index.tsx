import { getProviders, signIn } from "next-auth/react";

import { Container, LoginAvatar, LoginBox, Title, LoginButton, ErrorMessage } from "./style";

import Image from "next/image"

import logo from "../../../public/assets/logo-black.svg"
import avatarLogin from "../../../public/assets/avatar-login.png"
import logoGoogle from '../../../public/assets/logo-google.svg'

export default function SignIn({ provider }: any) {
  return (
    <Container>
      <LoginAvatar>
        <div className="logo">
          <Image
            className="img-header"
            alt="Logo Tarefas"
            src={logo}
            priority={true}
          />

          <h2>Task Verse</h2>
        </div>

        <div className="avatar">
          <Image
            className="img-header"
            alt="Logo Tarefas"
            src={avatarLogin}
            priority={true}
          />
        </div>
      </LoginAvatar>
      <LoginBox>
        <div className="box">
          <Title>Faça login na sua conta</Title>
          {provider ? (
            <LoginButton onClick={() => signIn(provider.id)}>
              <Image
                className="img-header"
                alt="Logo Google"
                src={logoGoogle}
                priority={true}
              /> Entrar com {provider.name}
            </LoginButton>
          ) : (
            <ErrorMessage>Provedor de autenticação não encontrado.</ErrorMessage>
          )}
        </div>
      </LoginBox>
    </Container>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  const googleProvider = providers ? providers.google : null;
  return {
    props: { provider: googleProvider },
  };
}
