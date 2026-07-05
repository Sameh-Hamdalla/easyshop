import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">Hotel Boutique</p>

        <h1>Exklusive Hotelprodukte und Gutscheine</h1>

        <p className="hero__text">
          Entdecken Sie besondere Geschenkideen, Genussmomente und ausgewählte
          Produkte aus unserem Hotel.
        </p>

        <Link to="/products" className="hero__button">
          Jetzt einkaufen
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;