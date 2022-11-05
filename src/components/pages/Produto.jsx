import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuNav from "../MenuNav";


export default function Produto() {

const {id} = useParams();
const {it} = useParams();


    const [produto, setProduto] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Shepardy22/Cardapio-digital/categorias/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                },
                })
                .then((response) => response.json())
                .then((data) => {
                    setProduto(data);
                    //  console.log(data);
                    

                })
                .catch((error) => {
                    console.log(error);
                });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

     const produtos = produto.produtos;
     const produtoSelecionado = produtos && produtos.find((produto) => produto.id === Number(it));
    const img = produtoSelecionado && produtoSelecionado.img;


    return (
        <div className="mt-28">
            <div className="w-full h-12 flex justify-center items-center">
                <h1 className="text-2xl text-primaryRed-100 font-medium ">{produtoSelecionado && produtoSelecionado.nome }</h1>
            </div>

            <div className="border w-full h-72 flex justify-center items-center">
                
                <div className="border w-64 h-64 text-white">
                
                   
                    <img src={`../${img}`} alt="Imagem"/>
                    
               
                </div>
            </div>

            <div className="w-full mt-2 h-48 border">
                <p className="text-lg text-primaryRed-200 italic flex justify-center mt-2 ">
                    {produtoSelecionado && produtoSelecionado.descricao}
                </p>
            </div>

            <div className="border w-full h-24 mt-2 flex items-center justify-center">
                <div className="border h-2/3 w-10/12  text-lg text-primaryRed-200">
                    Aqui estarão os botões de adicionar e remover
                </div>
            </div>


            <MenuNav/>
        </div>
    )
}
