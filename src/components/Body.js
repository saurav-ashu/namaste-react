import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

let mockListOfRestuarants = resList;

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    //Not a good way to write as below
    //setlistOfRestuarants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //Use optional chaining
    setlistOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return filteredListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const searchFilteredRestaurantList = listOfRestuarants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilteredListOfRestaurants(searchFilteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-filter-btn"
          onClick={() => {
            const topRatedFilteredRestuarants = listOfRestuarants.filter((res) => res.info.avgRating > 4.5);
            setFilteredListOfRestaurants(topRatedFilteredRestuarants);
          }}
        >
          Top rated Restuarants
        </button>
        <button
          className="clear-filter-btn"
          onClick={() => {
            setFilteredListOfRestaurants(listOfRestuarants);
            setSearchText("");
          }}
        >
          Clear filter
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
