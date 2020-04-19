import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Showcountry=({newName,countries})=>{
  const result = countries.filter(cnt=>cnt.name.toLowerCase().includes(newName))
  if(result.length<9){
    if(result.length===1){
      return(
        <div>
          <h1>{result[0].name}</h1>
          <p>Capital : {result[0].capital} <br/>
          Population : {result[0].population}</p>
          <h2>Languages</h2>
          <ul>
          {result[0].languages.map(lang=><li>{lang.name}</li>)}
          </ul>
          <img src={result[0].flag} width='300' height='200'/>
        </div>
      )
    }
    else{
      return(
        <div>
          {result.map(res=><p>{res.name}</p>)}
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