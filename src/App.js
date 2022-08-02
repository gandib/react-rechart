import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <animated.h1 style={props}>I will fade in</animated.h1>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
