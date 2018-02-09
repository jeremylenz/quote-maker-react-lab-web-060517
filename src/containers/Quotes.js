import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('receive props', nextProps)
  }

  render() {
    const quotes = this.props.quotes
    console.log(quotes)
    // debugger;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map((quote) => <QuoteCard
              key={quote.id}
              id={quote.id}
              content={quote.content}
              author={quote.author}
              votes={quote.votes}
              upvoteQuote={this.props.upvoteQuote}
              downvoteQuote={this.props.downvoteQuote}
              removeQuote={this.props.removeQuote}
              />)
             }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatch = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote,
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Quotes);
