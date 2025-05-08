import Player from './components/Player.jsx';
import TimerGame from './components/TimerGame.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerGame title = 'Easy' targetTime={1}/>
        <TimerGame title = 'Medium' targetTime={5}/>
        <TimerGame title = 'Hard' targetTime={10}/>
        <TimerGame title = 'Extreme' targetTime={20}/>
      </div>
    </>
  );
}

export default App;
