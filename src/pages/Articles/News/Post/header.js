import React from "react";

import TeamInfo from "../../Elements/teamInfo";

export default function Header(props) {
  function teamInfo(team) {
    return team ? <TeamInfo team={team} /> : "";
  }

  return (
    <>
      <div>{teamInfo(props.teamData)}</div>
    </>
  );
}
