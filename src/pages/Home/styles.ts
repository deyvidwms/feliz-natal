import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #efefef;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1440px;

  margin: 50px;
  padding: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  background-color: rgb(255 255 255 / 60%);

  border-radius: 20px;

  transition: all ease 0.3s;

  z-index: 2;

  div {
    text-align: center;
    width: 50%;
  }
  
  @media (max-width: 1024px) {
    background-color: rgb(255 255 255 / 90%);
  }

  @media (max-width: 820px) {
    div:first-child {
      display: none;
    }

    div:last-child {
      width: 100%;
    }
  }

  @media (max-width: 590px) {
    padding: 20px 25px;
    margin: 0 20px;
  }
`;

export const DeyvidNatalino = styled.img`
  max-width: 500px;
  width: 100%;
  max-height: 520px;
  height: 100%;
  object-fit: cover;
  border-radius: 30% 70% 59% 41% / 56% 30% 70% 44%;

  transition: all ease 0.3s;

  @media (max-width: 1024px) {
    width: 80%;
    height: 80%;
  }
`;

export const TituloNatalino = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #c60505;

  @media (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const TextoNatalino = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: start;

  @media (max-width: 1440px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.875rem;
  }
`;

export const CitacaoTextoNatalino = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5;
  color: #c60505;
  text-align: start;

  @media (max-width: 1440px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.875rem;
  }
`;

type MusicButtonProps = {
  toggle: string;
}

const clickMe = keyframes`
  0% {
    border: 1px solid #CCC;
    box-shadow: none;
    right: 50px;
  }
  16% {
    border: 1px solid #CCC;
    box-shadow: none;
    border: 1px solid #b81616;
    box-shadow: 0px 0px 10px rgb(215 23 23 / 50%);
    right: 45px;
  }
  32% {
    border: 1px solid #CCC;
    box-shadow: none;
    border: 1px solid #b81616;
    box-shadow: 0px 0px 10px rgb(215 23 23 / 50%);
    right: 55px;
  }
  48% {
    border: 1px solid #CCC;
    box-shadow: none;
    border: 1px solid #b81616;
    box-shadow: 0px 0px 10px rgb(215 23 23 / 50%);
    right: 45px;
  }
  64% {
    border: 1px solid #CCC;
    box-shadow: none;
    border: 1px solid #b81616;
    box-shadow: 0px 0px 10px rgb(215 23 23 / 50%);
    right: 55px;
  }
  80% {
    border: 1px solid #CCC;
    box-shadow: none;
    border: 1px solid #b81616;
    box-shadow: 0px 0px 10px rgb(215 23 23 / 50%);
    right: 45px;
  }
  100%{
    border: 1px solid #CCC;
    box-shadow: none;
    right: 50px;
  }
`;

export const MusicButton = styled.button<MusicButtonProps>`
  position: fixed;
  right: 50px;
  bottom: 50px;

  z-index: 3;

  display: flex;
  padding: 20px;
  border: 1px solid ${ (props) => props.toggle === "on" ? "#b81616" : "#CCC" };
  border-radius: 50px;

  box-shadow: ${ (props) => props.toggle === "on" ? "0px 0px 10px rgb(215 23 23 / 50%)" : "none"};

  animation: ${clickMe} 1s;
  transition: all ease 0.3s;
  cursor: pointer;

  svg {
    transition: all ease 0.3s;
    fill: ${ (props) => props.toggle === "on" ? "#b81616" : "#737373" }
  }
`;