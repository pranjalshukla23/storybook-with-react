import React from "react";
import Input from "./Input";

// metadata
export default {
  title: "Form/Input",
  component: Input,
};

// story 1
export const Small = () => <Input size='small' placeholder='Small size' />;

//rename a story
Small.storyName = "Small Name";

// story 2
export const Medium = () => <Input size='medium' placeholder='Medium size' />;

// story 3
export const Large = () => <Input size='large' placeholder='Large size' />;
