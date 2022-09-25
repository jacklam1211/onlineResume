import './App.css';
import Content from './content/Content';
import Namecard from './namecard/Namecard'

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-3">
        <div className="flex col-span-2 items-center flex-col">
          <Content />
        </div>
        <div className="grid col-span-1 h-screen fixed left-2/3">
          <Namecard />
        </div>
      </div>
    </div>
  );
}

export default App;
