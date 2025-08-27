import type { Meta, StoryObj } from "@storybook/react";
import { DataTable} from "./DataTable";
import type { Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Prakhar", email: "prakhar@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
  { id: 3, name: "Ananya", email: "ananya@example.com" },
];

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id" },
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

// 👇 Wrapper banake generic ko fix kiya
const UserTable = (props: { data: User[]; columns: Column<User>[] }) => (
  <DataTable<User> {...props} />
);

const meta: Meta<typeof UserTable> = {
  title: "Components/DataTable",
  component: UserTable,
};
export default meta;

type Story = StoryObj<typeof UserTable>;

export const Default: Story = {
  args: {
    data: users,
    columns,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};
