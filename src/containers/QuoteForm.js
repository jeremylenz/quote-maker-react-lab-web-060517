import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('QuoteForm receive props', nextProps)
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      content: event.target.value
    })
  }

  handleAuthor = event => {
    this.setState({
      author: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    console.log('handleOnSubmit')
    event.preventDefault();
    // Create quote object from state
    let newQuote = {
      content: this.state.content,
      author: this.state.author,
      votes: 0,
      id: uuid()
    }

    // Pass quote object to action creator
    this.props.addQuote(newQuote);
    // Update component state to return to default state
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    // console.log(this.props.addQuote)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(e) => this.handleOnSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name={this.state.content}
                        value={this.state.content}
                        onChange={(e) => this.handleOnChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name={this.state.author}
                        onChange={(e) => this.handleAuthor(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default" >Add</button>
                    </div>
                  </div>
                </form>
              </div>
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

export default connect(mapState, mapDispatch)(QuoteForm);
