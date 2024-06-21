import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappLine } from "react-icons/ri";

export interface CardProps {
  name: string;
  nextTravel: string;
  recurrence: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  name,
  nextTravel,
  recurrence,
  onClick
}) => {

  const getNameInitials = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    return firstName.charAt(0) + lastName.charAt(0);
  }

  return (
    <div className={`bg-white shadow-sm
     rounded-2xl flex flex-col justify-between p-4 items-center transition-all 
     ${onClick && "hover:cursor-pointer hover:scale-105"}`}
     onClick={onClick}>
        <div className=" avatar placeholder">
          <div className="bg-primary text-white rounded-full w-12">
            <span className="text-1xl">{getNameInitials(name)}</span>
          </div>
        </div>
        <h3 className="font-semibold text-xl mb-4">{name}</h3>
        <h4 className="font-extralight text-xs">Proxima viagem:</h4>
        <h4 className="font-normal text-xs text-primary">{nextTravel}</h4>
        <div className="p-2 px-11 mt-4  shadow-md rounded-xl flex items-center flex-col">
          <h4 className="font-medium mb-1 text-gray-500 text-xs">Recorrência</h4>
          <h4 className="font-normal text-xs text-primary">{recurrence}</h4>
        </div>
        <div className="flex gap-2 justify-center items-center mt-8 mb-2">
          <span className="text-xs flex">
            <HiOutlineMail className="h-5 w-5 mr-2"/>
            Copiar email
          </span>
          <div className="border-gray-200 border h-3 w-0"/>
          <span className="text-xs flex"> 
            <RiWhatsappLine className="h-5 w-5 mr-2"/>
            Whatsapp
          </span>
        </div>
    </div>
  )
}

export default Card