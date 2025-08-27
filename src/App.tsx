import {useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable} from "./components/DataTable/DataTable";
import type { Column } from "./components/DataTable/DataTable";
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Prakhar", email: "prakhar@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];

function App() {
  const [name, setName] = useState("");

 const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id" },
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "email", title: "Email", dataIndex: "email" },
];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Assignment Demo</h1>

      {/* InputField Example */}
      <div>
        <h2 className="text-lg font-semibold mb-2">InputField Example</h2>
        <InputField
          label="Your Name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          helperText="This is a helper text"
          variant="outlined"
          size="md"
        />
      </div>

      {/* DataTable Example */}
      <div>
        <h2 className="text-lg font-semibold mb-2">DataTable Example</h2>
        <DataTable<User> data={users} columns={columns} />
      </div>
    </div>
  );
}

export default App;
