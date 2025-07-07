import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import Search from "../components/Search";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="flex font-montserrat flex-col items-center justify-center w-full">
      <Header />
      <Search />
      <div className="flex flex-col w-full">
        <Banner />
        <Categories />
        <BestSelling />
      </div>
    </div>
  )
}