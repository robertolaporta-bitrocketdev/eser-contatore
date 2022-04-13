import { FC, useEffect, useState } from "react";
import { Button, Table } from "antd";
import { Data } from "../../Components/DatiFetch";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Action } from "history";

export const FetchTable: FC = (): JSX.Element => {
  const [dataSource, setDataSource] = useState([]);
  const [alreadySelectedRows, setAlreadySelectedRow] = useState<[Data]>();
  const [recordList, setRecordList] = useState<[Data]>();
  const data: Array<Data> = [];

  useState(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setDataSource(json));
  });

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: (a: Data, b: Data) => a.id - b.id,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Status",
      dataIndex: "completed",
      render: (completed: boolean) => {
        return <p>{completed ? "completed" : "In Progress"}</p>;
      },
      filters: [
        {
          text: "In Progress",
          value: false,
        },
        {
          text: "Completed",
          value: true,
        },
      ],
      onFilter: (value: any, record: Data) => {
        return record.completed === value;
      },
    },
  ];

  dataSource.map((item: Data) => {
    data.push({
      key: item.id,
      id: item.id,
      title: item.title,
      completed: item.completed,
    });
  });

  const onClick = () => {};
  const hasSelected = () => {};
  const loading = false;
  return (
    <div style={{ margin: 15 }}>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={onClick}
          disabled={!hasSelected}
          loading={loading}
        >
          Seleziona Preferiti
        </Button>
        <Link to="/">
          <button style={{ marginLeft: 10 }}>Home</button>
        </Link>
        <Link to="/preferiti">
          <button style={{ marginLeft: 10 }}>Vai ai Preferiti</button>
        </Link>
      </div>
      <Table
        rowSelection={{
          onSelect: (record: Data) => {
            setRecordList([record]);
            
            console.log(recordList);
          },
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
