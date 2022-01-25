import {render, screen} from "@testing-library/react";
import {PlayerRow} from "./PlayerRow";

describe('PlayerRow', () => {
  it('display pokemon selector', () => {

    const rolesOptions = {
      top: {
        x: 0,
        y: 0
      },
      jungle: {
        x: 0,
        y: 0
      },
      bottom: {
        x: 0,
        y: 0
      },
      invade: {
        x: 0,
        y: 0
      }
    }

    const label = 'irrelevant'

    render(<PlayerRow label={label} rolesOptions={rolesOptions} pokemonOptions={[]} onChange={jest.fn} />)

    screen.getByLabelText(`${label} pokemon`)
    screen.getByLabelText(`${label} role`)

  });
});