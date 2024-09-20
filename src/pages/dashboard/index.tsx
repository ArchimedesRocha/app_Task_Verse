import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";

import { FaRegTrashAlt } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";


import girl from "../../../public/assets/avatar-05.png";

import { Content, RegisterTask, FollowTasks, TextArea, CheckBox, ButtonSecondary, Tasks } from './style'
import Link from "next/link";

import { db } from '../../services/firebaseConnection';
import { addDoc, collection, query, orderBy, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

interface HomeProps {
  user: {
    email: string;
  }
}

interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  tarefa: string;
  user: string;
}

export default function Dashboard({ user }: HomeProps) {

  const [input, setInput] = useState("");
  const [publicTask, setPublicTask] = useState(false);
  const [tasks, setTasks] = useState<TaskProps[]>([])

  useEffect(() => {
    async function loadTarefas() {

      const tarefasRef = collection(db, "tarefas")
      const q = query(
        tarefasRef,
        orderBy("created", "desc"),
        where("user", "==", user?.email)
      )

      onSnapshot(q, (data) => {
        let lista = [] as TaskProps[];

        data.forEach((doc) => {
          lista.push({
            id: doc.id,
            tarefa: doc.data().tarefa,
            created: doc.data().created,
            user: doc.data().user,
            public: doc.data().public
          })
        })

        setTasks(lista);
      });

    }

    loadTarefas()
  }, [user?.email])

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

  async function handleShare(id: string) {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/task/${id}`
    )

    alert('A URL da tarefa foi copiada.')
  }

  async function handleDeleteTask(id: string) {
    const docRef = doc(db, "tarefas", id)
    await deleteDoc(docRef)
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
                <p> Deixar tarefa pública?</p>
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
              loading="lazy"
              alt="Girld with notebook"
              src={girl}

            />
          </div>
        </FollowTasks>
      </Content>

      <Tasks >
        {tasks.map((item) => (
          <div className="tasks" key={item.id}>
            {item.public ? (
              <Link href={`/task/${item.id}`}>
                {item.tarefa}
              </Link>
            ) : (
              <p>{item.tarefa}</p>
            )}

            <div className="task">
              {item.public && (
                <div className="publicTask">
                  <span>Pública </span>
                  <button onClick={() => handleShare(item.id)}>
                    <LuShare2 size={16} />
                  </button>
                </div>
              )}

              <button className="trash" onClick={() => handleDeleteTask(item.id)}>
                <FaRegTrashAlt size={16} />
              </button>


            </div>
          </div>
        ))}
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