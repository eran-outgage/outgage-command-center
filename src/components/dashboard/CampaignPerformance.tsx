
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample data
const generateData = () => {
  const campaigns = [
    "Q1 Welcome",
    "Summer Promo",
    "Fall Launch",
    "Holiday Special",
  ];
  return campaigns.map((campaign) => ({
    name: campaign,
    "Opens": Math.floor(Math.random() * 30) + 50,
    "Clicks": Math.floor(Math.random() * 20) + 15,
    "Responses": Math.floor(Math.random() * 15) + 5,
  }));
};

const CampaignPerformance = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(generateData());
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #f0f0f0",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="Opens" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Clicks" fill="#7E69AB" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Responses" fill="#6E59A5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignPerformance;
