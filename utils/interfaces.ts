import { ReactiveElement } from "lit";
import { Loyalty } from "./enums";
import { Price } from "./types";

interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  pricePerNight: number;
  location: {
    firstAddressLine: string;
    cityOrTown: string;
    postcode: number | string;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export default Review;
