import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import app_logo from "../foodapp_logo.png";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery"; // instead of importing Grocery, use lazy method

const Grocery = lazy(() => import("./components/Grocery")); //the import used here is different from the imports at top, needs a named import from React

const AppLayout = () => {
  const [username, setUsername] = useState();

  //authentication
  useEffect(() => {
    //make api call to authenticate and fetch username
    const data = { name: "Saurav" };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/* if there are elements/ components outside they will use Default user for user context */}
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        {/** username.name i.e Saurav in all places in the app */}
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: username }}>
            {/* Luois in the header*/}
            <Header />
          </UserContext.Provider>

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutClass />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
