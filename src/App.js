import './App.css';
import React,{useEffect, useState} from 'react';
//import DataTable from 'react-data-table-component';


const API_HOST = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopSellingGamesbb1c49e.json";
const API_URL = `${API_HOST}/game-rank-api`;


function App() {
const [data,setData] = useState([]);

//GET response from API
const fetchData = () => {
  fetch(`${API_HOST}`)
  .then(res => res.json())
  .then(json => setData(json));
}

//Calling function on component mount
useEffect(()=>{
  fetchData();
},[]);

  return (
    <div className="App">
      <div class="container">
        <h1>Games Leader Board</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Platform</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Publisher</th>
              <th>Global Sales</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) =>(
                <tr key={item.id}>
                  <td>{item.Rank}</td>
                  <td>{item.Name}</td>
                  <td>{item.Platform}</td>
                  <td>{item.Year}</td>
                  <td>{item.Genre}</td>
                  <td>{item.Publisher}</td>
                  <td>{item.Global_Sales}</td>
                </tr>
              ))
            }
            
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default App;
