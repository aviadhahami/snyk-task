import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import router from './router';
import { PORT } from './config';

const app = express();

app.use(morgan('tiny'));
app.use(compression());
app.use(express.static('public'));
app.use(router);

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
