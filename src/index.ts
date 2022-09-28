import 'reflect-metadata';
import 'dotenv/config';
import "express-async-errors"
import express from 'express';
import '@dataSource//connection';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

export { app };
