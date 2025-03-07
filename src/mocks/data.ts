import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    id: "b2914b76-7b27-4eab-8db0-2ebc21a02d94",
    title: "1984",
    description:
      "A novel by George Orwell, depicting a dystopian future society.",
    price: 12,
  },
  {
    id: "8d82e0f4-1cea-495f-b731-e6c406075a4d",
    title: "To Kill a Mockingbird",
    description:
      "A classic novel by Harper Lee, exploring racial injustice in the American South.",
    price: 10,
  },
  {
    id: "6674ea28-0f3f-4a32-8ca5-5a7eb6fe9f21",
    title: "The Fellowship of the Ring",
    description:
      "A fantasy novel by J.R.R. Tolkien, the first part of The Lord of the Rings series.",
    price: 15,
  },
  {
    id: "65730bec-8ad6-4e65-9621-f8351bd5826f",
    title: "The Great Gatsby",
    description:
      "A novel by F. Scott Fitzgerald, portraying the Jazz Age and the American Dream.",
    price: 11,
  },
  {
    id: "0986f062-c017-4364-9661-da5393a8b30d",
    title: "The Catcher in the Rye",
    description:
      "A novel by J.D. Salinger, following the life of a disenchanted teenager.",
    price: 9,
  },
  {
    id: "25167273-e150-4e12-9ddb-8bdb4148ea9f",
    title: "Pride and Prejudice",
    description:
      "A novel by Jane Austen, exploring themes of love, class, and reputation.",
    price: 8,
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      id: "8d82e0f4-1cea-495f-b731-e6c406075a4d",
      title: "To Kill a Mockingbird",
      description:
        "A classic novel by Harper Lee, exploring racial injustice in the American South.",
      price: 10,
    },
    count: 2,
  },
  {
    product: {
      id: "6674ea28-0f3f-4a32-8ca5-5a7eb6fe9f21",
      title: "The Fellowship of the Ring",
      description:
        "A fantasy novel by J.R.R. Tolkien, the first part of The Lord of the Rings series.",
      price: 15,
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
