import React from "react";
import { RefreshTable } from "./RefreshTable";

export const User = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    }
  ];
  // "https://jsonplaceholder.typicode.com/users"

  return (
    <RefreshTable
      columns={columns}
      url="https://jsonplaceholder.typicode.com/users"
    />
  );
};
