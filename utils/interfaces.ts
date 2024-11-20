import { ReactiveElement } from "lit";
import { Loyalty } from "./enums";
import { Country, Price } from "./types";

interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  pricePerNight: Price;
  location: {
    firstAddressLine: string;
    cityOrTown: string;
    postcode: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export default Review;
