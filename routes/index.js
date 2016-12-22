/* jshint esversion: 6 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tuxitop Timestamp microservice',
                          baseURL: req.get('host')});
});

router.get('/:dateString', (req, res, next) => {
    let dateString = req.params.dateString;
    let dateUTC;
    // check if dateString is a number of seconds
    if (isNaN(parseInt(dateString))) {
        let dateLocal = new Date(dateString);
        dateUTC = new Date(dateLocal.valueOf() - (dateLocal.getTimezoneOffset() * 60 * 1000));
    } else {
        dateUTC = new Date(parseInt(dateString) * 1000);
    }
    let json = {
        unix: null,
        natural: null,
    };
    let monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
    if (!isNaN(dateUTC)) {
        json.unix = Math.floor(dateUTC.getTime()/1000);
        json.natural = `${monthNames[dateUTC.getUTCMonth()]} ${dateUTC.getUTCDate()}, ${dateUTC.getUTCFullYear()}`;
    }
    res.send(json);
});

module.exports = router;
