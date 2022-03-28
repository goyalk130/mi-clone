import "../src/App.css";
import PreNavBar from "./components/preNavBar";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              data={data.hotAccessories.music}
              dataCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              data={data.hotAccessories.smartDevice}
              dataCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />

<Route
          exact
          path="/home"
          element={
            <HotAccessories
              data={data.hotAccessories.home}
              dataCover={data.hotAccessoriesCover.home}
            />
          }
        />

<Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              data={data.hotAccessories.lifeStyle}
              dataCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

<Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              data={data.hotAccessories.mobileAccessories}
              dataCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer  footer={data.footer}/>
    </Router>
  );
}

export default App;
