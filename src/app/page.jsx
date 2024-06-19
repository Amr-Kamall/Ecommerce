import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/categories";
import NewList from "./components/NewProducts";
function HomePage() {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <Categories />
      <NewList />
    </>
  );
}

export default HomePage;
