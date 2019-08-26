const express = require("express");
const axios = require("axios");

const app = express();

app.get("/lrt", (req, res, next) => {
  axios
    .get("https://www.lrt.lt/static/tvprog/tvprog.json")
    .then(result => {
      res.json(dataMapper(result.data.tvprog.items));
    })
    .catch(err => console.log(err));
});

const dataMapper = data => {
  const newData = data.map(item => {
    const {
      id,
      channel_title,
      time_start,
      time_end,
      is_radio,
      title,
      proc
    } = item;
    return {
      id,
      channel_title,
      time_start,
      time_end,
      is_radio,
      title,
      proc
    };
  });
  return newData;
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
