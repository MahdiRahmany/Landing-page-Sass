import "./Earning.scss";
import Img from "../../assets/earnings.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Earning = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="earning">
      <div className="earning__container wrapper">
        <div className="earning__left" data-aos="fade-right">
          <img src={Img} alt="earnings" />
        </div>
        <div className="earning__right" data-aos="zoom-in-up">
          <h2>Track your earnings and cryptocode made it easy</h2>
          <p>
            Nulla dui ultrices sed nam ligula dignissm tellus. Sem semper lorem
            facilisis ut amet tincidunt adipiscing maecenas.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Earning;
