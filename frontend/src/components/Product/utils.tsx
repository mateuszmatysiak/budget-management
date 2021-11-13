import React from "react";
import { CableIcon } from "../../icons/cable";
import { FoodIcon } from "../../icons/food";
import { HomeIcon } from "../../icons/home";
import { ProductCategoryType } from "../../types/product";

function getProductIcon(category?: ProductCategoryType) {
  switch (category) {
    case "ECONOMIC":
      return <FoodIcon />;
    case "ELECTRONIC":
      return <CableIcon />;
    case "HOMEMADE":
      return <HomeIcon />;
    default:
      return "-";
  }
}

function getProductColor(category?: ProductCategoryType) {
  switch (category) {
    case "ECONOMIC":
      return "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)";
    case "ELECTRONIC":
      return "linear-gradient(315deg, #2a7246 0%, #0ba852 74%)";
    case "HOMEMADE":
      return "linear-gradient(315deg, #72612a 0%, #e28c0a 74%)";
    default:
      return "-";
  }
}

export { getProductIcon, getProductColor };
