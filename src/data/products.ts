
//  Hier werden die Produkte definiert, die im Shop verfügbar sind. Jedes Produkt hat eine eindeutige ID, einen Namen, eine Beschreibung, einen Preis, eine Bild-URL und eine Kategorie.

import type { ProductModel } from "../types/ProductModel";

// "Ich erstelle eine Liste namens products. In dieser Liste dürfen nur Produkte stehen, die dem Interface Product entsprechen."
//  Array von Produkten, die im Shop verfügbar sind. Jedes Produkt entspricht dem Interface ProductModel.

export const products: ProductModel[] = [
  {
    id: 1,
    name: "Frühstücksbuffet",
    description: "Genießen Sie unser Frühstück.",
    price: 25,
    imageUrl: "/images/breakfast.jpg",
    category: "Gutschein",
  },
];