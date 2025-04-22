
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Help = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Help Center</CardTitle>
        </CardHeader>
        <CardContent className="text-center py-12">
          <h2 className="text-lg font-medium text-gray-600">
            Help documentation and resources coming soon
          </h2>
          <p className="text-gray-500 mt-2">
            Find answers to frequently asked questions and get support
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;
