import React, { useState } from "react";

import {
  CitacaoTextoNatalino,
  Container,
  Content,
  DeyvidNatalino,
  TextoNatalino,
  TituloNatalino,
  MusicButton,
} from "./styles";

import { FaMusic } from "react-icons/fa6";

import deyvidNatalino from "../../assets/images/deyvid-natalino.jpeg";
import SnowFlake from "../../components/SnowFlake";
import ChristmasImages from "../../components/ChristmasImages";
import Music from "../../assets/audio/music.mp3";

const Home: React.FC = () => {
  const [playMusic, setPlayMusic] = useState<boolean>(false);
  const [music, _] = useState<HTMLAudioElement>(new Audio(Music));

  const handlePlayMusic = () => {
    setPlayMusic(!playMusic);

    if (playMusic) {
      music.pause();
    } else {
      music.play();
    }
  };
  return (
    <Container>
      <ChristmasImages />
      <Content>
        <div>
          <DeyvidNatalino src={deyvidNatalino} alt="Foto Deyvid Natalino" />
        </div>
        <div>
          <TituloNatalino>Feliz Natal</TituloNatalino>
          <TextoNatalino>
            Eu estou pensando em você hoje porque é Natal, e eu lhe desejo
            felicidade.
            <br />
            E amanhã, porque será o dia seguinte ao Natal,
            <br />
            Eu ainda lhe desejarei felicidade.
            <br />
            Eu posso não ser capaz de lhe falar sobre isto diariamente,
            <br />
            Porque eu posso estar ausente, ou nós podemos estar muito ocupados.
            <br />
            Mas isso não faz diferença.
            <br />
            Meus pensamentos e meus desejos estarão com você da mesma forma.
            <br />
            Qualquer alegria ou sucesso que você tenha, me fará feliz. Me
            iluminará por todo ano.
            <br />
            Eu desejo a você o Espírito do Natal.
            <br />
          </TextoNatalino>
          <CitacaoTextoNatalino>- Van Dike</CitacaoTextoNatalino>
        </div>
      </Content>
      <MusicButton toggle={playMusic ? "on" : "off"} onClick={handlePlayMusic}>
        <FaMusic />
      </MusicButton>
      <SnowFlake />
    </Container>
  );
};

export default Home;
