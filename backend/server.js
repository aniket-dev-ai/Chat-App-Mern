const app = require("./src/app")
require("dotenv").config()
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
})