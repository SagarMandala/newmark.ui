import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPropertiesAPI } from "./propertiesAPI";
import { Table, Card, Row, Col, Typography, Space } from "antd";

import { Spaces } from "./components/spaces";
const { Text } = Typography;
export function Properties() {
  const columns = [
    {
      title: "propertyId",
      dataIndex: "propertyId",
      key: "propertyId",
    },
    {
      title: "propertyName",
      dataIndex: "propertyName",
      key: "propertyName",
    },
  ];
  const propertyRecords = useSelector(
    (state) => state?.properties?.propertyRecords
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPropertiesAPI());
  }, [dispatch]);
  return (
    <>
      <p>This Screen is to show all properties from Blob storage</p>
      <Card title="Properties" variant="borderless" className="custom-card">
        <Table
          className="my-custom-table"
          columns={columns}
          rowKey="propertyId"
          dataSource={propertyRecords}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <div>
                  <Text strong>Features: </Text>
                  <Space size="small" wrap={false}>
                    {record?.features?.map((feature, index) => (
                      <Text key={index}>
                        {feature}
                        {index < record?.features?.length - 1 ? "," : ""}
                      </Text>
                    ))}
                  </Space>
                </div>
                <div>
                  <Text strong>Highlights: </Text>
                  <Space size="small" wrap={false}>
                    {record?.highlights?.map((feature, index) => (
                      <Text key={index}>
                        {feature}
                        {index < record?.highlights?.length - 1 ? "," : ""}
                      </Text>
                    ))}
                  </Space>
                </div>
                <div>
                  <Text strong>Transportation: </Text>
                  {record?.transportation?.map((item, index) => (
                    <span key={index}>
                      {item.line} ({item.distance})
                      {record?.index < record?.transportation?.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                </div>
                <Spaces space={record.spaces} />
              </>
            ),
          }}
        />
      </Card>
    </>
  );
}
