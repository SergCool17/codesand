import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';



const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <MyPosts    posts={props.profilePage.posts}
                        dispatch={props.dispatch}
                        newPostText={props.profilePage.newPostText}
                         />
           
        </>
    )
};
export default Profile