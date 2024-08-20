import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./infoBox.css";
export default function InfoBox({info}){
    const INITAL_URL="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    const HOT_URL="https://images.unsplash.com/photo-1561484930-682c8752c88d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1507181380775-16c084b6c9d1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfroBox">
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity >80 ? RAIN_URL : info.temp>15 ? HOT_URL :COLD_URL}
          alt="weather-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <b>{info.city}</b> 
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <p> Temperature = {info.temp}&deg;C</p>
           <p> Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}</p>
           <p>Max Temp = {info.tempMax}</p>
           <p>The Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}