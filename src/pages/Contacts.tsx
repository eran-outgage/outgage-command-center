
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ContactTable from "@/components/contacts/ContactTable";
import QuickActionButton from "@/components/common/QuickActionButton";

const Contacts = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Import</Button>
          <Button variant="outline">Export</Button>
          <QuickActionButton>Add Contact</QuickActionButton>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Contacts</TabsTrigger>
          <TabsTrigger value="recent">Recently Added</TabsTrigger>
          <TabsTrigger value="engaged">Recently Engaged</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-10" placeholder="Search contacts..." />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  <SelectItem value="acme">Acme Corp</SelectItem>
                  <SelectItem value="tech">Tech Solutions</SelectItem>
                  <SelectItem value="global">Global Services</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Reset Filters</Button>
            </div>
          </div>
          
          <ContactTable />
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-10" placeholder="Search contacts..." />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  <SelectItem value="acme">Acme Corp</SelectItem>
                  <SelectItem value="tech">Tech Solutions</SelectItem>
                  <SelectItem value="global">Global Services</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Reset Filters</Button>
            </div>
          </div>
          
          <ContactTable />
        </TabsContent>
        
        <TabsContent value="engaged" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="pl-10" placeholder="Search contacts..." />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Companies</SelectItem>
                  <SelectItem value="acme">Acme Corp</SelectItem>
                  <SelectItem value="tech">Tech Solutions</SelectItem>
                  <SelectItem value="global">Global Services</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Reset Filters</Button>
            </div>
          </div>
          
          <ContactTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contacts;
