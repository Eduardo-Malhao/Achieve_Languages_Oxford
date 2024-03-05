import Image from "next/image";
import styles from "../styles/courses.css";
import banner from "../images/banner_kids.png";
import age from "../images/age4.svg";
import workload from "../images/workload.svg";
import blended from  "../images/blended.svg";
import idea from "../images/idea.svg";

export default function kids() {
    return (
      <main className="back">
        <div
          className="banners-courses"
        >
          <Image
            src={banner}
            alt="A gente sabe como preparar seu filho para o futuro. Afinal, faz mais de 500 anos que a gente ensina pelo mundo"
            className="banners-image"
          />
          <h2 className="titles">Bilíngue parece ser a palavra do momento, mas o que torna a Achieve tão diferente é que, além da criança estudar inglês enquanto aprende ciências, artes e outras matérias, ela conta com a experiência da Oxford University Press, editora da Universidade de Oxford, que produz conteúdo nas mais diversas áreas de conhecimento. Venha nos conhecer em São José dos Campos, bairro Vista Verde.</h2>
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
            <p className="text">Curso desenvolvido para crianças de 3 a 10 anos</p>

            <div
              className="icons-container-courses"
            >
              <Image
                src={idea}
                className="icons"
              />
              <h3 className="titles-text">O Transformar do Amanhã</h3>
            </div>
            <p  className="text">Durante as aulas, as crianças são expostas a técnicas de ensino que vão ajudá-las a construir o conhecimento sobre o assunto da aula, desenvolvendo autonomia e pensamento crítico desde o começo de todo o processo.</p>
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
            <p className="text">Carga de até 90 horas por ano.</p>

            <div
              className="icons-container-courses"
            >
              <Image
                src={blended}
                className="icons"
              />
              <h3 className="titles-text">Metodologia - CRISPY</h3>
            </div>
            <p  className="text">A Achieve acompanha e oferece suporte de especialistas no ensino de língua inglesa para sempre aprimorar o projeto nas escolas.</p>
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
              src="https://www.youtube.com/embed/Gr54WF05w2o?si=GOCYlTC-WUi8Tbtd" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="banners-video"
            />

            <iframe 
              src="https://www.youtube.com/embed/zNUUfP98fUg?si=W4WSeg6-1JljEjD3"
              title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="banners-video"
            />
          </div>
        </div>
      </main>
    )
  }
