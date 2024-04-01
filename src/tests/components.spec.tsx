import { render, screen, fireEvent } from "@testing-library/react";
import ChaineStepper from "../components/stepper";
import { ChaineNumberInput, ChaineSlider } from "../components/inputs";

describe("Components test", () => {
  it("Stepper loaded successfully", () => {
    render(
      <ChaineStepper steps={[{ title: "A" }, { title: "B" }]} activeStep={0} />
    );

    const element = screen.getByText(/A/i);

    expect(element).toBeInTheDocument();
  });

  it("Numeric Input rendered", () => {
    render(
      <ChaineNumberInput
        value={"10"}
        onChange={() => {
          return;
        }}
      />
    );
    const element = screen.getByRole("spinbutton");
    expect(element).toBeInTheDocument();
  });

  it("Numeric Input value change", () => {
    const handleChange = jest.fn();

    render(<ChaineNumberInput value={""} onChange={handleChange} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, {
      target: { value: "10" },
    });

    console.log(input.getAttribute("value"));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
