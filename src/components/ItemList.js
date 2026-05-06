import { useDispatch } from "react-redux";
import { ITEM_IMG_BASE_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action to add item

    dispatch(addItem(item));
  };

  //console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">
          <div className="p-2 w-9/12">
            <div className="">
              <span className="mx-1 my-1 font-bold text-lg">{item?.card?.info?.name}</span>
              <span className="mx-1 my-1 text-lg">
                {" "}
                ₹ {item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-sm mx-1 my-1">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-6">
            <div className="relative">
              <img src={ITEM_IMG_BASE_URL + item?.card?.info?.imageId} className="w-full rounded-lg object-cover h-46.5"></img>
              <button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2 px-4 rounded-lg bg-white shadow-lg text-black-600 font-bold text-sm"
                onClick={() => handleAddItem(item)}
                //To check difference between below 3 line
                //onClick={handleAddItem}
                //onClick={handleAddItem(item)}
                //onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
