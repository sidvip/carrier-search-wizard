import { Box, Heading } from "@chakra-ui/react";
import ChainCheckbox, {
  ChaineNumberInput,
  ChaineSlider,
} from "../components/inputs";
import { CarrierResponseType, Step1PropType } from "../common/types";

export default function Step1({ data, appState, setAppState }: Step1PropType) {
  const allRequirements = data?.reduce((a: any, b: CarrierResponseType) => {
    a = [...a, ...b.specialRequirements];
    return a;
  }, []);
  const items = [
    {
      label: "Cost",
      id: 1,
      component: (
        <ChaineNumberInput
          value={appState.cost as unknown as string}
          onChange={function (value: string): void {
            setAppState({
              ...appState,
              cost: value as unknown as number,
            });
          }}
        />
      ),
    },
    {
      label: "Special Requirements",
      id: 2,
      component: allRequirements.map((ele: string, id: number) => (
        <ChainCheckbox
          key={id}
          label={ele}
          onChange={(e) => {
            let requirements: string[] = [];
            if (appState.specialRequirements?.includes(ele)) {
              requirements = appState.specialRequirements.filter(
                (e) => ele !== e
              );
            } else {
              requirements = [
                ...(appState.specialRequirements as string[]),
                ele,
              ];
            }
            setAppState({
              ...appState,
              specialRequirements: requirements,
            });
          }}
          value={appState.specialRequirements?.includes(ele) as boolean}
        />
      )),
    },
    {
      label: (
        <span>
          On Time Delivery Percentage
          <span className="text-blue-400">
            {"  "} - {appState.onTimeDeliveryPercentage}
          </span>
        </span>
      ),
      id: 3,
      component: (
        <ChaineSlider
          min={0}
          max={1}
          step={0.1}
          value={appState.onTimeDeliveryPercentage}
          onChange={function (value: number): void {
            setAppState({
              ...appState,
              onTimeDeliveryPercentage: value,
            });
          }}
        />
      ),
    },
    {
      label: (
        <span>
          Rating{" "}
          <span className="text-blue-400">
            {"  "} - {appState.rating}
          </span>
        </span>
      ),
      id: 4,
      component: (
        <ChaineSlider
          min={1}
          max={5}
          step={0.1}
          value={appState.rating}
          onChange={function (value: number): void {
            setAppState({
              ...appState,
              rating: value,
            });
          }}
        />
      ),
    },
  ];
  return (
    <Box className="w-full">
      {items?.map((item) => (
        <Box
          key={item.id}
          className="flex lg:w-full w-full gap-4 flex-col my-4 border border-gray-200 p-7 rounded-xl"
        >
          <Heading as="h4" size="sm">
            {item.label}
          </Heading>
          <Box className="flex-1 flex-col flex">{item.component}</Box>
        </Box>
      ))}
    </Box>
  );
}
