export const APP_LOGO_URL =
  "https://imgs.search.brave.com/B4DxfBRXQT-DyWkKgSqWzkMucCsD0eNijiirb5PodBM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduZXZvLmNv/bS9yZXMvdGVtcGxh/dGVzL3RodW1iX3Nt/YWxsL2RlbGljaW91/cy1oYW1idXJnZXIt/YW5kLWZvb2QtdHJ1/Y2sud2VicA";

export const RESTURANT_CARD_IMG_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const ITEM_IMG_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

// src/utils/constants.js
export const SWIGGY_RESTAURANT_LIST_URL =
  "http://localhost:3000/swiggy/dapi/restaurants/list/v5?lat=12.974148148929004&lng=77.65325197158514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const SWIGGY_MENU_URL = (resId) =>
  `http://localhost:3000/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.974148148929004&lng=77.65325197158514&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
