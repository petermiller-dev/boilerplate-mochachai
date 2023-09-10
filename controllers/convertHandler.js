function ConvertHandler() {
  this.getNum = function(input) {
    // Extract the numerical part of the input
    let result;
    
    // Handle cases where there is no numerical input
    if (!input.match(/[0-9]/)) {
      result = 1;
    } else {
      // Handle fractions and decimals
      result = eval(input.split(/[^0-9./]/)[0]);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    // Extract the unit part of the input and convert it to lowercase
    let result = input.split(/[0-9/.]/).filter(Boolean)[0].toLowerCase();
    
    // Map some common units to their standard forms
    const unitMap = {
      gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
    };
    
    return unitMap[result] || result;
  };
  
  this.getReturnUnit = function(initUnit) {
    // Map the input unit to the corresponding return unit
    const unitMap = {
      gallons: 'liters',
      liters: 'gallons',
      miles: 'kilometers',
      kilometers: 'miles',
      pounds: 'kilograms',
      kilograms: 'pounds',
    };
    
    return unitMap[initUnit.toLowerCase()] || 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    // Map units to their spelled-out forms
    const unitMap = {
      gallons: 'gallons',
      liters: 'liters',
      miles: 'miles',
      kilometers: 'kilometers',
      pounds: 'pounds',
      kilograms: 'kilograms',
    };
    
    return unitMap[unit.toLowerCase()] || 'invalid unit';
  };
  
  this.convert = function(initNum, initUnit) {
    // Conversion factors for various units
    const conversionFactors = {
      gallons: 3.78541,
      liters: 0.264172,
      miles: 1.60934,
      kilometers: 0.621371,
      pounds: 0.453592,
      kilograms: 2.20462,
    };
    
    // Perform the conversion
    const result = initNum * conversionFactors[initUnit.toLowerCase()];
    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    // Construct the result string
    const resultString = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return resultString;
  };
}

module.exports = ConvertHandler;
