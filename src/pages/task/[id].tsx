import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { Content, RegisterComment, TextArea, ButtonSecondary, FollowComments, Comments } from './style';
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from "next/image";

import girl from "../../../public/assets/avatar-04.png";

import { db } from '../../services/firebaseConnection';
import { doc, collection, query, where, getDoc, getDocs, addDoc, deleteDoc } from 'firebase/firestore';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';

interface TaskProps {
  item: {
    tarefa: string;
    created: string;
    public: boolean;
    user: string;
    taskId: string;
  };
  allComments: CommentProps[]
}

interface CommentProps {
  id: string,
  comment: string,
  user: string,
  taskId: string,
  name: string
}

export default function Task({ item, allComments }: TaskProps) {

  const { data: session } = useSession();

  const [input, setInput] = useState("");

  const [comments, setComments] = useState<CommentProps[]>(allComments || [])

  async function handleComment(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    if (!session?.user?.email || !session?.user?.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment: input,
        created: new Date(),
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId,
      })

      const data = {
        id: docRef.id,
        comment: input,
        user: session?.user?.email,
        name: session?.user?.name,
        taskId: item?.taskId,
      }

      setComments((oldItems) => [...oldItems, data])

      setInput("")

    } catch (err) {
      console.log(err)
    }
  }

  async function handleDeleteComment(id: string) {
    try {
      const docRef = doc(db, "comments", id)
      await deleteDoc(docRef)

      const deletComment = comments.filter((item) => item.id !== id)
      setComments(deletComment)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="container">
        <Head>
          <title>Task Verse | Detalhe da Tarefa </title>
        </Head>

        <Content>
          <RegisterComment>
            <div className="container">
              <div className="title">
                <h2>Tarefa</h2>
                <h1>{item.tarefa}</h1>
              </div>

              <form onSubmit={handleComment}>
                <TextArea
                  value={input}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                  placeholder={!session?.user ? "Você precisa estar logado para comentar!" : "Deixe seu comentário..."}
                  disabled={!session?.user}
                />

                <ButtonSecondary disabled={!session?.user}>
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
            {comments.length === 0 && (
              <p>Não há comentários para essa tarefa.</p>
            )}

            {comments.map((item) => (
              <>
                <div key={item.id} className="comments">
                  <div className="message">
                    <div className="author">
                      <p>{item.name}</p>
                      <TfiCommentAlt size={16} />
                    </div>

                    <div className="comment">
                      <p>{item.comment}</p>
                    </div>
                  </div>

                  {item.user === session?.user?.email && (
                    <button className="trashIcon" disabled={!session?.user} onClick={() => handleDeleteComment(item.id)}>
                      <FaRegTrashAlt size={16} />
                    </button>
                  )}
                </div>


              </>
            ))}
          </div>
        </Comments>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const docRef = doc(db, "tarefas", id);
  const snapshot = await getDoc(docRef);

  if (snapshot.data() === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!snapshot.data()?.public) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const q = query(collection(db, "comments"), where("taskId", "==", id));
  const snapshotComment = await getDocs(q);

  let allComments: CommentProps[] = []
  snapshotComment.forEach((doc) => {
    allComments.push({
      id: doc.id,
      comment: doc.data().comment,
      user: doc.data().user,
      name: doc.data().name,
      taskId: doc.data().taskId
    })
  })

  const miliseconds = snapshot.data()?.created?.seconds * 1000;

  const task = {
    tarefa: snapshot.data()?.tarefa,
    public: snapshot.data()?.public,
    created: new Date(miliseconds).toLocaleDateString(),
    user: snapshot.data()?.user,
    taskId: id,
  }

  return {
    props: {
      item: task,
      allComments: allComments,
    },
  };
};