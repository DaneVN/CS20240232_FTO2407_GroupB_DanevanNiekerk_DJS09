const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLSpanElement;
const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;
const firstNameDisplay = document.querySelector("#user") as HTMLSpanElement;

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

function populateUser(isReturning: boolean, firstName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  firstNameDisplay.innerHTML = firstName;
}

export { showReviewTotal, populateUser };
