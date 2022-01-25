import {render, screen} from "@testing-library/react";
import {TeamSelector} from "./TeamSelector";

describe('TeamSelector', () => {
  it('display the component', () => {

    render(<TeamSelector
      title="Team"
      color="purple"
      pokemonOptions={[]}
      onPlayerChange={jest.fn} 
      onPlayerDelete={jest.fn}
      />
    )
    screen.getByText("Team")
  });

});