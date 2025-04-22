
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <h2 className="text-lg font-medium text-gray-600">
            Analytics dashboard coming soon
          </h2>
          <p className="text-gray-500 mt-2">
            Detailed reporting and insights will be available in this section
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
