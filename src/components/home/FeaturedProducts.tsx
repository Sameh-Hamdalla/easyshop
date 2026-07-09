import "./FeaturedProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products__content">
        <p className="featured-products__label">Unsere Empfehlungen</p>

        <h2>Beliebte Produkte</h2>

        <p className="featured-products__text">
          Entdecken Sie unsere beliebtesten Hotelprodukte und Gutscheine.
        </p>

        <div className="featured-products__grid"></div>
      </div>
    </section>
  );
}
export default FeaturedProducts;
