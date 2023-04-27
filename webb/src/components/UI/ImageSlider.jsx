import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import icon1 from "../../assets/1-circle.svg";
import icon2 from "../../assets/2-circle.svg";
import icon3 from "../../assets/3-circle.svg";
import icon4 from "../../assets/4-circle.svg";
import image1 from "../../assets/lambo.jpg";
import image2 from "../../assets/Jackie.jpg";
import image3 from "../../assets/thePearl.jpg";
import image4 from "../../assets/heroimageplaneny.jpg";
import classes from "./ImageSlider.module.css";
import docsImage from "../../assets/file-text.svg";

const images = [image1, image2, image3, image4];

const textArray = [
  { text: "logo", textDescription: "Nånting", textIndex: 0 },
  { text: "logo", textDescription: "Nånting", textIndex: 1 },
  { text: "logo", textDescription: "Nånting", textIndex: 2 },
  { text: "logo", textDescription: "Nånting", textIndex: 3 },
];
const icons = [
  { icon: icon1, imageIndex: 0, barColor: "#FFA500" },
  { icon: icon2, imageIndex: 1, barColor: "#00FFFF" },
  { icon: icon3, imageIndex: 2, barColor: "#FF00FF" },
  { icon: icon4, imageIndex: 3, barColor: "#008000" },
];

const gradients = [
  "linear-gradient(360deg, #EFA82E -186.25%, rgba(217, 217, 217, 0) 158.23%)",
  "linear-gradient(360deg, #E82828 -186.25%, rgba(217, 217, 217, 0) 158.23%)",
  "linear-gradient(360deg, #28BAE8 -186.25%, rgba(217, 217, 217, 0) 158.23%)",
  "",
]

const ImageSlider = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);
  const tlRef = useRef(null);
  const intervalRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating, images.length]);

  useEffect(() => {
    const tlText = gsap.timeline();
    tlText.to(textRef.current, {
      x: -currentIndex * textRef.current.offsetWidth, // Assuming each text element is 300px wide
      duration: 0.5,
      ease: "power1.out", // Animation duration in seconds
    });
  }, [currentIndex]);

  useEffect(() => {
    let timeout;
    if (!isAnimating) {
      clearInterval(intervalRef.current);
      timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const handleInteraction = () => {
    setIsAnimating(false);
  };

  const handleImageChange = (index) => {
    if (currentIndex === index) return;

    const stepsToSkip = index - currentIndex;
    let currentIndexCopy = currentIndex;

    setIsAnimating(false);
    clearInterval(intervalRef.current);

    const preloadImages = (startIndex, endIndex, step) => {
      for (let i = startIndex; i !== endIndex; i += step) {
        const img = new Image();
        img.src = images[i];
      }
    };

    if (stepsToSkip > 0) {
      preloadImages(currentIndex + 1, index + 1, 1);
    } else {
      preloadImages(currentIndex - 1, index - 1, -1);
    }

    const animateImageChange = (step) => {
      setTimeout(() => {
        currentIndexCopy += step;
        setCurrentIndex(currentIndexCopy);

        if (currentIndexCopy !== index) {
          animateImageChange(step);
        } else {
          setIsAnimating(true);
          setTimeout(() => {
            setIsAnimating(true);
          }, 10000);
        }
      }, 140);
    };

    animateImageChange(stepsToSkip / Math.abs(stepsToSkip));
  };
  return (
    <div className={classes.ImageSliderContainer}>
      <div className={classes.imageAndIcons}>
        <div
          className={classes.slider}
          ref={sliderRef}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div style={{background: gradients[currentIndex]}}className={classes.imageGradient1}></div>

          <div ref={textRef} className={classes.imageTextContainer}>
            <div className={classes.imageText}>
              <div className={classes.logoAndspan}>
                <p>logo</p>
                <span>
                  <img src={docsImage} alt="cool icon" />
                </span>
              </div>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className={classes.imageText}>
              <div className={classes.logoAndspan}>
                <p>logo</p>
                <span>
                  <img src={docsImage} alt="cool icon" />
                </span>
              </div>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className={classes.imageText}>
              <div className={classes.logoAndspan}>
                <p>logo</p>
                <span>
                  <img src={docsImage} alt="cool icon" />
                </span>
              </div>
              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
            <div className={classes.imageText}>
              <div className={classes.logoAndspan}>
                <p>logo</p>
                <span>
                  <img src={docsImage} alt="cool icon" />
                </span>
              </div>

              <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
          </div>
        </div>
        <div className={classes.icons}>
          {icons.map((icon, index) => (
            <div
              key={index}
              onClick={() => {
                handleImageChange(icon.imageIndex);
                handleInteraction();
              }}
            >
              <img src={icon.icon} alt={`Icon ${index}`} />
              <div style={{ backgroundColor: icon.barColor }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
