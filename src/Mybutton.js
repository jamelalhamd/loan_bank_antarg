import { useState } from "react";

export default function MyInput({ title, initialValue }) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="myinput">{title}</label>
      <br/>  {/* Label for the input field */}
      <input
        onChange={handleChange}
        style={{ width: '90%', border: '2px solid blue', borderRadius: '5px'  ,textAlign: 'center' }}
        type="text"
        id="myinput"
        value={value}
      />
    </div>
  );
}
