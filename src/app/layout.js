import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/component.css";
import logo from "./images/logo_e_slogan.png";
import whatsapp from "./images/whatsapp.svg";
import whatsapp_dark from "./images/whatsapp_dark.svg";
import instagram from "./images/instagram.svg";
import instagram_dark from "./images/instagram_dark.svg";
import locationIcon from "./images/locIcon.svg"
import location from  "./images/maps.png";
import routes from "./images/mapDirection.jpg";
import routes_dark from "./images/routes_dark.svg";
import tour from "./images/tour.png";
import tour_dark from "./images/tour_dark.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Achieve Oxford",
  description: "Best English School",
};

const whatsUrl = "https://wa.me/+5512981153977"
const instaUrl = "https://www.instagram.com/achievesjc"
const routeUrl = "https://maps.app.goo.gl/5TMvnuqgdKpn939FA"
const tourUrl = "https://www.google.com/maps/place/Escola+de+Ingl%C3%AAs+Achieve+Oxford+S%C3%A3o+Jos%C3%A9+dos+Campos+Vista+Verde/@-23.1764826,-45.8256956,3a,75y,5.23h,86.54t/data=!3m6!1e1!3m4!1sAF1QipMmZ_-C9TGxBb4He-r2mvl4Q2lleAsYW1lZRhKe!2e10!7i9000!8i4500!4m7!3m6!1s0x94cc4c767dee6dff:0x16567b9262f3a5fe!8m2!3d-23.1763707!4d-45.8256932!10e5!16s%2Fg%2F11lb5l7l00?entry=ttu"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
      >
        <header>
          <div
            className="header-container"
          >
            <div
              className="logo-container"
            >
              <Image
                className="logo"
                src={logo}
                alt="Achieve Oxford"
              />
            </div>
            <div
              className="links-container"
            >
              <Link className="links" href={"/"}>Home</Link>
              <Link className="links" href={"/method"}>Metodologia</Link>
              <Link className="links" href={"/kids"}>Kids</Link>
              <Link className="links" href={"/teens"}>Teens</Link>
              <Link className="links" href={"/adults"}>Adults</Link>
              <Link className="links" href={"/about"}>Sobre</Link>
              <Link className="links" href={"/blog"}>Blog</Link>
            </div>
          </div>

          <hr></hr>

          <div
            className="header-icons-container"
          >
            <Link
              href={routeUrl} target="_blank"
            >
              <Image
                src={routes_dark}
                alt="Como chegar"
                className="header-icons"
              />
            </Link>
                    
            <Link
              href={tourUrl} target="_blank"
            >
              <Image
                src={tour_dark}
                alt="Tour 360 graus"
                className="header-icons"
              />
            </Link>

            <Link
              href={whatsUrl} target="_blank"
            >
              <Image
                src={whatsapp_dark}
                alt="WhatsApp"
                className="header-icons"
              />
            </Link>

            <Link
              href={instaUrl} target="_blank"
            >
              <Image
                src={instagram_dark}
                alt="Instagram"
                className="header-icons"
              />
            </Link>
          </div>
        </header>

        {children}

          <footer
            className="footer"
          >
            <h2 className="footer-titles">Venha nos Conhecer!</h2>

            <div
              className="footer-container"
            >
              <div
                className="left-container"
              >
                <div
                  className="social-media-container"
                >
                  <Link
                    href={whatsUrl} target="_blank"
                    className="social-media"
                  >
                    <Image
                      src={whatsapp}
                      alt="WhatsApp"
                      className="icons"
                    />
                    <p className="social-media-text">(12) 3912-3727</p>
                  </Link>

                  <Link
                    href={instaUrl} target="_blank"
                    className="social-media"
                  >
                    <Image
                      src={instagram}
                      alt="Instagram"
                      className="icons"
                    />
                    <p className="social-media-text">@achievesjc</p>
                  </Link>
                </div>

                <Link
                  href={tourUrl} target="_blank"
                  className="address-container"
                >
                  <Image
                    src={locationIcon}
                    alt="Endereço"
                    className="icons"
                  />
                  <p className="address-text">R. Cidade de Assunção, 14 - Vista Verde, São José dos Campos</p>
                </Link>
              </div>

              <div
                className="right-container"
              >
                <div
                  className="location-container"
                > 
                  <Link
                    href={routeUrl} target="_blank"
                    className="location-media"
                  >
                    <Image
                      src={routes}
                      alt="Como chegar"
                      className="icon-invert"
                    />
                    <p className="social-media-text">Como Chegar</p>
                  </Link>

                  
                  <Link
                    href={tourUrl} target="_blank"
                    className="location-media"
                  >
                    <Image
                      src={tour}
                      alt="Tour 360 graus"
                      className="icons"
                    />
                    <p className="social-media-text">Faça seu Tour Virtual</p>
                  </Link>
                </div>

                <Link
                  href={routeUrl} target="_blank"
                >
                <Image
                  src={location}
                  alt="Localização"
                  className="location-image"
                />
                </Link>
              </div>

            </div>
          </footer>
      </body>
    </html>
  );
}
