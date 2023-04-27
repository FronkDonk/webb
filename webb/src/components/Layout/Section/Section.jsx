import "./Section.css";
import rocketIcon from "../../../assets/rocket-takeoff2.svg";
import activityIcon from "../../../assets/activity2.svg";
import software from "../../../assets/softwareImage2.svg";
import waves from "../../../assets/waves.svg";
import waves2 from "../../../assets/waves2 (2).svg";
import AnimatedButton from "../../UI/AnimatedButton";

export default function Section() {
  return (
    <section className="section">
      <div className="wrapper">
        <div className="container">
          <div className="grid-item">
            <h3>COOL TITLE</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              excepturi distinctio aspernatur in aperiam numquam voluptate quos.
            </p>
            <div className="button-container">
              <AnimatedButton
                buttonText="Start now"
                buttonLink="sign-in"
                class="sectionButton"
                arrowFill="white"
                arrowStroke="white"
              />
            </div>
          </div>
          <div className="grid-item">
            <img src={rocketIcon} alt="cool rocket icon" />
            <h4>COOL TITLE</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              nihil esse? Accusamus incidunt
            </p>
          </div>
          <div className="grid-item">
            <img src={activityIcon} alt="cool activity " />
            <h4>COOL TITLE</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              nihil esse? Accusamus incidunt
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={software} alt="cool bild på software" />
        </div>
      </div>
    </section>
  );
}
