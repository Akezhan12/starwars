import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import People from './components/People'
import Planets from './components/Planets'
import './App.css'

function App() {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json')
      let data = await res.json()
      setPeople(data.results)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json')
      let data = await res.json()
      setPlanets(data.results)
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  return(
    <BrowserRouter>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/people">People</NavLink>
            </li>
            <li>
              <NavLink to="/planets">Planets</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact render={() => <h1>HOme PAge</h1>}/>
        <Route path="/people">
          <People data={people}/>
        </Route>
        <Route path="/planets">
          <Planets  data={planets}/>
        </Route>
    </BrowserRouter>

  )

}




export default App;
