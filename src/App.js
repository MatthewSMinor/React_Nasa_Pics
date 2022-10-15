import { useState, useEffect } from 'react';
import './App.css';
import Pic from './Pic';

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=your_api_key'

const App = () => {
  const [pics, setPics] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const loadPics = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json()
      .catch(e => console.log(e));

    // Loop through pics, if any pic explanation has the searchTerm then add it to the arr
    let arr = [];
    data.map(d => {
      if (d.explanation.includes(searchTerm))
        arr.push(d);
      });

    // Set the pics state to the array we just built
    setPics(arr)
  }

  useEffect(() => {
    loadPics()
  }, []);

  return (
    <>
      <div className='search'>
        <input
          placeholder='Search for something'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <button onClick={() => {loadPics()}}>Search</button>
      </div>

      <div className='container'>
        {
          pics?.length > 0 ? (
            pics.map((pic) => (
              <Pic pic={pic}/>
            ))
          ) : (
            <p2>No pics with that term</p2>
          )
        }
        
      </div>
    </>
  )
}

export default App;
