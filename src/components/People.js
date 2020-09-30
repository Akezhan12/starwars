import React from 'react'
import classes from './People.module.css'

export default function People({data}) {
  return (
    <div className={classes.container}>
      <div className="card">
        <h1>Planets</h1>
          {data.map((people, i) => {
            return(
              <div className={classes.cardItem} key={i}>
                <h2>{people.name}</h2>
                  <strong>Height</strong>
                  <p>{people.height}</p>
                  <strong>Mass</strong>
                  <p>{people.mass}</p>
                  <strong>Hair color</strong>
                  <p>{people.hair_color}</p>
                  <strong>Gender</strong>
                  <p>{people.gender}</p>
              </div>
            )
          })}
      </div>
  </div>
  )
}
