import "./App.css"
import Header from "./Header";
import WMachine2 from "./WMachine2";
import machineData from "../localDatabase";

function App() {

  const machine = machineData.map((item) => {
    return (
      <WMachine2
        key={item.id}
        item={item}/>
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="machine-list">
        {machine}
      </section>
    </div>
  )
}

export default App;