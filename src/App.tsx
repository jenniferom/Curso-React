import './App.css'
import HomeContainer from './modules/home/containers/homecontainer/HomeContainer';
import RelevantInfo from './modules/home/containers/relevantinfo/RelevantInfo';
import SiderBar from './modules/home/containers/siderbar/SiderBar';

function App() {
    
  return (
    <>
      <SiderBar />
      <HomeContainer />
      <RelevantInfo />
    </>
  );
}

export default App
 