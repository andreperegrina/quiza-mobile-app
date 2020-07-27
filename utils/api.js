import {AsyncStorage} from 'react-native';
import {parseToJSON, uuidv4} from "./index";

const STORAGE_KEY = "MobileFlashCards:decks";

export const getAll = async () => {
   return AsyncStorage.getItem(STORAGE_KEY).then(parseToJSON);
};

export const add = async (item) => {
   let id = item.id;
   if (id == null) {
      id = uuidv4();
   }
   const newItem = {...item, id};
   await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [newItem.id]: newItem
   }));
   return newItem;
};

export const remove = async (id) => {
   return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
      const data = JSON.parse(results);
      data[id] = undefined;
      delete data[id];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return id;
   });
};

