const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/robotLocation", require("./routes/robot_location"));
app.all("*", (req, res) => {
  console.log("Request received");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));