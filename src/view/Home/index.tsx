import React from "react";
import { Header, SearchTap } from "./component";
import ListOfJob from "../ListOfJob";
import { Divider } from "./style";

function Home() {
  return (
    <>
      <div className="position-relative">
        <Header></Header>
        <SearchTap></SearchTap>
      </div>
      <Divider></Divider>
      <ListOfJob></ListOfJob>
    </>
  );
}

export default Home;
