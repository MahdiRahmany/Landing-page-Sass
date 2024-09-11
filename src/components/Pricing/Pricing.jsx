import "./Pricing.scss";
import { pricingInfo } from "../../Data.js";
import Aos from "aos";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="pricing">
      <h2 data-aos="fade-up">Best crypto currently</h2>
      <div className="pricing__container wrapper" data-aos="fade-up">
        {pricingInfo.map(({ image, name, price, id }) => (
          <div className="pricing__card" key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>{price}</span>
            <a href="#" className="btn">
              Buy It Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Pricing;
