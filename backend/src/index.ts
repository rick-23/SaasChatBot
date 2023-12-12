import app from "./app";
import { connectToDatabase } from "./db/connection";

const PORT = process.env.PORT || 5001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server open and connected to the database")
    );
  })
  .catch((error) => console.log(error));
