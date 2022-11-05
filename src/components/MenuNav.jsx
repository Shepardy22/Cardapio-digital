import { Link } from "react-router-dom";

export default function MenuNav() {
    return (
        <div className="w-full fixed bottom-0 bg-black h-12 ">
                <ul className="flex justify-between mx-4 text-white h-full items-center">
                    <li><Link to="/">Voltar</Link> </li>
                    <li><button  className="py-3 px-6"><Link to="/">Home</Link></button></li>
                    <li>Store</li>
                </ul>
            </div>
    );
}