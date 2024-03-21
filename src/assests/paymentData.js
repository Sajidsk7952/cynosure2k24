import silver from "./silver1.jpg";
import gold from "./gold.jpg";
import platinum from "./platinum.jpg";
import esports from "./esports.jpg";
export const paymentData = [
  {
    id: "1",
    name: "silver",
    img: silver,
    price: 250,
    url2: false,
    url: "https://forms.gle/rNvbqniiH3rQrQMaA",
    inclusions: [
      "The basic mandatory pass to enter cynosure",
      "2 days lunch will be provided",
      "You will get Registration mail within 24 hrs after payment",
    ],
  },
  {
    id: "2",
    name: "gold",
    img: gold,
    price: 350,
    url2: false,
    url: "https://forms.gle/rNvbqniiH3rQrQMaA",
    inclusions: [
      "Access to all silver-tier benefits including event entry and 2 days of lunch",
      "Access to participate in any 2 individual events either technical or non-technical",
      "You will get Registration mail within 24 hrs after payment",
    ],
  },
  {
    id: "3",
    name: "platinum",
    img: platinum,
    price: 450,
    url2: false,
    url: "https://forms.gle/rNvbqniiH3rQrQMaA",
    inclusions: [
      "Access to all silver-tier benefits including event entry and 2 days of lunch",
      "Access to participate in any 4 individual events either technical or non-technical",
      "You will get Registration mail within 24 hrs after payment",
    ],
  },
  {
    id: "4",
    name: "E Sports",
    img: esports,
    url2: true,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc0k1HqVI-tezNJXsJbpasl7KN7uKt0x7yNJz1xcupUSUVAdQ/viewform?usp=sf_link",
    inclusions: [
      "For participation passes are not manadatory",
      "the event is held through online",
      "Every Team must contain 4 players",
    ],
  },
];
