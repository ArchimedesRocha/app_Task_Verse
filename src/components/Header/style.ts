import styled from "styled-components";


export const HeaderStyle = styled.header`

margin: 3.2rem 1.6rem 0 1.6rem;

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

          &.my-pannel {
            padding: .4rem 1rem;

            svg {
              stroke: var(--color-white);
              fill: transparent;
              transition: all .2s;              
            }
            
            &:hover {
              color: var(--color-green-625);
              background: var(--color-green-100);
              border: 0.1rem solid var(--color-green-100);

              svg {
                stroke: var(--color-green-625);
                fill: transparent;
              }
          }
        }
      }
    }
  }
}
`;