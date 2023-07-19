import { useNavigate } from 'react-router-dom';
import { Button } from '../../component/atom/button/Button.component';
import { Textinput } from "../../component/atom/input/Textinput.component";
import { useState } from 'react';

interface Converterinterface
{
    euros: string;
    dolares: string;
}

const inicialconverter: Converterinterface =
{
    euros: "",
    dolares: ""   
}

export const ConvertMoney = () => {

    const navigate = useNavigate();

const [convertState,SetConvertState] = useState<Converterinterface>(inicialconverter);
console.log(convertState);


const converteurotodolar = () =>
{
    SetConvertState(prev => ({...prev, dolares:( parseInt(prev.euros) * 1.1).toString()}))
}
//---------------------------------------------------------------------------------------   
return(
<div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
    <div className="h-90 w-96 bg-[#6553b0] flex flex-col rounded-lg p-5">
        <h1 className="text-white text-center text-2xl">Conversor de 💶 a 💵</h1>
        <Textinput text="Euros 💶" type="text" value={convertState.euros} onChange={(e) => SetConvertState((prev) => ({...prev, euros: e.target.value}))}></Textinput>
        <Textinput text="Dolares 💵" type="text" value={convertState.dolares} onChange={(e) => SetConvertState((prev) => ({...prev, dolares: e.target.value}))}></Textinput>
        <Button text="Convertir" onClick={converteurotodolar}></Button>
        <Button text="Home" onClick={() => navigate('/')}></Button>
    </div>
</div>
) 
}
