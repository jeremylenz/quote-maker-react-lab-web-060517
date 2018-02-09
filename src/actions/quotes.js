// TODO: Create action creators as defined in tests

export function addQuote(quote) {
  console.log('ADD_QUOTE Action')
  return {
    type: 'ADD_QUOTE',
    quote
  }
};

export function removeQuote(quoteId) {
  console.log('REMOVE_QUOTE Action')
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export function upvoteQuote(quoteId) {
  console.log('UPVOTE_QUOTE Action')
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export function downvoteQuote(quoteId) {
  console.log('DOWNVOTE_QUOTE Action')
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}
