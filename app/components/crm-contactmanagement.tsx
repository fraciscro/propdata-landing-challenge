import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoreVertical, Plus, Search } from "lucide-react";

// Contact data for mapping
const contacts = [
  {
    id: 1,
    name: "Sophie Winslow",
    role: "Client",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Agent",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "Vendor",
  },
];

const CRMContactManagement = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8">
      {/* Text Content */}
      <div className="max-w-[800px] text-center mb-12">
        <span className="text-sm text-[#616161] tracking-[-0.42px] leading-[14px] [font-family:'Geist-Regular',Helvetica] mb-4 block">
          User and Contact Management
        </span>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[48px] md:leading-[56px] [font-family:'Geist-Medium',Helvetica] mb-6 whitespace-pre-line">
          {"Track users and contacts,\nwithin your CRM."}
        </h2>
        <p className="text-lg md:text-xl text-[#616161] tracking-[-0.60px] leading-[30px] [font-family:'Geist-Regular',Helvetica]">
          This module streamlines the management of users, contacts, and
          candidates, providing detailed information like personal details,
          status, and relationships with other entities. It ensures seamless
          tracking of interactions and relationships across your CRM.
        </p>
      </div>

      {/* Contact Management UI */}
      <div className="w-full max-w-[700px] md:max-w-[800px] mb-12">
        <div className="w-full">
          {/* Search and Add Contact Section */}
          <div className="flex w-full items-center gap-4 mb-4">
            <div className="flex h-12 items-center gap-4 px-4 py-2 relative flex-1 grow border border-solid border-[#2b2b2b] bg-transparent">
              <Search className="w-3.5 h-3.5 text-[#616161]" />
              <Input
                className="border-0 bg-transparent p-0 h-auto text-sm text-[#616161] placeholder:text-[#616161] focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Geist-Regular',Helvetica] focus:outline-none cursor-default"
                placeholder="Search contacts..."
                style={{ backgroundColor: "transparent" }}
                disabled
                readOnly
              />
            </div>
            <Button className="h-12 px-6 py-2 bg-white text-black hover:bg-white/90 border border-solid border-white rounded-none [font-family:'Geist-Medium',Helvetica] font-medium text-sm tracking-[-0.42px]">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Add Contact
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-col w-full items-start gap-4">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className="flex flex-col items-start gap-[31px] p-6 w-full bg-[#121212] border border-solid border-[#2b2b2b] rounded-none"
              >
                <div className="flex justify-between items-start w-full">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-[#2b2b2b]" />
                    </Avatar>
                    <div className="flex flex-col gap-2">
                      <span className="text-base font-medium text-white">
                        {contact.name}
                      </span>
                      <span className="text-sm text-[#616161]">
                        {contact.role}
                      </span>
                      {/* Skeletons */}
                      <div className="flex flex-col gap-1.5">
                        <div className="h-1.5 w-24 bg-[#2b2b2b] animate-pulse" />
                        <div className="h-1.5 w-16 bg-[#2b2b2b] animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <MoreVertical className="text-[#616161] w-4 h-4 cursor-pointer" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <Button
        variant="outline"
        className="h-10 px-5 py-1.5 rounded-none border-white bg-transparent"
      >
        <span className="font-medium text-white text-xs text-center tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
          Learn more
        </span>
      </Button>
    </div>
  );
};

export default CRMContactManagement;
