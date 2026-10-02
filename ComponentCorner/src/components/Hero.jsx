import './Hero.css';

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
        <img
            src="https://placehold.co/1200x400/8B6F47/ffffff?text=Fresh+Coffee"
            alt="Fresh coffee"
        />
        <div className="hero-content">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <button>{ctaText}</button>
        </div>
    </section>
  );
}

export default Hero;