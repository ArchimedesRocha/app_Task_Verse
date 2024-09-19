import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

import Head from "next/head";
import Image from "next/image";

import { FaRegTrashAlt } from "react-icons/fa";
import { PiArrowUUpRightBold } from "react-icons/pi";


import girl from "../../../public/assets/avatar-05.png";

import { Content, RegisterTask, FollowTasks, TextArea, CheckBox, ButtonSecondary, Tasks } from './style'
import Link from "next/link";

import { db } from '../../services/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';

interface HomeProps {
  user: {
    email: string;
  }
}

export default function Dashboard({ user }: HomeProps) {

  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);

  function handleChangePublic(e: ChangeEvent<HTMLInputElement>) {
    setPublicTask(e.target.checked)
  }

  async function handleRegisterTask(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    try {
      await addDoc(collection(db, "tarefas"), {
        tarefa: input,
        created: new Date(),
        user: user?.email,
        public: publicTask
      })

      setInput("");
      setPublicTask(false);

    } catch (err) {
      console.log(err)
    }

  }


  return (
    <div className="container">
      <Head>
        <title>Task Verse | Meu Painel </title>
      </Head>

      <Content>
        <RegisterTask>
          <div className="container">
            <h1>Qual a sua tarefa?</h1>
            <form onSubmit={handleRegisterTask}>
              <TextArea
                value={input}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                placeholder="Digite sua tarefa..."
              />
              <div className="checkbox">
                <CheckBox>
                  <input
                    type="checkbox"
                    checked={publicTask}
                    onChange={handleChangePublic}
                  />

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
    props: {
      user: {
        email: session?.user?.email,
      }
    },
  };
};