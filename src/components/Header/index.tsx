import Image from "next/image"

import Link from "next/link"

import { HeaderStyle } from "./style"

import logo from "../../../public/assets/logo-gif-06.gif"

import { FaRegUser } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";

import { useSession, signIn, signOut } from 'next-auth/react'


export default function Header() {

  const { data: session, status } = useSession();

  return (
    <HeaderStyle>
      <nav>
        <ul>
          <li>
            <Image
              className="img-header"
              alt="Logo Tarefas"
              src={logo}
              priority={true}
            />

            <h2>Task Verse</h2>

            <Link href="/dashboard" className='my-pannel'>
              <LuLayoutDashboard size={16} />
              Meu Painel
            </Link>
          </li>

          <li>
            {status === 'loading' ? (
              <>Carregando...</>
            ) : session ? (
              <button onClick={() => signOut()}>
                <FaRegUser size={16} />
                Olá {session?.user?.name}
              </button>
            ) : (
              <button onClick={() => signIn()}>
                <FaRegUser size={16} />
                Login
              </button>
            )
            }
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}