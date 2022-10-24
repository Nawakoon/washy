import "./App.css"
import Header from "./Header";
import WMachine from "./WMachine";
import machineData from "../localDatabase";

function App() {

  const machine = machineData.map((item) => {
    return (
      <WMachine
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