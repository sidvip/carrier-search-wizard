import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { CarrierResponseType, Step2PropType } from "../common/types";
import { StarIcon } from "@chakra-ui/icons";

export default function Step2(props: Step2PropType) {
  return (
    <Box className="flex flex-col gap-4 my-6">
      {props?.data
        ?.filter(
          (_ele: CarrierResponseType) =>
            _ele.onTimeDeliveryPercentage <=
              props.appState.onTimeDeliveryPercentage ||
            _ele.rating <= props.appState.rating ||
            _ele.cost <= props.appState.cost
        )
        ?.map((item: CarrierResponseType) => (
          <Card key={item.id}>
            {item.onTimeDeliveryPercentage <=
              props.appState.onTimeDeliveryPercentage && (
              <Badge colorScheme="purple">On Time Delivery</Badge>
            )}
            {item.cost <= props.appState.cost && (
              <Badge colorScheme="yellow">Cost</Badge>
            )}
            {item.rating <= props.appState.rating && (
              <Badge colorScheme="orange">Rating</Badge>
            )}
            <CardHeader>
              <Heading size="md">{item?.name}</Heading>
            </CardHeader>

            <CardBody className="flex flex-col gap-2">
              <Heading as="h6" size="sm">
                Cost: {item?.cost}
              </Heading>
              <Heading as="h6" size="sm">
                Availability:{" "}
                {item?.availability ? (
                  <Badge colorScheme="green">Available</Badge>
                ) : (
                  <Badge colorScheme="red">Not Available</Badge>
                )}
              </Heading>
              <Heading as="h6" size="sm">
                Delivery on Time: {item?.onTimeDeliveryPercentage * 100} %
              </Heading>{" "}
              <Heading as="h6" size="sm" className="flex items-center gap-1">
                Ratings: {item?.rating} <StarIcon color="#FFBF00" />
              </Heading>
            </CardBody>
            <CardFooter className="flex justify-end">
              <Button
                colorScheme="green"
                onClick={() => {
                  props.setActiveStep((o: number) => o + 1);
                  props.setAppState({
                    ...props.appState,
                    bookedCarrier: item,
                  });
                }}
              >
                Book
              </Button>
            </CardFooter>
          </Card>
        ))}
    </Box>
  );
}
