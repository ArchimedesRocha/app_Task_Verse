import { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Container, LoginAvatar, LoginBox, Title, LoginButton } from "./style";
import Image from "next/image";
import logoBlack from "../../../public/assets/logo-black.svg";
import avatarLogin from "../../../public/assets/avatar-login.png";
import logoGoogle from '../../../public/assets/logo-google.svg';

export default function SignIn({ provider }: any) {
  const router = useRouter();
  const { data: session } = useSession();
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const handleSignIn = async () => {
    setLoggingIn(true);
    const result = await signIn(provider.id, { redirect: false });

    if (result?.error) {
      setLoggingIn(false);
    }
  };

  return (
    <Container>
      <LoginAvatar>
        <div className="logo">
          <Image
            loading="lazy" className="img-header" alt="Logo Tarefas" src={logoBlack} />
          <h2>Task Verse</h2>
        </div>
        <div className="avatar">
          <Image
            loading="lazy" className="img-header" alt="Logo Tarefas" src={avatarLogin} />
        </div>
      </LoginAvatar>
      <LoginBox>
        <div className="box">
          <Title>Faça login na sua conta</Title>
          {provider ? (
            <LoginButton onClick={handleSignIn} disabled={loggingIn}>
              <Image
                loading="lazy" className="img-header" alt="Logo Google" src={logoGoogle} />
              {loggingIn ? "Acessando..." : `Entrar com ${provider.name}`}
            </LoginButton>
          ) : (
            <LoginButton onClick={() => console.error("Ops... infelizmente ocorreu algum erro!")}>
              <h2>Ops... infelizmente ocorreu algum erro!</h2>
            </LoginButton>
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
