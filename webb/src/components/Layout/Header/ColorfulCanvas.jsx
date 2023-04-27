import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import classes from "./ColorfulCanvas.module.css"

function ColorfulCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const col = (x, y, r, g, b) => {
      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    const animate = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t += 0.012;
      gsap.set(canvas, { rotation: Math.sin(t / 10) * 2 });
      gsap
        .to(canvas, { duration: 1, scale: 1.1, ease: "power1.inOut" })
        .yoyo(true);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
    className={classes.canvas}
      ref={canvasRef}
      width={36}
      height={36}
      style={{ display: "block", margin: "auto" }}
    />
  );
}

export default ColorfulCanvas;
