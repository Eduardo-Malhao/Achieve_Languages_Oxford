"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import KeenSlider from 'keen-slider';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from "./styles/home.css";
import motivos from "./images/motivos.png";
import university from "./images/oxford.png";
import kids from "./images/tiny_kids.png";
import teens from "./images/teens.png";
import adults from "./images/adults.png";
import formando01 from "./images/formando01.jpg";
import formando02 from "./images/formando02.jpg";
import formando03 from "./images/formando03.jpg";
import formando04 from "./images/formando04.jpg";
import formando05 from "./images/formando05.jpg";
import formando06 from "./images/formando06.jpg";
import formando07 from "./images/formando07.jpg";
import formando08 from "./images/formando08.jpg";
import formando09 from "./images/formando09.jpg";
import formando10 from "./images/formando10.jpg";
import formando11 from "./images/formando11.jpg";

export default function Home() {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props) {
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <>
      <div
        className="graduated-container"
      >
        <h2 className="titles-graduated">Formandos Achieve Oxford</h2>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide"><Image src={formando01} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando02} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando03} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando04} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando05} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando06} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando07} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando08} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando09} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando10} className="carousel-images" /></div>
            <div className="keen-slider__slide"><Image src={formando11} className="carousel-images" /></div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }

                />  
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="banners"
      >
        <div
          className="first-banner"
        >
          <Image
            src={motivos}
            alt="Motivos para se estudar Inglês"
            className="banners-image"
          />
          <h2 className="titles">De Oxford para São José dos Campos</h2>
        </div>

        <div
          className="second-banner"
        >
          <h2 className="titles">5 anos eleita como a melhor Universidade do Mundo!</h2>
          <Image
            src={university}
            alt="Universidade de Oxford"
            className="banners-image"
          />
        </div>
      </div>

      <div
        className="cards"
      >
        <div
          className="cards-container-home"
        >
          <Image
            src={kids}
            alt="Tiny Kids e Kids"
            className="cards-image"  
          />
          <div
            className="cards-description"
          >
            <h3>Tiny Kids / Kids</h3>
            <p>Inglês a partir dos 04 anos</p>
          </div>

          <Link
            className="cards-button"
            href={"/kids"}
          >
            Saiba mais
          </Link>
        </div>

        <div
          className="cards-container-home"
        >
          <Image
            src={teens}
            alt="Teens"
            className="cards-image"
          />
          
          <div
            className="cards-description"
          >
            <h3>Teens</h3>
            <p>Inglês a partir dos 10 anos</p>
          </div>
        
          <Link
            className="cards-button"
            href={"/teens"}
          >
            Saiba mais
          </Link>
        </div>

        <div
          className="cards-container-home"
        >
          <Image
            src={adults}
            alt="Adults"
            className="cards-image"  
          />

          <div
            className="cards-description"
          >
            <h3>Adults</h3>
            <p>Inglês a partir dos 15 anos</p>
          </div>

          <Link
            className="cards-button"
            href={"/adults"}
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </>
  );
}