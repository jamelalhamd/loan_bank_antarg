import { useState } from "react"

export default function Mycheckbox({title})
{
  const[checked,setchecked]=useState(false);
return <div>
 <label> {title} </label>
<br />
<input style={{width:'30px', height:'30px'}} type="checkbox" name="title" checked={checked} onChange={(e) =>{setchecked(e.target.checked) }}/>
</div>



}