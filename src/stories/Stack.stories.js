import Stack from "../components/Stack";

//define a folder
export default {
  title: "Components/Stack",
  component: Stack,
  //define arguments which will be passed to template
  argTypes: {
    numberOfChildren: {
      type: "number",
      defaultValue: 4,
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments
const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

// story #1
//creating a story from template
export const HorizontalStack = Template.bind({});

//pass arguments to template
HorizontalStack.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

// story #2
//creating a story from template
export const VerticalStack = Template.bind({});

//pass arguments to template
VerticalStack.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
};

// story #3
//creating a story from template
export const NoSpacing = Template.bind({});

//pass arguments to template
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
};

// story #4
//creating a story from template
export const WrapOverflow = Template.bind({});

//pass arguments to template
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 0,
  wrap: true,
};

// story #5
//creating a story from template
export const Empty = Template.bind({});

//pass arguments to template
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 0,
  wrap: true,
};
