import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

// metadata
export default {
  title: "Form/Button",
  component: Button,
  // adding local decorator
  decorators: [(story) => <Center>{story()}</Center>],
  argTypes: {
    variant: {
      control: "text",
    },
    children: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
};

//create a template for button component
const Template = (args) => <Button {...args} />;

//story 1
//create a story from template
export const Success = Template.bind({});

//passing arguments to template
Success.args = {
  variant: "success",
  children: "success",
};

//story 2
//create a story from template
export const Danger = Template.bind({});

//passing arguments to template
Danger.args = {
  variant: "danger",
  children: "success",
};

//story 3
//create a story from template
export const PrimaryA = Template.bind({});

//pass arguments to template
PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

//story 4
//create a story from template
export const LongPrimaryA = Template.bind({});

//pass arguments to template
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

//story 5
//create a story from template
export const SecondaryA = Template.bind({});

//pass arguments to template
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
