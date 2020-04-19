import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Showcountry=({newName,countries})=>{
  const Show = ({entry}) =>{
    return(
      <div>
        <h1>{entry.name}</h1>
        <p>Capital : {entry.capital} <br/>
        Population : {entry.population}</p>
        <h2>Languages</h2>
        <ul>
        {entry.languages.map(lang=><li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img src={entry.flag} width='300' height='200'/>
      </div>
    )
  }
  const result = countries.filter(cnt=>cnt.name.toLowerCase().includes(newName))
  if(result.length<9){
    if(result.length===1){
      return(
        <Show entry={result[0]} />
      )
    }
    else{
      return(
        <div>
          {result.map(res=><p key={res.name}>{res.name}</p>)}
        </div>
      )
    }
  }else{
    return(
      <p>Be specific</p>
    )
  }
  }


const App = () => {
  const [countries,setCountries] =useState([])
  const [ newName,setnewName ] = useState('')

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
      setCountries(response.data)
    })
  },[countries])

  const handleChange = (event) =>{
    setnewName(event.target.value)
  }
  const Finder = ()=>{
    
    return(
      <div>
        <form>
          <div>
            Find country : <input value={newName} onChange={handleChange} />
          </div>
        </form>
      </div>
    )
  }


  return(
    <div>
    {Finder()}
    <Showcountry newName={newName} countries={countries} />
    </div>
  )

}

export default App