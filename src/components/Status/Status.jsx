import "./Status.scss";
import StatusImg from "../../assets/status.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="zoom-in-out">
          <h2>Trust us due to our safe and convenient deposit</h2>
          <p>
            Tristique morbi scelerisque vitae. Nulla due ultrices sed nam ligula
            dignissim tellus semper lorem facilisis ut. Amet tincidunt
            adipiscing varius maecenas adipiscing.
          </p>
          <a href="#" className="btn">
            KNOW MORE
          </a>
        </div>

        <div className="status__right" data-aos='fade-left'>
          <img src={StatusImg} alt="status" />
        </div>
      </div>
    </section>
  );
};
export default Status;
