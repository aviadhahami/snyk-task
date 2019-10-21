/* eslint-disable no-undef */

import express from 'express'
import './src/config'
import morgan from 'morgan';
import router from './src/router'

const app = express();
app.use(morgan('short'));
app.use(router);


const {PORT:port} = process.env;
app.listen(port,()=>
    console.log(`Server is listening on port ${port}`));
module.exports = app;

