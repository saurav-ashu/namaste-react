import { RESTURANT_CARD_IMG_BASE_URL } from "../../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f092" }}>
      <img className="res-logo" alt="Resturant pic here" src={RESTURANT_CARD_IMG_BASE_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
