import React from "react";
import s from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import {
  updateCommentCreator,
  sendCommentCreator
} from "../../redux/sidebar-reducer";

const Sidebar = (props) => {
  let state = props.store.getState();
  let sidebarPost = state.sidebar.popularPosts.map((el) => (
    <SidebarItem title={el.title} viewesCount={el.viewesCount} />
  ));

  let onchangecomment = (event) => {
    let comment = event.target.value;
    props.store.dispatch(updateCommentCreator(comment));
  };
  let onSendComment = () => {
    props.store.dispatch(sendCommentCreator());
  };
  return (
    <div className={s.sidebar}>
      <>Best Posts</>
      <div className={s.item}>{sidebarPost}</div>
      <textarea
        value={state.sidebar.newComment}
        placeholder="Comment"
        onChange={onchangecomment}
      ></textarea>
      <button onClick={onSendComment}>Send</button>
    </div>
  );
};
export default Sidebar;
