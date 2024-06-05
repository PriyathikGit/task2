import Form from "./components/Layout1/Form"
import Form2 from "./components/Layout2/Form2";
import Form3 from "./components/Layout3/Form3";
import Form4 from "./components/Layout4/Form4";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from "react"
function App() {
  const [currentStep, setCurrentStep] = useState(1);


  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form handleNext={handleNext}/> }/>
      <Route path="/page2" element={<Form2 handleNext={handleNext} handleBack={handleBack}/> }/>
      <Route path="/page3" element={<Form3 handleNext={handleNext} handleBack={handleBack}/> }/>
      <Route path="/page4" element={<Form4 handleBack={handleBack}/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
