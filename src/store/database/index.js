import { Database } from "@vuex-orm/core";
import { BarcodeDetail } from "../models/Barcodes";

const database = new Database();
database.register(BarcodeDetail)




export default database;
