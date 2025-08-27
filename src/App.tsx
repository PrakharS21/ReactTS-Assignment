import { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const columns = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

const initialData: User[] = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 28 },
  { id: 3, name: "Charlie", age: 24 },
];

export default function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [tableData, setTableData] = useState<User[]>(initialData);

  const handleAddUser = () => {
    if (!username.trim() || age === "" || age <= 0) return;

    const newUser: User = {
      id: tableData.length + 1,
      name: username,
      age: Number(age),
    };

    setTableData([...tableData, newUser]);
    setUsername("");
    setAge("");
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      {/* <h1 className="text-2xl font-bold"></h1> */}

      <div className="flex flex-col gap-2 ">
        <InputField
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Age"
          placeholder="Enter age"
          type="number"
          value={age === "" ? "" : age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <div className="w-full flex justify-center">
          <button
            onClick={handleAddUser}
            className=" w-[4rem] px-4 py-2 bg-blue-900 text-white rounded-md"
          >
            Add
          </button>
        </div>
      </div>

      <DataTable<User> data={tableData} columns={columns} />
    </div>
  );
}
