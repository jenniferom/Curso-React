import './App.css'
import Button from './components/button/Button'

function App() {
  const handleClick = () => {
    alert("Click Button 1");
  }
  
  return (
    <div className="container">
      <Button text="Button 1" onClick={handleClick}/>
      <Button text="Button 2" onClick={() => alert('Click Button 2')} disabled/>
      <Button text="Button 3" onClick={() => alert('Click Button 3')}/>
      <Button text="Button 4" onClick={() => alert('Click Button 4')}/>
    </div>
  );
}

export default App
