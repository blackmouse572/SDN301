import express from 'express';
import http from 'http';
import dishRouter from './routes/dishRouter';

const hostname = 'localhost';
const port = 3000;

const app = express();

// ROUTES DEFINITIONS
const dishRouter = dishRouter();

// MIDDLEWARES
app.use('/dishes', dishRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
