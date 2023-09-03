import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className=" sticky z-10 top-0 header text-3xl flex justify-between items-center font-bold text-red-500 p-3 border-b-2  border-gray-600">
      <Link to={"/"}>
        <span>
          {" "}
          Desire<span className="text-white ">Movie</span>
        </span>
      </Link>
      <Link to={"/Addmovie"}>
        <h1 className="text-lg text-white flex items-center cursor-pointer">
          <Button className="flex item-center ">
            {" "}
            <AddCircleIcon className="mr-1 mt-1" /> <span>Add New </span>{" "}
          </Button>
        </h1>
      </Link>
    </div>
  );
}
