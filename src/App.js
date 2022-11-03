import { Chat } from './Components/Chat';
import { Search } from './Components/Search';
import './input.css';
import {useState} from 'react' ; 

function App() {
  const [data, setData] = useState(Boolean);
  
  const childToParent = (ToggleData) => {
    setData(ToggleData);
    console.log(ToggleData)
  }
  return (
    <div className="App">
        <Search toggle={data} childToParent={childToParent}  />
        <Chat childToParent={childToParent} />   
    </div>
  );
}

export default App;
