import React from "react";
import { Button } from "@chakra-ui/react";

//metadata
export default {
  title: "Chakra/Button",
  component: Button,
};

//story 1
export const Success = () => <Button variantColor='green'>Success</Button>;

//story 2
export const Danger = () => <Button variantColor='red'>Danger</Button>;

//story 3
export const Log = () => (
  <Button variantColor='blue' onClick={() => console.log("button clicked")}>
    Log
  </Button>
);
