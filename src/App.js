import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar'
import React from 'react';
import ReactDOM  from 'react-dom';
import Card from './components/Card'
import data from "./components/data"

const cards=data.map(info=>{
  return <Card
  id={info.id}
  url={info.url}
  name={info.name}
  date={info.date}
  description={info.description}
  />
})


function App() {

  return (
    <div className="App">
      <NavBar/>
      <section className='section'>
        {cards}
      </section>
    </div>
  );
}



ReactDOM.render(<App/>,document.getElementById("root"))
export default App;