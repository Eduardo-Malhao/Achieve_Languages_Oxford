import Image from "next/image";
import styles from "../styles/courses.css";
import banner from "../images/banner_teens.jpg";
import age from "../images/age11.svg";
import workload from "../images/workload.svg";
import blended from  "../images/blended.svg";
import talk from "../images/talk.svg";

export default function teens() {
  return (
    <main className="back">
      <div
        className="banners-courses"
      >
        <Image
          src={banner}
          alt="WOW"
          className="banners-image"
        />
        <h2 className="titles">O Teens é um curso que traz o universo do adolescente para dentro da sala de aula. Todo o material didático se conecta com a realidade do estudante de um jeito orgânico, com professores que reinventam suas aulas para manter os alunos interessados e reduzir a distância entre eles. Sem decoreba. Faça-nos uma visita, agora em São José dos Campos, no bairro Vista Verde</h2>
      </div>

      <div
        className="text-container"
      >
        <div
          className="first-container"
        >
           <div
            className="icons-container-courses"
          >
            <Image
              src={age}
              className="icons"
            />
            <h3 className="titles-text">Idade para iniciar</h3>
          </div>
          <p className="text">Curso desenvolvido para crianças de 11 a 15 anos.</p>
          
          <div
            className="icons-container-courses"
          >
            <Image
              src={talk}
              className="icons"
            />
            <h3 className="titles-text">DIZ AÍ, ALUNO</h3>
          </div>
          <p className="text">Nosso inglês é focado na fala para o bate-papo do dia a dia mesmo. Seja para fazer aquele curso no exterior ou trocar ideias com pessoas de pertinho ou de bem longe. Afinal de contas, um mundo conectado não tem fronteiras!</p>
        </div>

        <div
          className="second-container"
        >
          <div
            className="icons-container-courses"
          >
            <Image
              src={workload}
              className="icons"
            />
            <h3 className="titles-text">Carga Hoária</h3>
          </div>  
          <p className="text">Carga de até 120 horas por ano.</p>
          
          <div
            className="icons-container-courses"
          >
            <Image
              src={blended}
              className="icons"
            />
          <h3 className="titles-text">É INGLÊS DE VERDADE</h3>
          </div>
          <p className="text">Aluno Achieve sabe que comunicação vai além dos livros. Sabe que inglês bom é aquele que você aprende de muitas formas, sozinho, com os amigos, com atividades na sala de aula, música, on-line, blogs e YouTube. Bem, tudo que você mais curte.</p>
        </div>
      </div>

      <div
        className="video-container"
      >
        <h2 className="titles-video">COMO O INGLÊS FEZ A DIFERENÇA PELA VOZ DE QUEM FAZ ACHIEVE LANGUAGES.</h2>

        <div
          className="banners-video-container"
        >
          <iframe
            src="https://www.youtube.com/embed/XS9Xvnj18Js?si=TrSHrbHSKjAc7MJY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="banners-video"
          />

          <iframe
            src="https://www.youtube.com/embed/wzapUNrk-dk?si=qG7s7MqSe2UqHLEN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="banners-video"
          />
        </div>
      </div>
    </main>
  )
}
