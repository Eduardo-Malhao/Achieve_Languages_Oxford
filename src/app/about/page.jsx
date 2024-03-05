import Image from "next/image";
import styles from "../styles/about.css";
import fachada from "../images/fachada.png";

export default function aboutUs() {
    return (
      <>
        <div
          className="banners"
        >
          <Image
            src={fachada}
            alt="Motivos para se estudar Inglês"
            className="banners-image"
          />

          <iframe 
            src="https://www.youtube.com/embed/0dmKNpRhygs?si=859ZIhr2jiy5dDv4"
            title="YouTube video player"
            className="banners-video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div
          className="text-container"
        >
          <h2 className="titles-text">Sobre Nós</h2>
          <p className="text">
            Achieve Languages é a escola de inglês da Oxford no Brasil, onde aliamos o que há de mais atual quando se fala em ensino de línguas com a tradição e confiabilidade alcançadas ao longo de muitos anos dedicados a estudos, pesquisas e ao desenvolvimento na área educacional, por parte da Oxford University Press e da University of Oxford.

Com o respaldo dessas duas instituições, estamos habilitados a desenvolver um trabalho de alta qualidade e que proporciona todas as condições para que os alunos possam aprender a se comunicar no idioma inglês que estão estudando.

O DNA da Achieve tem foco em comunicação oral e material aprovado no mundo inteiro com o respaldo da Oxford University Press. Assim, entendemos que os alunos mudam, as informações mudam, a sociedade muda. E em meio a tantas transformações, é necessário ter a base sólida, para que o nosso ensino de inglês seja sempre eficiente e que respeite sempre as individualidades de cada aluno.

Além disso, nossos cursos são voltados para todas as idades, onde as crianças crescem aprendendo, os adolescentes aprendem um idioma de acordo com o seu universo, e os adultos conquistam o mundo ao aprenderem um novo idioma. E, também, contamos com uma série de e-books gratuitos para dar uma ajudinha extra às aulas do curso.

E agora você conta com uma unidade para aprender inglês da Achieve Languages em São José dos Campos, no bairro Vista Verde. Clique no botão do WhatsApp e agende uma aula experimental para nos conhecer!
          </p>
        </div>
      </>
    )
}
