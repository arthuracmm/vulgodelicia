import Header from "../components/Header";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";

export default function Home() {
  return (
    <div className="flex font-montserrat flex-col items-center justify-center w-full">
      <Header />
      <div className="flex flex-col w-full">
       <Categories/>
       <BestSelling/>
      </div>
    </div>
  )
}