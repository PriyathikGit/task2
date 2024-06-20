import Level1 from "./components/Level1/Level1"
import Level2 from "./components/Level2/Level2"
import Level3 from "./components/Level3/Level3"
import { useState } from "react"

function App() {
      const [page,setPage] = useState(1)
      const nextPage = () => {
        setPage(prevPage => prevPage + 1);
      };

      const handlePrev=()=>{
        console.log("clicked");
        setPage(prevPage => prevPage - 1);
      }
    
      const renderPage = () => {
        switch(page) {
          case 1:
            return <Level1 nextPage={nextPage} />;
          case 2:
            return <Level2 nextPage={nextPage} handlePrev={handlePrev}/>;
          case 3:
            return <Level3 handlePrev={handlePrev} />;
          default:
            return <Level1 nextPage={nextPage} />;
        }
      };
  return (
    <>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000b76" fillOpacity="1" d="M0,192L18.5,170.7C36.9,149,74,107,111,101.3C147.7,96,185,128,222,160C258.5,192,295,224,332,240C369.2,256,406,256,443,234.7C480,213,517,171,554,181.3C590.8,192,628,256,665,250.7C701.5,245,738,171,775,144C812.3,117,849,139,886,133.3C923.1,128,960,96,997,80C1033.8,64,1071,64,1108,85.3C1144.6,107,1182,149,1218,181.3C1255.4,213,1292,235,1329,234.7C1366.2,235,1403,213,1422,202.7L1440,192L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
        </svg>
      </header>
        <main>
          {renderPage()}
        </main>

    </>
  )
}

export default App
