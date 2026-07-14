
//  Hier werden die Produkte definiert, die im Shop verfügbar sind. Jedes Produkt hat eine eindeutige ID, einen Namen, eine Beschreibung, einen Preis, eine Bild-URL und eine Kategorie.

import type { ProductModel } from "../types/ProductModel";

// "Ich erstelle eine Liste namens products. In dieser Liste dürfen nur Produkte stehen, die dem Interface Product entsprechen."
//  Array von Produkten, die im Shop verfügbar sind. Jedes Produkt entspricht dem Interface ProductModel.

export const products: ProductModel[] = [
  {
    id: 1,
    name: "Frühstücksbuffet",
    description: "Genießen Sie unser Frühstück. Bei uns gibt es alles, was das Herz begehrt.",
    price: 25,
    imageUrl: "/images/breakfast.png",
    category: "Gutschein",
  },
  {
    id: 2,
    name: "Wellness-Gutschein",
    description: "Entspannen Sie sich mit unserem Wellness-Gutschein.",
    price: 50,
    imageUrl: "/images/wellness.png",
    category: "Gutschein",
  },
    {   
    id: 3,
    name: "Dinner for Two",
    description: "Ein romantisches Abendessen für zwei Personen.",
    price: 100,
    imageUrl: "/images/dinner.png",
    category: "Gutschein",
  },
  {
    id: 4,
    name: "Badetasche",
    description: "Eine stilvolle Badetasche für Ihre Ausflüge.",
    price: 15,
    imageUrl: "/images/badetasche.png",
    category: "Gutschein",
  },
  {
    id: 5,
    name: "Bademantel",
    description: "Ein komfortabler Bademantel für Ihre Entspannung.",
    price: 80,
    imageUrl: "/images/bathrobe.png",
    category: "Gutschein",
  },
  {
    id: 6,
    name: "Erdbeermarmelade",
    description: "Eine leckere Erdbeermarmelade für Ihren Genuss.",
    price: 5,
    imageUrl: "/images/strawberry-jam.png",
    category: "Gutschein",
  },
  {
    id: 7,
    name: "Gast-Amenties",
    description: "Hochwertige Gast-Amenties für Ihr Zuhause.",
    price: 30,
    imageUrl: "/images/guest-amenties.png", 
    category: "Gutschein",
  },
  {
    id: 8,
    name: "Badeschuhe",
    description: "Komfortable Badeschuhe für Ihren Besuch im Pool.",
    price: 10,
    imageUrl: "/images/swimming-shoes.png",
    category: "Gutschein",
  },
  {
    id: 9,
    name: "Badehandtuch",
    description: "Ein weiches Badehandtuch für Ihre Entspannung.",  
    price: 20,
    imageUrl: "/images/bath-towel.png",
    category: "Gutschein",
  },
  {
    id: 10,
    name: "Badeente",
    description: "Eine niedliche Badeente für Ihre Badespaß.",
    price: 8,
    imageUrl: "/images/bath-duck.png",
    category: "Gutschein",
  }
];