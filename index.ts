import { showReviewTotal, populateUser } from "./utils.jsx";

//redundant to assign `age: number`, rather assign type to valiables that
// don't have a value yet, like parameters or `let age;`
const age = 23;

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
//`: {}` = `: object`
//stayedAt: (string | number)[]; --> stayedAt:
//["florida-home", "oman-flat", "tokyo-bungalow", 23]
const you: {
  firstName: string;
  lastName: string;
  age: number;
  isReturning: boolean;
  stayedAt: string[];
} = {
  firstName: "Bobby",
  lastName: "Bobberson",
  age: 40,
  isReturning: true,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?

//Properties
const properties: {
  image: string;
  title: string;
  couchSurfPricePerNight: number;
  location: {
    firstLineOfAddress: string;
    townOrCity: string;
    postcode: string;
    country: string;
  };
  contactDetails: string;
  availible: boolean;
}[] = [
  {
    image: "string",
    title: "string",
    couchSurfPricePerNight: 54,
    location: {
      firstLineOfAddress: "string",
      townOrCity: "string",
      postcode: "string",
      country: "string",
    },
    contactDetails: "string",
    availible: false,
  },
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
