import React from 'react';
import './App.css';
import {Board} from "./components/Board";
import {Player} from "./domain/models/player";
import {TeamSelector} from "./components/TeamSelector";
import {PokemonService} from "./domain/services/Pokemon.service";
import {Pokemon} from "./domain/models/pokemon";
import {Team} from "./domain/models/team";

function App() {
  const [pokemonOptions, setPokemonOptions] = React.useState<Pokemon[]>([])
  const [teamPurple, setTeamPurple] = React.useState<Team>({color: "purple", players: {}})
  const [teamYellow, setTeamYellow] = React.useState<Team>({color: "yellow", players: {}})
  const [jungle] = React.useState([])

  const handlePurplePlayerChange = (playerId:string, changedPlayer: Player) => {
    setTeamPurple({
      ...teamPurple,
      players: {
        ...teamPurple.players,
        [playerId]: changedPlayer
      }
    })
  }

  const handleYellowPlayerChange = (playerId:string, changedPlayer: Player) => {
    setTeamYellow({
      ...teamYellow,
      players: {
        ...teamYellow.players,
        [playerId]: changedPlayer
      }
    })
  }

  React.useEffect(() => {
    new PokemonService().getPlayable().then(setPokemonOptions)
  }, [])

  return (
    <section className="App">
      <header>
        <h1>Pokémon Unite - Board</h1>
      </header>

      <section className="Main">
        <TeamSelector
          title="Team Yellow"
          color={teamYellow.color}
          pokemonOptions={pokemonOptions}
          onPlayerChange={handleYellowPlayerChange}/>
        <Board
          teamPurple={teamPurple}
          teamYellow={teamYellow}
          jungle={jungle}
          onPurplePlayerChange={handlePurplePlayerChange}
          onYellowPlayerChange={handleYellowPlayerChange}
          />
        <TeamSelector
          title="Team Purple"
          color={teamPurple.color}
          pokemonOptions={pokemonOptions}
          onPlayerChange={handlePurplePlayerChange}/>
      </section>
      <footer>
        Created 2021
      </footer>
    </section>
  );
}

export default App;
