import React from "react";
import { Section } from "./style";
import Stat from "./Stat";
import JobList from "./JobList";

function User() {
  return (
    <Section className="pt-3">
      <br></br>
      <Stat></Stat>
      <br></br>
      <JobList></JobList>
    </Section>
  );
}

export default User;
