import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div className="card--image">
            <img className='card-image' src={props.imageUrl} alt={props.title}/> 
        </div>
        <div className="card--info">
            <div className="card--location">
                <img src="./images/pin-icon.png" alt="" className="card--location-icon" width="7px"/>
                <span className='card--location-location'>{props.location}</span>
                <a className="card--location-url" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className='card-title'>{props.title}</h2>
            <span className='card-date'>{props.startDate + " - " + props.endDate}</span>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
  )
}
