import React,{useState,useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries,setCountries] =useState([])
  const [ newName,setnewName ] = useState('')

  useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>{
      setCountries(response.data)
    })
  },[])

  const handleChange = (event) =>{
    setnewName(event.target.value)
  }
  const Finder = ()=>{
    
    return(
      <div>
        <form>
          <div>
            Find country : <input value={newName} onChange={handleChange} key={'test'}/>
          </div>
        </form>
      </div>
    )
  }

  return(
    <div>
    <p>Meow</p>
    <Finder/>
    </div>
  )

}

export default App