import AddIcon from '@mui/icons-material/Add';
import cardBack from '../../images/cardBack.png'
import appropriate from '../../images/Cards/appropriate.jpg'; 
import benetleilaxlab from '../../images/Cards/benetleilaxlab.jpg'; 
import bountyhunter from '../../images/Cards/bountyhunter.jpg'; 
import chairdog from '../../images/Cards/chairdog.jpg'; 
import assassinationmission from '../../images/Cards/assassinationmission.jpg'; 
import blankslate from '../../images/Cards/blankslate.jpg'; 
import PrincessYunapritani from '../../images/Characters/PrincessYunapritani.avif'; 

type Props = {
    showLeaderModal: (showLeaderModal: boolean) => void;
  }

export const PlayerDeck = ({showLeaderModal} : Props) => {
    return (

        <div style={{border: "1px solid #000", minWidth: "49%", height: "570px"}}>
            <header style={{textAlign: "center"}}>Player 1</header>
            <div style={{display: "flex", height: "250px"}}>
                <div style={{width: "20%", textAlign: "center"}}>
                    <div>Deck</div>
                    <img style={{maxWidth:"100%", maxHeight:"90%"}} src={cardBack} alt="cardBack" />
                </div>

                <div style={{width: "60%", textAlign: "center", }} onClick={() => showLeaderModal(true)}>
                   {/* <div>Character</div>
                    <AddIcon></AddIcon>*/}
                    <img style={{maxWidth:"100%", maxHeight:"90%"}} src={PrincessYunapritani} alt="PrincessYunapritani" />
                </div>


                <div style={{width: "20%", textAlign: "center"}}>
                    <div>Discarded Cards</div>
                    <img style={{maxWidth:"100%", maxHeight:"90%"}} src={benetleilaxlab} alt="benetleilaxlab" />
                </div>

            </div>
            <div style={{display: "flex", justifyContent: "center", height: "300px"}}>
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={appropriate} alt="Appropriate" />
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={bountyhunter} alt="bountyhunter" />
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={chairdog} alt="chairdog" />
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={assassinationmission} alt="assassinationmission" />
                <img style={{maxWidth:"100%", maxHeight:"100%"}} src={blankslate} alt="blankslate" />
            </div>

        </div>
    );
};


{/* 
player count selection
add character selection 
add basic deck loading
add all cards
add card adding to deck
move card fromm deck to active to discard
*/}