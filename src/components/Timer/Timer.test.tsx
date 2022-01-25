import {render, screen} from "@testing-library/react";
import {Timer} from "./Timer";

describe('Timer', () => {
  it('display the component', () => {
    render(<Timer time={600} />)

    screen.getByDisplayValue(600)
  });
});