import React from 'react'
import {useEffect } from 'react'

function Weather() {

    let [celsius , setCelsius] = useState([])
    let [city , setCity] = useState([])



    let Api_key = "25b730979140eaab56c1a8860116b811"

    useEffect(()=>{

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}` , {
            method:"GET"
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            set
        })
    })

  return (
    <>
       <input type="text" city="cityname" placeholder="Enter city name"></input>
    </>
  )
}

export default Weather