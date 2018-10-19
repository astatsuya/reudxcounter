import React from 'react';
import { connect } from 'react-redux';
import store from './Redux/store';


const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const ConnectedList = ({ articles }) => {
  console.log(store.getState())
  return (
    <ul>
      {articles.map((array, index) =>
        <div key={index}>
          <li >index{index}</li>
          <li >title:{array.title}</li>
        </div>
      )}
    </ul>
  );
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
