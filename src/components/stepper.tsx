import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";

export type stepperState = {
  index: number;
  count: number;
};

type items = {
  title: string;
};

type ChaineStepperProps = {
  steps: items[];
  activeStep: number;
};

export default function ChaineStepper({
  steps,
  activeStep,
}: ChaineStepperProps) {
  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <Box className="flex flex-col items-center">
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <StepTitle className="block">{step.title}</StepTitle>
          </Box>
          <StepSeparator className="mb-4" />
        </Step>
      ))}
    </Stepper>
  );
}
