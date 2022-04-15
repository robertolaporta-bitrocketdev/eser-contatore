import { FC, useState } from "react";
import { Button, Table } from "antd";
import { Data } from "../../Components/DatiFetch";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { selectorUserList } from "../../Components/Preferiti";

export const FetchTable: FC = (): JSX.Element => {
  const [dataSource, setDataSource] = useState([]);
  // const [alreadySelectedRows, setAlreadySelectedRow] = useState();
  const [recordList, setRecordList] = useState<Array<Data>>([]);
  const [hasSelected, setHasSelected] = useState(false);
  const objData = useSelector(selectorUserList);
  const dataValues = Object.values(objData);
  const data: Array<Data> = [];
  const dispatch = useDispatch();

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

  const onClick = () => {
    setHasSelected(true);
    recordList.map((item: Data) => {
      dispatch({
        type: "INSERT_USER",
        payload: {
          id: item.id,
          title: item.title,
          completed: item.completed,
        },
      });
    });
  };
  console.log(recordList);
  return (
    <div style={{ margin: 15 }}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" disabled={hasSelected} onClick={onClick}>
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
            setRecordList([...recordList, record]);
            setHasSelected(false);
          },
          getCheckboxProps: (record: Data) => ({
            disabled: dataValues.some((data: any) => data.id === record.id),
          }),
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
