import Jsx, { Greet } from "./containers/Jsx";
import DataBinding from './containers/Databinding'
import Users from './containers/Users'
function App() {
  return (
    <div>
      {/*
            <Jsx />   
            {
                Greet()
            }
      */}
      <DataBinding/>   
      <Users />
    </div>
  )
}

export default App;