// holt alle Produkte aus der Datenbank und zeigt sie auf der Seite an

import { products } from "../data/products";
import ProductCard from "../components/products/ProductCard";

function ProductsPage() {
  return (
    <main>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}

export default ProductsPage;
