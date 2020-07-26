import {getAll, add, remove} from "../utils/api";

export const LOAD_DECKS = "LOAD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_DECK = "REMOVE_DECK";

const generateAction = (type, response) => ({
   type,
   response
});

export const loadDecks = () => async (dispatch) => {
   const decks = await getAll();
   return dispatch(generateAction(LOAD_DECKS, decks));
};

export const addDeck = (deck) => async (dispatch) => {
   const newDeck = {...deck};
   if (newDeck.questions == null) {
      newDeck.questions = [];
   }
   const deckSaved = await add(newDeck);
   return dispatch(generateAction(ADD_DECK, deckSaved));
};

export const addQuestion = (id, question) => async (dispatch, getState) => {
   const state = getState();
   const deck = state[id];
   const newQuestion = {...question, deck_id: id};
   const newDeck = {...deck, questions: [...deck.questions, newQuestion]};
   await add(newDeck);
   return dispatch(generateAction(ADD_QUESTION, newQuestion));
};

export const removeDeck = (id) => async (dispatch) => {
   const idRemoved = await remove(id);
   await remove();
   return dispatch(generateAction(REMOVE_DECK, {id: idRemoved}));
};
