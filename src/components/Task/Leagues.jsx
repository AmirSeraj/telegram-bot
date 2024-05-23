import React, { useEffect, useState } from "react";

const Leagues = () => {
  const [loading, setLoading] = useState(false);
  const [leagues, setLeagues] = useState([]);

  const getAllLeagues = async () => {
    setLoading(true);
    try {
      const response = await fetch("fetch_get_all_tasks", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const leagues = await response.json();
      setLeagues(leagues);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  useEffect(() => {
    getAllLeagues();
  }, []);
  return <div>Leagues</div>;
};

export default Leagues;
