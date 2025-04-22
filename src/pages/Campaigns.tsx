
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignTable from "@/components/campaigns/CampaignTable";
import CampaignFilter from "@/components/campaigns/CampaignFilter";
import QuickActionButton from "@/components/common/QuickActionButton";

const Campaigns = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
        <QuickActionButton>New Campaign</QuickActionButton>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Campaigns</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="paused">Paused</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <CampaignFilter />
          <CampaignTable />
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <CampaignFilter />
          <CampaignTable />
        </TabsContent>

        <TabsContent value="paused" className="space-y-6">
          <CampaignFilter />
          <CampaignTable />
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <CampaignFilter />
          <CampaignTable />
        </TabsContent>

        <TabsContent value="draft" className="space-y-6">
          <CampaignFilter />
          <CampaignTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Campaigns;
