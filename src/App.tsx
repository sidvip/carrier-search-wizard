import { useEffect, useState } from "react";
import "./App.css";
import ChaineStepper from "./components/stepper";
import { Box, Heading, useSteps } from "@chakra-ui/react";
import { AppStateType } from "./common/types";
import response from "./common/response.json";
import Step1 from "./layout/step-1";
import Footer from "./layout/footer";
import Step2 from "./layout/step-2";
import Step3 from "./layout/step-3";

function App() {
  const [data, setData] = useState(response.carriers);
  const steps = [{ title: "Criteria" }, { title: "Select" }, { title: "Book" }];
  const [appState, setAppState] = useState<AppStateType>({
    cost: 0,
    specialRequirements: [],
    onTimeDeliveryPercentage: 0,
    rating: 0,
    bookedCarrier: {},
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL as string)
      .then((response) => response.json())
      .then((data) => {
        setData(data?.carriers);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <Box className="lg:p-10 p-2">
      <Box className="flex justify-center flex-col items-center my-4">
        <Heading as="h5" size="lg">
          Carrier Search Wizard
        </Heading>
        <Heading as="h6" size="xs" className="text-blue-400">
          (Search carrier based on your need)
        </Heading>
      </Box>
      <ChaineStepper activeStep={activeStep} steps={steps} />
      <Box className="flex flex-col ">
        {activeStep === 0 ? (
          <Step1 data={data} appState={appState} setAppState={setAppState} />
        ) : null}
        {activeStep === 1 ? (
          <Step2
            data={data}
            setActiveStep={setActiveStep}
            setAppState={setAppState}
            appState={appState}
          />
        ) : null}
        {activeStep === 2 || activeStep === 3 ? (
          <Step3 appState={appState} setActiveStep={setActiveStep} />
        ) : null}
      </Box>
      <Footer
        appState={appState}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
      />
    </Box>
  );
}

export default App;
