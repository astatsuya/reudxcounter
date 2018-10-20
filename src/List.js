import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    articles: state.articles,
    createNewArticle: state.newArticle
  };
};

const ConnectedList = ({ articles, createNewArticle }) => {
  return (
    <ul>
      {articles.map((array, index) =>
        <div key={index}>
          <li >index{index}</li>
          <li >title:{array.title}</li>
        </div>
      )}
      {createNewArticle.map((array, index) =>
        <div key={index}>
          <li >index{index}</li>
          <li >title:{array.contents}</li>
        </div>
      )}

    </ul>

  );
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;
