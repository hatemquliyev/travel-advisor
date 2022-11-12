import './App.css'
import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'

function App() {

  return (
    <div className="App">
      <Header/>
      <>
        <div className="row">
          <div className="col-lg-5">
            <List/>
          </div>
          <div className="col-lg-7">
            <Map/>
          </div>
        </div>
      </>
    </div>
  )
}

export default App
