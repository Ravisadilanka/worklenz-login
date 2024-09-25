import { Button, Card, Rate, Segmented, Table, TableColumnsType } from "antd";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface DataType {
    key: string;
    project: string;
  }
  
  const columns: TableColumnsType<DataType> = [
    {
        title: "Project",
        dataIndex: "project",
        render: (project: string) => (
            <div style={{ display: "flex", gap: "10px" }}>
                <Rate count={1} tooltips={["Add to favorites"]}/>
                <span>{project}</span>
            </div>
            ),
      },
  ];
  
  const data = [
    {
      key: "1",
      project: "Project 01",
      status: "Status",
      dueDate: new Date("2024-07-15"),
    },
  ];

const ProjectsCard : React.FC = () => {
    const isDarkMode = useSelector((state : RootState) => state.theme.isDarkMode)
  return (
    <div style={{width: '100%', paddingTop: '11px'}}>
      <Card
      title = "Projects"
      extra = {<div style={{ display: "flex", gap: "10px" }}>
      <Button
        style={{
          width: "32px",
          borderRadius: "50%",
          backgroundColor: `${isDarkMode ? 'black' : 'white'}`,
        }}
      >
        <SyncOutlined />
      </Button>
      <Segmented<string>
        options={["Recent", "Favorites"]}
      />
    </div>}
      style={{backgroundColor: `${isDarkMode ? 'black' : 'white'}`}}
      >
        <Table<DataType>
              columns={columns}
              dataSource={data}
              pagination={false}
              showHeader={false}
              rowClassName={() => (isDarkMode ? 'dark-row' : 'light-row')}
            />
      </Card>
    </div>
  );
};

export default ProjectsCard;
