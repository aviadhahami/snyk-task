/* eslint-disable no-undef */

import express from 'express'
const app = express();

app.listen(3000,()=>
    console.log(`Server is listening on port 3400`));
module.exports = app;

