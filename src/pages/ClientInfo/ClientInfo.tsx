import Sidebar from "../../components/Sidebar"
import { useNavigate, useParams } from "react-router-dom";
import ClientInfoHeader from "./components/ClientInfoHeader";


const ClientInfo = () => {
     const { id } = useParams();
    const nav = useNavigate();
    const handleClick = () => {
        nav("/list", { replace: true });
    }

    const places_visited = 
        [
            {
                "date": "12/05/2022",
                "city": "Porto Alegre"
            },
            {
                "date": "21/06/2023",
                "city": "Gramado"
            },
            {
                "date": "01/03/2024",
                "city": "Canela"
            },
            {
                "date": "18/05/2022",
                "city": "Porto Alegre"
            },
        ]

    const createMostVisited = (list: any) => {
        const cities: any = {}

        list.forEach((item: any) => {
            if (cities[item.city]) {
                cities[item.city] += 1
            } else {
                cities[item.city] = 1
            }
        })

        const sorted = Object.keys(cities).sort((a, b) => cities[b] - cities[a])

        return sorted.map((city) => ({city, count: cities[city]}))
    }

    console.log(createMostVisited(places_visited))

    return (
        <div className="flex flex-row h-screen">
            <Sidebar selected={false} onClick={handleClick}/>
            <div className="w-full p-8 overflow-auto  shadow-xl m-8 rounded-xl ">
                <ClientInfoHeader 
                    name="Victor Monodin" 
                    number="123456789" 
                    onAddTrip={() => console.log("a")}
                />
                <div className="flex ">
                    <div className="w-3/4 flex flex-col gap-8">
                        <h2 className="text-2xl font-bold ">Informações do Cliente</h2>
                        <div>lista de dados</div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-8">
                        <h2 className="text-2xl font-bold  ">Locais Visitados</h2>
                        <div className="bg-white rounded-lg min-h-80 p-8 shadow-md">
                            {createMostVisited(places_visited).map((item: any, index: number) => (
                                <>
                                <div key={index} className="flex justify-between items-center">
                                    <div className="flex">
                                    <h3 className="text-md font-bold mr-2">{index+1 + ". "}</h3>
                                    <h3 className="text-md font-normal">{item.city}</h3>
                                    </div>
                                    <h3 className="text-md ">{item.count}</h3>
                                </div>
                                <div className="my-2 w-full border border-gray-100  rounded-full"></div> 
                                </>
                            
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientInfo