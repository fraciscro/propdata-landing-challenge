import React from "react";
import Image from "next/image";

const StartSymbol = () => {
  return (
    <div className="w-full flex justify-center py-20">
      <Image
        src="/start-symbol.svg"
        alt="Start Symbol"
        width={24}
        height={24}
        priority
      />
    </div>
  );
};

export default StartSymbol;
