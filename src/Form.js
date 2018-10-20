import React from 'react';
import { connect } from 'react-redux';
import { addArticle, createNewArticle } from './Redux/actions/index';
import store from './Redux/store';



const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    createNewArticle: newArticle => dispatch(createNewArticle(newArticle))
  };
};

class ConnectedForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '',
        contents: '',
      }
      this.clickAddArticle = this.clickAddArticle.bind(this)
      this.changeTitle = this.changeTitle.bind(this)
      this.clickCreateNewArticle = this.clickCreateNewArticle.bind(this)
      this.changeContents = this.changeContents.bind(this)
  }

clickAddArticle() {
  const { title } = this.state;
  this.props.addArticle({ title });
  this.setState({
    title: '',
  })
  console.log(store.getState());
}

clickCreateNewArticle() {
  const { contents } = this.state;
  this.props.createNewArticle({ contents });
  this.setState({
    contents: ''
  })
  console.log(store.getState());

}

changeTitle(e) {
  this.setState({
    title: e.target.value
  });
}

changeContents(e) {
  this.setState({
    contents: e.target.value
  });
}


render() {
    return (
      <div>
        <div>
          title: <input
            type="text"
            value={this.state.title}
            onChange={this.changeTitle}
          />
          <button onClick={this.clickAddArticle}>
          addarticle
          </button>
        </div>
        <div>
          contents: <input
            type="text"
            value={this.state.contents}
            onChange={this.changeContents}
          />
          <button onClick={this.clickCreateNewArticle}>
          createNewArticle
          </button>
        </div>
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
