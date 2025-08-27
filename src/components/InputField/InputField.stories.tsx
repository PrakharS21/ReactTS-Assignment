import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    errorMessage: "Invalid email",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    disabled: true,
  },
};
