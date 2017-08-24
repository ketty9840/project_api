import express from 'express';
import config from '../config';
import initializeDb from '../db';
import user from '../controllers/user';
import upload from '../controllers/upload';

let router = express();

// connect to db
initializeDb( db => {

    // internal middleware
    //router.use(middleware({config, db}));

    // api route v1 (/v1)
    //router.use('/product', product({ config, db }));
    router.use('/user', user({ config, db }));
    router.use('/upload',upload({ config, db}));
  

});

export default router;