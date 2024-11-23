import "./App.css";
import GarageImage from './src/Image/Garage.png'
 function App() {
  return(
    <div className="App">
      <div style={{
        width:"500px",
        height:"500px",
        backgroundImage: `url(${GarageImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",

      }}></div>
    </div>
  );
 }

 export default App;