import Item from "../Item";
import MenuNav from "../MenuNav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ListaItems() {

    const { id } = useParams();


    const [items, setItems] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Shepardy22/backendCardapio/categorias/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                // console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const produtos = items.produtos;

    return (
        <div className=" w-full flex flex-col items-center mt-28  bg-black ">
            <p className="flex justify-center text-primaryRed-100 font-semibold text-lg">Faça seu pedido</p>            <ul className="w-full mt-4 mb-14">

                {produtos && produtos.map((produto) => (
                    <li key={produto.id}>
                        <Item nome={produto.nome} id={produto.id} categoria={items.id} img={produto.img} descricao={produto.descricao}/>
                    </li>
                ))}

            </ul>
            <MenuNav />
        </div>
    )
}