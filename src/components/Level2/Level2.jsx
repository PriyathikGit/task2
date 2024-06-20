import { useState } from 'react';
import './index.css';

const Level2 = ({nextPage,handlePrev}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (formData.position === 'Developer' || formData.position === 'Designer') {
      if (!formData.relevantExperience) newErrors.relevantExperience = 'Relevant Experience is required';
      else if (isNaN(formData.relevantExperience) || formData.relevantExperience <= 0) newErrors.relevantExperience = 'Relevant Experience must be a number greater than 0';
    }
    if (formData.position === 'Designer' && !formData.portfolioURL) newErrors.portfolioURL = 'Portfolio URL is required';
    if (formData.position === 'Designer' && formData.portfolioURL && !/^https?:\/\/.*\..*/i.test(formData.portfolioURL)) newErrors.portfolioURL = 'Portfolio URL is invalid';
    if (formData.position === 'Manager' && !formData.managementExperience) newErrors.managementExperience = 'Management Experience is required';
    if (formData.additionalSkills.length === 0) newErrors.additionalSkills = 'At least one skill must be selected';
    if (!formData.interviewTime) newErrors.interviewTime = 'Preferred Interview Time is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        additionalSkills: checked
          ? [...prevFormData.additionalSkills, value]
          : prevFormData.additionalSkills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      
    }
  };
  return (
    <div className="container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label>Applying for Position:</label>
          <select name="position" value={formData.position} onChange={handleChange}>
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {(formData.position === 'Developer' || formData.position === 'Designer') && (
          <div>
            <label>Relevant Experience (years):</label>
            <input type="number" name="relevantExperience" value={formData.relevantExperience} onChange={handleChange} />
            {errors.relevantExperience && <p className="error">{errors.relevantExperience}</p>}
          </div>
        )}

        {formData.position === 'Designer' && (
          <div>
            <label>Portfolio URL:</label>
            <input type="text" name="portfolioURL" value={formData.portfolioURL} onChange={handleChange} />
            {errors.portfolioURL && <p className="error">{errors.portfolioURL}</p>}
          </div>
        )}

        {formData.position === 'Manager' && (
          <div>
            <label>Management Experience:</label>
            <input type="text" name="managementExperience" value={formData.managementExperience} onChange={handleChange} />
            {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
          </div>
        )}

        <div>
          <label>Additional Skills:</label>
          <div className='box'>
            <label>
              <input type="checkbox" name="additionalSkills" value="JavaScript" onChange={handleChange} />
              JavaScript
            </label>
            <label>
              <input type="checkbox" name="additionalSkills" value="CSS" onChange={handleChange} />
              CSS
            </label>
            <label>
              <input type="checkbox" name="additionalSkills" value="Python" onChange={handleChange} />
              Python
            </label>
            {/* Add more skills as needed */}
          </div>
          {errors.additionalSkills && <p className="error">{errors.additionalSkills}</p>}
        </div>

        <div>
          <label>Preferred Interview Time:</label>
          <input type="datetime-local" name="interviewTime" value={formData.interviewTime} onChange={handleChange} />
          {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
        </div>

        <div style={{display:"flex",justifyContent:"space-around"}}>
        <button type="submit">Submit</button>
        {submitted &&<button onClick={nextPage}>Next</button>
        }
        <button onClick={handlePrev}>prev</button>
        </div>
      </form>

      {submitted && (
        <div className="summary">
          <h2>Form Summary</h2>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Applying for Position: {formData.position}</p>
          {(formData.position === 'Developer' || formData.position === 'Designer') && <p>Relevant Experience: {formData.relevantExperience} years</p>}
          {formData.position === 'Designer' && <p>Portfolio URL: {formData.portfolioURL}</p>}
          {formData.position === 'Manager' && <p>Management Experience: {formData.managementExperience}</p>}
          <p>Additional Skills: {formData.additionalSkills.join(', ')}</p>
          <p>Preferred Interview Time: {formData.interviewTime}</p>
        </div>
      )}
    </div>
  );
};

export default Level2;
