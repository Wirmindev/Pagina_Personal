import { useEffect, useState } from 'react';
import { Textinput } from '../../component/atom/Input/Textinput.component';
import { Button } from '../../component/atom/Button/Button.component';
import { useNavigate } from 'react-router-dom';


export interface Weather {
    location: Location;
    current: Current;
    forecast: Forecast;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: WindDir;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface Condition {
    text: Text;
    icon: Icon;
    code: number;
}

export enum Icon {
    CDNWeatherapiCOMWeather64X64Day113PNG = "//cdn.weatherapi.com/weather/64x64/day/113.png",
    CDNWeatherapiCOMWeather64X64Day116PNG = "//cdn.weatherapi.com/weather/64x64/day/116.png",
    CDNWeatherapiCOMWeather64X64Day119PNG = "//cdn.weatherapi.com/weather/64x64/day/119.png",
    CDNWeatherapiCOMWeather64X64Night113PNG = "//cdn.weatherapi.com/weather/64x64/night/113.png",
    CDNWeatherapiCOMWeather64X64Night116PNG = "//cdn.weatherapi.com/weather/64x64/night/116.png",
}

export enum Text {
    Clear = "Clear",
    Cloudy = "Cloudy",
    PartlyCloudy = "Partly cloudy",
    Sunny = "Sunny",
}

export enum WindDir {
    Nnw = "NNW",
    Nw = "NW",
    Sw = "SW",
    W = "W",
    Wnw = "WNW",
    Wsw = "WSW",
}

export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date: string;
    date_epoch: number;
    day: Day;
    astro: Astro;
    hour: Hour[];
}

export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: string;
    is_moon_up: number;
    is_sun_up: number;
}

export interface Day {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: Condition;
    uv: number;
}

export interface Hour {
    time_epoch: number;
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: WindDir;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    gust_kph: number;
    uv: number;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export const Clima = () => {

    const navigate = useNavigate();

    const [weather, setWeather] = useState<Weather | null>(null);
    const [ubicacion, setUbicacion] = useState<string>('Caceres');

    const peticion = async () => {
        try {
            const respuesta = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef2de1c94f924205b8d82654231307&q=${ubicacion}&days=5&aqi=no&alerts=no`);
            const data = await respuesta.json();
            setWeather(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        (async () => {
            await peticion();
        })();
    }, []);


    const iconotemp = () => {

        if (!!weather && weather?.current.temp_c < 10) {
            return ('❄️')
        }

        if (!!weather && weather?.current.temp_c > 30) {
            return ('🔥')
        }

        else {
            return ('🌡️')
        }
    }

    return (
        <div className='w-screen h-screen bg-[#27222c] flex items-center justify-center'>
            <div className='h-90 w-90 bg-[#6553b0] flex flex-col rounded-lg p-12 m-5'>
                <div className='flex fex-row'>
                    <h1 className='text-white m-2'>Ubicación: {weather?.location.name}</h1>
                    <h1 className=' text-orange-200 m-2'>{weather?.location.country}</h1>
                    <img className='w-20' src={weather?.current.condition.icon}></img>
                </div>
                <h1 className=' text-white text-center text-6xl m-3'>{weather?.current.temp_c.toFixed(0)} Cº {iconotemp()}</h1>
                <h1 className="text-white m-2 text-center"> Humedad: {weather?.current.humidity}</h1>
                <div className='flex flex-row'>
                    {weather?.forecast.forecastday.map(date => (
                        <div className='bg-[#ea66a1] m-2 p-2 rounded-lg text-center'>
                        <div className='flex items-center justify-center'>
                            <img src={date.day.condition.icon}></img>
                        </div>
                            <div className='flex'>
                                <h1 className='text-white m-1 '>Max {date.day.maxtemp_c}ºC</h1>
                                <h1 className='text-white m-1'>Min {date.day.mintemp_c}ºC</h1>
                                <h1 className='text-white m-1'>Media {date.day.avgtemp_c}ºC</h1>
                            </div>
                            <h1 className='text-white'>{date.date}</h1>
                        </div>
                    ))}
                </div>
                <Textinput text='Ubicación' type='text' placeholder='Buscar Ubicación' onChange={(e) => setUbicacion(e.target.value)}></Textinput>
                <Button text='Ir a ubicación' onClick={peticion}></Button>
                <Button text='Home' onClick={() => navigate('/')}></Button>
            </div>
        </div>
    )
}

