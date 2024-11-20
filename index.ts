import { join } from "lit-html/directives/join.js";

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLSpanElement;
const firstNameDisplay = document.querySelector("#user") as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;

//redundant to assign `age: number`, rather assign type to valiables that
// don't have a value yet, like parameters or `let age;`
const age = 23;

const reviews = [
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

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

// Object Types
// In this scrim, based on what we just learnt, can you change userName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.

//`: {}` = `: object`
const you: {
  firstName: string;
  lastName: string;
  age: number;
  isReturning: boolean;
} = {
  firstName: "Bobby",
  lastName: "Bobberson",
  age: 40,
  isReturning: true,
};

function populateUser(isReturning: boolean, firstName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  firstNameDisplay.innerHTML = firstName;
}

populateUser(you.isReturning, you.firstName);
