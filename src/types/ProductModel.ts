
//  das ist der Bauplan für ein Produkt in unserem System. Es definiert die Struktur und die Eigenschaften, die jedes Produkt haben sollte.
// Jedes Produkt muss diese Eigenschaften haben- Hier sind nur die Regeln.

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}