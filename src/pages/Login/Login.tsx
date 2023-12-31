import { FormEvent, useContext } from "react";
import { Button } from "../../component/atom/Button/Button.component"
import { Textinput } from "../../component/atom/Input/Textinput.component"
import { useNavigate } from 'react-router-dom';
import { AppCotext } from "../../contexts/App.context";
import { useForm } from "../../hooks/useForm.hook";

interface LoginData {
  email: string;
  password: string;
}

const inicialLoginForm: LoginData = {
  email: "",
  password: "",
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

export const Login = () => {

  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AppCotext)
  const { formData, onChange } = useForm<LoginData>(inicialLoginForm);

  const onSubmit = async (e?: FormEvent) => {

    e?.preventDefault();

    try {
      const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(formData)
        });
      const data: LoginResponse = await resp.json();
      if (!!data?.token.length) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setToken(data?.token);
        setUser(data?.user);
        navigate('/clima');
      }
    } catch (error) {

    }
  }


  //---------------------------------------------------------------------------------------
  return (
    <div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
      <div className="h-90 w-92 bg-[#6553b0] flex flex-col rounded-lg p-2">
        <form method="POST" onSubmit={onSubmit}>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-white text-4xl">Login</h1>
            <Textinput name="email" value={formData.email} text="Email" type="text" placeholder="Email" onChange={onChange}></Textinput>
            <Textinput name="password" value={formData.password} text="Contraseña" type="password" placeholder="Contraseña" onChange={onChange}></Textinput>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Button text="Login" type="submit" onClick={onSubmit}></Button>
            <Button text="Home" onClick={() => navigate('/')}></Button>
          </div>
        </form>
        <div className='bg-[#7661c9] flex rounded-lg p-1'>
          <h1 className='text-white text-center m-5'>¿No eres mienbro?</h1>
          <Button text="¡Registrate!" onClick={() => navigate('/registro')}></Button>
        </div>
      </div>
    </div>
  )
}
