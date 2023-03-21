import Button from "../components/Button";

//define a folder
export default {
  title: "Components/Button",
  component: Button,

  //define arguments which will be passed to template
  argTypes: {
    handleClick: {
      action: "handleClick",
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments
const Template = (args) => <Button {...args} />;

//story #1
//create story from a template
export const Red = Template.bind({});

//pass arguments to template
Red.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "md",
};

// story #2
//create story from a template
export const Green = Template.bind({});

//pass arguments to template
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
};

// story #3
//create story from a template
export const Small = Template.bind({});

//pass arguments to template
Small.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "sm",
};

// story #4
//create story from a template
export const Large = Template.bind({});

//pass arguments to template
Large.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "lg",
};

// story #5
//create story from a template
export const LongLabel = Template.bind({});

//pass arguments to template
LongLabel.args = {
  backgroundColor: "red",
  label: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  size: "sm",
};
