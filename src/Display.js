import { useEffect, useState } from "react";

const Display = (props)=>{
    const days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const [date,setDate]= useState();
    const [mnth,setMnth] = useState();
    const [day,setDay] = useState();
    useEffect(()=>{
        let dt = new Date();
        setDate(dt.getDate());
        setMnth(dt.getMonth());
        setDay(dt.getDay());
    },[])
    const times = (unix) => {
        let dt = new Date(unix * 1000);
        let hrs = dt.getHours();
        let mins = dt.getMinutes();
        return hrs+":"+mins;
    }
    return(
        <div>
            <div className="place">
                <h1>{props.obj.name}, {props.obj.sys.country}</h1>
                <h2>{days[Number(day)]}, {date} {months[Number(mnth)]}</h2>
            </div>
            <div className="content">
                <div className='temp'><h1>{props.obj.main.temp}&#176;</h1></div>
                <div className="grid">
                    <div className="cards">
                        <h3>{props.obj.main.temp_max}&#176;</h3>
                        <p>High</p>
                    </div>
                    <div className="cards">
                        <h3>{props.obj.wind.speed}mph</h3>
                        <p>Wind</p>
                    </div>
                    <div className="cards">
                        <h3>{times(props.obj.sys.sunrise)}</h3>
                        <p>Sunrise</p>
                    </div>
                    <div className="cards">
                        <h3>{props.obj.main.temp_min}&#176;</h3>
                        <p>Low</p>
                    </div>
                    <div className="cards">
                        <h3>{props.obj.main.humidity}&#37;</h3>
                        <p>Rain</p>
                    </div>
                    <div className="cards">
                        <h3>{times(props.obj.sys.sunset)}</h3>
                        <p>Sunset</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Display;