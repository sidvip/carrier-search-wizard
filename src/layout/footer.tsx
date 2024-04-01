import { Button, useToast } from "@chakra-ui/react";
import { FooterType } from "../common/types";

export default function Footer(props: FooterType) {
  const toast = useToast();
  function isValidCriteria() {
    return (
      Object.values(props.appState).filter((v) =>
        typeof v === "object" && Array.isArray(v)
          ? Array.isArray(v)
            ? v.length !== 0
            : v !== 0
          : true
      ).length === 5
    );
  }

  return (
    <footer className="flex justify-center mt-2 gap-4">
      {props.activeStep >= 1 ? (
        <Button
          colorScheme="orange"
          onClick={() => {
            props.setActiveStep((o: number) => (o <= 0 ? 0 : o - 1));
          }}
        >
          Previous
        </Button>
      ) : null}
      {props.activeStep < 1 ? (
        <Button
          colorScheme="green"
          onClick={() => {
            if (isValidCriteria()) {
              props.setActiveStep((o: number) => o + 1);
            } else {
              toast({
                position: "top-right",
                title: "Incomplete Entries",
                description: "Please fill in all of the entries",
                status: "error",
                duration: 6000,
                isClosable: true,
              });
            }
          }}
        >
          Next
        </Button>
      ) : null}
    </footer>
  );
}
