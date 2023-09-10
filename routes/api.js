'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  // Define a route for converting units
  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input;

      // Validate input
      if (!input) {
        return res.json({ error: 'No input provided' });
      }

      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);

      if (initUnit === 'invalid unit' && initNum === 'invalid number') {
        return res.json({ error: 'Invalid number and unit' });
      } else if (initUnit === 'invalid unit') {
        return res.json({ error: 'Invalid unit' });
      } else if (initNum === 'invalid number') {
        return res.json({ error: 'Invalid number' });
      }

      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString,
      });
    });
};
