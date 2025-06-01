import { Table, Card } from "antd";
import { useState, useEffect } from "react";
export function RentRoll(props) {
  const [rentRoll, setRentRoll] = useState([]);
  const columns = [
    {
      title: "month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "rent",
      dataIndex: "rent",
      key: "rent",
    },
  ];
  useEffect(() => {
    setRentRoll(props.rentroll);
    debugger;
  }, [props]);
  return (
    <>
      <Card
        title="RentRoll records for the each Space"
        variant="borderless"
        className="custom-card"
      >
        <Table
          className="my-custom-table"
          columns={columns}
          dataSource={rentRoll}
          // expandable={{
          //   expandedRowRender: (record) => <Spaces space={record.spaces} />,
          //   rowExpandable: (record) => record.name !== "Not Expandable",
          // }}
        />
      </Card>
    </>
  );
}
