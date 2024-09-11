import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe & get news updates</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          aspernatur numquam atque quidem! Fugit debitis, velit qui eius
          mollitia consequatur.
        </p>

        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Write Your Email Here" />
          <a href="#" className="btn">
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
};
export default Subscribe;
