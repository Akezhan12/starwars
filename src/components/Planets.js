import React from 'react'
import classes from './Planets.module.css'

export default function Planets({data}) {
  return (
    <div className={classes.container}>
      <div className="card">
        <h1>Planets</h1>
          {data.map((planets, i) => {
            return(
              <div className={classes.cardItem} key={i}>
                 <h2>{planets.name}</h2>
                  <strong>Rotation_period</strong>
                  <p>{planets.rotation_period}</p>
                  <strong>Orbital_period</strong>
                  <p>{planets.orbital_period}</p>
                  <strong>Diameter</strong>
                  <p>{planets.diameter}</p>
                  <strong>Climate</strong>
                  <p>{planets.climate}</p>
                  <strong>Population</strong>
                  <p>{planets.population}</p>

              </div>
            )
          })}
      </div>


    </div>
  )
}
