import { manufacturers } from "./../constants/index";
import { MouseEventHandler } from "react";

export interface HomeProps {
  searchParams: filterProp;
}

export interface CustomButtonProp {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?:string,
  rightIcon?:string
}
export interface OptionsProp{
  title:string,
  value:string,
}

export interface CustomFilterProp {
  title: string,
  options:OptionsProp[]
}
export interface SearchManufacturerProp {
  manufacturer: string;
  setManufacturer: (manufacturers: string) => void;
}
export interface CarProp {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface filterProp{
    manufacturer?:string ,
    year?:number ,
    fuel?:string ,
    limit?:number,
    model?: string
}
export interface ShowmoreProp {
  pageNum:number,
  isNext:boolean
}