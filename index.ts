import { join } from "lit-html/directives/join.js";

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLSpanElement;
const userNameDisplay = document.querySelector("#user") as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;

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

// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future.

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

const you = {
  userName: { firstName: "Bobby", lastName: "Brown" },
  isReturning: "yes",
};

function populateUser(
  isReturning: boolean,
  userName: { firstName: string; lastName: string }
) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = Object.values(userName).join(" ");
}

populateUser(Boolean(you.isReturning), you.userName);

//solution:
// const you = {
//     userName: { firstName: "Bobby", lastName: "Brown" },
//     isReturning: "yes",
//   };

//   function populateUser(
//     isReturning: boolean,
//     userName: { firstName: string; lastName: string }
//   ) {
//     if (isReturning) {
//       returningUserDisplay.innerHTML = "back";
//     }
//     userNameDisplay.innerHTML = Object.values(userName).join(" ");
//   }

//   populateUser(Boolean(you.isReturning), you.userName);
