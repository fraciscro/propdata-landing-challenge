import React from "react";
import StartSymbol from "@/app/components/start-symbol";
import CRMInfo from "@/app/components/crm-info";

export default function CRMPage() {
  return (
    <main className="min-h-screen bg-[#121212] py-20 -mt-16">
      <div className="mt-15">
        <CRMInfo
          label="Propdata CRM"
          title={"Everything platform\nfor your real estate\nbusiness."}
          description="An AI-powered CRM specifically designed to manage all the real estate operations your business needs, including asset management, property advertising, organizational structure, and much more."
          imageSrc="/dashboard-hd.png"
          imageWidth={1200}
          imageHeight={675}
        />
      </div>
      <StartSymbol />
    </main>
  );
}
