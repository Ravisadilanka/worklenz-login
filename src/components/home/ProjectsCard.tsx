import { Button, Card, Rate, Segmented, Table, TableColumnsType, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const { Text } = Typography

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
        <Rate count={1} tooltips={["Add to favorites"]} />
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

const ProjectsCard: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isShowFavourite, setIsShowFavourite] = useState<boolean>(false)
  const [isSpinning, setIsSpinning] = useState<boolean>(false)

  const handleChange = () => {
    setIsSpinning(true)
    setIsShowFavourite(!isShowFavourite)
  }

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
      }, 500);
    }

  }, [isShowFavourite, isSpinning])

  return (
    <div style={{ width: "100%", paddingTop: "11px" }}>
      <Card
        title="Projects"
        extra={
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              style={{
                width: "32px",
                borderRadius: "50%",
                backgroundColor: `${isDarkMode ? "black" : "white"}`,
              }}
            >
              <SyncOutlined spin={isSpinning} />
            </Button>
            <Segmented<string> options={["Recent", "Favorites"]} onChange={handleChange}/>
          </div>
        }
        style={{ backgroundColor: `${isDarkMode ? "black" : "white"}` }}
      >
        {isShowFavourite ? 
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src="https://app.worklenz.com/assets/images/empty-box.webp"
          alt="Empty Image"
          width={64}
          style={{ filter: "grayscale(1)" }}
        />
        <Text type="secondary">You have not assigned to any project yet.</Text>
      </div>
        : (<Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
          showHeader={false}
          rowClassName={() => (isDarkMode ? "dark-row" : "light-row")}
        />)}
      </Card>
    </div>
  );
};

export default ProjectsCard;
