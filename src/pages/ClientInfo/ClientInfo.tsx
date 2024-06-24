import Sidebar from "../../components/Sidebar"
import { useNavigate, useParams } from "react-router-dom";
import ClientInfoHeader from "./components/ClientInfoHeader";
import VisitedPlaces from "./components/VisitedPlaces";
import ClientInfoForm from "./components/ClientInfoForm";
import ClientInfoHistory from "./components/ClientInfoHistory";


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

    const history = [
        {
            feedback: "Gostei muito da viagem",
            date: "12/05/2022"
        },
        {
            feedback: "Hotel muito bom",
            date: "21/06/2023"
        },
        {
            feedback: "Comida muito boa",
            date: "01/03/2024"
        },
    ]


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
                    <ClientInfoForm/>
                    </div>
                    <div className="w-1/4 flex flex-col gap-8">
                    <VisitedPlaces visitedPlaces={places_visited}/>
                    </div>
                </div>
                <div className="mt-12">
                    <ClientInfoHistory history={history}/>
                </div>

            </div>
        </div>
    )
}

export default ClientInfo