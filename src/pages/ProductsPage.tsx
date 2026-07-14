// holt alle Produkte  und zeigt sie auf der Seite an

import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import "./ProductsPage.css";

function ProductsPage() {
  return (
    <main className="products-page">
      <h1 className="products-page__title"> Unsere Produkte</h1>
      <div className="products-page__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductsPage;
