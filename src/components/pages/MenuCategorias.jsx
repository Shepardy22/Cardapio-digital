import { useEffect, useState } from "react";
import SeletorCategoria from "../SeletorCategoria";
import FooterMedia from "../FooterMedia";

export default function MenuCategorias() {
    const [categorias, setListaCategorias] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Shepardy22/backendCardapio/categorias", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                },
                })
                .then((response) => response.json())
                .then((data) => {
                    setListaCategorias(data);
                    // console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
    }, []);

   

    

    return (

            
        <div className=" w-full flex flex-col items-center mt-28 bg-black">
                
            <ul className="w-full mt-4 ">
                <p className="flex justify-center text-primaryRed-100 font-semibold text-lg">Selecione uma Categoria</p>

                    {categorias && categorias.map((categoria) => {
                        return (
                            <SeletorCategoria
                                key={categoria.id}
                                id={categoria.id}
                                nome={categoria.nome}
                                bg={categoria.img}
                            />
                        );
                    })}
            </ul>
           
        </div>
    );
}