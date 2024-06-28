import classNames from "classnames";
import React from "react";

function AdvatageCard({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: string;
}) {
  return (
    <div
      className={classNames(
        "  flex flex-col items-center justify-center   shadow-md  shadow-black mx-10 my-4 md:w-[28%] gap-6 p-8 rounded-xl ",
        bg
      )}
    >
      {children}
    </div>
  );
}

export default AdvatageCard;
