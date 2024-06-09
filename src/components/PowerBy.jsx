import React from "react";
import { Link } from "react-router-dom";

const PowerBy = () => {
  return (
    <Link
      to={"https://ysreimer-ortiz.netlify.app/"}
      target="_blank"
      className=" text-[7px] dark:text-white p-3 w-full flex justify-center hover:text-blue-700 dark:hover:text-blue-700 "
    >
      powered by: @jesusDev
    </Link>
  );
};

export default PowerBy;
