
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Play, Pause, Eye, Edit, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample campaign data
const campaigns = [
  {
    id: "1",
    name: "Q1 Customer Retention",
    status: "active",
    startDate: "2025-01-15",
    endDate: "2025-03-31",
    engagement: "78%",
  },
  {
    id: "2",
    name: "Summer Promotion 2025",
    status: "paused",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    engagement: "0%",
  },
  {
    id: "3",
    name: "New Product Launch",
    status: "completed",
    startDate: "2024-11-01",
    endDate: "2024-12-15",
    engagement: "92%",
  },
  {
    id: "4",
    name: "Fall Marketing Campaign",
    status: "draft",
    startDate: "",
    endDate: "",
    engagement: "0%",
  },
  {
    id: "5",
    name: "Year-End Customer Appreciation",
    status: "active",
    startDate: "2025-11-15",
    endDate: "2025-12-31",
    engagement: "45%",
  },
];

const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const CampaignTable = () => {
  const [campaignData] = useState(campaigns);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="table-container border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Engagement</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaignData.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    "capitalize font-normal",
                    getStatusColor(campaign.status)
                  )}
                >
                  {campaign.status}
                </Badge>
              </TableCell>
              <TableCell>{formatDate(campaign.startDate)}</TableCell>
              <TableCell>{formatDate(campaign.endDate)}</TableCell>
              <TableCell>{campaign.engagement}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    {campaign.status === "active" ? (
                      <DropdownMenuItem>
                        <Pause className="mr-2 h-4 w-4" /> Pause
                      </DropdownMenuItem>
                    ) : campaign.status === "paused" || campaign.status === "draft" ? (
                      <DropdownMenuItem>
                        <Play className="mr-2 h-4 w-4" /> Activate
                      </DropdownMenuItem>
                    ) : null}
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CampaignTable;
