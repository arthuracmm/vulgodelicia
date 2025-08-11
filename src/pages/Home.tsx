import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import Banner from "../components/Banner";
import FooterItems from "../components/FooterItems";
import InputSearch from "../components/InputSearch";

export default function Home() {
  return (
    <div className="flex font-montserrat flex-col items-center justify-center w-full mb-20 mx-auto">
      <Header />
      <InputSearch />
      <div className="flex flex-col w-full items-center justify-center lg:w-1/2">
        <Banner />
        <Categories />
        <BestSelling />
      </div>
      <FooterItems />
    </div>
  )
}