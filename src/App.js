import './App.css';
import Content from './content/Content';
import Namecard from './namecard/Namecard'

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
        <div className="flex lg:col-span-2 lg:items-center lg:flex-col lg:pl-10">
          <Content />
        </div>
        <div className="grid lg:col-span-1 h-screen lg:fixed lg:left-2/3 lg:pr-10">
          <Namecard />
        </div>
      </div>
    </div>
  );
}

export default App;
