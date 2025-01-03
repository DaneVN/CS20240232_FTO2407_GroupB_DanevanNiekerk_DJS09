import { Loyalty, Permissions } from "./enums.js";
import { Review } from "./interfaces.js";

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;
const firstNameDisplay = document.querySelector("#user") as HTMLSpanElement;

function populateUser(isReturning: boolean, firstName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  firstNameDisplay.innerHTML = firstName;
}

function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus === true || authorityStatus === Permissions.ADMIN) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

function add(firstValue: number, secondValue: number): number {
  return firstValue + secondValue;
}

function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: Loyalty
): void {
  const iconDisplay = isLoyalty === "GOLD_USER" ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    ` review${makeMultiple(value)} ` +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

function makeMultiple(value: number): string {
  if (value > 1) {
    return "s";
  } else return "";
}

function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}

export {
  showReviewTotal,
  populateUser,
  showDetails,
  makeMultiple,
  getTopTwoReviews,
};
