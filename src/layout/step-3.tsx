import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Step3PropType } from "../common/types";

export default function Step3(props: Step3PropType) {
  const toast = useToast();
  return (
    <Card className="mt-10">
      <CardHeader>
        <Heading>{props?.appState.bookedCarrier?.name}</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Heading size="md" textTransform="uppercase">
            Summary
          </Heading>

          <Box className="border p-4 rounded-3xl mt-10">
            <Text pt="2" fontSize="sm">
              Cost: {props?.appState.bookedCarrier?.cost}
            </Text>
            <Text pt="2" fontSize="sm">
              Rating: {props?.appState.bookedCarrier?.rating}
            </Text>
            <Text pt="2" fontSize="sm">
              On Time Delivery Percentage:{" "}
              {props?.appState.bookedCarrier?.onTimeDeliveryPercentage}
            </Text>
            <Text pt="2" fontSize="sm">
              Special Requirements:{" "}
              {props?.appState.bookedCarrier?.specialRequirements?.join(",")}
            </Text>
          </Box>
        </Box>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button
          colorScheme="green"
          onClick={() => {
            props.setActiveStep(3);
            toast({
              position: "top-right",
              title: "Confirmed Booking",
              description: "Booking Confirmed Successfully",
              status: "success",
              duration: 6000,
              isClosable: true,
            });
          }}
        >
          Confirm Booking
        </Button>
      </CardFooter>
    </Card>
  );
}
