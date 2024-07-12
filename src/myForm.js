import { useState } from "react";

export default function LoanForm() {
  const initialInputValue = {
    name: "",
    phone: "",
    age: "",
    student: false,
    salary: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitParams = {
      name: inputValue.name,
      phone: inputValue.phone,
      age: inputValue.age,
      student: inputValue.student,
      salary: inputValue.salary,
    };

    if (!submitParams.name) {
      alert("Please write a name");
    } else if (!submitParams.age) {
      alert("Please write the age");
    } else if (submitParams.age < 18 || submitParams.age > 70) {
      alert("Please provide an age between 18 and 70");
    } else if (!submitParams.phone) {
      alert("Please write the phone");
    } else if (submitParams.phone.length < 5 || submitParams.phone.length > 12) {
      alert("Please write a correct number");
    } else {
      alert("Form submitted successfully");
      console.log("Form submitted successfully:", submitParams);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#180F38'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#2504E0",
        width: "50%",
        borderRadius: "8px",
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>Requesting a Loan</h1>
        <hr />
        <div>
          <label htmlFor="name">Name :</label>
          <br />
          <input
            value={inputValue.name}
            style={{ width: '90%', border: '2px solid blue', borderRadius: '5px', textAlign: 'center' }}
            type="text"
            id="name"
            onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number :</label>
          <br />
          <input
            value={inputValue.phone}
            style={{ width: '90%', border: '2px solid blue', borderRadius: '5px', textAlign: 'center' }}
            type="text"
            id="phone"
            onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age">Age :</label>
          <br />
          <input
            value={inputValue.age}
            style={{ width: '90%', border: '2px solid blue', borderRadius: '5px', textAlign: 'center' }}
            type="number"
            id="age"
            onChange={(e) => setInputValue({ ...inputValue, age: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>Are you a Student?</label>
          <br />
          <input
            style={{ width: '30px', height: '30px' }}
            type="checkbox"
            checked={inputValue.student}
            onChange={(e) => setInputValue({ ...inputValue, student: e.target.checked })}
          />
        </div>
        <br />
        <div>
          <label>Salary</label>
          <br />
          <select
            value={inputValue.salary}
            onChange={(e) => setInputValue({ ...inputValue, salary: e.target.value })}
            style={{ width: '90%', border: '2px solid blue', borderRadius: '5px', textAlign: 'center' }}
          >
            <option value="">Select your salary range</option>
            <option value="less 1000$">less 1000$</option>
            <option value="1000$-1500$">1000$-1500$</option>
            <option value="1500$-2500$">1500$-2500$</option>
            <option value="3000$-3500$">3000$-3500$</option>
            <option value="3500$-6000$">3500$-6000$</option>
            <option value="more than 6000$">more than 6000$</option>
          </select>
        </div>
        <br />
        <button style={{ backgroundColor: '#EE0968', color: 'white' }} type="submit">Submit</button>
      </form>
    </div>
  );
}
