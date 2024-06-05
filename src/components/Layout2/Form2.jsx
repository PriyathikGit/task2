
import "./index.css"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import {  useEffect, useState } from "react"

// type Inputs={
//     projectName : string
// }

const Form2 = ({ handleNext, handleBack }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const [formData,setFormData] = useState({
        projectRate:"",
        bill:"",
        budgetRate:""
    })
    const navigate = useNavigate()
    const [errors,setErrors] = useState({})

    useEffect(()=>{
        const data = localStorage.getItem('formData')
        if(data){
            setFormData(JSON.parse(data))
        }
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.projectRate) newErrors.projectRate = 'Project rate is required';
        if (!formData.bill) newErrors.bill = 'Bill is required';
        if (!formData.budgetRate) newErrors.budgetRate = 'BudgetRate is required';
        return newErrors;
    };

    const handleClick = (item) => {
        setSelectedItem(item === selectedItem ? null : item)
    }
    
   
    const handleNextClick = (e) => {
        e.preventDefault()
        const ValidationError = validate()
        if(Object.keys(ValidationError).length>0){
            setErrors(ValidationError)
        } else{
            setErrors({})
            localStorage.setItem('formData',JSON.stringify(formData))
            handleNext()
            navigate("/page3")
        }
       
    }
    const handleBackClick = () => {
        handleBack()
        navigate("/")
    }
    return (
        <div className="container">

            <div className="main-cntt">
                <svg className="cross11" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
                <h1 className="title">Project Type</h1>
                <span className="top-text">Dont panic -- You can also customise this type of settings</span>
                <div>
                    <form >
                        <div className="col1">
                            <span onClick={() => handleClick('Time & Materials')} 
                            // {...register("timeMaterial",{required:"one of it required"})}
                                style={{
                                    background: selectedItem === 'Time & Materials' ? "#6767e9" : "white",
                                    color: selectedItem === 'Time & Materials' ? "white" : "black"
                                }}
                            >Time & Materials</span>
                            <span
                                onClick={() => handleClick('Fixed Fee')}
                                // {...register("fixedFee",{required:"one of it required"})}
                                style={{
                                    background: selectedItem === 'Fixed Fee' ? "#6767e9" : "white",
                                    color: selectedItem === 'Fixed Fee' ? "white" : "black"
                                }}>Fixed Fee</span>
                            <span
                                onClick={() => handleClick('Non-billable')}
                                // {...register("nonBillable",{required:"one of it required"})}
                                style={{
                                    background: selectedItem === 'Non-billable' ? "#6767e9" : "white",
                                    color: selectedItem === 'Non-billable' ? "white" : "black"
                                }}>Non-billable</span>
                        </div>
                        <span className="txt">Hourly</span>
                        <span style={{ color: "gray", fontSize: "1.2rem" }}>We need hourly rates to track your projects billable amount</span>
                        <div className="row1">
                            <div className="form-data">
                                <select className="select" name="projectRate"
                                value={formData.projectRate}
                                onChange={handleChange}>
                                    <option value="">project hourly rate</option>
                                    <option value="test1" >test1</option>
                                    <option value="test2" >test2</option>
                                    <option value="test3">test3</option>
                                </select>
                                
                            {errors.projectRate && <span style={{color:"red"}}>{errors.projectRate}</span>}
                            </div>
                            <div >
                                <div className="form-data box">
                                    <div>
                                        <span>₹</span>
                                        <input className="currency" type="number" name="bill"
                                        onChange={handleChange} value={formData.bill}
                                        id=""
                                           
                                            placeholder="12,678.00" />
                                    </div>
                                </div>
                                    {errors.bill && <span style={{color:"red"}}>{errors.bill}</span>}
                                
                            </div>

                        </div>
                        <span className="txt">Budget</span>
                        <span style={{ color: "gray", fontSize: "1.2rem" }}>We need hourly rates to track your projects billable amount</span>
                        <select className="select"
                           onChange={handleChange}
                           value={formData.budgetRate}
                            name="budgetRate" id="">
                            <option value="">hourly per person</option>
                            <option value="budget1">1000</option>
                            <option value="budget2">2000</option>
                            <option value="budget3">3000</option>
                        </select>
                        {errors.budgetRate && <span style={{color:"red"}}>{errors.budgetRate}</span>}
                        <div className="check-box">
                            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "6px" }}>
                                <input type="checkbox" id="box1" name="box1"
                                    
                                />
                                <label htmlFor="box1" style={{ color: "gray" }}>Budget resets every month</label></div>

                            <div className="mx-2">
                                <input type="checkbox" name="box2" id="box2"
                                   
                                />

                                <label htmlFor="box2"><span>Send email alerts exceed</span><input type="number" className="bx-1" placeholder="80.00" /> <span>% of budget</span></label>
                            </div>
                        </div>
                        <div className="btn-row">
                            <button onClick={handleBackClick} className="prev"><span><svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#c2c2c2"></path></g></svg></span>Back</button>
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

Form2.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired
}

export default Form2