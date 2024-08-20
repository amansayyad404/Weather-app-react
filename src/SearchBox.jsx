import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city, setCity] =useState("")
    let [error,setErr]=useState(false)
    const api_URL="https://api.openweathermap.org/data/2.5/weather"
    const api_KEY="74a27fc8d249d8cac87f30e39d33c418"

    let getWeatherInfo= async ()=>{
        try{
            let responce= await fetch(`${api_URL}?q=${city}&appid=${api_KEY}&units=metric`)
       let jsonResponce =await responce.json();
       console.log(jsonResponce);

       let result ={
            city:city,
            temp : jsonResponce.main.temp,
            tempMin :jsonResponce.main.temp_min,
            tempMax :jsonResponce.main.temp_max,
            humidity:jsonResponce.main.humidity,
            feelsLike:jsonResponce.main.feels_like,
            weather :jsonResponce.weather[0].description,

       }
       console.log(result);
       return result
        }catch(err){
            throw err;
        }
       
    }

    let handelChange= (evt)=>{
        setCity(evt.target.value);
    }

    let handelSubmit = async(evt)=>{
        try{
            evt.preventDefault();
        console.log(city);
        setCity("");
      let newinfo= await getWeatherInfo();
      updateInfo(newinfo)
        }
        catch(err){
            setErr(true);
        }
        
    }
    return(<div className='SearchBox'>
        <form onSubmit={handelSubmit} >
            <br />
        <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handelChange}/>
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{color:"red"}}> no such Place exist!</p>}
        </form>
    </div>)
}