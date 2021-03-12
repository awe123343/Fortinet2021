import React from "react";
import { RefreshTable } from "./RefreshTable";

export const Todo = () => {
  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId"
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
      render: (value) => (value ? "true" : "false")
    }
  ];

  return (
    <RefreshTable
      columns={columns}
      url="https://jsonplaceholder.typicode.com/todos"
    />
  );
};
