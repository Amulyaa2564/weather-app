import { useState } from "react";
import axios from "axios";
function Weather(){
    const [city,setCity]=useState("")
    const [weather,setWeather]=useState(null)
    async function getWeather() {
        const apiKey="0b36e1cb371e491cb70105408262602"
        const response=await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        setWeather(response.data)
        console.log(response.data)

    }
    

    return(
        <div className="w-screen h-screen text-black flex justify-center items-center bg-blue-100">
            
            <div className="bg-white shadow-xl rounded-2xl p-6 w-96 text-center">

                <h1 className="text-2xl font-bold mb-4">
                    Weather App
                </h1>
                <div className="flex gap-2 mb-6">
                    <input 
                        type="text" 
                        placeholder="Enter City Name" value={city}
                        className="border border-gray-400 p-2 w-full rounded-lg outline-none"
                        onChange={(e)=>{
                            setCity(e.target.value)
                        }}
                    />
                    <button className="bg-blue-500 text-white px-4 rounded-lg " onClick={getWeather}>
                        Search
                    </button>
                </div>
                <h2 className="text-xl font-semibold">{weather?.location?.name}</h2>
                <h1 className="text-4xl font-bold my-2">{weather?.current?.temp_c}°C</h1>
                <p className="text-gray-600 mb-6">{weather?.current?.condition?.text}</p>
                <div className="grid grid-cols-2 gap-4">

                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">Humidity</p>
                        <p className="font-bold">{weather?.current?.humidity}%</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">Pressure</p>
                        <p className="font-bold">{weather?.current?.pressure_mb} hPa</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">Wind</p>
                        <p className="font-bold">{weather?.current?.wind_kph} kph</p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm">Feels Like</p>
                        <p className="font-bold">{weather?.current?.feelslike_c}°C</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Weather