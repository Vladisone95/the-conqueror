import { StaticImageData } from "next/image";

export type CardProps = {
  id: number;
  title: string;
  distance: string;
  virtualPostcards: number;
  hasStreetView: boolean;
  image: StaticImageData;
  background: StaticImageData;
  price: number;
};
