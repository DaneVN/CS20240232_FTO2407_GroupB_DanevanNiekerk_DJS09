import { ReactiveElement } from "lit";
import { Loyalty } from "./enums";

interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

export default Review;
