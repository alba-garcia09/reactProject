import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';
import { theme } from './theme';
import { PlayerBoard } from './components/PlayerBoard';
import { ComputerBoard } from './components/ComputerBoard';
import { useGameLogic } from './hooks/useGameLogic';
import { useComputerAI } from './hooks/useComputerAI';

function App() {
  const {
    playerShips,
    computerShips,
    playerHits,
    computerHits,
    turn,
    orientation,
    setOrientation,
    placeShip,
    handleAttack,
    startGame,
  } = useGameLogic();

  const { setComputerShips } = useComputerAI();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <PlayerBoard
          gridSize={theme.sizes.gridSize}
          playerShips={playerShips}
          onDropShip={placeShip}
          onAttack={handleAttack}
          orientation={orientation}
          setOrientation={setOrientation}
          startGame={startGame}
        />
        <ComputerBoard
          gridSize={theme.sizes.gridSize}
          computerHits={computerHits}
          onAttack={handleAttack}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
