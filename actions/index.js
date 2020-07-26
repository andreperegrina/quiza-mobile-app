import {getAll, add, remove} from "../utils/api";

export const LOAD_DECKS = "LOAD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_DECK = "REMOVE_DECK";

const generateAction = (type, response) => {
   return {
      type,
      response
   }
};

export const loadDecks = async () => {
   const decks = await getAll();
   return generateAction(LOAD_DECKS, decks);
};

export const addDeck = async (deck) => {
   const deckSaved = await add(deck);
   return generateAction(ADD_DECK, deckSaved);
};

export const addQuestion = async (id, question) => async (dispatch, getState) => {
   const state = getState();
   const deck = state[id];
   await add(deck);
   return generateAction(ADD_QUESTION, question);
};

export const removeQuestion = async (id) => {
   const idRemoved = await remove(id);
   return generateAction(ADD_QUESTION, {id: idRemoved});
};
