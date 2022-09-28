import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as  dotenv from 'dotenv';

dotenv.config();

const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js"

const config: any = {
  type: 'postgres',
  port: Number(process.env.DB_PORT_DEV),
  host: process.env.DB_HOST_DEV,
  username: process.env.DB_USER_DEV,
  database: process.env.DB_DATABASE_DEV,
  password: process.env.DB_PASSWORD_DEV,
  entities:[`**/modules/**/model/*.${extensionFile}`],
  migrations:[`**/dataSource/migrations/*.${extensionFile}`],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const AppDataSource = new DataSource(config)

AppDataSource.initialize().then(()=>{
    console.log("⚡🔥🔥Database Connected!")
}).catch((err)=>{
    console.log("error", err);
})

const getDataSource = (delay = 3000): Promise<DataSource> => {
    if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (AppDataSource.isInitialized) resolve(AppDataSource);
        else reject("Failed to create connection with database");
      }, delay);
    });
  };

export { AppDataSource };