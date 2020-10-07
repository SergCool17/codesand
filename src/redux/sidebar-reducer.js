const UPDATE_NEW_COMMENT = "UPDATE_NEW_COMMENT";
const SEND_COMMENT = "SEND-COMMENT";

let initialState = {
  popularPosts: [
    { id: 1, title: "How to make house", viewesCount: 1222 },
    { id: 2, title: "First place in battle", viewesCount: 1121 },
    { id: 3, title: "Top 10 notebooks", viewesCount: 1111 },
    { id: 4, title: "Best service for voicecoding", viewesCount: 1331 }
  ],
  newComment: ""
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_COMMENT:
      state.newComment = action.comment;
      return state;
    case SEND_COMMENT:
      let newComment = state.newComment;
      state.popularPosts.push({ id: 6, title: newComment, viewesCount: 1 });
      state.newComment = "";
      return state;
    default:
      return state;
  }
};

export const updateCommentCreator = (comment) => ({
  type: UPDATE_NEW_COMMENT,
  comment: comment
});
export const sendCommentCreator = () => ({ type: SEND_COMMENT });
