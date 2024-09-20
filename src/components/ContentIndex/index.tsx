import { useEffect, useState } from "react";
import Image from "next/image";
import heroImg from "../../../public/assets/avatar-02.png";
import zigArrow from "../../../public/assets/zig-arrow.png";
import { Content, Buttons } from "./style";
import Link from "next/link";
import { db } from '../../services/firebaseConnection';
import { collection, getDocs } from 'firebase/firestore';

export default function ContentIndex() {
  // Definimos estados para armazenar as postagens e os comentários
  const [posts, setPosts] = useState<number | null>(null);
  const [comments, setComments] = useState<number | null>(null);

  // useEffect para buscar os dados do Firestore quando o componente monta
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from Firestore...");

        // Ref das coleções
        const commentRef = collection(db, "comments");
        const postRef = collection(db, "tarefas");

        // Obtendo os documentos
        const commentSnapshot = await getDocs(commentRef);
        const postsSnapshot = await getDocs(postRef);

        // Atualiza o estado com o tamanho das coleções
        setPosts(postsSnapshot.docs.length || 0);
        setComments(commentSnapshot.docs.length || 0);

        console.log("Data fetched: ", { posts: postsSnapshot.docs.length, comments: commentSnapshot.docs.length });
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        setPosts(0);
        setComments(0); // Em caso de erro, defina 0
      }
    };

    fetchData();
  }, []); // Executa o efeito uma vez, quando o componente monta

  return (
    <div className="container">
      <Content>
        <Image
          loading="lazy"
          className="img-header"
          alt="Logo Tarefas"
          src={heroImg}
        />
        <h1>
          <span>Sistema de organização <br /> de tarefas</span>
        </h1>
        <Buttons>
          <Image
            loading="lazy"
            className="img-header"
            alt="Logo Tarefas"
            src={zigArrow}
          />
          <div className="numbers">
            <p>
              {/* Exibe um texto de carregamento enquanto busca os dados */}
              +{posts !== null ? `${posts} Postagens` : 'Carregando postagens...'}
            </p>
            <p>
              +{comments !== null ? `${comments} Comentários` : 'Carregando comentários...'}
            </p>
          </div>
        </Buttons>
      </Content>
    </div>
  );
}
