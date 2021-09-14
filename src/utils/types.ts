import { FC } from "react";
import { BACKGROUND } from "../redux/customization/constants";

import { Cuisines, Settings } from "./constants";

export enum ButtonStylePreset {
  BaseButton = "BaseButton",
  BaseButtonWithBackground = "BaseButtonWithBackground",
}

export enum OrderStatusType {
  Open = "Open",
  Active = "Active",
  Closed = "Closed",
  Failed = "Failed",
}

export enum Position {
  Managers = "managers",
  SeniorWaiter = "seniorWaiter",
  Waiter = "waiters",
  GeneralManager = "generalManager",
}

export enum Role {
  Admin = "admin",
  User = "user",
}
export interface IRoutes {
  Component: FC;
  path: string;
}
export interface ICuisine {
  order: number;
  _id: string;
  img?: string;
  title: Cuisines;
}

export interface IOrderItem {
  name: string;
  plu: string;
  price: number;
  productType: number;
  quantity: number;
  subItems: any[];
}

export interface ICustomer {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface IOrderPayment {
  amount: number;
  type: number;
}
export interface IOrder {
  additionalPayers: any[];
  channelLinkId: string;
  createdAt: string;
  customer: ICustomer;
  decimalDigits: number;
  deliveryTime: string;
  discountTotal: number;
  estimatedPickupTime: string;
  items: IOrderItem[];
  note: string;
  orderIsAlreadyPaid: boolean;
  orderType: number;
  payers: any[];
  payment: IOrderPayment;
  pickupTime: string;
  restaurantId: string;
  status: string;
  table: string;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
}

export interface IResponseOrders {
  orders: IOrder[];
  totalOrdersCount: number;
}

export interface IMenuItem {
  name: string;
  id: string;
  ingredients: string;
  price: number;
  sale?: number;
  presence: boolean;
}

export interface IWorker {
  name: string;
  started: string;
  position: Position;
  id: string;
}

export interface IPayment {
  name: string;
  time: string;
  card: string;
  method: string;
  status: boolean;
  sum: number;
  id: string;
}

export interface ISettings {
  name: Settings;
  icon: string;
  id: string;
}

export interface IResponse<T = any> {
  result: boolean;
  error: {
    message: string;
    code: number;
  };
  data: T;
}

export interface IVerifyNumberForm {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface ISignUpForm {
  email: string;
  password: string;
  phoneNumber: string;
}

export interface IVerifyNumberResponse {
  phoneNumber: string;
  password: string;
  verificationCode: string;
}

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface ISignUp extends ISignUpForm {
  role: "admin";
  phoneNumber: string;
  restaurantId: null;
}

export interface ILogin {
  phoneNumber: string;
  password: string;
}

export interface IUserData {
  favoriteRestaurants: any[];
  allergens: any[];
  emailVerified: boolean;
  phoneVerified: boolean;
  birthday: null | string;
  gender: null | string;
  restaurantId: null | string;
  avatar: null | string;
  lastName: null | string;
  firstName: null | string;
  _id: string;
  role: Role;
  phoneNumber: string;
  email: string;
  status: "pending";
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IAddRestaurantForm {
  name: string;
  about: string;
}

export interface IAddRestaurantPhoto {
  restaurantId: string;
  photo: File;
}

export interface IAddRestaurant {
  name: string;
  about: string;
  instagramLink: string;
  googleLink: string;
  open: string;
  close: string;
  adminId: string;
}

export interface IAddRestaurantRequest extends IAddRestaurant {
  photo: File;
}

export interface IUpdRestaurant {
  name?: string;
  about?: string;
  instagramLink?: string;
  open?: string;
  close?: string;
  cuisines?: string[];
  googlePlaceId?: string;
  _id: string;
}

export interface IRestaurant {
  cuisines: string[];
  deliverectCurrency: number;
  payLater: boolean;
  busyMode: string;
  photos: any[];
  _id: string;
  name: string;
  about: string;
  instagramLink: string;
  googleLink: string;
  open: string;
  close: string;
  status: string;
  admin: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface IRestaurantMenu {
  availabilities: any[];
  channelLinkId: string;
  createdAt: string;
  currency: number;
  deliverectMenuId: string;
  description: string;
  menuImageURL: string;
  menuName: string;
  menuType: number;
  nestedModifiers: boolean;
  productTags: number[];
  updatedAt: string;
  validations: [];
  __v: number;
  _id: string;
}

export interface IMenuCategory {
  account: string;
  availabilities: [];
  createdAt: string;
  deliverectId: string;
  description: string;
  imageUrl: string;
  level: number;
  menu: string;
  name: string;
  posCategoryId: string;
  posCategoryType: string;
  posLocationId: string;
  subCategories: any[];
  subProductSortOrder: any[];
  updatedAt: string;
  _id: string;
}

export interface IProduct {
  account: string;
  capacityUsages: any[];
  channelLinkId: string;
  createdAt: string;
  deliverectId: string;
  deliveryTax: number;
  description: string;
  descriptionTranslations: { nl: string };
  imageUrl: string;
  location: string;
  max: number;
  menuCategory: string;
  min: number;
  multiply: number;
  name: string;
  nameTranslations: { nl: string };
  parentId: string;
  plu: string;
  posCategoryIds: string[];
  posProductCategoryId: string[];
  posProductId: string;
  price: number;
  productTags: number[];
  productType: number;
  snoozed: boolean;
  sortOrder: number;
  status: string;
  subProductSortOrder: any[];
  subProducts: string[];
  takeawayTax: number;
  updatedAt: string;
  visible: boolean;
  _id: string;
}

export interface IPersonalCustomization {
  [BACKGROUND]: string;
  headingColor: string;
  panelBgColor: string;
  panelFontColor: string;
}

export interface IMenu {
  menu: IRestaurantMenu;
  menuCategories: IMenuCategory[];
}

export type MenuType = "All day menu" | "Brunch" | "Lunch" | "Dinner";

export type CuisineType =
  | "Indian"
  | "Italian"
  | "Chinese"
  | "Spanish"
  | "French"
  | "Lebanese"
  | "British"
  | "Japanese"
  | "Mexican"
  | "Turkish"
  | "Thai"
  | "Pub Food"
  | "American"
  | "Chicken"
  | "Pizza"
  | "Burgers";
