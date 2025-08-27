

// 👇 Column ko export karo
export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No data available</div>
    );
  }

  return (
    <table className="w-full border border-gray-300 rounded-md text-sm">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className="p-2 border-b text-left">
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t hover:bg-gray-50">
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
