import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CRMInfoProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

const CRMInfo = ({
  label,
  title,
  description,
  imageSrc,
  imageWidth,
  imageHeight,
}: CRMInfoProps) => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8">
      {/* Text Content */}
      <div className="max-w-[800px] text-center mb-12">
        <span className="text-sm text-[#616161] tracking-[-0.42px] leading-[14px] [font-family:'Geist-Regular',Helvetica] mb-4 block">
          {label}
        </span>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[48px] md:leading-[56px] [font-family:'Geist-Medium',Helvetica] mb-6 whitespace-pre-line">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-[#616161] tracking-[-0.60px] leading-[30px] [font-family:'Geist-Regular',Helvetica]">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="relative mb-12">
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className=""
          priority
        />
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

export default CRMInfo;
