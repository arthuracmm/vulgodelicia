import Icon from "../assets/icon.png"
import TextIcon from "../assets/texticon.png"

export default function Header() {
    return (
        <header className="flex flex-col text-white w-full">
            <div className="flex justify-between items-center bg-red-100 p-4">
                <a className="flex" href="/">
                    <img src={Icon} alt="Icon" className="w-10" />
                </a>
                <a className="flex" href="/">
                   
                </a>
            </div>

        </header>
    )
}