import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Content, RegisterComment, TextArea, ButtonSecondary, FollowComments, Comments } from './style';
import Link from 'next/link';
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from "next/image";

import girl from "../../../public/assets/avatar-04.png";

export default function Task() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Task Verse | Detalhe da Tarefa </title>
        </Head>

        <Content>
          <RegisterComment>
            <div className="container">
              <h1>Tarefa: Praticar atividade cardiorespiratória</h1>
              <form>
                <TextArea
                  value={""}
                  onChange={() => ('')}
                  placeholder="Deixe seu comentário..."
                />

                <ButtonSecondary>
                  Comentar
                </ButtonSecondary>
              </form>
            </div>
          </RegisterComment>

          <FollowComments>
            <div className="myTasks">
              <h2>Todos os comentários</h2>

              <Image
                alt="Girld with notebook"
                src={girl}
                priority={true}
              />
            </div>
          </FollowComments>
        </Content>

        <Comments >
          <div className="mainComments">
            <div className="comments">
              <div className="author">
                <TfiCommentAlt size={16} />
                <p>ANDERSON LUCAS</p>
              </div>

              <div className="comment">
                <span>Uma boa dica é fazer circuitos curtos de alta intensidade (HIIT), alternando exercícios aeróbicos rápidos com descanso ativo.</span>
              </div>
            </div>

            <button className="trash" >
              <FaRegTrashAlt size={16} />
            </button>
          </div>
        </Comments>
      </div>
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