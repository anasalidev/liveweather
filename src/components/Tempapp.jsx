import React, { useEffect, useState } from "react";
import "./css/style.css"
const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("lahore");

    useEffect(() => {
        const FetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=604407a2b916745385c5ba0c482f596e`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        FetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                    value={search}
                        className="inputFiled"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {!city ? (
                    <p className="error">Data not Found </p>
                ) : (
                    <>
                        <div className="info">
                            <h1 className="loction"><i className="fa-solid fa-street-view"></i> {search} </h1>
                            <h2 className="temp">{city.temp} °Cel</h2>
                            <h3 className="tempmin_max"> Min: {city.temp_min} °Cel  | Max : {city.temp_max} °Cel</h3>
                        </div>

                        <div className="wave -one" ></div>
                        <div className="wave -two" ></div>
                        <div className="wave -three" ></div>

                    </>
                )}
            </div>
            
        </>
    )
}
export default Tempapp;