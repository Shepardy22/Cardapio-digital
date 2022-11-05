import { Link } from "react-router-dom";
import checkFalse from '../img/icons/checkFalse.png';
import checkTrue from '../img/icons/checkTrue.png';
 import { useState } from "react";

export default function Item(props) {

    //passar cominho da imagem para o src 
    const img = props.img;

    const[stateImg, setStateImg] = useState(checkFalse);

    function handleClick() {
        if (stateImg === checkFalse) {
            setStateImg(checkTrue);
        } else {
            setStateImg(checkFalse);
        }
    }


    return(

        <div className={` w-full h-32 flex  items-center justify-between ${stateImg === checkTrue ? 'border border-primaryRed-200 rounded ' : ''}`} >
            
            
                <Link to={`/Produto/${props.categoria}/${props.id}`}>
                    <div className= {`w-24 h-24  mx-2 bg-center`}>
                        <img src={img} alt="" />
                    </div>
                </Link>
                
                <div className=" h-24 w-6/12 ">
                    <Link to={`/Produto/${props.categoria}/${props.id}`}>
                        <div className="h-full flex flex-col items-center w-full">
                            <h1 className="text-primaryRed-100 font-medium text-lg">{props.nome}</h1>
                            <p className="mt-2 text-primaryRed-200 italic">{props.descricao}</p>
                        </div>
                    </Link>
                
                </div>
                
                <div className=" h-24 w-24 mx-2 flex justify-center items-center">
                    <button onClick={handleClick} className="h-12 w-12"><img src={stateImg} alt="" /></button>
                </div>
            
           
        </div>
       
    );
}