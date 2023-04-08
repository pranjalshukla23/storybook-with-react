import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

//metdata
export default {
  title: "form/Subscription",
};

//story 1
// story within story
export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
