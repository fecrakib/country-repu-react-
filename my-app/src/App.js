
import './App.css';
import Counties from './Compnents/Countries/Counties';


function App() {
  return (
    <div className="App">
  <Counties/>
    </div>
  );
}

// function LoadCountries(){
//  const [Countries,setCountry]=useState([])
//  useEffect(()=>{
//   fetch()
//   .then(res=>res.json())
//   .then(data=>setCountry(data))
//  },[])
//   return(
//     <div>
//       <h1>Visiting Every Country of the World!!</h1>
//       <h1>Available Countries :{Countries.length}</h1>
//       {
//         Countries.map((country)=>{
//         return <Coutnry name={country.name.common}/>
//         }
          
//        )
//       }
//     </div>
//   )
// }
// function Coutnry(props){
//  console.log(props)
//   return(
//     <div>
// <h2>Name:{props.name}</h2>
//     </div>
//   )
// }
export default App;
