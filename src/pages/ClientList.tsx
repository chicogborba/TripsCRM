import React, { useState } from "react";
import Sidebar from "../components/Sidebar"
import TextFieldWithIcons from "../components/TextFieldWithIcons";
import { HiSearch } from "react-icons/hi";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const ClientList = () => {

    const initialData = [
        {
            nome: "Victor Mondin",
            proxima_viajem: "2022/12/12",
            recorencia: "Mensal",
            id: "1"
        },
        {
            nome: "Maria Silva",
            proxima_viajem: "2022/12/12",
            recorencia: "Anual",
            id: "2"
        },
        {
            nome: "José Silva",
            proxima_viajem: "2022/12/12",
            recorencia: "Mensal",
            id: "3"
        },
        { 
            nome: "Ana Silva",
            proxima_viajem: "2022/12/12",
            recorencia: "Anual",
            id: "4"
        }
    ]

    const nav = useNavigate();
    const handleClick = (id: string) => {
        nav("/info/" + id, { replace: true });
    }

    const [data, setData] = useState(initialData);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const normalizedSearch = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const filteredData = initialData.filter(item => item.nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedSearch));
        setData(filteredData);
    }

    return (
        <div className="flex flex-row h-screen">
            <Sidebar selected={true}/>
            <div className="w-full p-8 overflow-auto  shadow-xl m-8 rounded-xl ">
                <h2 className="text-3xl font-bold mt-1 mb-6">Fulano Silva</h2>
                <div className="flex gap-4 items-center">
                <h2 className="text-2xl ">Cliente</h2>
                <TextFieldWithIcons
                onTextChange={handleSearch}
                icon={<HiSearch className="h-6 w-6 opacity-30"/>}
                placeholder="Pesquisar"
                className="w-2/5 rounded-2xl shadow-md h-10 border-none"
                />
                </div>
                <div className="flex gap-4 mt-8 flex-wrap">
                    {data.map((item, index) => (
                        <Card
                        key={index}
                        name={item.nome}
                        nextTravel={item.proxima_viajem}
                        recurrence={item.recorencia}
                        onClick={() => handleClick(item.id)}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default ClientList