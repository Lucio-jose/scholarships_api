"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

require("reflect-metadata");

var _typeorm = require("typeorm");

var dotenv = _interopRequireWildcard(require("dotenv"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

dotenv.config();
const extensionFile = process.env.NODE_ENV === "development" ? "ts" : "js";
const config = {
  type: 'postgres',
  port: Number(process.env.DB_PORT_DEV),
  host: process.env.DB_HOST_DEV,
  username: process.env.DB_USER_DEV,
  database: process.env.DB_DATABASE_DEV,
  password: process.env.DB_PASSWORD_DEV,
  entities: [`**/modules/**/model/*.${extensionFile}`],
  migrations: [`**/dataSource/migrations/*.${extensionFile}`],
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};
const AppDataSource = new _typeorm.DataSource(config);
exports.AppDataSource = AppDataSource;
AppDataSource.initialize().then(() => {
  console.log("⚡🔥🔥Database Connected!");
}).catch(err => {
  console.log("error", err);
});

const getDataSource = (delay = 3000) => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);else reject("Failed to create connection with database");
    }, delay);
  });
};