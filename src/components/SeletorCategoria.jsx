import { Link } from "react-router-dom";


export default function SeletorCategoria(props) {


  const  imgBK = props.bg;
    

    return (
        <button className={`w-full my-4 `}>
            <Link to={`/ListaItems/${props.id}`}>
                <div >
                    <h2 className="text-2xl text-primaryRed-100 font-medium ">{props.nome}</h2>
                    <div className={`flex justify-center items-center `}>
                        <div >
                            <img src={imgBK} alt="" />
                        </div>
                    </div>
                </div>
            </Link>

        </button>
    );
}