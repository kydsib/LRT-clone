import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [channels, setChannel] = useState([]);

  useEffect(() => {
    axios
      .get("/lrt")
      .then(res => {
        console.log(res);
        setChannel(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {channels.map(channel => (
          <li key={channel.id}>
            Title {channel.channel_title}, start time{channel.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
