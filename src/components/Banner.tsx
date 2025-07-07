import { useEffect, useState } from "react"
import Banner1 from "../assets/banner.png"
import Banner2 from "../assets/banner2.png"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Banner() {
    const banner = [
        {
            image: Banner2,
        },
        {
            image: Banner1,
        },
    ]

    const [currentBanner, setCurrentBanner] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prev) => (prev < banner.length - 1 ? prev + 1 : 0));
        }, 7000);

        return () => clearInterval(interval);
    }, [banner.length]);

    const handleNextBanner = () => {
        if (currentBanner < banner.length - 1) {
            setCurrentBanner(currentBanner + 1)
        } else {
            setCurrentBanner(0)
        }
    }

    const handlePreviousBanner = () => {
        if (currentBanner > 0) {
            setCurrentBanner(currentBanner - 1)
        } else {
            setCurrentBanner(banner.length - 1)
        }
    }

    return (
        <div className="flex w-full p-2 items-center justify-center relative z-0">

            <Link to="/item">
                <img src={banner[currentBanner].image} alt="Banner" className="w-full object-cover rounded-lg overflow-hidden flex-shrink-0" />
            </Link >


            <div className="flex gap-1 absolute bottom-4 left-1/2 -translate-x-1/2">
                {banner.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            currentBanner === idx ? 'bg-red-500' : 'bg-white/80'
                        }`}
                        onClick={() => setCurrentBanner(idx)}
                    />
                ))}
            </div>

            <div className="flex absolute top-1/2 left-3 right-3 -translate-y-1/2 items-center justify-between pointer-events-none">
                <button className="flex items-center justify-center bg-red-500 rounded-full p-2 cursor-pointer pointer-events-auto" onClick={handlePreviousBanner}>
                    <ChevronLeft className="text-white" size={15} />
                </button>
                <button className="flex items-center justify-center bg-red-500 rounded-full p-2 cursor-pointer pointer-events-auto" onClick={handleNextBanner}>
                    <ChevronRight className="text-white" size={15} />
                </button>
            </div>
        </div>
    )
}