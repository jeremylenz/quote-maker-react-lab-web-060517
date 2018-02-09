// import uuid from 'uuid';

// export default (state = [], action) => {
//
//   return state;
// }

export function quotes(state = {
  quotes: []
}, action) {

  let idx;
  let newQuotes;
  let foundQuote;

  console.log(action)

  switch(action.type) {
    case 'ADD_QUOTE':
      console.log('ADD_QUOTE dispatched')
      return Object.assign({}, state, {
        quotes: state.quotes.concat(action.quote)
      });
    case 'REMOVE_QUOTE':
      console.log('REMOVE_QUOTE dispatched')
      foundQuote = state.quotes.find((quote) => quote.id === action.quoteId)
      idx = state.quotes.indexOf(foundQuote);
      newQuotes = [...state.quotes]
      return Object.assign({}, state, {
        quotes: [
          ...newQuotes.slice(0, idx),
          ...newQuotes.slice(idx + 1)
        ]
      });
    case 'UPVOTE_QUOTE':
      console.log('UPVOTE_QUOTE dispatched')
      foundQuote = state.quotes.find((quote) => quote.id === action.quoteId)
      idx = state.quotes.indexOf(foundQuote);
      newQuotes = [...state.quotes]
      newQuotes[idx].votes++;
      console.log(newQuotes[idx].votes)
      return Object.assign({}, state, {
        quotes: newQuotes
      });
    case 'DOWNVOTE_QUOTE':
      console.log('DOWNVOTE_QUOTE dispatched')
      foundQuote = state.quotes.find((quote) => quote.id === action.quoteId)
      idx = state.quotes.indexOf(foundQuote);
      newQuotes = [...state.quotes]
      newQuotes[idx].votes--;
      console.log(newQuotes[idx].votes)
      return Object.assign({}, state, {
        quotes: newQuotes
      });
    default:
      return state;
  }

}
