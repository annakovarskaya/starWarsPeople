var express = require('express');
var router = express.Router();

const swapi = require('swapi-node');

function getPage(num, people, res) {
  const url = `http://swapi.co/api/people/?page=${num}`;
  swapi.get(url).then((result) => {
    people = people.concat(result.results)
    /*if(result.next) {
      getPage(num + 1, people, res);
    } else {*/
      res.json(people);
    //}
  })
}

/* GET people listing. */
router.get('/', function(req, res, next) {
    swapi.get('http://swapi.co/api/people').then((result) => {
        getPage(1, [], res);
    });
});

module.exports = router;
