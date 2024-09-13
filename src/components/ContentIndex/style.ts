import styled, {keyframes, css} from "styled-components";
import bgHero from "../../../public/assets/bg-hero.png";

const rotate = keyframes`
 from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
`;

export const Header = styled.header`

margin-top: 3.2rem;

border-radius: border-radius-md;
border: 2px solid rgba(47, 51, 73, 0.68);
background: rgba(47, 51, 73, 0.38);

padding: 1.3rem 3.2rem;

nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {      
      display: flex;
      align-items: center;
      gap: 1.6rem;

      img {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
      }

      h2 {
        color: var(--color-white);

        font-size: 2.2rem;
        font-weight: 700;
        line-height: 2.4rem; /* 109.091% */
        letter-spacing: 0.025rem;
      }

      a {        
          display: flex;
          align-items: center;
          gap: 1.6rem;

          font-size: 17px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px;
          text-transform: capitalize;

          color: var(--color-white);
          background: var(--color-green-625);
          border: 0.1rem solid transparent;

          padding: .8rem 2rem;

          border-radius: .8rem;

          box-shadow: 0px 2px 6px 0px rgba(115, 103, 240, 0.30);

          transition: all .2s;

          svg {
            fill: var(--color-white);
            transition: all .2s;
          }

          &:hover {
            color: var(--color-green-625);
            background: var(--color-green-100);
            border: 0.1rem solid var(--color-green-100);

            svg {
            fill: var(--color-green-625);
          }
          }
        }
    }
  }
}
`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    background-image: url(${() => bgHero.src});
    height: calc(100vh - 12rem);
    background-size: cover;
    background-position: center;

    img {
      width: 53.1rem;
      height: 41.4rem;
      flex-shrink: 0;
    }

    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      margin-top: 3.2rem;

      span {
        font-size: 4.2rem;
        font-weight: 800;
        color: var(--color-white);
        background: linear-gradient(135deg, #5A4AFF 47.92%, #FA8989 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        line-height: 5rem;
        text-align:center;
      }
    }
  
`;

export const Buttons = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  margin-top: 3.2rem;

  img {
    width: 5.4rem;
    height: 3.0758rem;
  }

  .numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    a {
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      text-transform: capitalize;

      color: var(--color-white);
      background: var(--color-green-625);
      border: 0.1rem solid transparent;

      padding: 1.1rem 2.6rem;

      border-radius: .8rem;

      box-shadow: 0px 2px 6px 0px rgba(115, 103, 240, 0.30);

      transition: all .2s;

      &:hover {
        color: var(--color-green-625);
        background: var(--color-green-100);
        border: 0.1rem solid var(--color-green-100);
      }
    }
  }
`;