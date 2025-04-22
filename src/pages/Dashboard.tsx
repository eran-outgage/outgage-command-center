
import { BarChart3, Mail, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import the Button component
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import EngagementChart from "@/components/dashboard/EngagementChart";
import CampaignPerformance from "@/components/dashboard/CampaignPerformance";
import QuickActionButton from "@/components/common/QuickActionButton";

const dashboardMetrics = [
  {
    title: "Total Campaigns",
    value: "24",
    change: 12,
    changeText: "from last month",
    icon: Mail,
  },
  {
    title: "Active Campaigns",
    value: "7",
    change: 5,
    changeText: "from last month",
    icon: BarChart3,
  },
  {
    title: "Engagement Rate",
    value: "68%",
    change: -2,
    changeText: "from last month",
    icon: Target,
  },
  {
    title: "Total Contacts",
    value: "5,392",
    change: 8,
    changeText: "from last month",
    icon: Users,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex space-x-2">
          <QuickActionButton>New Campaign</QuickActionButton>
        </div>
      </div>
      
      <MetricsGrid metrics={dashboardMetrics} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EngagementChart />
        <CampaignPerformance />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h4 className="font-medium">Campaign {i}</h4>
                    <p className="text-sm text-gray-500">Last updated 2h ago</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">78% Engagement</div>
                    <div className="text-sm text-green-600">+12% from avg</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                View pending campaigns
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Import new contacts
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View monthly report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
