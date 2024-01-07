import { json } from 'body-parser';
import { Router } from 'express';

const promoRouter = Router();
promoRouter.use(json());

const PROMOS = 'promotions';

promoRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send all the ${PROMOS} to you!`);
  })
  .post((req, res, next) => {
    res.end(`Will add the ${PROMOS}: ` + req.body.name + ' with details: ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /${PROMOS}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting all ${PROMOS}`);
  });

promoRouter
  .route(`/:promoId`)
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Get the ${PROMOS} ` + req.params.promoId + '!');
  })
  .post((req, res, next) => {
    res.end('POST method not supported');
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(
      `Will update the ${PROMOS}: ` +
        req.params.promoId +
        ' with name ' +
        req.body.name +
        ', with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end(`Deleted ${PROMOS} ` + req.params.promoId + '!');
  });

export default promoRouter;
