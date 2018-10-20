export const ADD_ARTICLE = "ADD_ARTICLE";
export const CREATE_NEW_ARTICLE = "CREATE_NEW_ARTICLE";


export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article
});

export const createNewArticle = (newArticle) => ({
  type: CREATE_NEW_ARTICLE,
  create: newArticle
});
