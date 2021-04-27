const { PORT = 5004} = process.env ;
const path = require("path");
 const app = require(path.resolve(
     `${process.env.SOLUTION_PATH || ""}`,
     "src/app"
 ));
const app = require("./app");
const listener = () => console.log(`Listening on PORT ${PORT}`);
app.listen(PORT,listener);
