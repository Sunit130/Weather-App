import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="wather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <div>
                    <p className="temprature">{Math.round(data.main.temp)}°C</p>
                </div>
                <div className="details">
                    <div className="parameter-row">
                        <div className="parameter-label">
                            Details
                        </div>
                    </div>
                    <div className="parameter-row">
                        <div className="parameter-label">Feels Like</div>
                        <div className="parameter-value">{Math.round(data.main.feels_like)}°C</div>
                    </div>
                    <div className="parameter-row">
                        <div className="parameter-label">Wind</div>
                        <div className="parameter-value">{data.wind.speed}m/s</div>
                    </div>
                    <div className="parameter-row">
                        <div className="parameter-label">Humidity</div>
                        <div className="parameter-value">{data.main.humidity}%</div>
                    </div>
                    <div className="parameter-row">
                        <div className="parameter-label">Pressure</div>
                        <div className="parameter-value">{data.main.pressure}hpa</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;