import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const propertyData = [
  {
    address: "123 Main St, Anytown",
    type: "Single Family",
    status: "For Sale",
    badgeStyle: "bg-[#C8E3B1] text-[#121212]",
    price: "$550,000",
  },
  {
    address: "456 Oak Ave, Somewhere",
    type: "Apartment",
    status: "For rent",
    badgeStyle: "bg-[#8DAAC9] text-[#121212]",
    price: "$1,500",
  },
  {
    address: "789 Pine Rd, Elsewhere",
    type: "Condo",
    status: "Sold",
    badgeStyle: "bg-[#CB717A] text-[#121212]",
    price: "$275,000",
  },
  {
    address: "101 Cedar Ln, Nowhere",
    type: "Townhouse",
    status: "Rented",
    badgeStyle: "bg-[#F3DAA7] text-[#121212]",
    price: "$2,000",
  },
  {
    address: "42 Maple Ave, Anywhere",
    type: "Apartment",
    status: "For Sale",
    badgeStyle: "bg-[#C8E3B1] text-[#121212]",
    price: "$350,000",
  },
];

const CRMAssets = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8">
      {/* Text Content */}
      <div className="max-w-[800px] text-center mb-12">
        <span className="text-sm text-[#616161] tracking-[-0.42px] leading-[14px] [font-family:'Geist-Regular',Helvetica] mb-4 block">
          Assets Management
        </span>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[48px] md:leading-[56px] [font-family:'Geist-Medium',Helvetica] mb-6 whitespace-pre-line">
          {"Manage and organize real\nestate properties efficiently."}
        </h2>
        <p className="text-lg md:text-xl text-[#616161] tracking-[-0.60px] leading-[30px] [font-family:'Geist-Regular',Helvetica]">
          The Assets Management module handles real estate properties, managing
          their characteristics and images. It ensures that all property-related
          information is organized and easily accessible.
        </p>
      </div>

      {/* Table */}
      <div className="w-full max-w-[700px] md:max-w-[1000px] overflow-x-auto mb-12">
        <div className="w-full bg-[#121212] border border-[#2b2b2b] p-4 md:p-8">
          <Table>
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="w-[35%] py-4 md:py-6 font-medium text-[#616161] text-sm md:text-base tracking-[-0.48px] leading-4">
                  Address
                </TableHead>
                <TableHead className="w-[20%] py-4 md:py-6 font-medium text-[#616161] text-sm md:text-base tracking-[-0.48px] leading-4">
                  Type
                </TableHead>
                <TableHead className="w-[25%] py-4 md:py-6 font-medium text-[#616161] text-sm md:text-base tracking-[-0.48px] leading-4">
                  Status
                </TableHead>
                <TableHead className="w-[20%] py-4 md:py-6 font-medium text-[#616161] text-sm md:text-base tracking-[-0.48px] leading-4">
                  Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {propertyData.map((property, index) => (
                <TableRow key={index} className="border-[#2b2b2b]">
                  <TableCell className="text-[#616161] font-normal text-xs md:text-sm tracking-[-0.4px] leading-[1.125rem] py-3 md:py-4 break-words">
                    {property.address}
                  </TableCell>
                  <TableCell className="text-[#616161] font-normal text-xs md:text-sm tracking-[-0.4px] leading-[1.125rem] py-3 md:py-4">
                    {property.type}
                  </TableCell>
                  <TableCell className="text-[#616161] font-normal text-xs md:text-sm tracking-[-0.4px] leading-[1.125rem] py-3 md:py-4">
                    <Badge
                      className={`${property.badgeStyle} text-xs md:text-sm whitespace-nowrap`}
                    >
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-[#616161] font-normal text-xs md:text-sm tracking-[-0.4px] leading-[1.125rem] py-3 md:py-4">
                    {property.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

export default CRMAssets;
