// This function will be called on the onClick event of the button and should show an alert window (pop up Box).
/**
 * @function showAlert
 * @name showAlert
 * @param {object} event
 * @return {bool}
 * */
function showAlert (event) {
    // Retrieve and assign the attribute value (pre) of the event target to btnValue.
  var btnValue = event.target.getAttribute('pre');

  // Create and assign reference to element using the getElementbyId method
  // inputData should now contain a reference to the input field
  var inputdata = document.getElementById('inputdata');

    // Concatenate and assign resulting string to variable displayData
  var displayData = btnValue + ' ' + inputdata.value;

    // an alert box 'pop up window' appears displaying the variable 'displayData'
  alert(displayData);
  return true;
}

// Boolean.
/**
 * @function checkBoolean
 * @name checkBoolean
 * @param {Boolean} bool
 * @return {string}
 * */

function checkBoolean (bool) {
  if (bool === false) {
    return "it's not true";
  } else {
    return "it's true";
  }
}

// Null.
/**
 * @function checkNull
 * @name checkNull
 * @param {object} nul
 * @return {string}
 */

function checkNull (nul) {
  if (nul === null) {
    return "it's Null";
  } else {
    return "it's not Null";
  }
}

// Undefined.
/**
 * @function checkUndefined
 * @name checkUndefined
 * @param undfnd
 * @return {string}
 */

function checkUndefined (undfnd) {
  if (typeof undfnd === 'undefined') {
    return "it's Undefined";
  } else {
    return "it's not Undefined";
  }
}


// String.
/**
 * @function jointStrings
 * @name jointStrings
 * @param {string} stringA
 * @param {string} stringB
 * @return {string}
 */

function jointStrings (stringA, stringB) {
  return stringA + ' ' + stringB;
}

// Number.
/**
 * @function addNumbers
 * @name addNumbers
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */

function addNumbers (numA, numB) {
  return numA + numB;
}


/**
 * @function buzzers
 * @name buzzers
 * @param {string|Number} A
 * @param {string|Number} B
 * @param {string|Number} C
 * @return {string|Number}
 */

function buzzers (A, B, C) {
  return A + B + C;
}

/**
 * @function names
 * @name names
 * @param {string} M1
 * @param {string} M2
 * @param {string} M3
 * @return {string}
 */

function names (M1, M2, M3) {
  return 'Team YMCA ' + M1 + " doesn't know " + M2 + ' but is related to ' + M3;
}
