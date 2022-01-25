import {render, screen} from "@testing-library/react";
import {TimeSection} from "./TimeSection";

describe('TimeSection', () => {
  it('display the section', () => {

    render(<TimeSection />)

    screen.getByTitle('Time section')

  });
});