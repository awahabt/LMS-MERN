import { CircleSlash } from "lucide-react";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-10">
      <CircleSlash className="w-40 h-40" />
      <p className="text-3xl font-bold">This page doesn't exist! 404</p>
    </div>
  );
};

export default NotFoundPage;
