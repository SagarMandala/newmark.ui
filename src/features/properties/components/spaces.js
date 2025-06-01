import { Table, Card } from "antd";
import { useState, useEffect } from "react";
import { RentRoll } from "./rentroll";
export function Spaces(props) {
  const [space, setSpace] = useState([]);
  const columns = [
    {
      title: "spaceId",
      dataIndex: "spaceId",
      key: "spaceId",
    },
    {
      title: "spaceName",
      dataIndex: "spaceName",
      key: "spaceName",
    },
  ];
  useEffect(() => {
    setSpace(props.space);
    debugger;
  }, [props]);
  return (
    <>
      <Card
        title="Space records for the property"
        variant="borderless"
        className="custom-card"
      >
        <Table
          className="my-custom-table"
          columns={columns}
          rowKey="spaceId"
          dataSource={space}
          expandable={{
            expandedRowRender: (record) => (
              <RentRoll rentroll={record.rentRoll} />
            ),
          }}
        />
      </Card>
    </>
  );
}
