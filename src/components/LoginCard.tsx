import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import TextFieldWithIcons from "./TextFieldWithIcons";

export interface LoginCardProps {
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => void;
}

const LoginCard: React.FC<LoginCardProps> = 
({
  onEmailChange, 
  onPasswordChange, 
  onLogin
}) => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-xl w-full">
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body px-20 py-14 text-center">
            <h1 className="text-4xl font-bold">Bem Vindo</h1>
            <div className="form-control">
              <TextFieldWithIcons 
              onTextChange={onEmailChange} 
              icon={<HiOutlineMail/>} 
              placeholder="Digite seu email"
              label="Email"
              border/>
            </div>
            <div className="form-control">
              <TextFieldWithIcons 
              onTextChange={onPasswordChange} 
              icon={<HiOutlineLockClosed/>} 
              placeholder="Digite sua senha"
              label="Password"
              border/>
            </div>
            <div className="form-control mt-6">
              <button onClick={onLogin} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginCard;