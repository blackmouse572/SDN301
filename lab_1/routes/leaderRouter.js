import { json } from 'body-parser';
import { Router } from 'express';

const leaderRouter = Router();
leaderRouter.use(json());

const LEADER = 'leader';

leaderRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send all the ${LEADER}s to you!`);
  })
  .post((req, res, next) => {
    res.end(`Will add the ${LEADER}: ` + req.body.name + ' with details: ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /${LEADER}s`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting all ${LEADER}s`);
  });

leaderRouter
  .route(`/:leaderId`)
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Get the ${LEADER} ` + req.params.leaderId + '!');
  })
  .post((req, res, next) => {
    res.end('POST method not supported');
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(
      `Will update the ${LEADER}: ` +
        req.params.leaderId +
        ' with name ' +
        req.body.name +
        ', with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    res.end(`Deleted ${LEADER} ` + req.params.leaderId + '!');
  });

export default leaderRouter;
