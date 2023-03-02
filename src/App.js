import './App.css';
import Home from './Component/Home/Home';

function App() {

  // var cursor = document.querySelector(".cursor");
  // var cursor2 = document.querySelector(".cursor2");
  // document.addEventListener("mousemove", function(e){
  //   cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  // })
  
  return (
    <div className='App'>
        <Home />
        
        {/* <div className="cursor"></div>
        <div className="cursor2" ></div> */}
    </div>
  );
}

export default App;
