import './App.css';
import React , {useState,useEffect} from 'react';

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}${process.env.REACT_APP_API}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => console.error(err));
  },[])

  return (
    <div className="App">
      <h1><span>NASA's</span> picture of the day</h1>
      <div className='container'>
      <h2>{data.title}</h2>
      <div className='image'>
        <img src = {data.hdurl} alt = {data.title}></img>
      </div>
      <p>{data.explanation}</p>
    </div>
    </div>
  );
}

export default App;
