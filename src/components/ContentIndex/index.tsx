import Image from "next/image"
import heroImg from "../../../public/assets/avatar-02.png"
import logo from "../../../public/assets/logo.png"
import zigArrow from "../../../public/assets/zig-arrow.png"
import { Header, Content, Buttons } from "./style"
import { FaRegUser } from 'react-icons/fa';

export default function ContentIndex() {
  return (
    <div className="container">
      <Header>
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
            </li>

            <li>
              <a href="">
                <FaRegUser size={16} />
                Login
              </a>
            </li>
          </ul>
        </nav>
      </Header>

      <Content>
        <Image
          className="img-header"
          alt="Logo Tarefas"
          src={heroImg}
          priority={true}
        />

        <h1>
          <span>Sistema de organização <br /> de tarefas</span>
        </h1>



        <Buttons >
          <Image
            className="img-header"
            alt="Logo Tarefas"
            src={zigArrow}
            priority={true}
          />
          <div className="numbers">
            <a href="">
              +7 Mil postagens
            </a>
            <a href="">
              +1 Mil comentários
            </a>
          </div>
        </Buttons>
      </Content>
    </div >
  )
}