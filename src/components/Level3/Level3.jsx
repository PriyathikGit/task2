import { useState, useEffect } from 'react';
import axios from 'axios';
import './Index.css';

const Level3 = ({handlePrev}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (formData.surveyTopic) {
      fetchAdditionalQuestions(formData.surveyTopic);
    }
  }, [formData.surveyTopic]);

  const fetchAdditionalQuestions = async (topic) => {
    try {
      const response = await axios.get(`https://api.example.com/survey/${topic}`);
      setAdditionalQuestions(response.data);
    } catch (error) {
      console.error('Error fetching additional questions', error);
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';
    
    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteLanguage) newErrors.favoriteLanguage = 'Favorite Programming Language is required';
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of Experience is required';
      else if (isNaN(formData.yearsOfExperience) || formData.yearsOfExperience <= 0) newErrors.yearsOfExperience = 'Years of Experience must be a number greater than 0';
    }

    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.dietPreference) newErrors.dietPreference = 'Diet Preference is required';
    }

    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
      if (!formData.fieldOfStudy) newErrors.fieldOfStudy = 'Field of Study is required';
    }

    if (!formData.feedback) newErrors.feedback = 'Feedback is required';
    else if (formData.feedback.length < 50) newErrors.feedback = 'Feedback must be at least 50 characters';

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
    <div className="container3">
      <h1>Survey Form</h1>
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
          <label>Survey Topic:</label>
          <select name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
            <option value="">Select a topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
        </div>

        {formData.surveyTopic === 'Technology' && (
          <div>
            <div>
              <label>Favorite Programming Language:</label>
              <select name="favoriteLanguage" value={formData.favoriteLanguage} onChange={handleChange}>
                <option value="">Select a language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteLanguage && <p className="error">{errors.favoriteLanguage}</p>}
            </div>

            <div>
              <label>Years of Experience:</label>
              <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
              {errors.yearsOfExperience && <p className="error">{errors.yearsOfExperience}</p>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div>
            <div>
              <label>Exercise Frequency:</label>
              <select name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && <p className="error">{errors.exerciseFrequency}</p>}
            </div>

            <div>
              <label>Diet Preference:</label>
              <select name="dietPreference" value={formData.dietPreference} onChange={handleChange}>
                <option value="">Select a diet</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference && <p className="error">{errors.dietPreference}</p>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div>
            <div>
              <label>Highest Qualification:</label>
              <select name="highestQualification" value={formData.highestQualification} onChange={handleChange}>
                <option value="">Select qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelors</option>
                <option value="Master's">Masters</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.highestQualification && <p className="error">{errors.highestQualification}</p>}
            </div>

            <div>
              <label>Field of Study:</label>
              <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
              {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
            </div>
          </div>
        )}

        <div>
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} />
          {errors.feedback && <p className="error">{errors.feedback}</p>}
        </div>

        <div style={{display:"flex",justifyContent:"space-between"}}>
        <button type="submit">Submit</button>
        <button onClick={handlePrev}>Prev</button>
        </div>
      </form>

      {submitted && (
        <div className="summary">
          <h2>Form Summary</h2>
          <p>Full Name: {formData.fullName}</p>
          <p>Email: {formData.email}</p>
          <p>Survey Topic: {formData.surveyTopic}</p>
          {formData.surveyTopic === 'Technology' && (
            <>
              <p>Favorite Programming Language: {formData.favoriteLanguage}</p>
              <p>Years of Experience: {formData.yearsOfExperience}</p>
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <p>Exercise Frequency: {formData.exerciseFrequency}</p>
              <p>Diet Preference: {formData.dietPreference}</p>
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <p>Highest Qualification: {formData.highestQualification}</p>
              <p>Field of Study: {formData.fieldOfStudy}</p>
            </>
          )}
          <p>Feedback: {formData.feedback}</p>

          {additionalQuestions.length > 0 && (
            <div>
              <h3>Additional Questions</h3>
              {additionalQuestions.map((question, index) => (
                <div key={index}>
                  <label>{question.question}</label>
                  <input type="text" name={`additionalQuestion_${index}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Level3;
