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

const App = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState<Forminterface>(inicialform)
  console.log(formState);


  //---------------------------------------------------------------------------------------
  return (
    <div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
      <div className="h-90 w-64 bg-[#6553b0] flex flex-col rounded-lg p-2">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-white text-4xl">Login</h1>
          <Textinput text="Nombre" type="text" placeholder="Introduce tu nombre" onChange={(e) => setFormState((prev) => ({...prev, name: e.target.value}))}></Textinput>
          <Textinput text="Contraseña" type="password" placeholder="Contraseña" onChange={(e) => setFormState((prev) => ({...prev, password: e.target.value}))}></Textinput>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Button text="Login"></Button>
          <Button text="Home" onClick={() => navigate('/')}></Button>
        </div>
        <div className='bg-[#7661c9] flex rounded-lg p-1'>
        <h1 className='text-white text-center'>¿No eres mienbro?</h1>
        <Button text="¡Registrate!" onClick={() => navigate('/registro')}></Button>
        </div>
      </div>
    </div>
  )
}
export default App