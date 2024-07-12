import { useState } from "react"

export default function Myselection({title})
{

    const [value,setvalue]=useState(null);
    const handleChange=(e)=>setvalue(e.target.value);
 return <div>
    <h5>{title}</h5>
  <    select value={value} onChange={handleChange}>
         <option>less 1000$</option>
         <option>1000$-1500$</option>
         <option>1500$-2500$</option>
         <option>3000$-3500$</option>
         <option>3500$-6000$</option>
         <option>more than 6000$</option>
      
    
    
    
     </select>
 </div>



}