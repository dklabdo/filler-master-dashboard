import React from "react";
import Nav from "../components/Nav";

function page() {
  return (
    <div className=" w-full flex flex-col gap-4 ">
      <Nav page="blogs" />
    </div>
  );
}

export default page;
