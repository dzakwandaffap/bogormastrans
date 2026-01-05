export const cars = [
  {
    id: "alphard",
    name: "Toyota Alphard",
    category: "Premium",
    type: "Luxury MPV",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 7,
    dailyRate: 2500000,
    status: "Available",
    badges: ["Popular"],
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=70",
    location: "Soekarno–Hatta Airport (CGK)",
    rating: 4.9,
    reviews: 128,
    description:
      "Premium class untuk kenyamanan maksimal. Cocok untuk perjalanan keluarga maupun bisnis, dengan kabin lega dan suspensi nyaman.",
    specs: [
      { label: "Top Speed", value: "200km/h" },
      { label: "Gear", value: "Auto" },
      { label: "Seats", value: "7 Seats" },
    ],
    features: ["Bluetooth Audio", "Leather Seats", "Climate Control", "Reverse Camera", "GPS Navigation"],
  },
  {
    id: "pajero",
    name: "Mitsubishi Pajero",
    category: "SUV",
    type: "SUV Automatic",
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    dailyRate: 1200000,
    status: "Available",
    badges: [],
    image:
      "https://images.unsplash.com/photo-1619767886148-9b9a8b4a5bc3?auto=format&fit=crop&w=1200&q=70",
    location: "Bogor City",
    rating: 4.7,
    reviews: 86,
    description:
      "SUV tangguh untuk perjalanan luar kota. Ground clearance tinggi, stabil, dan nyaman untuk rute campuran.",
    specs: [
      { label: "Top Speed", value: "190km/h" },
      { label: "Gear", value: "Auto" },
      { label: "Seats", value: "7 Seats" },
    ],
    features: ["Bluetooth Audio", "Climate Control", "Reverse Camera"],
  },
  {
    id: "civic",
    name: "Honda Civic",
    category: "Sedan",
    type: "Sedan Automatic",
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    dailyRate: 800000,
    status: "Low Stock",
    badges: ["Promo"],
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=70",
    location: "Bogor City",
    rating: 4.6,
    reviews: 49,
    description:
      "Sedan nyaman untuk harian, irit, dan handling enak. Cocok untuk perjalanan dalam kota maupun luar kota.",
    specs: [
      { label: "Top Speed", value: "210km/h" },
      { label: "Gear", value: "Auto" },
      { label: "Seats", value: "5 Seats" },
    ],
    features: ["Bluetooth Audio", "GPS Navigation"],
  },
];

export const categories = ["All Cars", "SUV", "Sedan", "Premium"];
