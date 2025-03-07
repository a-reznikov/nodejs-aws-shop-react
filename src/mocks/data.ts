import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description:
      "A novel by George Orwell, depicting a dystopian future society.",
    id: "1",
    price: 12,
    title: "1984",
  },
  {
    description:
      "A classic novel by Harper Lee, exploring racial injustice in the American South.",
    id: "2",
    price: 10,
    title: "To Kill a Mockingbird",
  },
  {
    description:
      "A fantasy novel by J.R.R. Tolkien, the first part of The Lord of the Rings series.",
    id: "3",
    price: 15,
    title: "The Fellowship of the Ring",
  },
  {
    description:
      "A novel by F. Scott Fitzgerald, portraying the Jazz Age and the American Dream.",
    id: "4",
    price: 11,
    title: "The Great Gatsby",
  },
  {
    description:
      "A novel by J.D. Salinger, following the life of a disenchanted teenager.",
    id: "5",
    price: 9,
    title: "The Catcher in the Rye",
  },
  {
    description:
      "A novel by Jane Austen, exploring themes of love, class, and reputation.",
    id: "6",
    price: 8,
    title: "Pride and Prejudice",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description:
        "A classic novel by Harper Lee, exploring racial injustice in the American South.",
      id: "2",
      price: 10,
      title: "To Kill a Mockingbird",
    },
    count: 2,
  },
  {
    product: {
      description:
        "A fantasy novel by J.R.R. Tolkien, the first part of The Lord of the Rings series.",
      id: "3",
      price: 15,
      title: "The Fellowship of the Ring",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "2", count: 2 },
      { productId: "3", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "3", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
