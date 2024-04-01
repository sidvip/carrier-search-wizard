import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  Heading,
  Box,
} from "@chakra-ui/react";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { CheckboxPropType, InputType, SliderPropType } from "../common/types";

export default function ChainCheckbox(props: CheckboxPropType) {
  return (
    <Checkbox onChange={props.onChange} isChecked={props.value}>
      {props.label}
    </Checkbox>
  );
}

export function ChaineNumberInput(props: InputType) {
  return (
    <NumberInput value={props.value} onChange={props.onChange}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

export function ChaineSlider(props: SliderPropType) {
  return (
    <Box>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={0}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Box className="flex justify-between">
        <Heading as="h4" size="sm">
          {props.min}
        </Heading>
        <Heading as="h4" size="sm">
          {props.max}
        </Heading>
      </Box>
    </Box>
  );
}
