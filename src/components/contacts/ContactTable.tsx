
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
import { MoreHorizontal, Eye, Edit, Mail, Trash, UserCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

// Sample contact data
const contacts = [
  {
    id: "1",
    name: "Alex Johnson",
    company: "Acme Corp",
    email: "alex@acmecorp.com",
    phone: "(555) 123-4567",
    lastEngaged: "2025-03-15",
  },
  {
    id: "2",
    name: "Sam Williams",
    company: "Tech Solutions",
    email: "sam@techsolutions.com",
    phone: "(555) 234-5678",
    lastEngaged: "2025-02-28",
  },
  {
    id: "3",
    name: "Taylor Martinez",
    company: "Global Services",
    email: "taylor@globalservices.com",
    phone: "(555) 345-6789",
    lastEngaged: "2025-01-15",
  },
  {
    id: "4",
    name: "Jordan Lee",
    company: "Innovation Inc",
    email: "jordan@innovation.com",
    phone: "(555) 456-7890",
    lastEngaged: "2024-12-10",
  },
  {
    id: "5",
    name: "Casey Brown",
    company: "Premier Partners",
    email: "casey@premierpartners.com",
    phone: "(555) 567-8901",
    lastEngaged: "2024-11-05",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ContactTable = () => {
  const [contactData] = useState(contacts);
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const handleSelectContact = (contactId: string) => {
    setSelectedContacts((prev) =>
      prev.includes(contactId)
        ? prev.filter((id) => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleSelectAll = () => {
    setSelectedContacts(
      selectedContacts.length === contactData.length
        ? []
        : contactData.map((contact) => contact.id)
    );
  };

  return (
    <div className="space-y-4">
      {selectedContacts.length > 0 && (
        <div className="bg-gray-50 p-2 rounded-lg flex items-center justify-between">
          <span className="text-sm font-medium">
            {selectedContacts.length} contacts selected
          </span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <UserCheck className="h-4 w-4 mr-1" /> Add to Segment
            </Button>
            <Button size="sm" variant="outline">
              <Mail className="h-4 w-4 mr-1" /> Add to Campaign
            </Button>
            <Button size="sm" variant="outline" className="text-red-600">
              <Trash className="h-4 w-4 mr-1" /> Delete
            </Button>
          </div>
        </div>
      )}
      
      <div className="table-container border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    selectedContacts.length === contactData.length &&
                    contactData.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all contacts"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Last Engaged</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contactData.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedContacts.includes(contact.id)}
                    onCheckedChange={() => handleSelectContact(contact.id)}
                    aria-label={`Select ${contact.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{formatDate(contact.lastEngaged)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" /> View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit Contact
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" /> Add to Campaign
                      </DropdownMenuItem>
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
    </div>
  );
};

export default ContactTable;
