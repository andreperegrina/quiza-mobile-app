import {LOAD_DECKS, ADD_DECK, ADD_QUESTION, REMOVE_DECK} from "../actions";

export default (state = {}, action) => {
   const {response, type} = action;
   switch (type) {
      case LOAD_DECKS:
         return {
            ...state,
            ...response,
         };
      case ADD_DECK:
         return {
            ...state,
            [response.id]: response,
         };
      case ADD_QUESTION:
         return {
            ...state,
            [response.deck_id]: {
               ...state[response.deck_id],
               questions: [
                  ...state[response.deck_id].questions,
                  response
               ]
            },
         };
      case REMOVE_DECK:
         const newState = {...state};
         delete newState[response.id];
         return newState;
      default:
         return state;
   }

};
