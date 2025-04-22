import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

// Feature tags data
const features = [
  "Handling assets",
  "Organizational structure",
  "Transaction processes",
  "User interactions",
  "…",
];

const Dashboard = () => {
  return (
    <section className="relative w-full min-h-10 bg-[#121212] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/dashboard-bg.png"
          alt="Dashboard Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* CRM Image */}
          <div className="w-full md:w-[600px]">
            <Image
              src="/crm.png"
              alt="CRM Dashboard"
              width={600}
              height={504}
              className="w-full h-auto"
            />
          </div>

          {/* Feature Card */}
          <Card className="flex flex-col w-full md:w-[340px] h-[370px] bg-neutral-900 border-medium-gray rounded-none p-5">
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <h1 className="font-medium text-neutral-50 text-4xl tracking-[-1.2px] leading-[40px] [font-family:'Geist-Medium',Helvetica]">
                Everything <br />
                real estate needs.
              </h1>

              <p className="font-normal text-lg tracking-[-0.48px] leading-[26px] [font-family:'Geist-Regular',Helvetica]">
                <span className="text-[#616161] tracking-[-0.12px]">
                  An AI-powered{" "}
                </span>
                <span className="text-neutral-50 tracking-[-0.12px]">CRM</span>
                <span className="text-[#616161] tracking-[-0.12px]">
                  {" "}
                  system specifically designed to manage real estate operations.
                </span>
              </p>

              <div className="flex flex-wrap items-start gap-[6px] pt-1 w-full">
                {features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-medium-gray border-none rounded-none px-2.5 py-1"
                  >
                    <span className="font-medium text-white text-xs tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
                      {feature}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="p-0 mt-auto">
              <Button
                variant="outline"
                className="h-10 px-5 py-1.5 rounded-none border-white bg-transparent w-fit"
              >
                <span className="font-medium text-white text-xs text-center tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
                  Discover more
                </span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
