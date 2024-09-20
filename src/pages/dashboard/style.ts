import styled from 'styled-components'

import bgHero from "../../../public/assets/bg-hero.png";
import bgTask from "../../../public/assets/bg-s-tasks.png";

export const Content = styled.main`
background-image: url(${() => bgHero.src});

margin-bottom: 3.2rem;
`

export const RegisterTask = styled.section`
  width: 100%;
  margin-top: 6.4rem;
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3.2rem;
    padding: 0;

    h1 {
      color: var(--color-text-primary);
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.4rem;
      letter-spacing: 0.025rem;
    }

    form {      
      width: 100%;
      
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1.6rem;
    }

    .checkbox {
      
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;

      p {        
        color: var(--color-gray-rgba-400);
      }
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 15rem;
  border-radius: .8rem;
  background: transparent;
  border: 0.1rem solid var(--color-gray-rgba-400);
  padding: 1.6rem;

  color: var(--color-white);

  &::placeholder {
    color: var(--color-gray-rgba-400);
  }
`

export const CheckBox = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.4rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: var(--color-purple-default);
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(2.6rem);
      -ms-transform: translateX(2.6rem);
      transform: translateX(2.6rem);
    }

    &:focus + .slider {
      box-shadow: 0 0 0.1rem var(--color-purple-default);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-gray-rgba-400);
    -webkit-transition: .4s;
    transition: .4s;

    border-radius: 2rem;

    &.slider .around {
      border-radius: 3.4rem
    }

    &.slider.round:before {
      border-radius: 50%;
    }

    &:before {
      position: absolute;
      content: "";
      height: 1.6rem;
      width: 1.6rem;
      left: 0.4rem;
      bottom: 0.4rem;
      background-color: var(--color-white);
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
`

export const ButtonSecondary = styled.button.attrs(props => ({
  type: 'submit',
}))`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.6rem;
  text-transform: capitalize;

  color: var(--color-white);
  background: var(--color-purple-default);
  border: 0.1rem solid var(--color-purple-transparent-100);

  padding: .8rem 2rem;

  border-radius: .8rem;

  transition: all .2s;

  &:hover {
    color: var(--color-purple-default);
    background: var(--color-purple-100);
    border: 0.1rem solid var(--color-purple-default);
  }      
`

export const FollowTasks = styled.section`
  margin-top: 25.6rem;

  width: 100%;
  height: 12rem;

  
  display: flex;
  align-items: center;

  background-image: url(${() => bgTask.src});

  border-radius: .8rem;

  position: relative;

  .myTasks {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 1.6rem;

  

    h2 {      
      color: var(--color-white);
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 2.4rem;
      letter-spacing: 0.025rem;
    }

    img {
      width: 24rem;
      height: 27rem;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
`

export const Tasks = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem;

  .tasks {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.6rem;
    border-radius: 0.8rem;
    background: var(--color-gray-rgba-100);

    a {

      color: var(--color-text-primary);
      line-height: 2.4rem;
      letter-spacing: 0.025rem;
      transition: all .2s;
      white-space: pre-wrap;

      &:hover {        
        color: var(--color-green-625); 
      }
    }

    p {      
      color: var(--color-text-primary);
      line-height: 2.4rem;
      letter-spacing: 0.025rem;
      transition: all .2s;
      white-space: pre-wrap;
    }

    .task {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      .publicTask {

        display: flex;
        align-items: center;
        gap: 1.6rem;     

        svg {
          stroke: var(--color-gray-rgba-400);
          fill: transparent;
          transition: all .2s;

          &:hover {
            stroke: var(--color-purple-default);
            fill: transparent;
          }
        }

        
      }

      button {     
      display: flex;
      align-items: center;
      gap: .8rem;  

        &.trash {
          svg {
            stroke: var(--color-gray-rgba-400);
            fill: var(--color-gray-rgba-400);
            transition: all .2s;
          }
        }

        &:hover {

          &.trash {
            svg {               
              stroke: var(--color-red-600);
              fill: var(--color-red-600);             
            }
          }
        }
      }

      span {
        color: var(--color-purple-default);  
        transition: all .2s;      
      } 
    }
  }
`