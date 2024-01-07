import bodyParser from 'body-parser';
import express from 'express';

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

const DISH = 'dish';

// PATH: /dishes
dishRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send all the ${DISH}s to you!`);
  })
  .post((req, res, next) => {
    res.end(`Will add the ${DISH}: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /${DISH}s`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting all the ${DISH}s!`);
  });

// PATH: /dishes/:dishId
dishRouter
  .route('/:dishId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send details of the ${DISH}: ${req.params.dishId} to you!`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /${DISH}s/${req.params.dishId}`);
  })
  .put((req, res, next) => {
    res.write(`Updating the ${DISH}: ${req.params.dishId}\n`);
    res.end(`Will update the ${DISH}: ${req.body.name} with details: ${req.body.description}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting ${DISH}: ${req.params.dishId}`);
  });

export default dishRouter;
