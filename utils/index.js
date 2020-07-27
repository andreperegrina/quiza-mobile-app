import {Dimensions} from 'react-native';

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


/**
 * @description Check if the phone is on portrait mode
 * @returns {boolean} Returns true if the phone is on portrait mode
 */
export const isPortrait = () => {
   const dim = Dimensions.get('screen');
   return dim.height >= dim.width;
};

/**
 * @description Check if the phone is on landscape mode
 * @returns {boolean} Returns true if the phone is on landscape mode
 */
export const isLandscape = () => {
   const dim = Dimensions.get('screen');
   return dim.width >= dim.height;
};



// Remove library uuid because it cause error with Expo
// Move the code of the uuid for this solution
// https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
/**
 * @description Generate a uuid
 * @returns {string} Returns uuid
 */
export const uuidv4 = () => {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
};
