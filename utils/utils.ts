import { Loyalty } from "./enums";

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;
const firstNameDisplay = document.querySelector("#user") as HTMLSpanElement;

function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalty) {
  const iconDisplay = isLoyalty === "GOLD_USER" ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

function populateUser(isReturning: boolean, firstName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  firstNameDisplay.innerHTML = firstName;
}

export { showReviewTotal, populateUser };
