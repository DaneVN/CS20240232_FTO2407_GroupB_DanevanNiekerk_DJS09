import { showReviewTotal, populateUser } from "./utils.jsx";
const propertyContainer = document.querySelector(
  ".properties"
) as HTMLDivElement;
const footer = document.querySelector(".footer") as HTMLDivElement;

// Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

// User
const ADMIN = "admin";
const READ_ONLY = "read-only";

//Enums
enum Permissions {
  ADMIN,
  READ_ONLY,
}

const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: ADMIN, // has type of `Permissions`
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: {
  image: string;
  title: string;
  pricePerNight: number;
  location: {
    firstAddressLine: string;
    cityOrTown: string;
    postcode: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    pricePerNight: 45,
    location: {
      firstAddressLine: "shack 37",
      cityOrTown: "Bogota",
      postcode: 45632,
      country: "Colombia",
    },
    contact: [+1123495082908, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    pricePerNight: 34,
    location: {
      firstAddressLine: "no 23",
      cityOrTown: "Gdansk",
      postcode: 343903,
      country: "Poland",
    },
    contact: [+1123495082908, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    pricePerNight: 23,
    location: {
      firstAddressLine: "flat 15",
      cityOrTown: "London",
      postcode: 35433,
      country: "United Kingdom",
    },
    contact: [+1123495082908, "andyluger@aol.com"],
    isAvailable: true,
  },
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

// use your location, your current time, and the current temperature of your
// location
let currentLocation: [string, string, number] = ["Hawaii", "06:00", 30];
footer.innerHTML = currentLocation.join(" ");
