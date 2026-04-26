import { RESTURANT_CARD_IMG_BASE_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div className="res-card m-4 p-4 bg-gray-100 w-sm rounded-lg min-h-115 hover:bg-gray-200">
      <img className="res-logo rounded-lg max-h-87.5 min-w-full" alt="Resturant pic here" src={RESTURANT_CARD_IMG_BASE_URL + cloudinaryImageId}></img>
      <div className="m-1">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
