import Sidebar from "../../components/Sidebar"
import { useNavigate, useParams } from "react-router-dom";
import ClientInfoHeader from "./components/ClientInfoHeader";
import VisitedPlaces from "./components/VisitedPlaces";
import ClientInfoForm from "./components/ClientInfoForm";
import ClientInfoHistory from "./components/ClientInfoHistory";
import { useState } from "react";
import useClientInfo, { InitialStateType } from "./useClientInfo";

const ClientInfo = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const {initialState,inputFields,client_data} = useClientInfo(id);

    const [fieldValues, setFieldValues] = useState<InitialStateType>(initialState)
    const [isEditingDisabled, setIsEditingDisabled] = useState(true)

    const handleChange = (label: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [label]: value }));
    };
    const handleClick = () => {
        nav("/list", { replace: true });
    }
    
    return (
        <div className="flex flex-row h-screen">
            <Sidebar selected={false} onClick={handleClick}/>
            <div className="w-full p-8 overflow-auto  shadow-xl m-8 rounded-xl ">
                <ClientInfoHeader 
                    name={client_data?.name || ""}
                    number={client_data?.id || ""}
                    onAddTrip={() => console.log("a")}
                    onEdit={() => setIsEditingDisabled(!isEditingDisabled)}
                />
                <div className="flex ">
                    <div className="w-3/4 flex flex-col gap-8">
                    <ClientInfoForm 
                        disabled={isEditingDisabled} 
                        onChange={handleChange} 
                        inputFields={inputFields} 
                        fieldValues={fieldValues}/>
                    </div>
                    <div className="w-1/4 flex flex-col gap-8">
                    <VisitedPlaces visitedPlaces={client_data?.visits || []}/>
                    </div>
                </div>
                <div className="mt-12">
                    <ClientInfoHistory history={client_data?.history || []}/>
                </div>

            </div>
        </div>
    )
}

export default ClientInfo