import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres'
});