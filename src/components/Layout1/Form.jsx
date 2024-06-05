
import "./index.css"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useState,useEffect } from "react"

// type Inputs={
//     projectName : string
// }

const Form = ({ handleNext }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        projectName: '',
        client: '',
        startDate: '',
        endDate: '',
        notes: '',
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData')
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData))
        }
    }, [])
    

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!formData.projectName) newErrors.projectName = 'Project Name is required';
        if (!formData.client) newErrors.client = 'Client is required';
        if (!formData.startDate) newErrors.startDate = 'Start Date is required';
        if (!formData.endDate) newErrors.endDate = 'End Date is required';
        return newErrors;
    };

    const handleNextClick = (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            
        }
        else {
            setErrors({});
            localStorage.setItem('formData', JSON.stringify(formData));
            handleNext();
            navigate('/page2');
        }
    }



    return (
        <div className="container">

            <div className="main-cnt">
                <svg className="cross" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
                <h1>Create a Project</h1>
                <div>
                    <form >
                        <span className="txtt">Project Name</span>
                        <input type="text"
                            className="field1"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                        />
                        {errors.projectName && <span style={{color:"red"}}>{errors.projectName}</span>}
                        <span className="txtt">Client</span>
                        <div className="row1">
                            <select name="client"
                                value={formData.client}
                                onChange={handleChange}
                            >
                                <option value="">select a name</option>
                                <option value="test">test1</option>
                                <option value="test2">test2</option>
                                <option value="test3">test3</option>
                            </select>
                            <span>or</span>
                            <div className="borderDiv"><span>+</span> New Client</div>
                        </div>
                        {errors.client && <span style={{ color: "red" }}>{errors.client}</span>}
                        <span className="txtt">Dates</span>
                        <div className="row2">
                            <div><svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                            <input type="date" name="startDate" 
                            value={formData.startDate} 
                            onChange={handleChange} 
                             />
                            </div>
                            <span>-</span>
                            <div><svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path></g></svg>
                            <input type="date" 
                             name="endDate"
                             value={formData.endDate}
                             onChange={handleChange}
                            />
                            
                            </div>
                        </div>
                        {errors.startDate && <span style={{ color: "red" }}>{errors.startDate}</span>}
                        {errors.endDate && <span style={{ color: "red" }}>{errors.endDate}</span>}
                        <div className="row3">
                            <span className="txtt">Notes</span>
                            <textarea type="text" name="notes" 
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="optional" rows={4} cols={60}>

                            </textarea>
                        </div>
                        <div className="btn-row">
                            <button disabled={true} className="prev"><span><svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#c2c2c2"></path></g></svg></span>Back</button>
                            <button onClick={handleNextClick}>Next</button>
                        </div>
                    </form>
                </div>
                <div className="tracker">
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                </div>
            </div>

        </div>
    )
}
Form.propTypes = {
    handleNext: PropTypes.func.isRequired
}
export default Form

