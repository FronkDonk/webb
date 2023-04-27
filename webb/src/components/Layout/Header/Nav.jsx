import classes from "./Nav.module.css";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "../../UI/AnimatedButton";

export default function Nav() {
  const [navStyle, setNavStyle] = useState(false);
  const arrowLineRef = useRef(null);
  const arrowHeadRef = useRef(null);

  function handleMouseEnter() {
    gsap.killTweensOf([arrowLineRef.current, arrowHeadRef.current]);

    gsap.to(arrowLineRef.current, {
      opacity: 1,
      duration: 0.7,
    });

    gsap.to(arrowHeadRef.current, {
      x: "12.7",
      duration: 0.4,
    });
  }

  function handleMouseLeave() {
    gsap.killTweensOf([arrowLineRef.current, arrowHeadRef.current]);

    gsap.to(arrowLineRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
    });

    gsap.to(arrowHeadRef.current, {
      x: "0",
      duration: 0.7,
      ease: "power1.out",
    });
  }

  useEffect(() => {
    switch (window.location.pathname) {
      case "/Contact":
        setNavStyle(true);
        break;
      default:
        setNavStyle(false);
        break;
    }
  }, [window.location.pathname]);

  return (
    <nav className={navStyle ? classes["contact-nav"] : classes.nav}>
      <div className={classes["navbar-container"]}>
        <p>
          <a
            className={navStyle ? classes["link-contact"] : classes.link}
            href="/"
          >
            NextTech
          </a>
        </p>
        <ul className={classes["navbar-list"]}>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="#"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="/Contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={navStyle ? classes["link-contact"] : classes.link}
              href="#"
            >
              Documentation
            </a>
          </li>
        </ul>
        {!navStyle && <AnimatedButton class="navbarSignup" buttonText="Sign in" buttonLink="/sign-in" arrowFill="white" arrowStroke="white"/>}
        {navStyle && <AnimatedButton class="navbarContactSignup" buttonText="Sign in" buttonLink="/sign-in" arrowFill="white" arrowStroke="white"/>}
      </div>
    </nav>
  );
}
