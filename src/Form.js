import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from './Redux/actions/index';


const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

class ConnectedForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: 'initial form title',
        id: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }

handleClick() {
  const { title } = this.state;
  this.props.addArticle({ title });
}

render() {
    return (
      <div>
        <button onClick={this.handleClick}>
        dispatch
        </button>
      </div>
      // <form onSubmit={this.props.addArticle} >
      //   <label>
      //   <input
      //     type="text"
      //   />
      //   <button type="submit">
      //     submit
      //   </button>
      //   </label>
      // </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
