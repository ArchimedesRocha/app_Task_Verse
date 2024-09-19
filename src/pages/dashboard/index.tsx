import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

import { FaRegTrashAlt } from "react-icons/fa";
import { PiArrowUUpRightBold } from "react-icons/pi";


import girl from "../../../public/assets/avatar-05.png";

import { Content, RegisterTask, FollowTasks, TextArea, CheckBox, ButtonSecondary, Tasks } from './style'
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <Head>
        <title>Task Verse | Meu Painel </title>
      </Head>

      <Content>
        <RegisterTask>
          <div className="container">
            <h1>Qual a sua tarefa?</h1>
            <form action="">
              <TextArea name="" id="" placeholder="Digite sua tarefa..."></TextArea>

              <div className="checkbox">
                <CheckBox>
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </CheckBox>
                <p> Deixar Tarefa pública</p>
              </div>

              <ButtonSecondary>
                Registrar
              </ButtonSecondary>
            </form>
          </div>
        </RegisterTask>

        <FollowTasks>
          <div className="myTasks">
            <h2>Minhas Tarefas</h2>

            <Image
              alt="Girld with notebook"
              src={girl}
              priority={true}
            />
          </div>
        </FollowTasks>
      </Content>

      <Tasks>
        <div className="tasks">
          <Link href="/">Postar projeto no linkedin</Link>
          <div className="task">
            <button>
              <span>Pública </span>
              <PiArrowUUpRightBold size={16} />
            </button>
            <button className="trash">
              <FaRegTrashAlt size={16} />
            </button>
          </div>
        </div>
      </Tasks>
    </div>
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
    props: {},
  };
};