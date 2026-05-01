import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //Don't allow this component to maintain its own hide and show items, pass it to the parent
  //to have a feature by which only one cateogry items are shown and others are collapsed
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    //setShowItems(!showItems);

    //The below methods calls the parent's component setShowIndex
    setShowIndex();
  };
  return (
    <div className="">
      {/*Accordion Header */}
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="">
          {/*Accordion Body */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
