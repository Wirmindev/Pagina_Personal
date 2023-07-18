import { useState } from 'react'
import { Button } from "./component/atom/button/Button.component"
import { Textinput } from "./component/atom/input/Textinput.component"
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

const App = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState<Forminterface>(inicialform)
  console.log(formState);

  //Contador, con los botones +1, -1.
  const inicialcontador = 0;
  const [contador,setcontador] = useState<number>(inicialcontador);
  
  const sumarcontador = () =>
  {
      setcontador (contador+1); 
  }

  const restarcontador = () =>
  {
      setcontador (contador-1); 
  }

  //---------------------------------------------------------------------------------------
  return (
    <div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
      <div className="h-90 w-5/6 bg-[#6553b0] flex flex-col rounded-lg p-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white text-4xl">Inicio de sesión</h1>
          <h1 className="text-center text-white text-2xl">Contador: {contador}</h1>
          <Textinput text="Nombre" type="text" placeholder="Introduce tu nombre" onChange={(e) => setFormState((prev) => ({...prev, name: e.target.value}))}></Textinput>
          <Textinput text="Apellidos" type="text" placeholder="Introduce tus apellidos" onChange={(e) => setFormState((prev) => ({...prev, surname: e.target.value}))}></Textinput>
          <Textinput text="E-mail" type="email" placeholder=" example@example.com" onChange={(e) => setFormState((prev) => ({...prev, email: e.target.value}))}></Textinput>
          <Textinput text="Contraseña" type="password" placeholder="Contraseña" onChange={(e) => setFormState((prev) => ({...prev, password: e.target.value}))}></Textinput>
          <Textinput text="Verificar Contraseña" type="password" placeholder="Verifica Contraseña" onChange={(e) => setFormState((prev) => ({...prev, vpassworld: e.target.value}))}></Textinput>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Button text="Aplicar"></Button>
          <Button text="Reset"></Button>
          <Button text="+1" onClick={sumarcontador}></Button>
          <Button text="-1" onClick={restarcontador}></Button>
        </div>
        <Button text="Home" onClick={() => navigate('/')}></Button>
      </div>
    </div>
  )
}
export default App
