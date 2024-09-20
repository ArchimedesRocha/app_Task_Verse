import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 45rem 1fr;
  height: 100vh;
  background: var(--color-white);
`;

export const LoginAvatar = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;


.logo {
  display: flex;
  align-items: center;
  gap: 1.6rem;  
  position: relative;
  
  padding: 2.4rem;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    object-fit: contain;
  }

  h2 {
    color: var(--color-blue-rgba-1000);

    font-size: 2.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.025rem;
  }
}

.avatar {
  img {
    width: 100%;
  }
}
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-text-default);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .box {
    width: 50rem;
    padding: 4.8rem;    
    background: var(--color-white);
    border-radius: .8rem;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  color: var(--color-text-default);
  margin-bottom: 3.2rem;
  text-align: center;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  position: relative;

  background-color: var(--color-text-default);
  color: var(--color-white);
  border: none;
  border-radius: 5px;
  padding: 1.6rem 2rem;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-blue-650);
  }

  img {
    position: absolute;
    left: 1.6rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;