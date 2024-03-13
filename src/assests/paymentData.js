import silver from './silver.jpg';
import gold from './gold.jpg';
import platinum from './platinum.jpg';
export const paymentData = [
  {
    id: "1",
    name: "silver",
    img : silver,
    price: 250,
    url: "https://pages.razorpay.com/cynosure2k24Silver",
    inclusions: [
      "Entry for all the Events at Cynosure",
      "2 days lunch will be provided",
    ],
  },
  {
    id: "2",
    name: "gold",
    img: gold,
    price: 350,
    url : 'https://pages.razorpay.com/cynosure2k24Gold',
    inclusions: [
      "Access to all silver-tier benefits including event entry and 2 days of lunch",
      "Access to participate in any 2 events either technical or non-technical",
    ],
  },
  {
    id: "3",
    name: "platinum",
    img: platinum,
    price: 450,
    url: "https://pages.razorpay.com/cynosure2k24Platinum",
    inclusions: [
      "Access to all silver-tier benefits including event entry and 2 days of lunch",
      "Access to participate in any 4 events either technical or non-technical",
    ],
  },
];
