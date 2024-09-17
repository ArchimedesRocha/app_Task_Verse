import Image from "next/image";
import heroImg from "../../../public/assets/avatar-02.png";
import zigArrow from "../../../public/assets/zig-arrow.png";
import { Content, Buttons } from "./style";
import Link from "next/link";

export default function ContentIndex() {
  return (
    <div className="container">

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

        <Buttons>
          <Image
            className="img-header"
            alt="Logo Tarefas"
            src={zigArrow}
            priority={true}
          />
          <div className="numbers">
            <Link href="">
              +7 Mil postagens
            </Link>
            <Link href="">
              +1 Mil comentários
            </Link>
          </div>
        </Buttons>
      </Content>
    </div>
  );
}
