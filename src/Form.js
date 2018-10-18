import React from 'react';

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        test: 'initial form'
      }
  }
render() {
    return (
      <p>{this.state.test}</p>
    );
  }
}
export default Form;
