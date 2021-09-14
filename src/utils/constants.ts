import { CuisineType } from "./types";

export enum LocalStorage {
  Token = "token",
  RefreshToken = "refreshToken",
}

export enum Routes {
  Home = "/home/:id",
  SignUp = "/sign-up",
  Login = "/login",
  MyRestaurants = "/restaurants",
  AddRestaurant = "/add-restaurant",
  Orders = "/orders",
  Menu = "/menu",
  Staff = "/staff",
  Notification = "/notifications",
  Payments = "/payments",
  Settings = "/settings",
  Analytics = "/analytics",
  PersonalCustomization = "/customization",
}

export enum Cuisines {
  Indian = "Indian",
  Italian = "Italian",
  Chinese = "Chinese",
  Spanish = "Spanish",
  French = "French",
  Lebanese = "Lebanese",
  British = "British",
  Japanese = "Japanese",
  Mexican = "Mexican",
  Turkish = "Turkish",
  Thai = "Thai",
  PubFood = "Pub Food",
  American = "American",
  Chicken = "Chicken",
  Pizza = "Pizza",
  Burgers = "Burgers",
}

export enum OrdersFilter {
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

export enum WeekFilter {
  Mon = "Mon",
  Tue = "Tue",
  Wed = "Wed",
  Thu = "Thu",
  Fri = "Fri",
  Sat = "Sat",
  Sun = "Sun",
}

export enum Menu {
  AllDayMenu = "All day menu",
  Brunch = "Brunch",
  Lunch = "Lunch",
  Dinner = "Dinner",
}

export enum Settings {
  ManagerProfile = "Manager Profile",
  DeliverectID = "Deliverect ID",
  Payments = "Payments",
  ServiceCharge = "Service Charge",
  Security = "Security",
}

export const cuisinesList: CuisineType[] = [
  "Indian",
  "Italian",
  "Chinese",
  "Spanish",
  "French",
  "Lebanese",
  "British",
  "Japanese",
  "Mexican",
  "Turkish",
  "Thai",
  "Pub Food",
  "American",
  "Chicken",
  "Pizza",
  "Burgers",
];

export const BASE_URL = "http://18.133.37.156:4444/";
