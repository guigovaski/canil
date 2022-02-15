import express from "express";
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';

import MainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, './views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(MainRoutes);

// routes

server.listen(process.env.PORT);