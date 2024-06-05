
import "./index.css"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import { useState } from "react"

// type Inputs={
//     projectName : string
// }

const Form3 = ({ handleNext, handleBack }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const navigate = useNavigate()

    const handleClick = (item) => {
        setSelectedItem(item == selectedItem ? null : item)
        console.log("hello",item)
    }
    const handleNextClick = () => {
        handleNext()
        navigate("/page4")
    }
    const handleBackClick = () => {
        handleBack()
        navigate("/page2")
    }
    return (
        <div className="container3">

            <div className="main-cnttt">
                <svg className="cross" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
                <span className="text-1">Select a view</span>
                <div>
                    <span className="topText">You can also customise this view in setting</span>
                    <div className="row-cnt">
                        <div >
                            <div className="box1" onClick={() => handleClick("List")} style={{ borderColor: selectedItem === "List" ? "blue" : "grey",borderWidth:"2px",borderStyle:"solid" }}>
                                <img src={img1} alt="" />
                            </div>
                            <span className="center-txt">List</span>
                        </div>
                        <div >
                            <div className="box2" onClick={() => handleClick('Board')} style={{ borderColor: selectedItem === 'Board' ? "blue" : "grey",borderWidth:"2px",borderStyle:"solid" }}>
                                <img src={img2} alt="" />
                            </div>
                            <span className="center-txt">Board</span>
                        </div>
                    </div>
                    <div className="btn-row">
                        <button onClick={handleBackClick} className="prev"><span><svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#c2c2c2"></path></g></svg></span>Back</button>
                        <button onClick={handleNextClick}>Next</button>
                    </div>
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
Form3.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired
}
export default Form3