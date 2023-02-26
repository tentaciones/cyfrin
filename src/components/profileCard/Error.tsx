import React from "react";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white font-bold">
      <p>404 | Page Not Found</p>
    </div>
  );
};

export default Error;
