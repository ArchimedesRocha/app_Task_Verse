import Head from 'next/head'
import { Main } from './style'
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function Task() {
  return (
    <>
      <Head>
        <title>Task Verse | Detalhe da Tarefa </title>
      </Head>

      <Main>
        <div className="container">
          <h1>Teste</h1>
        </div>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: {
        email: session?.user?.email,
      }
    },
  };
};