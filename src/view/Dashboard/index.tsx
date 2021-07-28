import React from "react";
import { Section } from "./style";
import { Stat, JobList } from "./component";

function User() {
  return (
    <Section className="pt-3 mb-5">
      <br></br>
      <Stat></Stat>
      <br></br>
      <JobList></JobList>
    </Section>
  );
}

export default User;
