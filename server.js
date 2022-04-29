
const app = require("./app");

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, (request, response) => {
    console.log("LISTENING ON PORT: ${PORT}✅");
});