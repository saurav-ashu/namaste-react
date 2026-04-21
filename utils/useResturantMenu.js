import { useState } from "react";
import { useEffect } from "react";
import getRestaurantMenu from "../utils/mockRestaurantMenuData";

const useResturantMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    const menuData = getRestaurantMenu(resId);
    setResMenuInfo(menuData[0]);
  };

  return resMenuInfo;
};

export default useResturantMenu;
