import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { DB_CONNECTION_STRING } = process.env;

console.log(DB_CONNECTION_STRING,"DB")

const mongooseConnect = async (cb?: () => void) => {
  if (!DB_CONNECTION_STRING) throw new Error("DB connection string not valid");
  mongoose.connect(DB_CONNECTION_STRING);

  mongoose.connection.on("connected", () => {
    console.log("Mongoose default connection is open to ", DB_CONNECTION_STRING);
    if (cb) cb();
  });

  mongoose.connection.on("error", err => {
    console.log(`Mongoose default connection has occured ${err} error`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", () => {
    //@ts-ignore
    mongoose.connection.close((): void => {
      console.log(
        "Mongoose default connection is disconnected due to application termination"
      );
      process.exit(0);
    });
  });
};

export default mongooseConnect;
