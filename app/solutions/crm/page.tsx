import React from "react";
import StartSymbol from "@/app/components/start-symbol";
import CRMInfo from "@/app/components/crm-info";
import CRMAssets from "@/app/components/crm-assets";
import CRMContactManagement from "@/app/components/crm-contactmanagement";
import Footer from "@/app/components/footer";
import FooterCTA from "@/app/components/footer-cta";

export default function CRMPage() {
  return (
    <main className="min-h-screen bg-[#121212] py-20 -mt-16">
      <div className="mt-15">
        <CRMInfo
          label="Propdata CRM"
          title={"Everything platform\nfor your real estate\nbusiness."}
          description="An AI-powered CRM specifically designed to manage all the real estate operations your business needs, including asset management, property advertising, organizational structure, and much more."
          imageSrc="/dashboard-hd.png"
          imageWidth={1000}
          imageHeight={675}
        />
      </div>
      <StartSymbol />
      <CRMAssets />
      <StartSymbol />
      <CRMContactManagement />
      <StartSymbol />
      <CRMInfo
        label="Pipeline and Process Management"
        title={
          "Streamline and track every\nstage of your real estate\ntransactions with ease."
        }
        description="The Pipeline and Process Management module tracks the various stages of real estate transactions, including buyers, sellers, and financial processes. It ensures organized and efficient management of each step in the transaction process, from initial contact to final payment."
        imageSrc="/crm-bentogrid.png"
        imageWidth={1000}
        imageHeight={1000}
      />
      <StartSymbol />
      <CRMInfo
        label="Property Advertising"
        title={
          "Effortlessly advertise your\nproperties on hundreds of\nportals worldwide."
        }
        description="Streamline your advertising efforts and expand your reach with just a few clicks, ensuring your properties get the attention they deserve and reach potential buyers on 200+ portals across the globe."
        imageSrc="/crm-advertising.png"
        imageWidth={650}
        imageHeight={650}
      />
      <StartSymbol />
      <CRMInfo
        label="Proposals and Visits"
        title={
          "Keep your proposals, visits, and\nclient interactions organized\nand under control."
        }
        description="Manage proposals and visits efficiently, tracking status, scheduling, notes, and financial offers to ensure every client interaction is documented and handled seamlessly."
        imageSrc="/crm-proposals.png"
        imageWidth={500}
        imageHeight={500}
      />
      <StartSymbol />
      <CRMInfo
        label="Document and Task Management"
        title={
          "Organize documents and\nmanage tasks effortlessly for\nseamless workflow."
        }
        description="The Document and Task Management module streamlines the handling of documents related to assets and transactions while managing tasks assigned to users, enhancing collaboration and workflow efficiency."
        imageSrc="/crm-document-management.png"
        imageWidth={600}
        imageHeight={600}
      />
      <StartSymbol />
      <FooterCTA />
      <Footer />
    </main>
  );
}
