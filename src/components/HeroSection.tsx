import {Link} from "react-router-dom";

function HeroSection() {
  return (
    <section>
        <h1>Willkommen bei EasyShop</h1>

        <p>
            Entdecke hochwertige Produkte zu fairen Preisen.
        </p>

        <Link to="/products">
            Jetzt einkaufen
        </Link>
    </section>
    
  );
}

export default  HeroSection;