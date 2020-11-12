import express = require('express');
import TripManager from '../Core/tripManager';
import Trip from '../Models/Trip';
var router = express.Router();

//Homapage - GET Routing -
router.get('/trip', (req, res) => {
    //console.log(req.app.test);
    res.end('HomePage');

});

export default router;