import {AsyncStorage} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {parseToJSON} from "./index";

const STORAGE_KEY = "MobileFlashCards:decks";

export const getAll = async () => {
   return AsyncStorage.getItem(STORAGE_KEY).then(parseToJSON);
};

export const add = async (item) => {
   let id = item.id;
   if (id == null) {
      id = uuidv4();
   }
   await AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [id]: item
   }));
   return {...item, id};
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

