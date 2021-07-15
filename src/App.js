import VerifyWebService from './components/VerifyWebService'
import GetBalance from './components/GetBalance'
import Collect from './components/Collect'
import Redeem from './components/Redeem'

function App() {
  return (
    <div>
      <h1> Testing loyalty app</h1>
      <VerifyWebService/>
      <GetBalance/>
      <Collect/>
      <Redeem/>
    </div>
  );
}

export default App;
