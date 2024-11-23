import  './App.css';
import Appoinments from './pages/Appoinments';
import Home from './pages/Home';
import AbboutUs from './pages/AbboutUs';
import Nav from './pages/Nav';








const App = () => {

 
 
  

  return (

  
     
    <>
    <div className="relative bg-primaryColor text-light Text">
      <AbboutUs/>
      <Appoinments/>
      <Home/>
      <Nav/>

    </div>

    <div>
      <h1 className="text-xl text-red-500 ">
        Function App
      </h1>
    </div>
    

  
   
   


    
    <div className="bg-slate-900">

      <Nav/>

      
    
    

   </div>
    </>
  );
};

export default App;

