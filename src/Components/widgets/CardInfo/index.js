import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import api from "../../../services/api";

export default function CarInfo(props) {
  const { teamId, date } = props;
  const [team, setTeam] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/teams/${teamId}`);

      setTeam(data);
    }

    fetchData();
  }, [teamId]);

  return (
    <div className="cardInfo">
      <span className="teamName"> {team.name} </span>
      <span className="date">
        <FontAwesomeIcon icon={faClock} />
        {date}
      </span>
    </div>
  );
}
