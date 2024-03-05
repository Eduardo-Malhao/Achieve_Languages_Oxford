import React from "react";
import banner from "../images/banner_method.png";
import Image from "next/image";
import styles from "../styles/method.css";

export default function method() {
    return (
      <>
        <div 
          className="banners-method"
        >
          <Image
            src={banner}
            alt="Quando o Inglês é Oxford ele entra na cabeça!"
            className="banners-image"
          />

          <h2 className="titles">Metodologia exclusiva Oxford University Press!</h2>
        </div>

        <div
          className="text-container"
        >
          <h3 className="titles-text">Curso de Inglês</h3>
          <p className="text">O inglês é um dos idiomas mais falados no mundo. Por conta disso, ter o inglês fluente deixou de ser um diferencial para ser quase que uma obrigatoriedade em muitos aspectos. Para aprender esse idioma, é válido escolher pelo curso de inglês, que conta com professores preparados e capacitados para passar todos os conhecimentos necessários para aprender um novo idioma.

Procurar por um curso de inglês que se encaixe no perfil do futuro aluno não é uma tarefa fácil, por existirem, atualmente, inúmeras opções oferecidas. Portanto, o primeiro passo na hora de escolher um curso de inglês é entender os objetivos, para que, assim, o curso escolhido esteja alinhado com um determinado perfil. Além disso, cada pessoa possui uma motivação diferente, e pensando nisso, deve-se escolher um curso que atenda à essas motivações, para que o aprendizado possa fluir bem.

São vários os critérios a serem levados em conta na hora de escolher um curso de inglês. Geralmente, as pessoas procuram por um local perto de casa ou do trabalho, ou ainda por escolas de idiomas que são famosas e renomadas dentro e fora do país. Porém, de modo geral, a escola de idiomas precisa estar atualizada com métodos de ensino que são eficientes.

Geralmente aplicado em escolas de idioma, o curso de inglês é uma imersão no conhecimento desse idioma tão importante atualmente. Por meio de uma metodologia de ensino, que varia de escola para escola, o curso de inglês traz aos alunos a parte escrita e falada do idioma, onde, juntamente a isso, se pratica a leitura e escuta do idioma, através de aulas práticas que ajudam os alunos a fixarem todo o conteúdo aprendido em aula.

A metodologia Oxford apresenta o seguinte método de ensino: língua + motivação = oportunidade. A partir disso, trabalha-se a prática da pronuncia, a gramática do idioma e o vocabulário em todas as atividades dos livros. Assim, as 4 principais habilidades humanas são desenvolvidas em inglês: escrever, falar, ler e escutar.
          </p>
          <br></br>
          <h3 className="titles-text">Quais as vantagens do curso de inglês?</h3>
          <p className="text">
          O curso de inglês traz diversas vantagens para a vida dos alunos, desde o primeiro dia de aprendizado. A primeira grande vantagem do curso de inglês é que algumas das palavras que falamos no dia-a-dia estão nesse idioma e já foram padronizadas no nosso português. Termos e expressões se tornaram essenciais para a comunicação entre pessoas.

Além disso, pessoas que estudam a língua inglesa por um longo tempo se destacam diante daqueles que não tiveram essa oportunidade. E, ainda, aqueles que já possuem o inglês com fluência aprendem um terceiro idioma com mais facilidade do que aqueles que falam somente a língua nativa.

Ainda, é válido destacar que, no mundo corporativo e, principalmente, nos processos seletivos, se destacam aqueles que já possuem o inglês na ponta da língua, já que grande parte das empresas contam com clientes de outros países, e ter um profissional na equipe que saiba se comunicar corretamente com eles acaba se tornando algo indispensável.
          </p>
          <br></br>
          <h3 className="titles-text">Onde fazer o curso de inglês?</h3>
          <p className="text">
          Renomada no Brasil e internacionalmente, a Achieve Languages em São José dos Campos, no bairro Vista Verde,  alia o que há de mais atual quando se fala em ensino de línguas estrangeiras, apresentando tradição e confiabilidade, que foram alcançadas ao longo de muito tempo dedicado a estudos, pesquisas e desenvolvimentos na área educacional por parte da Universidade de Oxford.

Com o respaldo dessa instituição, possibilita que a Achieve desenvolva um trabalho de alta qualidade e oferece todas as condições necessárias para que os alunos possam aprender a comunicar nesse idioma tão importante: o inglês. Além disso, a Achieve apresenta a metodologia Oxford como método de ensino, contando com cursos para crianças, adolescentes e adultos, onde todos podem aprender um segundo idioma de maneira eficiente e de qualidade.
          </p>
        </div>

        <div>
          <h2 className="titles">Mais um pouco sobre nós, por nosso CEO</h2>
          
          <div
            className="banners-video-container"
          >
            <iframe
              src="https://www.youtube.com/embed/a-0dF1yn3xY?si=eO-C6Sh-DdCYfnJ1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="banners-video"
            />
          </div>
        </div>
      </>
    )
  }
