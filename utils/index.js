/**
 * @description Convert string data to JSON
 * @param {string} data
 * @returns {any} data converted into JSON
 */
export const parseToJSON = (data) => {
   return data != null ? JSON.parse(data) : undefined;
};

/**
 * @description Convert object to array
 * @param {object} object
 * @returns {array} Array from the object
 */
export const convertObjectToArray = (object) => {
   return Object.keys(object).map((e) => object[e]);
};

/**
 * @description Check if the receive object is empty
 * @param {object} object
 * @returns {boolean} Returns true if the object has not property
 */
export const isEmptyObject = (object) => Object.keys(object).length <= 0;
