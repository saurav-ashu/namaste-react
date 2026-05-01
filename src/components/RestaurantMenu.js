import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "../../utils/constants";
import getRestaurantMenu from "../../utils/mockRestaurantMenuData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../../utils/useresturantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //const [resMenuInfo, setResMenuInfo] = useState(null);

  const { resId } = useParams();

  const resMenuInfo = useResturantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  //console.log(resMenuInfo);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  //console.log(getRestaurantMenu("693653"));

  //Valid ids: (10584,Pizza Hut) (1098430, Mealy - Your Everyday Meal)  (23681, McDonald's) (693653, KFC) (264701, Domino's Pizza)
  //Not valid: (413481, Chinese Wok) (5167, Theobroma)

  // const fetchMenu = () => {
  //   //
  //   // //const SWIGGY_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.974148148929004&lng=77.65325197158514&restaurantId=920944&catalog_qa=undefined&submitAction=ENTER`;
  //   // const resId = 920944;
  //   // const data = await fetch(SWIGGY_MENU_URL(resId));
  //   //const dataJson = await data.json();
  //   //console.log(dataJson);

  //   //menuData is JSON object
  //   const menuData = getRestaurantMenu(resId);
  //   //console.log(menuData);
  //   setResMenuInfo(menuData[0]);
  // };

  if (!resMenuInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resMenuInfo?.data?.data?.cards[2]?.card?.card?.info ?? {};

  const { itemCards } = resMenuInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  //console.log(resMenuInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resMenuInfo?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-10">{name}</h1>
      <p className="my-6 text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** Accordion for Menu categories */}
      {categories.map((category, index) => (
        //Controlled component
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
