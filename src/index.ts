import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "../utils/utils.js";
import { Permissions, Loyalty } from "../utils/enums.js";
import { Price, Country } from "../utils/types.js";
import { Review } from "../utils/interfaces.js";

const propertyContainer = document.querySelector(
  ".properties"
) as HTMLDivElement;
const footer = document.querySelector(".footer") as HTMLDivElement;
const reviewContainer = document.querySelector(".reviews") as HTMLDivElement;
const container = document.querySelector(".container") as HTMLDivElement;
const button = document.querySelector("button") as HTMLButtonElement;

let isLoggedIn: boolean;

// Reviews
const reviews: any[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: Loyalty.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: Loyalty.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: Loyalty.SILVER_USER,
    date: "27-03-2021",
    description: "Great hosts, location was a bit further than said",
  },
];

// User
const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN, // has type of `Permissions`
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

//Properties
const properties: {
  image: string;
  title: string;
  pricePerNight: Price;
  location: {
    firstAddressLine: string;
    cityOrTown: string;
    postcode: number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    pricePerNight: 48,
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
    pricePerNight: 30,
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
    pricePerNight: 25,
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
  showDetails(you.permissions, card, properties[i].pricePerNight);
}

// Interfaces
// 1. Based on what we have learnt in this lesson, and what we discussed in the previous one,
// please get rid of the uncessary code in this project and replace it with the Review interface
// 2. Move the interface to its own file for the next lesson

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

button.addEventListener("click", () => addReviews(reviews));

let currentLocation: [string, string, number] = ["London", "11.03", 17];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
