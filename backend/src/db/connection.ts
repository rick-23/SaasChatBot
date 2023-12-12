import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error: any) {
    console.log(error);
    throw new Error("Could not connect to database", error.message);
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error: any) {
    console.log(error);
    throw new Error("Could not disconnect from database", error.message);
  }
}

export { connectToDatabase, disconnectFromDatabase };
