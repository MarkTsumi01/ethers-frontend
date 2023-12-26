import React from "react";
import Detailswallet from "./components/Detailswallet";
import Changetheme from "./components/Changetheme";

const Page = () => {
  return (
    <>
      <Changetheme />
      <div className="container mx-auto my-8 flex justify-center">
        <Detailswallet />
      </div>
    </>
  );
};

export default Page;
