import "./App.css";
// import image from "./assets/pexels-nate-949754.jpg";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  var x = "equal";

  return (
    <div className="App">
      <Demo para={x} />
      <Demo2 />
    </div>
  );
}

export default App;
