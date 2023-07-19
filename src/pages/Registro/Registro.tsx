import { useState } from 'react'
import { Button } from "../../component/atom/button/Button.component"
import { Textinput } from "../../component/atom/input/Textinput.component"
import { useNavigate } from 'react-router-dom';

interface Forminterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  vpassworld: string;
}

const inicialform: Forminterface =
{
  name: "",
  surname: "",
  email: "",
  password: "",
  vpassworld: ""
}

export const Registro = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState<Forminterface>(inicialform)
  console.log(formState);


  //---------------------------------------------------------------------------------------
  return (
    <div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
      <div className="h-90 w-90 bg-[#6553b0] flex flex-col rounded-lg p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white text-4xl">Registro</h1>
          <Textinput text="Nombre" type="text" placeholder="Introduce tu nombre" onChange={(e) => setFormState((prev) => ({...prev, name: e.target.value}))}></Textinput>
          <Textinput text="E-mail" type="email" placeholder=" example@example.com" onChange={(e) => setFormState((prev) => ({...prev, email: e.target.value}))}></Textinput>
          <Textinput text="Contraseña" type="password" placeholder="Contraseña" onChange={(e) => setFormState((prev) => ({...prev, password: e.target.value}))}></Textinput>
          <Textinput text="Verificar Contraseña" type="password" placeholder="Verifica Contraseña" onChange={(e) => setFormState((prev) => ({...prev, vpassworld: e.target.value}))}></Textinput>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Button text="Aplicar"></Button>
          <Button text="Reset"></Button>
        </div>
        <Button text="Home" onClick={() => navigate('/')}></Button>
      </div>
    </div>
  )
}

