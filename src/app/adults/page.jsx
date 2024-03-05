import Image from "next/image";
import styles from  "../styles/courses.css";
import Banner from "../images/banner_adults.png";
import age from "../images/age16.svg";
import workload from "../images/workload.svg";
import blended from  "../images/blended.svg";
import plane from "../images/plane.svg";

export default function adults() {
  return (
    <main className="back">
      <div
        className="banners-courses"
      >
        <Image
          src={Banner}
          alt="Quando o Inglês é Oxford ele entra na cabeça!"
          className="banners-image"
        />
        <h2 className="titles">Sabe aquele curso tradicional de inglês?
          Você não encontra isso aqui. O curso Expert é focado na conversação e na interação entre os alunos para que compartilhem suas vivências e construam, juntos com o professor, um ensino que faça sentido. Um curso que usa o seu mundo para preparar você para o mundo. Achieve Languages agora em São José dos Campos, no bairro Vista Verde, agende sua aula experimental!
        </h2>
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
          <p className="text">Curso desenvolvido para jovens a partir dos 16 anos e adultos</p>
          
          <div
            className="icons-container-courses"
          >
            <Image
              src={blended}
              className="icons"
            />
            <h3 className="titles-text">Blended Learning</h3>
          </div>
          <p className="text">O conteúdo não fica só na sala de aula. Você pode acessar, de qualquer lugar, uma plataforma on-line interativa com fixação e expansão do trabalho realizado nas aulas. A prática é dentro e fora da escola.</p>
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
              src={plane}
              className="icons"
            />
            <h3 className="titles-text">MAS, COMO FALA ISSO MESMO?</h3>
          </div>
          <p className="text">A Achieve acredita que a conexão entre as pessoas muda tudo. Por isso que o foco das aulas é na conversação, com simulações de situações do cotidiano e no aprendizado de uma linguagem prática, natural e com relevância.</p>
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
            src="https://www.youtube.com/embed/zDG9PIXnx9o?si=kCdu_tI4cdPFfABS"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="banners-video"
          />

          <iframe
            src="https://www.youtube.com/embed/L-McN9D0WyA?si=hxYOv0l9gflKlR5d"
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
