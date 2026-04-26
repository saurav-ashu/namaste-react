import ResturantCard from "./ResturantCard";
import restaurantList from "../../utils/mockResturantData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

let mockListOfRestuarants = restaurantList;

const Body = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchAllRestaurantData();
  }, []);

  const fetchAllRestaurantData = async () => {
    //Disabling api calls and using mockData setup
    //Swiggy GET API called for initial data, fetches 8 restaurant cards
    // const SWIGGY_GET_URL =
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.974148148929004&lng=77.65325197158514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    // //Calling this post Url didn't work so using mock data, first 8 resturants are fetched from swiggy api
    // const SWIGGY_POST_URL = "https://www.swiggy.com/dapi/restaurants/list/update";

    //const initialRes = await fetch(SWIGGY_GET_URL);
    //const initialDatajson = await initialRes.json();

    // const initialList = initialDatajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // let allRestaurants = [...initialList, ...mockListOfRestuarants];

    let allRestaurants = mockListOfRestuarants;
    setlistOfRestuarants(allRestaurants);
    setFilteredListOfRestaurants(allRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div className="client-offline">
        <h1>Looks like you are Offline! Please check your internet connection.</h1>
      </div>
    );
  }
  return filteredListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex content-between">
        <div className="m-4 p-4">
          <input
            type="text"
            className="m-2 p-2 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-2 p-2 bg-purple-300 border border-solid border-purple-700 rounded-lg"
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
        <div className="m-4 p-4">
          <button
            className="m-2 p-2 bg-purple-300 border border-solid border-purple-700 rounded-lg"
            onClick={() => {
              const topRatedFilteredRestuarants = listOfRestuarants.filter((res) => res.info.avgRating > 4.5);
              setFilteredListOfRestaurants(topRatedFilteredRestuarants);
            }}
          >
            Top rated Restuarants
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="m-2 p-2 bg-purple-300 border border-solid border-purple-700 rounded-lg"
            onClick={() => {
              setFilteredListOfRestaurants(listOfRestuarants);
              setSearchText("");
            }}
          >
            Clear filter
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
