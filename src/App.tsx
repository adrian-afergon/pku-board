import React from 'react';
import './App.css';
import {Board} from "./components/Board";
import {Player} from "./domain/models/player";
import {TeamSelector} from "./components/TeamSelector";
import {PokemonService} from "./domain/services/Pokemon.service";
import {Pokemon} from "./domain/models/pokemon";
import {Team} from "./domain/models/team";
import {TimeSection} from "./components/TimeSection";
import {GameMap} from "./domain/models/gameMap";
import {GameMapService} from "./domain/services/GameMapService";

function App() {
  const [pokemonOptions, setPokemonOptions] = React.useState<Pokemon[]>([])
  const [gameMap, setGameMap] = React.useState<GameMap | undefined>()
  const [teamPurple, setTeamPurple] = React.useState<Team>({color: "purple", players: {}})
  const [teamYellow, setTeamYellow] = React.useState<Team>({color: "yellow", players: {}})
  const [jungle] = React.useState([])

  const handlePurplePlayerDelete = (playerId: string) => {
    setTeamPurple({
      ...teamPurple,
      players: {
        ...teamPurple.players,
        [playerId]: undefined
      }
    })
  }

  const handleYellowPlayerDelete = (playerId: string) => {
    setTeamYellow({
      ...teamYellow,
      players: {
        ...teamYellow.players,
        [playerId]: undefined
      }
    })
  }

  const handlePurplePlayerChange = (playerId: string, changedPlayer: Player) => {
    setTeamPurple({
      ...teamPurple,
      players: {
        ...teamPurple.players,
        [playerId]: changedPlayer
      }
    })
  }

  const handleYellowPlayerChange = (playerId: string, changedPlayer: Player) => {
    setTeamYellow({
      ...teamYellow,
      players: {
        ...teamYellow.players,
        [playerId]: changedPlayer
      }
    })
  }

  React.useEffect(() => {
    Promise.all([
      new PokemonService().getPlayable(),
      new GameMapService().getMapById('aeos-stadium')
    ]).then(([
               pokemons,
               selectedGameMap
             ]) => {
      setPokemonOptions(pokemons)

      setGameMap(selectedGameMap)
    })
  }, [])

  return (
    <section className="App">
      <header>
        <h1>Pokémon Unite - Board</h1>
      </header>

      {gameMap &&
          <>
              <TimeSection maxTime={gameMap.time}/>
              <section className="Main">
                  <TeamSelector
                      title="Team Yellow"
                      color={teamYellow.color}
                      pokemonOptions={pokemonOptions}
                      onPlayerChange={handleYellowPlayerChange}
                      onPlayerDelete={handleYellowPlayerDelete}  
                    />
                  <section>
                      <Board
                          image={gameMap.image}
                          teamPurple={teamPurple}
                          teamYellow={teamYellow}
                          jungle={jungle}
                          onPurplePlayerChange={handlePurplePlayerChange}
                          onYellowPlayerChange={handleYellowPlayerChange}
                      />
                  </section>

                  <TeamSelector
                      title="Team Purple"
                      color={teamPurple.color}
                      pokemonOptions={pokemonOptions}
                      onPlayerChange={handlePurplePlayerChange}
                      onPlayerDelete={handlePurplePlayerDelete}  
                    />
              </section>
          </>}
      <footer>
        Created 2021
      </footer>
    </section>
  );
}

export default App;
