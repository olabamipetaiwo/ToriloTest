export const cards = [
  {
    name: "Registered Companies",
    count: 849,
    percent: 1.23,
    color: "#FDECE2",
    trend: true,
  },
  {
    name: "New Application",
    count: 849,
    percent: 7.62,
    color: "#EAEFFD",
    trend: false,
  },
  {
    name: "Total Projects Done",
    count: 56,
    percent: 4.95,
    color: "#FFF3C5",
    trend: false,
  },
  {
    name: "New Projects",
    count: 78,
    percent: 51.25,
    color: "#E7F5FE",
    trend: true,
  },
];

export const reviews = [
  {
    type: "Positive",
    percent: 60,
    color: "#3B99FC",
  },
  {
    type: "Negative",
    percent: 20,
    color: "#8630DD",
  },
  {
    type: "Neutral",
    percent: 30,
    color: "#FA5F1C",
  },
];

export const tableData = [
  {
    name: "Cregital",
    image: require("../assets/pngs/cregital.png"),
    size: 40,
    inc: 5,
    revenue: "500,000",
    status: "Pending",
  },
  {
    name: "Intellia",
    image: require("../assets/pngs/intellia.png"),
    size: 20,
    inc: 4,
    revenue: "200,000",
    status: "Approved",
  },
  {
    name: "Blusalt",
    image: require("../assets/pngs/blue.png"),
    size: 20,
    inc: 4,
    revenue: "200,000",
    status: "Declined",
  },
];

export const messages = [
  {
    name: "Cregital",
    display: require("../assets/pngs/cregital.png"),
    messages: [
      {
        id: 1,
        content: "Don’t forget to clear server cache",
        time: "25mins ago",
      },
      {
        id: 1,
        content: "Don’t forget to clear server whitelist",
        time: "5mins ago",
      },
    ],
  },
  {
    name: "Intellia",
    display: require("../assets/pngs/intellia.png"),
    messages: [
      {
        id: 1,
        content: "Don’t forget to clear server cache",
        time: "15mins ago",
      },
      {
        id: 1,
        content: "Don’t forget to clear server logs",
        time: "20mins ago",
      },
    ],
  },
  {
    name: "Blusalt",
    display: require("../assets/pngs/blue.png"),
    messages: [
      {
        id: 1,
        content: "Don’t forget to clear server cache",
        time: "15mins ago",
      },
      {
        id: 1,
        content: "Don’t forget to clear server blacklist",
        time: "1min ago",
      },
    ],
  },
];
