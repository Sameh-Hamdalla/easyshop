import type { ProductModel } from "../../types/ProductModel";
import "./ProductCard.css";

// Props beschreiben, welche Daten diese Komponente von außen erhält.
type ProductCardProps = {
  // Die ProductCard erwartet genau EIN Produkt.
  product: ProductModel;
};

// Durch Destructuring können wir direkt auf "product" zugreifen
// und müssen später nicht "props.product" schreiben.
function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      {/* Produktbild */}
      <img
        className="product-card__image"
        src={product.imageUrl}
        alt={product.name}
      />

      {/* Inhalt der Produktkarte */}
      <div className="product-card__content">
        {/* Kategorie */}
        <p className="product-card__category">{product.category}</p>

        {/* Produktname */}
        <h3 className="product-card__name">{product.name}</h3>

        {/* Produktbeschreibung */}
        <p className="product-card__description">{product.description}</p>

        {/* Produktpreis */}
        <p className="product-card__price">{product.price} €</p>

        {/* Button kommt später */}
        <button className="product-card__button">In den Warenkorb</button>
      </div>
    </article>
  );
}

export default ProductCard;
