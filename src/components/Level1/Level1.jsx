import  { useState, useEffect } from 'react';
import "./index.css"
const Level1 = ({nextPage}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    attendingWithGuest: 'No',
    guestName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext=()=>{
    navigate("/level2")
  }

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Age must be a number greater than 0';
    if (formData.attendingWithGuest === 'Yes' && !formData.guestName) newErrors.guestName = 'Guest Name is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div>
          <label>Are you attending with a guest?</label>
          <select name="attendingWithGuest" value={formData.attendingWithGuest} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {formData.attendingWithGuest === 'Yes' && (
          <div>
            <label>Guest Name:</label>
            <input type="text" name="guestName" value={formData.guestName} onChange={handleChange} />
            {errors.guestName && <p className="error">{errors.guestName}</p>}
          </div>
        )}

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <button type="submit">Submit</button>
        {submitted && <button onClick={nextPage}>Next</button>}
        </div>
      </form>

      {submitted && (
        <div className="summary">
          <h2>Form Summary</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>Attending with Guest: {formData.attendingWithGuest}</p>
          {formData.attendingWithGuest === 'Yes' && <p>Guest Name: {formData.guestName}</p>}
        </div>
      )}
    </div>
  );
};

export default Level1;
