import { Button } from '../../component/atom/Button/Button.component';
import { Textinput } from "../../component/atom/Input/Textinput.component";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Convertinterface
{
    celsius : string;
    fahrenheit: string;
}

const inicialconvert:Convertinterface =
{
    celsius: "",
    fahrenheit: ""
}

export const ConvertTemperature = () => {

const navigate = useNavigate();

const [convertState,SetConvertState] = useState<Convertinterface>(inicialconvert);
console.log(convertState);

const convertcelsiultofahrenheit = () =>
{
    SetConvertState(prev => ({...prev, fahrenheit:((parseInt(prev.celsius)*9/5) + 32).toFixed(2).toString()}))
}

    return(
        <div className="bg-[#27222c] h-screen w-screen flex items-center justify-center">
            <div className="h-90 w-96 bg-[#6553b0] flex flex-col rounded-lg p-5">
                <h1 className="text-white text-center text-xl">Conversor de 🌡️ Celsius a 🌡️ Fahrenheit</h1>
                <Textinput text="🌡️ Celsius" value={convertState.celsius} onChange={(e) => SetConvertState((prev) => ({...prev, celsius: e.target.value}))}></Textinput>
                <Textinput text="🌡️ Fahrenheit" value={convertState.fahrenheit} onChange={(e) => SetConvertState((prev) => ({...prev, fahrenheit: e.target.value}))}></Textinput>
                <Button text="CONVERTIR" onClick={convertcelsiultofahrenheit}></Button>
                <Button text="Home" onClick={() => navigate('/')}></Button>
            </div>
        </div>
    )    
}
