import'./app/config/env';
import 'reflect-metadata';
import express from 'express';

import './app/config/env';
import './database/connect';
import routes from './router';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333,()=>console.log("🔥 Server Started ✅"));