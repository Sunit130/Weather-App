import "./forecast.css"
function AccordionItem({ dayOfWeek, imageSrc, description, minMax, children }) {
    return (
        <details className="accordion-item">
            <summary className="accordion-header">
                <img src={imageSrc} alt={dayOfWeek} className="accordion-header-image" />
                <span className="accordion-header-text">{dayOfWeek}</span>
                <span className="description">{description}</span>
                <span className="min-max">{minMax}</span>
            </summary>
            <div className="accordion-content">
                {children}
            </div>
        </details>
    );
}

const WEEKDAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]


const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEKDAYS.slice(dayInWeek, WEEKDAYS.length).concat(WEEKDAYS.slice(0, dayInWeek));
    return (
        <>
            <label className="title">Daily</label>
            <div>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem
                        dayOfWeek={forecastDays[index]}
                        imageSrc={`icons/${item.weather[0].icon}.png`}
                        description={item.weather[0].description}
                        minMax={`${Math.round(item.main.temp_min)}°C/${Math.round(item.main.temp_max)}°C`}
                    >
                        <div className="daily-details-grid">
                            <div className="daily-details-item">
                                <label>Presure</label>
                                <label>{item.main.pressure}hPa</label>
                            </div>
                            <div className="daily-details-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity}</label>
                            </div>
                            <div className="daily-details-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="daily-details-item">
                                <label>Wind Speed</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="daily-details-item">
                                <label>Sea Level</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className="daily-details-item">
                                <label>Feels Like</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                        </div>
                    </AccordionItem>
                ))}
            </div>

        </>
    );
}

export default Forecast;