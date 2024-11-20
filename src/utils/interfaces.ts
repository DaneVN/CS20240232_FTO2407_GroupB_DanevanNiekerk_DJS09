// import { ReactiveElement } from "lit";
import { Loyalty } from "./enums.js";
import { Country, Price } from "./types.js";

interface Review {
  name: string;
  stars: number;
  loyaltyUser: Loyalty;
  date: string;
}

interface Property {
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

export { Review, Property };
