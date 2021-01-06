import logo from './logo.svg';
import './App.css';
import  React,{ useEffect , useState} from 'react';
import { Button } from '@material-ui/core';
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import { getMatches } from './api/api' ;
import { Grid } from '@material-ui/core';

function App() {
  const [ matches ,setMatches]=useState([]);

  useEffect(()=>{
    getMatches()
    .then((data)=>{

      setMatches(data.matches);

    })
    .catch();
  },[]);




  return (
    <div className="App">

    
    <Navbar/>
    <h1> Welcome to Live Score App</h1>
    
    <Grid container>
      <Grid sm="2"></Grid>
      <Grid sm="8">

          {
            matches.map((match)=>(
              <Mycard key={match.unique_id}match={match}/>
            ))
          }
      </Grid>
    </Grid>
    

     
    </div>
  );
}

export default App;
