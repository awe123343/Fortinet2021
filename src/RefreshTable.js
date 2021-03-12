import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "antd";
import { RedoOutlined } from "@ant-design/icons";

export const RefreshTable = ({ columns, url, ...rest }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await fetch(url);
    setData(await result.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Col>
      <Row justify="end">
        <Button onClick={fetchData} className="refresh-button">
          <RedoOutlined />
        </Button>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 10 }}
        {...rest}
      />
    </Col>
  );
};
