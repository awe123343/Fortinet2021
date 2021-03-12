import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { RefreshTable } from "./RefreshTable";

export const Post = () => {
  const [isModalVisible, setIsModalVisible] = useState();
  const [comment, setComment] = useState();
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
      title: "Body",
      dataIndex: "body",
      key: "body"
    }
  ];

  const fetchComment = async (id) => {
    // https://jsonplaceholder.typicode.com/posts/1/comments
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    setComment((await result.json())?.[0]);
  };

  return (
    <div>
      <RefreshTable
        columns={columns}
        url={"https://jsonplaceholder.typicode.com/posts"}
        onRow={(record) => ({
          onClick: () => {
            setComment(undefined);
            fetchComment(record.id);
            setIsModalVisible(true);
          }
        })}
      />
      <Modal
        title="Comments"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>Name: {comment?.name}</p>
        <p>Email: {comment?.email}</p>
        <p>Body: {comment?.body}</p>
      </Modal>
    </div>
  );
};
