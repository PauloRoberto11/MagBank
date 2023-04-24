import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CenteredButton from './components/CenteredButton';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <CenteredButton>
        Abra sua conta
      </CenteredButton>
    </div>
  );
}

export default App;
