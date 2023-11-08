import { useState } from 'react';
import './App.scss';
import { Header } from './components/Header'
import { PlayerCountSelector } from './components/PlayerCountSelector'
import { PlayerDeck } from './components/PlayerDeck'

import { CardModal } from './components/CardModal'
import { LeaderModal } from './components/LeaderModal'


function App() {

  const [playerCount, setPlayerCount] = useState(0);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showLeaderModal, setShowLeaderModal] = useState(false);


  return (
    <div style={{width: "100%"}}>
      <Header/>
      <PlayerCountSelector 
        playerCount={playerCount}
        playerSetter={setPlayerCount}
      />
      
      <div style={{display: "flex", flexWrap: "wrap"}}>
        
        {[...Array(playerCount)].map((e, i) =>  
          <PlayerDeck
           showLeaderModal={setShowLeaderModal}
          />
        )}
      </div>


      

      { showCardModal ? <CardModal /> : <></>}
      { showLeaderModal ? <LeaderModal/> : <></>}
    </div>
  );
}

export default App;
