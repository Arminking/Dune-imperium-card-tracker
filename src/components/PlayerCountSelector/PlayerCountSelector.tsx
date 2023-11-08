type Props = {
    playerCount: number,
    playerSetter: (num: number) => void;
  }


export const PlayerCountSelector = ({playerCount, playerSetter }: Props) => {
   

    return (
        <>
            { playerCount === 0 ?
                <div style={{display: 'flex', justifyContent: "center",  }}>
                    <div style={{margin: "40px"}} onClick={() => playerSetter(2)}>2 Player</div>
                    <div style={{margin: "40px"}} onClick={() => playerSetter(3)}>3 Player</div>
                    <div style={{margin: "40px"}} onClick={() => playerSetter(4)}>4 Player</div>
                </div>
                :
                <>
                </>
            }
        </>
    );
  };