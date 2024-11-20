import { Permissions } from "./enums.js";
const returningUserDisplay = document.querySelector("#returning-user");
const reviewTotalDisplay = document.querySelector("#reviews");
const firstNameDisplay = document.querySelector("#user");
function populateUser(isReturning, firstName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    firstNameDisplay.innerHTML = firstName;
}
function showDetails(authorityStatus, element, price) {
    if (authorityStatus === true || authorityStatus === Permissions.ADMIN) {
        const priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "/night";
        element.appendChild(priceDisplay);
    }
}
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty === "GOLD_USER" ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value.toString() +
            ` review${makeMultiple(value)} ` +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
function makeMultiple(value) {
    if (value > 1) {
        return "s";
    }
    else
        return "";
}
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
export { showReviewTotal, populateUser, showDetails, makeMultiple, getTopTwoReviews, };
