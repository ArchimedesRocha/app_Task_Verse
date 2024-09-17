import Image from "next/image"

import Link from "next/link"

import { HeaderStyle } from "./style"

import logo from "../../../public/assets/logo.png"

import { FaRegUser } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";


export default function Header() {
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
            <Link href="">
              <FaRegUser size={16} />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}