import { DataSource } from "typeorm";
import { entities } from "../entities";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db.sql",
  logging: true,
  entities,
  migrations: ["src/migration/**/*.ts"]
});
