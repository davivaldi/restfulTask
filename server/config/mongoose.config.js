const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/restfulTask", {
  useNewUrlParser: true
});