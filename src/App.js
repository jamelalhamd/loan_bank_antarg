
import './App.css';
import Modal from './Modal';
import Myform from './myForm';

function App() {
  return (
    <div className="App" style={{  backgroundColor: 'red',}}>
   
<div style={{display:'flex' 
  ,justifyContent:"center" 
  ,alignItems:"center",

   borderRadius:"10px" ,border:'5px blue solid',
   marginBottom:"auto",marginTop:"auto"}}>
   <Myform/>
   <Modal/>
   </div>


    </div>
  );
}

export default App;
