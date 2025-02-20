import './App.css'
import User from './User'

function App() {
  const age =15;
  const isGreen = false;
  const names = ["John", "Paul", "George", "Ringo"];
  const users = [
    {name: "John", age: 20},
    {name: "Paul", age: 30},
    {name: "George", age: 40},
    {name: "Ringo", age: 50}
  ];
  const planets = [
    {name: "Earth" ,isGasPlanet: true},
    {name: "Mars" ,isGasPlanet: false},
    {name: "Jupiter" ,isGasPlanet: true},
    {name: "Saturn" ,isGasPlanet: true},
    {name: "Uranus" ,isGasPlanet: true},
    {name: "Neptune" ,isGasPlanet: true},
    {name: "Pluto" ,isGasPlanet: false},
    {name: "Mercury" ,isGasPlanet: false},
  ];

    return (
      <>
        <div className='app'>{age>=18 ? <h1 className='name'>Over Age</h1> : <h1 className='name'>Under Age</h1>}</div>
        <h1 style={{color: isGreen ? "green" : "red"}}>This is color</h1>

        {
          isGreen && <button>Click me!</button>
        }
        <div className="app">
          {names.map((name,key) => {
            return <h1 key={key}>{name}</h1>;
          })}
        </div>
        <div>
          {users.map((user,key) => {
            return (
              <User name={user.name} age={user.age}/>
            )
          })}
        </div>
        <br />
        <br />
        <div>
          {planets.map((planet,key) => {
            return (
                !planet.isGasPlanet && <h1> {planet.name}</h1>
            )
          })}
        </div>
      </>
    )
}

export default App
